<template>
    <header>
        <div>
            <Search v-model = "query" @submit = "search" />
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
            query: "",
        }
    },
    methods:{
        search() {
            state.query = this.query;
        },
    }
})
</script>