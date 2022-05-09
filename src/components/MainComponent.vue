<template>
    <div>
        <!-- search -->
        <div class="row row-cols-5">
            <div class="col" v-for = "(movie, index) in filteredMovie" :key="index"> {{  movie.title }} 
                {{movie.original_title}} {{movie.original_language}} {{ movie. vote_average}} </div>
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
        link:`https://api.themoviedb.org/3/search/movie?api_key=5d674668187da98c6d6920a892f310df&language=en-US&page=1&include_adult=false&query=${state.cercaFilm}`,
        movieList: [],
        };
    },

    methods:{

        linkCompleto(){
            this.link = `https://api.themoviedb.org/3/search/movie?api_key=5d674668187da98c6d6920a892f310df&language=en-US&page=1&include_adult=false&query=${state.cercaFilm}`
        },
        
        SearchMovie(){
            this.linkCompleto()
            axios.get(this.link)
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
                return movie.title.toLowerCase().includes(state.cercaFilm.toLowerCase())
            })
        }
    },


}


  

</script>

