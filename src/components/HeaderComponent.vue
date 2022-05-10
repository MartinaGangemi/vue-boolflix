<template>
    <div>
        <header>
            <Search v-model="query"  @submitSearch="search" />
        </header>

            <!-- main -->
            <main>
                <!-- condizione per movie -->
                <div class="row row-cols-5 m-0">
                    <div class="col" v-for = "(movie, index) in movieList" :key="index">
                        <div v-if="movie.title" class="movie-card">
                            <!-- sfondo immagine -->
                            <div class="sfondo-immagine">
                                <img :src="`https://image.tmdb.org/t/p/w200` + movie.poster_path " alt="" >
                            </div>
                            <!-- testo -->
                                <div class="testo-card">
                                    <h5>{{movie.title}} </h5>
                                    <h6>{{movie.original_title}} </h6>
                                    <Rate :readonly="true" :length="5" :value="movie.vote_average / 2"></Rate>
                                
                                    {{ movie. vote_average}}
                                    <br>
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
                        </div>
                            
                            
                        <!-- else per serie TV -->
                        <div v-else class="movie-card">
                            <!-- sfondo immagine -->
                            <div class="sfondo-immagine">
                                <img :src="`https://image.tmdb.org/t/p/w200` + movie.poster_path " alt="">
                            </div>
                            <!-- testo -->
                                <div class="testo-card">
                                    <h5>{{movie.name}}</h5>
                                    <h6>{{movie.original_name}}</h6> 
                                    <Rate :readonly="true" :length="5" :value="movie.vote_average / 2"></Rate>
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
    

    .sfondo-immagine{
        position: relative;
        height: 300px;

        img{
            width: 100%;
            object-fit: cover;
        }
    }

    .Rate_star{
        padding: 1px;
    }
    
</style>