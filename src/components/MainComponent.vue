<template>
    <div>
        <!-- search -->
        <div class="row row-cols-5">
            <div class="col" v-for = "(movie, index) in filteredMovie" :key="index"> {{  movie.title }} 
                {{movie.original_title}} 
                <div v-if= "movie.original_language == 'en'">
                    <flag iso ="gb" />
                </div>
                <div v-if= "movie.original_language == 'ja'">
                    <flag iso ="jp" />
                </div>
                <div v-else>
                    <flag :iso = "movie.original_language" /> 
                </div>
                {{ movie. vote_average}} 
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import state from "@/state.js";
export default {
    name: "MainComponent",
    data() {
        return {
        // linkFilm:`https://api.themoviedb.org/3/search/movie?api_key=5d674668187da98c6d6920a892f310df&language=en-US&page=1&include_adult=false&query=${state.query}`,
        // linkSerie:`https://api.themoviedb.org/3/search/tv?api_key=5d674668187da98c6d6920a892f310df&language=it-IT&query=${state.query}`,
        movieList: [],
        };
    },
    methods:{
      
        
        SearchMovie(){
            console.log(this.movieList);
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5d674668187da98c6d6920a892f310df&language=en-US&page=1&include_adult=false&query=${state.query}`)
            .then((response) =>{
            this.movieList = response.data.results;
            })
            .catch((error) => {
                this.error = `${error}`;
            });
            },
        },
         
        
    computed:{
        
        filteredMovie(){
            this.SearchMovie()
            return this.movieList.filter(movie =>{
                return movie.title.toLowerCase().includes(state.query.toLowerCase())
            })
        }
    },
}
  
</script>