<template>
    <!-- main -->
    <main>
        <jumbotron />
        <div class="container">

            <siteMovieCard />  
        </div>
    </main>
    
</template>

<script>
import jumbotron from '@/components/JumbotronComponent.vue'
import siteMovieCard from '@/components/MovieCardComponent.vue'

export default {
    name: "MainComponent",
    components:{
        siteMovieCard,
        jumbotron
    },
    
}
  
</script>

