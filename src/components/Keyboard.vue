<template>
  <div class="display">
      <h3>{{currentInput}}</h3>
  </div>
  <div class="keyboard-container">
      <button @click="getValue('C')" class="btn operator span2">C</button>
      <button @click="getValue('DEL')" class="btn operator">&larr;</button>
      <button @click="getValue('/')" class="btn operator">&divide;</button>
      <button @click="getValue(7)" class="btn num">7</button>
      <button @click="getValue(8)" class="btn num">8</button>
      <button @click="getValue(9)" class="btn num">9</button>
      <button @click="getValue('*')" class="btn operator">x</button>
      <button @click="getValue(4)" class="btn num">4</button>
      <button @click="getValue(5)" class="btn num">5</button>
      <button @click="getValue(6)" class="btn num">6</button>
      <button @click="getValue('-')" class="btn operator">-</button>
      <button @click="getValue(1)" class="btn num">1</button>
      <button @click="getValue(2)" class="btn num">2</button>
      <button @click="getValue(3)" class="btn num">3</button>
      <button @click="getValue('+')" class="btn operator">+</button>
      <button @click="getValue(0)" class="btn num span3">0</button>
      <button @click="getValue('=')" class="btn operator">=</button>
  </div>
  <History :calculated="calculated" />
</template>

<script>

import History from './History.vue'

export default {
    components: {History},

    data() {
        return {
           currentInput: '',
           mellomRegninger: [],
           calc: '',
           answer: 0,
           calculated: []
        }
    },
    methods: {
        
        getValue(value) {
            if(value === 'DEL' || value === 'C' || value === '=') {
                if(value === 'DEL') {
                    this.currentInput = this.currentInput.slice(0, -1)
                }
                else if(value === 'C') {
                    this.currentInput = ''
                }
                else {
                    this.calculate()
                    this.currentInput = ''
                }
            }
            else {
                this.currentInput = this.currentInput.concat(value.toString())  
            }
        },

        calculate() {
            this.answer = 0
            this.mellomRegninger = []
            this.calc = ''
         
                var curr = ''
                for(var i = 0; i < this.currentInput.length; i++) {
                    
                    if(this.currentInput.charAt(i) != '*' && this.currentInput.charAt(i) != '/') {
                        curr = curr.concat(this.currentInput.charAt(i))
                    }
                    else {
                        this.mellomRegninger.push(curr)
                        this.mellomRegninger.push(this.currentInput.charAt(i))
                        curr = ''
                    }
               
                }
                this.mellomRegninger.push(curr)
                
            
                for(var i = 0; i < this.mellomRegninger.length; i++) {
                    this.calc = this.calc.concat(this.mellomRegninger[i].toString())
                }
            

            this.answer = eval(this.calc)
            var a = this.calc
            var b = this.answer
            var toDisplay = {
               inputStr: a,
               outputStr: b
            }
            this.calculated.push(toDisplay)     
    }

 }

}
</script>

<style scoped>


.keyboard-container {
    display: grid;
    grid-template-columns: repeat(4,1fr); 
}

.btn{
    font-size:1em;
    height: 65px;
    border:1px solid black;
}

.span2{
    grid-column: span 2;
}

.span3{
    grid-column: span 3;
}

.btn:hover{
    background: #fff;
}

.operator{
    background-color:orange;
}

.display {
   width: 100%;
   min-height: 75px;
   background-color: rgb(201, 201, 228);
   display: flex;
   justify-content: center; 
   align-items: center;
}


</style>