<template>
    <!-- main -->
    <main class="mb-5">
        <jumbotron />
        <div class="container mb-5">
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

