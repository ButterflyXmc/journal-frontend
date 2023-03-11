<template>
<div>
    <h1>MAIN PAGE</h1>
    <section><GetQuote/></section>
</div>
</template>

<script>
import GetQuote from '@/components/GetQuote.vue'


    export default {
        name:"HomePage",
        components:{
            GetQuote,
        },
    
    }
</script>

<style>
/* STYLE will be global */
html{
    text-align: center;
}
/* What I want */
/* - When a user enters my website, a journal book opens up and zooms into a div or a page 
    - where they get a welcome message and a little backgrouond on what my website is
    - and in the middle section they'll have sign up/login button which will take them to the clicked page

*/
</style>