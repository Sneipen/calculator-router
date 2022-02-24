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
          fullname: 'Oskar Eidem',
          address: 'Hoemsbakken 8',
          email: 'oskar.eidem@hotmail.com',
          phone: '98444451'
        }]
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
    setLoggedIn(state, bool) {
      state.notLoggedIn = bool
    },
    storeUser(state, usr) {
      state.users.push(usr)
    },

    // RegisterForm:
    
  },
  actions: { // asynchronous. For fetch fra API, da vi må vente på data etter request. Actions dispatches
              // Kan heller ikke access data fra state.
              // Men man kan gjøre et API call, så fra samme metoden calle en mutation metode.
    
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
