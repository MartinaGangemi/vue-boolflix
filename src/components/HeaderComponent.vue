<template>
    <header :class="{ 'onScroll': !view.topOfPage}">
        <div class="container">
            <div class=" py-2 row align-items-center">
                <div class="col-2 logo_box ">
                    <img src="@/assets/img/logo.png" alt="">
                </div>
                <div class="col-6">
                    <Nav />
                </div>
                <div class="col-4">
                    <Search v-model="query"  @submitSearch="search" />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Nav from "@/components/NavComponent.vue";
import Search from "@/components/SearchForm.vue";
import axios from "axios"
import state from "@/state.js";
export default {
    name: "HeaderComponent",
    
    components:{
        Nav,
        Search,
    },
    data (){
        return {
            query: "",
            movieList: [],
            cast: [],
            view: {
            topOfPage: true
            }
        }
    },

    beforeMount() {
    document.addEventListener('scroll', this.handleScroll)
    },
    methods:{

        handleScroll(){
      if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
        },
        
        search(){
            state.movieList = this.movieList;
            state.show = this.show
            let film = `https://api.themoviedb.org/3/search/movie?api_key=5d674668187da98c6d6920a892f310df&language=en-US&page=1&include_adult=false&query=${this.query}`
            let serieTv = `https://api.themoviedb.org/3/search/tv?api_key=5d674668187da98c6d6920a892f310df&language=it-IT&query=${this.query}`
            // let cast =`https://api.themoviedb.org/3/movie/634649/credits?api_key=5d674668187da98c6d6920a892f310df&language=en-US&`
            const requestFilm = axios.get(film)
            const requestSerie = axios.get(serieTv)
            // chiamata per film e serie tv
            axios.all([requestFilm, requestSerie])
            .then(
                axios.spread((...responses) =>{
                const responseOne = responses[0].data.results
                const responseTwo = responses[1].data.results
                this.movieId = [...responseOne, ...responseTwo]
                state.movieList = [...responseOne, ...responseTwo]
                this.movieList = state.movieList
                
                // ciclo per gli id
                this.movieId.forEach((movie) => {
                   
                    // chiamata
                    axios.get( `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=5d674668187da98c6d6920a892f310df&language=en-US&`)
                    .then((response) =>{
                        this.$set(movie, 'cast',  response.data.cast.slice(0,5))
                        console.log(this.movieId);
                    })
                })
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
        width: 100%;
        transition: background-color 1s;

        &.onScroll {
        background-color: $main;
        }
    }
    
    .logo_box{
        height: 50px;
    }
   
</style>