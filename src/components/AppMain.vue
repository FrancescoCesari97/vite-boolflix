<script >

import axios from 'axios'

import {store} from '../store'

  export default{
    data(){
      return{
      
      store,
    

    };
  },

  created(){
    
  },
  
};

</script>

<template>

  <ul>
    <li
    v-for="(movie, index) in store.movies"
    class="my-5 text-center border"
       
      >
     <p>{{movie.original_title}}</p> 
     <p>{{movie.title}}</p> 
     <p>{{ movie.original_language }}</p>
     <p>{{movie.vote_average}}</p> 
      

    </li>
  </ul>
</template>

<style lang="scss" scoped>

</style>
