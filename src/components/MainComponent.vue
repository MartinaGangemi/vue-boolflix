<template>
    <div>
        <!-- search -->
        <div class="row row-cols-5 m-0">
            <div class="col" v-for = "(movie, index) in movieList" :key="index"> {{  movie.title }} 
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


export default {
    name: "MainComponent",
    data() {
        return {
        // linkFilm:`https://api.themoviedb.org/3/search/movie?api_key=5d674668187da98c6d6920a892f310df&language=en-US&page=1&include_adult=false&query=${state.query}`,
        // linkSerie:`https://api.themoviedb.org/3/search/tv?api_key=5d674668187da98c6d6920a892f310df&language=it-IT&query=${state.query}`,
        movieList: [],
        };
    },
    
}
  
</script>