<template>
    <div>
        <input type="search" :value="query"
        @input="$emit('input', $event.target.value)"
        > 
        <button @click = "$emit('submitSearch', query)">cerca</button> 
    </div>  
    
</template>

<script>

export default {
    name:"SearchComponent",
      props: {
        query: String,
    },

   
}
</script>
