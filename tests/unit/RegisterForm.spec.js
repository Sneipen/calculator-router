
import { mount } from '@vue/test-utils'
import RegisterForm from '@/components/RegisterForm.vue'
import { createStore } from 'vuex'

describe('RegisterForm', () => {
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
           mutations: { setCurrentRegUsername: mockedIncFn,
                        setCurrentRegPassword: mockedPw
                         },
           actions: {setLoggedIn: mocklogin}
       })
   })

   test('store updating on input', async () => {
       const wrapper = mount(RegisterForm, {
           global: { plugins: [store] }
       })
       wrapper.get('[data-test="usernameTest"]').setValue("testUsername")
       expect(mockedIncFn).toHaveBeenCalled()
   })

   test('Register with already taken account name', async () => {
    const wrapper = mount(RegisterForm, {
        global: { plugins: [store] }
    })
    wrapper.get('[data-test="usernameTest"]').setValue("admin")
    wrapper.get('[data-test="passwordTest"]').setValue("somePassword")
    await wrapper.vm.handleLogin()
    expect(myArr.length).toBe(1)
})

    test('Register with valid input', async () => {
        const wrapper = mount(RegisterForm, {
            global: { plugins: [store] }
        })
        wrapper.get('[data-test="fullNameTest"]').setValue("Roar Iversen")
        wrapper.get('[data-test="addressTest"]').setValue("en adresse")
        wrapper.get('[data-test="usernameTest"]').setValue("brukernavn")
        wrapper.get('[data-test="passwordTest"]').setValue("passord")
        wrapper.get('[data-test="emailTest"]').setValue("roar.iversen@gmail.com")
        wrapper.get('[data-test="phoneTest"]').setValue("78916930")
        await wrapper.vm.handleLogin()
        expect(mocklogin).toHaveBeenCalled()
    })

})


