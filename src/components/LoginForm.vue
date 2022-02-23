<template>
 <h1>Please Login</h1>
 <form @submit.prevent="handleLogin"> <!-- .prevent gjør at vi unngår default event når vi submitter, fordi vi må sjekke om user input er valid først -->
      
      <label>Username:</label>
      <input type="text" required v-model="username">
      
      <label>Password:</label>
      <input type="password" required v-model="password">  <!-- v-model er 2 way binding. Vi kan alså hente ut input, eller outputte til input box -->

    <div class="loginButton">
        <button @click="handleLogin">Login</button> <!-- Go to calculator page -->
    </div>

    
  </form>
  <div class="submitReg" v-if="failedLogin">
    <p>Not registered?</p>
    <button @click="emitEvent">Register</button>
  </div>
  
</template>

<script>
export default {
    data() {
        return {
          myArr: [],
          failedLogin: false
        }
    },

    methods: {
        handleLogin() {
            // sjekke om et user objekt i store matcher username og passord fra input.
            // if so --> go to calculator page
            // else --> swap to register component
            this.myArr = this.$store.state.users;
            let success = false
            for(let i = 0; i < this.myArr.length; i++) {
              let current = this.myArr[i];
              if(current.usrname === this.$store.state.currentUsername && current.pw === this.$store.state.currentPassword) {
                this.$store.commit('setLoggedIn', false);
                console.log('logged in')
                success = true
                this.$emit('transfer')
              }
            }
            if(!success) {
              this.failedLogin = true;
            }
        },
        emitEvent() {
          this.$emit('showReg')
        }
    },

    computed: {
        username: { 
        get() {
          return this.$store.state.currentUsername;
        },
        
        set(newUsername) {
          this.$store.commit('setCurrentUsername', newUsername)
        }
        
      },
      password: {
        get() {
          return this.$store.state.currentPassword;
        },
        
        set(newPassword) {
          this.$store.commit('setCurrentPassword', newPassword)
        }
        
      },
    }
}
</script>

<style>
.login button{
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}

.submitReg button {
  background: red;
}
    
</style>