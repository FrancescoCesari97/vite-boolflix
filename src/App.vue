


<script >

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default{
  data(){
    return{
      title: 'Boolflix',
    };


  },
  props: {
    
  },

  components: {AppHeader, AppMain},
};
</script>

<template>
  <app-header> </app-header>

  <app-main> </app-main>

</template>

<style lang="scss">

@use './styles/general.scss'

</style>
