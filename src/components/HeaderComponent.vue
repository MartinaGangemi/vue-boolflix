<template>
    <header>
        <div>
            <Search v-model = "cercaFilm" @submit = "search" />
        </div>
    </header>
</template>

<script>

import Search from "@/components/SearchForm.vue";
import state from "@/state.js";

export default ({
    name: "HeaderComponent",
    components:{
        Search
    },

    data (){
        return {
            cercaFilm: "",
        }
    },

    methods:{

        search() {
            state.cercaFilm = this.cercaFilm;

        },
    }

})
</script>
