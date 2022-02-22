<template>
  <div id="nav">
    <router-link to="/">Calculator</router-link> |
    <router-link :to="{name: 'ContactForm'}">Contact</router-link>
  </div>
  <!--
  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>
 -->
  <router-view/>
</template>

<script>
export default {
   methods: {
    redirect() {
      this.$router.push({ name: 'Home' })
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
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
