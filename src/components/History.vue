<template>
  <div class="historybox">
      <ul>
          <li v-for="elem in calculated" :key="elem">
              {{ elem.inputStr }} = {{ elem.outputStr }}
          </li>
      </ul>
  </div>
</template>

<script>
export default {

    props: ['calculated'],

    data() {
        return {

        }
    },

    methods: {

    }

}
</script>

<style>

.historybox {
    min-height: 100px;
    max-height: 100px;
    overflow: scroll;
    height: 400px;
    overflow-y: auto;
    overflow-x: auto;
    background-color: rgb(0, 0, 0);
}

.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

ul {
    list-style-type: none;
    color: seashell;
    padding: 0;
}

ul li{
  margin-top: 3px;
}

</style>