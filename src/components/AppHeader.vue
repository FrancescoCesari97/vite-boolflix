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

      namesfilter(){
        axios.get(`https://`+ store.apiUrl + store.apikey + this.movieFilter)
        .then((res) => {
      
         store.movies = res.data.results;

          console.log(store.movies);
       });
       
      }
  }
  
}
</script>

<template>

   <div class="container">
        <div class="input-group flex-nowrap search-bar">
            <input v-model="movieFilter"
                @keyup="namesfilter()"
                 type="text" class="form-control"
                  placeholder="movie" 
                  >
            <button type="button" class="btn btn-primary" @click="namesfilter()">search</button>
            
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
