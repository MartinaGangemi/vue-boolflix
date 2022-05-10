<template>
    <div>
        <header>
            <Search v-model="query"  @submitSearch="search" />
        </header>

            <!-- main -->
            <main>
                
                    <!-- condizioni per serie tv -->
                
                    <!-- condizione per movie -->
                <div class="row row-cols-5 m-0">
                    <div class="col" v-for = "(movie, index) in movieList" :key="index">
                        <div v-if="movie.title" class="card">
                            {{movie.title}} 
                            {{movie.original_title}} 
                            {{ movie. vote_average}}
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
                        <!-- else per serie TV -->
                        <div v-else class="card">
                            {{movie.name}}
                            {{movie.original_name}} 
                            {{ movie. vote_average}}
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
                        
                        <!--  
                        
                          -->
                    </div>
                </div>
            </main>
        
    </div>
</template>

<script>
import Search from "@/components/SearchForm.vue";
import axios from "axios"
import state from "@/state.js";
export default {
    name: "HeaderComponent",
    
    components:{
        Search
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
    
    }
}
</script>