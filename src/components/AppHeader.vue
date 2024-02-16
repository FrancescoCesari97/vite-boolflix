<script >
import axios from 'axios'
import {store} from '../store'

export default{
  data(){
    return{
      
        store,

        movieFilter: '',
  


    };
  },

  methods:{




      getDatafilter(){
        axios.get( store.apiUri + `search/movie?` + store.apikey + this.movieFilter)
        .then((res) => {
      
         store.movies = res.data.results.map((movie) => {

          return{
            title: movie.title,
            original_title: movie.original_title,
            language: movie.original_language,
            vote: Math.ceil(movie.vote_average / 2),
            poster: movie.poster_path,
          };
         });

          console.log(store.movies);
       });
       
       axios.get( store.apiUri + `search/tv?` + store.apikey + this.movieFilter)
        .then((res) => {
      
         store.series = res.data.results.map((serie) => {

          return{
            title: serie.name,
            original_title: serie.original_name,
            language: serie.original_language,
            vote: Math.ceil(serie.vote_average / 2),
            poster: serie.poster_path,
          };
          });
          console.log(store.series);
       });




      },

     
  }
  
}
</script>

<template>

   <div class="container">
        <div class="input-group flex-nowrap search-bar">
            <input v-model="movieFilter"
                @keyup="getDatafilter()"
                
                 type="text" class="form-control"
                  placeholder="movie" 
                  >
            <button type="button" class="btn btn-primary"
                @click="getDatafilter()"
                
                >
              search
            </button>
            
        </div>
    </div>

</template>

<style lang="scss" scoped>

.container{

    height: 80px;
    
    .search-bar{
        margin-top: 20px;
    }
}



</style>
