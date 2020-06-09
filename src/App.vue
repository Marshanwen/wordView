<template>
  <div id="app">
    <component-a></component-a>
  </div>
</template>

<script>
import componentA from './components/componentA'
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return{
      wordInfo:{}
    }
  },
  components: {
    'component-a':componentA,
  },
}
</script>

<style>

</style>
