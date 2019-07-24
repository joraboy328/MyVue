<template>
    <div>
    <h1>首页1</h1>
    {{ count }}
    </div>
</template>
<script>
 export default {

     computed:{
         count () {
             return this.$store.state.count;
         }
     }
     
 }
</script>
