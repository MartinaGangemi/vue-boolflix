<template>
    
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

</template>

<script>

import Search from "@/components/SearchForm.vue";
import axios from "axios"
import state from "@/state.js";
export default {
    name: "HeaderComponent",
    
    components:{
        Search,
    },
    data (){
        return {
            query: "",
            movieList: []
        }
    },
    methods:{
        
        search(){
            state.movieList = this.movieList;
            let film = `https://api.themoviedb.org/3/search/movie?api_key=5d674668187da98c6d6920a892f310df&language=en-US&page=1&include_adult=false&query=${this.query}`
            let serieTv = `https://api.themoviedb.org/3/search/tv?api_key=5d674668187da98c6d6920a892f310df&language=it-IT&query=${this.query}`
            const requestFilm = axios.get(film)
            const requestSerie = axios.get(serieTv)
             axios.all([requestFilm, requestSerie])
            .then(
                axios.spread((...responses) =>{
            const responseOne = responses[0].data.results
            const responseTwo = responses[1].data.results
            console.log( responseOne, responseTwo, "b")
            state.movieList = [...responseOne, ...responseTwo]
            // console.log(this.movieList)
            console.log(state.movieList, "biu")
            this.movieList= state.movieList
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
   

</style>