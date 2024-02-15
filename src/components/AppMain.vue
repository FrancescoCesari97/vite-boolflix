<script >

import axios from 'axios'

import {store} from '../store'

  export default{
    data(){
      return{
      
      store,
    

    };
  },

  methods:{

    getflags(langOrig){
     if(langOrig == 'it'){
      return '/flags/italy.png';
     }
  
     if(langOrig == 'en'){
      return '/flags/united-kingdom.png';
     }

     if(langOrig == 'fr'){
      return '/flags/france.png';
     }

     if(langOrig == 'ja'){
      return '/flags/japan.png';
     }

     return 'bandiera';

   
    },


  }


 
  
};

</script>

<template>
<div class="container main">


  <div class="lista-film">
    <h2 class="text-center">Lista Film</h2>
    <ul>
      <li
      v-for="(movie, index) in store.movies"
      class="my-5  border"
         
        >
       <p>titolo originale:{{movie.original_title}}</p> 
       <p>titolo: {{movie.title}}</p> 
       <p>Lingua: <img :src=" getflags(movie.original_language)" alt=""></p>
       <p>Voto:{{movie.vote_average}}</p> 
        
  
      </li>
    </ul>

  </div>

  <div class="lista-serie">
    <h2 class="text-center">Lista serie</h2>
    <ul>
      <li
      v-for="(serie, index) in store.series"
      class="my-5  border"
         
        >
       <p>titolo originale:{{serie.original_name}}</p> 
       <p>titolo: {{serie.name}}</p> 
       <p>Lingua: <img :src=" getflags(serie.original_language)" alt=""></p>
       <p>Voto:{{serie.vote_average}}</p> 
        
  
      </li>
    </ul>

  </div>
</div>
</template>

<style lang="scss" scoped>

img{
  width: 5%;
}




</style>
