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
        <img class="poster" :src="`https://image.tmdb.org/t/p/w342${movie.poster}`" alt="">
       <p>titolo originale:{{movie.original_title}}</p> 
       <p>titolo: {{movie.title}}</p> 
       <p>Lingua: <img class="bandiera" :src=" getflags(movie.language)" alt=""></p>
       <p>Voto:{{movie.vote}}</p> 
       <font-awesome-icon v-for="star in 5" :icon="(star <= movie.vote ) ?  'fa-solid fa-star' : 'fa-regular fa-star'" />
        
  
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
       <img class="poster" :src="`https://image.tmdb.org/t/p/w342${serie.poster}`" alt="">
       <p>titolo originale:{{serie.original_title}}</p> 
       <p>titolo: {{serie.title}}</p> 
       <p>Lingua: <img class="bandiera" :src=" getflags(serie.language)" alt=""></p>
       <p>Voto:{{serie.vote}}</p>
       <font-awesome-icon v-for="star in 5" :icon="(star <= serie.vote ) ?  'fa-solid fa-star' : 'fa-regular fa-star'" /> 
        
  
      </li>
    </ul>

  </div>
</div>
</template>

<style lang="scss" scoped>

.bandiera{
  width: 6%;
}

.poster{
  width: 50%;
}




</style>
