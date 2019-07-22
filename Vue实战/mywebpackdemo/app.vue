<template>
    <div>
        <v-title title="Vue Component"></v-title>
        <v-button @click="handleClick">Click Me</v-button>

    </div>
</template>
<script>
  import vTitle from './title.vue';
  import vButton from './button.vue';

    export default {
        components:{
            vTitle,
            vButton
        },
        methods:{
            handleClick(e){

                console.log(e);
            }

        
        }
    }
</script>

