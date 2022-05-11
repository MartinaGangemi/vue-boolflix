<template>
    <!-- main -->
    <main class="container ">
        <siteMovieCard />  
    </main>
    
</template>

<script>

import siteMovieCard from '@/components/MovieCardComponent.vue'

export default {
    name: "MainComponent",
    components:{
        siteMovieCard
    },
    data() {
        return {
        
        movieList: [],
        query:"",
        };
    },

    
}
  
</script>

<style lang="scss" scoped>
/*main*/
    main{
        margin-top: 80px ;
    }
   
</style>