import { createStore } from 'vuex'


export default createStore({
  state: { // variabler hær istede for i component
        name: '',
        email: '',
        message: '',
        terms: false,
        inputError: '',
        submitted: false,
        currentUsername: '',
        currentPassword: '',
        notLoggedIn: true,
        users: [{
          usrname: 'admin',
          pw: 'password',
          fullname: 'Per kis',
          address: 'Per stien',
          email: 'per.kis@hotmail.com',
          phone: '78902314'
        }],
        currentRegFullName: '',
        currentRegAddress: '',
        currentRegUsername: '',
        currentRegPassword: '',
        currentRegEmail: '',
        currentRegPhone: ''

  },
  mutations: { // synchrounous way to globally update variables above. Mutations committe's
    setCurrentName(state, newName) {
      state.name = newName;
    },
    setCurrentEmail(state, newEmail) {
      state.email = newEmail;
    },
    setSubmitted(state, payload) {
      state.submitted = payload;
    },
    setTerms(state, payload) {
      state.terms = payload;
    },
    setMessage(state, newMessage) {
      state.message = newMessage;
    },

    //loginForm:
    setCurrentUsername(state, newUsername) {
      state.currentUsername = newUsername
    },
    setCurrentPassword(state, newPassword) {
      state.currentPassword = newPassword
    },
    storeUser(state, usr) {
      state.users.push(usr)
    },

    // RegisterForm:
    setCurrentRegFullName(state, newFullName) {
      state.currentRegFullName = newFullName
    },
    setCurrentRegAddress(state, newAddress) {
      state.currentRegAddress = newAddress
    },
    setCurrentRegUsername(state, newUsername) {
      state.currentRegUsername = newUsername
    },
    setCurrentRegPassword(state, newPassword) {
      state.currentRegPassword = newPassword
    },
    setCurrentRegEmail(state, newEmail) {
      state.currentRegEmail = newEmail
    },
    setCurrentRegPhone(state, newPhone) {
      state.currentRegPhone = newPhone
    },
    setLoggedIn(state, bool) {
      state.notLoggedIn = bool
      console.log('setLoggedIn called')
    }


  },
  actions: { // asynchronous. For fetch fra API, da vi må vente på data etter request. Actions dispatches
              // Kan heller ikke access data fra state.
              // Men man kan gjøre et API call, så fra samme metoden calle en mutation metode.
              /*
              setLoggedIn(state, bool) {
                state.notLoggedIn = bool
                console.log('setLoggedIn called')
                
              }
              */
  },
  modules: { // lar oss dele opp store i moduler, hvor hver modul har mutations, getters, state osv..
  },
  getters: {
    validateInput(state) {
      const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

      if(!state.email.match(regexEmail)) {
        state.inputError = 'Invalid Email'
        return false;
      }
      if(state.name.length < 2 || state.name.match(specialChars) || /\d/.test(state.name)) {
        state.inputError = 'Length of name must be > 2, and not contain any numbers/special characters'
        return false;
      }
      if(state.message === '') {
        state.inputError = 'Please enter a message'
        return false;
      }
      if(state.terms === false) {
        state.inputError = 'Accept terms and conditions'
        return false;
      }
      state.inputError = ''
      return true;
    }
  }
})
