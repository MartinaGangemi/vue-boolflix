<template>
    <!-- main -->
    <main class="container ">
        
            <div class="row m-0">
            <div class="col py-4 d-flex justify-content-center" v-for = "(movie, index) in nuovoArray" :key="index">
                <!-- card -->
                <div  class="movie-card">
                    <!-- sfondo immagine -->
                    <div v-if="movie.poster_path==null" class="poster"></div>
                    <img v-else :src="`https://image.tmdb.org/t/p/w200` + movie.poster_path " alt="" >
                    
                    <!-- testo -->
                    <div class="testo-card">
                        <h5 v-if="movie.title" class="text-center">{{movie.title}}</h5>
                        <h5 v-else class="text-center">{{movie.name}}</h5>
                        <div class="d-flex justify-content-center">
                            <h6 v-if="movie.title" class="me-2">{{movie.original_title}}</h6> 
                            <h6 v-else class="me-2">{{movie.original_name}}</h6> 
                            <!-- bandiere -->
                            <div v-if= "movie.original_language == 'en'">
                                <flag iso ="gb" />
                            </div>
                            <div v-if= "movie.original_language == 'ja'">
                                <flag iso ="jp" />
                            </div>
                            <div v-else>
                                <flag :iso = "movie.original_language" /> 
                            </div>
                        </div>
                        {{movie.overview}}
                        <Rate :readonly="true" :length="5" :value="movie.vote_average / 2"></Rate>
                    </div>
                </div>
            </div>        
        </div>          
    </main>
    
</template>

<script>
import state from '@/state';
import Rate from '../../node_modules/vue-rate/src/Rate.vue';

export default {
    name: "MainComponent",
    data() {
        return {
        Rate,
        movieList: [],
        query:"",
        };
    },

    
    computed:{
        nuovoArray(){
            return state.movieList.map(movie => {
                return movie
            })
        }
    
    }
}
  
</script>

<style lang="scss" scoped>
/*main*/
    main{
        margin-top: 80px ;
    }
    .poster{
        background-color: black;
    }
    .movie-card, .poster{
        position: relative;
        height: 400px;
        width: 260px;
        img{
            
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        
        .testo-card{
        display: none!important;
        font-size: 0.8rem;
        overflow-y: auto;
        width: 100%;
        height: 100%;
        padding: 1.5rem;
        color: white;
        background-color: rgba(0, 0, 0, 0.504);
        position: absolute;
        top: 0;
        }
        &:hover .testo-card {
            display: block !important;
        }
    }
    
  
</style>