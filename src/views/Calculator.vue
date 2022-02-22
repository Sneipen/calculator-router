<template>
  <div class="mainDiv">
     
  <Keyboard />
  </div>
</template>

<script>

import Keyboard from '../components/Keyboard.vue'

export default {

  name: 'Calculator',
  components: { Keyboard },
  
  data() {
    return {
      
      arrayToSend: [],
      updateDisplay: false,
      last: '',
    }
  },
  methods: {
    getNum(number) {
      this.arrayToSend.push(number)
      this.last = this.last.concat(number)
    }
  }
}
</script>



<style>
.mainDiv {
  margin: auto;
  margin-top: 15px;
  width: 30%;
  border: 5px solid rgb(51, 59, 51);
}
</style>