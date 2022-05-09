<template>
    <form  @submit.prevent="$emit('cerca')">
        <input type="search" :value = "cercaFilm" 
        @input="$emit('input', $event.target.value)"
         @keyup = "$emit('cerca', cercaFilm)"
        > 
        <button @click = "$emit('cerca', cercaFilm)" >cerca</button> 
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
