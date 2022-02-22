<template>
  <form @submit.prevent="handleSubmit"> <!-- .prevent gjør at vi unngår default event når vi submitter, fordi vi må sjekke om user input er valid først -->
      
      <label>Name:</label>
      <input type="text" required v-model="name">
      
      <label>Email:</label>
      <input type="email" required v-model="email">  <!-- v-model er 2 way binding. Vi kan alså hente ut input, eller outputte til input box -->

      <label>Message:</label>
      <input type="text" required v-model="message">
      

    <div class="terms">
        <input type="checkbox" v-model="terms" required>
        <label>Accept terms and conditions</label>
    </div>

    <div :class=" $store.state.submitted ? 'submitted' : 'submit' ">
        <button @click="handleSubmit">{{buttonMsg}}</button>
    </div>

    
  </form>
  
  
</template>

<script>

export default {

    data() {
      return {
        buttonMsg: 'Submit'
      }
    },

    methods: {

        handleSubmit() {
          if(this.$store.getters.validateInput) {
            // '''send message til database'''
            this.$store.commit('setSubmitted', true);
            this.buttonMsg = 'Submitted';
            this.$store.commit('setMessage', '');
            this.$store.commit('setTerms', false);
            // TODO: fjærn submitted tekst, gjør knappen grønn/grå med tekst "submitted", og unclickable
          }
            
        }
        
    },
              // når man skal bruke variabler fra state i input field, bruker man ikke v-model
              // direkte på '$store.state.name', gjør det heller gjennom computed property.
    computed: {
      name: { 
        get() {
          return this.$store.state.name;
        },
        
        set(newValue) {
          this.$store.commit('setCurrentName', newValue)
        }
        
      },
      email: {
        get() {
          return this.$store.state.email;
        },
        
        set(newEmail) {
          this.$store.commit('setCurrentEmail', newEmail)
        }
        
      },
      message: {
        get() {
          return this.$store.state.message;
        },
        
        set(newMessage) {
          this.$store.commit('setMessage', newMessage)
        }
        
      },
      terms: {
        get() {
          return this.$store.state.terms;
        },
        set(term) {
          this.$store.commit('setTerms', term)
        }
      }
    },
    
    mounted() {
        this.$store.commit('setSubmitted', false);
        this.$store.commit('setTerms', false);
        this.buttonMsg = 'Submit';
        this.$store.commit('setMessage', '');
    }
    
    
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  
  .submit {
    text-align: center;
  }
  .submit button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submitted {
    text-align: center;
  }
  .submitted button {
    background: #00aa17;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    pointer-events: none;
  }

  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>