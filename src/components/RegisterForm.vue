<template>
  <h1>Registration</h1>
    <form @submit.prevent="handleLogin"> <!-- .prevent gjør at vi unngår default event når vi submitter, fordi vi må sjekke om user input er valid først -->
      
      <label>Full name:</label>
      <input type="text" required="required">

      <label>Address:</label>
      <input type="text" required="required">

      <label>Username:</label>
      <input type="text" required />
      
      <label>Password:</label>
      <input type="password" required="required">  <!-- v-model er 2 way binding. Vi kan alså hente ut input, eller outputte til input box -->

      <label>Email:</label>
      <input type="email" required="required">

      <label>Phone:</label>
      <input type="text" required="required">

    <div class="login">
        <button type="submit" class="submit" @click="handleLogin">Register</button> <!-- Go to calculator page -->
    </div>

    </form>
</template>

<script>
export default {

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
              if(current.usrname === this.$store.state.currentUsername && current.pw === this.$store.state.currentPassword) {
                success = false
              }
            }
            if(success) {
                this.$store.commit('setLoggedIn', false);
                this.$emit('transfer')
            }
        }
    }

}
</script>

<style>

</style>