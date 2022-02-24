<template>
  <h1>Registration</h1>
    <form @submit.prevent="handleLogin">
      
      <label>Full name:</label>
      <input data-test="fullNameTest" type="text" required v-model="fullName">

      <label>Address:</label>
      <input data-test="addressTest" type="text" required v-model="address">

      <label>Username:</label>
      <input data-test="usernameTest" type="text" required v-model="username">
      
      <label>Password:</label>
      <input data-test="passwordTest" type="password" required v-model="password">  

      <label>Email:</label>
      <input data-test="emailTest" type="email" required v-model="email">

      <label>Phone:</label>
      <input data-test="phoneTest" type="text" required v-model="phone">

    <div class="login">
        <button type="button" class="submit" @click="handleLogin">Register</button> <!-- Go to calculator page -->
    </div>

    </form>
</template>

<script>
export default {
    emits: ['transfer'],

    data() {
        return {
            myArr: []
        }
    },

    methods: {
        handleLogin() {
            this.myArr = this.$store.state.users;
            let success = true
            for(let i = 0; i < this.myArr.length; i++) {
              let current = this.myArr[i];
              if(current.usrname === this.username) {
                success = false
                console.log('username taken')
              }
            }
            if(success) {
              console.log('Account made')
              // hvis noe failer, se på rekkefølgen på objekt
              let usr = {
                usrname: this.username,
                pw: this.password,
                fullname: this.fullName,
                address: this.address,
                email: this.email,
                phone: this.phone
              }
                this.$store.commit('storeUser', usr)
                this.$store.dispatch('setLoggedIn', false)
                this.$emit('transfer')
            }
        }
    },

    computed: {

        fullName: { 
        get() {
          return this.$store.state.currentRegFullName;
        },
        
        set(newFullName) {
          this.$store.commit('setCurrentRegFullName', newFullName)
        }
        
      },
        address: {
          get() {
            return this.$store.state.currentRegAddress;
          },
          
          set(newAddress) {
            this.$store.commit('setCurrentRegAddress', newAddress)
          }
          
        },
        username: {
          get() {
            return this.$store.state.currentRegUsername;
          },
          set(newUserName) {
            this.$store.commit('setCurrentRegUsername', newUserName)
          }
        },
        password: {
          get() {
            return this.$store.state.currentRegPassword;
          },
          set(newPassword) {
            this.$store.commit('setCurrentRegPassword', newPassword)
          }
        },
        email: {
          get() {
            return this.$store.state.currentRegEmail;
          },
          set(newEmail) {
            this.$store.commit('setCurrentRegEmail', newEmail)
          }
        },
        phone: {
          get() {
            return this.$store.state.currentRegPhone;
          },
          set(newPhone) {
            this.$store.commit('setCurrentRegPhone', newPhone)
          }
        },
    }


}
</script>

<style>

</style>