<template>

  <div id="nav">
    <router-link v-show="!(this.$store.state.notLoggedIn)" :to="{name: 'Calculator'}">Calculator</router-link>  
    <router-link v-show="!(this.$store.state.notLoggedIn)" :to="{name: 'ContactForm'}">Contact</router-link>
  </div>
  
  <router-view @transfer="redirect"/>
</template>

<script>
export default {

  data() {
    return {
      loggedIn: false,
      cnt: 0
    }
  },
 // v-show
   methods: {
     redirect() {
       this.$router.push({ name: 'Calculator' })
     }
  }
  
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}


</style>
