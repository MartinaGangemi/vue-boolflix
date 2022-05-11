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
            movieList: [],
        }
    },
    methods:{
        
        search(){
            state.movieList = this.movieList;
            state.show = this.show
            let film = `https://api.themoviedb.org/3/search/movie?api_key=5d674668187da98c6d6920a892f310df&language=en-US&page=1&include_adult=false&query=${this.query}`
            let serieTv = `https://api.themoviedb.org/3/search/tv?api_key=5d674668187da98c6d6920a892f310df&language=it-IT&query=${this.query}`
            let cast =`https://api.themoviedb.org/3/movie/634649/credits?api_key=5d674668187da98c6d6920a892f310df&language=en-US&`
            const requestFilm = axios.get(film)
            const requestSerie = axios.get(serieTv)
            const requestCast = axios.get(cast)
           

            axios.all([requestFilm, requestSerie, requestCast])
            .then(
                axios.spread((...responses) =>{
            const responseOne = responses[0].data.results
            const responseTwo = responses[1].data.results
            const responseThree = responses[2].data
            console.log( responseOne, responseTwo, responseThree, "b")
            state.movieList = [...responseOne, ...responseTwo]
            state.cast = [responseThree]
            console.log(state.cast)
            // console.log(this.movieList)
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