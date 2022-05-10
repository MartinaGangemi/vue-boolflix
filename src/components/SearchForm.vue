<template>
    <div>
        <input type="search" :value = "query" 
        @input = "$emit('input', $event.target.value)"
         @keyup.enter = "$emit('submit', query)"
        > 
        <button @click = "$emit('submit', query)">cerca</button> 
    </div>  
    
</template>

<script>
export default {
    name:"SearchComponent",
      props: {
        query: String,
    }
}
</script>
