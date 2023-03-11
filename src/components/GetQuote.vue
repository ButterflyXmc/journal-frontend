<template>
    <div>
        <section>{{result}}</section>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: "GetQuote",
        data() {
            return {
                result: ""
            }
        },
        methods:{
            get_quotes(){
                axios.request({
                    url:"https://api.quotable.io/random",
                    method: "GET",
                }).then((response)=>{
                    this.result = response.data.content
                    // console.log(response.data.content);
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
        mounted(){
            this.get_quotes()
        }
    }
</script>

<style scoped>


</style>