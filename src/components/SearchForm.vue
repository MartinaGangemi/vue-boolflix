<template>
    <div>
        <input  type="text" class="form-control" :value="query"
        @input="$emit('input', $event.target.value)"
        @keyup.enter="$emit('submitSearch', query)"
        > 
        
        
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

<style lang="scss" scoped>
 input{
    background-color: transparent !important;
    border: 1px solid white; 
    color: white!important;
    padding: 0.2rem;
    border-radius: 0;
 }

 input:focus{
     outline-offset: 0;
     box-shadow: none!important;
     border: 1px solid white; 
 }
</style>
