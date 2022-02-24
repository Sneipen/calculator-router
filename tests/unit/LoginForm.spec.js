import { mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue'
import { createStore } from 'vuex'

describe('LoginForm', () => {
   let initStatus = true
   let mockedIncFn
   let mockedPw
   let store
   let mocklogin
   let myArr = [{
    usrname: 'admin',
    pw: 'password',
    fullname: 'Oskar Eidem',
    address: 'Hoemsbakken 8',
    email: 'oskar.eidem@hotmail.com',
    phone: '98444451'
  }]

   beforeEach(() => {
       mockedIncFn = jest.fn()
       mocklogin = jest.fn()
       mockedPw = jest.fn()
       store = createStore({
           state: { notLoggedIn: initStatus,
                     users: myArr},
           mutations: { setCurrentUsername: mockedIncFn,
                        setCurrentPassword: mockedPw,
                        setLoggedIn: mocklogin }
       })
   })

   test('Initially not show "Register" button', async () => {
       const wrapper = mount(LoginForm, {
           global: { plugins: [store] }
       })
       expect(wrapper.html()).toEqual(expect.not.stringContaining("Register"))
   })

    test('Show "Register" button when fail to login', async () => {
        const wrapper = mount(LoginForm, {
            global: { plugins: [store] }
        
        })
        await wrapper.vm.handleLogin()
        expect(wrapper.html()).toContain("Register")
    })

    test('Updates store when inputting in form', async () => {
        const wrapper = mount(LoginForm, {
            global: { plugins: [store] }
        })
        wrapper.get('[data-test="notStoredUser"]').setValue("someName")
        expect(mockedIncFn).toHaveBeenCalled()
    })

    test('Login success with default info', async () => {
        const wrapper = mount(LoginForm, {
            global: { plugins: [store] } 
        })
        wrapper.get('[data-test="notStoredUser"]').setValue("admin")
        wrapper.get('[data-test="notStoredPassword"]').setValue("password")
        await wrapper.vm.handleLogin()
        expect(mocklogin).toHaveBeenCalled()
    })
    

})



