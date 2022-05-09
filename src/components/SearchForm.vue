<template>
    <div>
        <input type="search" :value = "cercaFilm" 
        @input = "$emit('input', $event.target.value)"
         @keyup.enter = "$emit('submit', cercaFilm)"
        > 
        <button @click = "$emit('submit', cercaFilm)">cerca</button> 
    </div>  
    
</template>

<script>


export default {
    name:"SearchComponent",
      props: {
        cercaFilm: String,
    }

}
</script>
