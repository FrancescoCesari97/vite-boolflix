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
    
      <div 
      v-for="(movie, index) in store.movies"
      class="card my-5  "
         
        >
        <img class="poster" :src="`https://image.tmdb.org/t/p/w342${movie.poster}`" alt="">
        <div class="back fade">
          
          <p>Titolo originale:{{movie.original_title}}</p> 
          <p>Titolo: {{movie.title}}</p> 
          <p>Lingua: <img class="bandiera" :src=" getflags(movie.language)" alt=""></p>
          <p>Voto:<font-awesome-icon v-for="star in 5" :icon="(star <= movie.vote ) ?  'fa-solid fa-star' : 'fa-regular fa-star'" /></p> 
          
        </div>
        
  
  </div>
    

  </div>

  <div class="lista-serie">
    <h2 class="text-center">Lista Serie</h2>
    
      <div
      v-for="(serie, index) in store.series"
      class="card my-5  border"
         
        >
       <img class="poster" :src="`https://image.tmdb.org/t/p/w342${serie.poster}`" alt="">
       <div class="back fade">

         <p>Titolo originale:{{serie.original_title}}</p> 
         <p>Titolo: {{serie.title}}</p> 
         <p>Lingua: <img class="bandiera" :src=" getflags(serie.language)" alt=""></p>
         <p>Voto: <font-awesome-icon v-for="star in 5" :icon="(star <= serie.vote ) ?  'fa-solid fa-star' : 'fa-regular fa-star'" /></p>
          
       </div>
        
  
  </div>
   

  </div>
</div>
</template>

<style lang="scss" scoped>

.bandiera{
  width: 6%;
}

.poster{
  width: 100%;
  display: block;
 
}
h2{
  color: white;
}



.fa-star{
  color: gold;
}

.back{
  position: absolute;
  inset: 0;
  padding: 30px 10px;
  font-size: 1.5rem;
  background-color: rgba(37, 37, 37, 0.616);
 color: aliceblue;
 
}

.card {
  position: relative;
  overflow: hidden;
}



/* Hover */

.poster,
 .back{
  transition: 200ms ease-in-out;
}

.fade{
  opacity: 0;
  transform: translateX(-100%);
}

.card:hover .poster{
  filter:blur(10px);
  transform: scale(1.1);
}
.card:hover .fade{
  opacity: 1;
  transform: translateX(0);
}






</style>
