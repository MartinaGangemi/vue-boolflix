<template>
    <div>
        <!-- search -->
        <div v-for = "(movie, index) in filteredMovie" :key="index"> {{  movie.name }} </div>
    </div>
</template>

<script>

import axios from "axios";
import state from "@/state.js";
export default {
    name: "MainComponent",

    data() {

        return {
        link:`https://api.themoviedb.org/3/search/company?api_key=5d674668187da98c6d6920a892f310df&page=1&query=${state.cercaFilm}&language=it-IT`,
        movieList: null,
        };
    },

    methods:{
        callApi(){
            axios.get(this.link)
            .then((response) =>{
            this.movieList = response.data;
            
            })
            .catch((error) => {
                this.error = `${error}`;
            });
            },

    
           
        },

    computed:{
        filteredMovie(){
            if(state.cercaFilm){
                return this.movieList.results.filter(movie =>{
                    return movie.name.toLowerCase().includes(state.cercaFilm.toLowerCase())
                })
            } else {
                return this.movieList
            }
        }
    },

    mounted ()  {
        this.callApi();
    }

}


  

</script>

