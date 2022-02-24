<template>
  <div v-if="$store.state.notLoggedIn && !regForm" class="login">
      <LoginForm @showReg="showRegForm" @transfer="transfer"/>
  </div>
  <div v-else-if="regForm" class="register">
      <RegisterForm @transfer="transfer"/>
  </div>
</template>

<script>

import LoginForm from '../components/LoginForm.vue'
import RegisterForm from '../components/RegisterForm.vue'

export default {
    
    name: 'Welcome',
    components: { LoginForm, RegisterForm },

    data() {
    return {
      regForm: false
    }
  },

  methods: {
    showRegForm() {
      this.regForm = true;
    },
    transfer() {
      this.$emit('transfer', 1)
    }
  }
}

</script>

<style>

</style>