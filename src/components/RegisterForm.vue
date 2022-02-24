<template>
  <h1>Registration</h1>
    <form @submit.prevent="handleLogin">
      
      <label>Full name:</label>
      <input type="text" required v-model="fullName">

      <label>Address:</label>
      <input type="text" required v-model="address">

      <label>Username:</label>
      <input type="text" required v-model="username">
      
      <label>Password:</label>
      <input type="password" required v-model="password">  

      <label>Email:</label>
      <input type="email" required v-model="email">

      <label>Phone:</label>
      <input type="text" required v-model="phone">

    <div class="login">
        <button type="submit" class="submit" @click="handleLogin">Register</button> <!-- Go to calculator page -->
    </div>

    </form>
</template>

<script>
export default {

    data() {
        return {
            myArr: [],
            fullName: '',
            address: '',
            username: '',
            password: '',
            email: '',
            phone: ''
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
              let usr = {
                usrname: this.username,
                pw: this.password,
                fullname: this.fullName,
                address: this.address,
                email: this.email,
                phone: this.phone
              }
                this.$store.commit('storeUser', usr)
                this.$store.commit('setLoggedIn', false)
                this.$emit('transfer')
            }
        }
    }


}
</script>

<style>

</style>