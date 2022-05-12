<template>
    <div v-if="Movies.length>0" class="row m-0 position-relative">
        <div class="col py-4 d-flex justify-content-center justify-content-sm-start" v-for="movie in Movies" :key="movie.id" >
            <!-- card -->
            <div class="movie-card">
                <!-- sfondo immagine -->
                <div v-if="movie.poster_path==null" class="poster">
                    <img class="rounded" src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" alt="">
                </div>
                <img v-else class="rounded" :src="`https://image.tmdb.org/t/p/w200` + movie.poster_path " alt="" >
                <!-- hover sulla card -->
                <div class="hover-card pb-4">
                    <div v-if="movie.backdrop_path==null" class="poster-hover">
                        <img class="rounded-top" src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" alt="">
                    </div>
                    <div v-else class="img-hover">
                        <img class="rounded-top" :src="`https://image.tmdb.org/t/p/w200` + movie.backdrop_path " alt="">
                    </div>
                    <!-- descrizione -->
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
                        <div class="d-flex flex-wrap justify-content-center mb-3">
                            <h6 class="text-center mb-0 me-2">Cast</h6>
                            <div  v-for="attore in movie.cast" :key="attore.id" >
                                {{attore.name}}
                            </div>
                        </div>
                        {{movie.overview}}
                        <!-- star rating -->
                        <div class="d-flex justify-content-center">
                            <star-rating class="mt-2" :animate="true" :show-rating="false" :star-size="25"  :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :read-only="true" :max-rating="5" :rating="movie.vote_average / 2"></star-rating>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    <div v-else> 
        <h1 class="text-light mt-5">Inizia la ricerca</h1>
    </div>
 
</template>

<script>
import state from '@/state';
import StarRating from 'vue-star-rating'

export default {
    name: "MovieCard",
    components:{
        StarRating,
    },
    data() {
        return {
        movieList: [],
        cast:[],
        query:"",
       };
    },
   
    computed:{
        Movies(){
            return state.movieList.map(movie => {
               return movie
            })
        },

    }
}
  
</script>

<style lang="scss" scoped>
    .poster>img, .poster-hover>img{
         object-fit: contain!important;
         object-position: center !important;
    }

    .poster>img{
        border: solid 1px gray;
    }
     
    
    .movie-card, .poster{
        position: relative;
        height: 300px;
        width: 200px;
        transition:opacity 5s linear;
        
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        
        .hover-card{
        display: none;
        font-size: 0.8rem;
        color: white;
        background-color: $main;
        position: absolute;
        height: 400px;
        width: 300px;
        top:-50px;
        left: -50px;
        z-index: 2;
        box-shadow:1px 1px 4px 0px black;
        border-radius:5px;
        
        .img-hover>img, .poster-hover{
            height: 200px;
            object-position: top!important;
            -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(255, 255, 255, 0)));
        }

        .testo-card{
            overflow-y: auto;
            height: calc(100% - 200px);
            padding: 1.5rem;
        }
    }

        &:hover .hover-card {
            display: block !important;
            display: block;
            -webkit-animation: fadeIn 1s;
            animation: fadeIn 0.5s;
        
        }
    }

    @-webkit-keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
    }
    @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
    }

</style>