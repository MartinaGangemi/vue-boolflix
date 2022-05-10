<template>
    <header>
        <div>
            <Search v-model = "query" @submit = "search" @click = "searchMovie"/>
        </div>
    </header>
</template>

<script>
import Search from "@/components/SearchForm.vue";
import axios from "axios"
import state from "@/state.js";
export default ({
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
        search() {
            state.query = this.query;
            state.movieList = this.movieList
        },

        SearchMovie(){
            console.log(this.movieList)
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5d674668187da98c6d6920a892f310df&language=en-US&page=1&include_adult=false&query=${state.query}`)
            .then((response) =>{
            this.movieList = response.data.results;
            })
            .catch((error) => {
                this.error = `${error}`;
            });
            },
    }
})
</script>