<template>
    <div>
        <header>
            <div class="container">
                <div class=" py-2 row align-items-center">
                    <div class="col-8 logo_box ">
                        <img src="@/assets/img/logo.png" alt="">
                    </div>
                    <div class="col-4">
                        <Search v-model="query"  @submitSearch="search" />
                    </div>
                </div>
            </div>
        </header>

        <!-- main -->
        <main class="container ">
            <div class="row m-0">
                <div class="col py-4 d-flex justify-content-center" v-for = "(movie, index) in movieList" :key="index">
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
        
    </div>
</template>

<script>
import Rate from '../../node_modules/vue-rate/src/Rate.vue';
import Search from "@/components/SearchForm.vue";
import axios from "axios"
import state from "@/state.js";
export default {
    name: "HeaderComponent",
    
    components:{
        Search,
       Rate
    },
    data (){
        return {
            query: "",
            movieList: []
        }
    },
    methods:{
        

        search(){

            state.query = this.query;
            console.log(state.query)

            let film = `https://api.themoviedb.org/3/search/movie?api_key=5d674668187da98c6d6920a892f310df&language=en-US&page=1&include_adult=false&query=${this.query}`

            let serieTv = `https://api.themoviedb.org/3/search/tv?api_key=5d674668187da98c6d6920a892f310df&language=it-IT&query=${state.query}`

            const requestFilm = axios.get(film)
            const requestSerie = axios.get(serieTv)

             axios.all([requestFilm, requestSerie])
            .then(
                axios.spread((...responses) =>{
            const responseOne = responses[0].data.results
            const responseTwo = responses[1].data.results
            console.log( responseOne, responseTwo, "b")
            this.movieList = [...responseOne, ...responseTwo]
            console.log(this.movieList)
            })
            )
            .catch((error) => {
                this.error = `${error}`;
            })
        }
    
    },

    
}
</script>

<style lang="scss" scoped>
    /*header*/
    header{
        position: fixed;
        top: 0;
        z-index: 1;
        background-color: $main;
        width: 100%;
    }

    
    .logo_box{
        height: 50px;
    }

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