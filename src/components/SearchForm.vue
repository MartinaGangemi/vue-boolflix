<template>
    <form  @submit.prevent="$emit('submit')">
        <input type="search" :value = "cercaFilm" 
        @input="$emit('input', $event.target.value)"
         @enternput = "$emit('submit', cercaFilm)"
        > 
        <button @click = "$emit('submit', cercaFilm)" >cerca</button> 
    </form>  
    
</template>

<script>


export default {
    name:"SearchComponent",
      props: {
        cercaFilm: String,
    }

}
</script>
