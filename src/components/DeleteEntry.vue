<template>
    <div>
        <h1>Delete Entry</h1>
        <v-row align="center">
            <v-col cols="6">
                <v-text-field label="Entry ID : " v-model="entryId"></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-btn @click="delete_entry">Delete</v-btn>
            </v-col>
    </v-row>
    </div>
</template>

<script>  
import axios from 'axios'
import router from '@/router';
import cookies from "vue-cookies";

    export default {
        name: "DeleteEntry",
        data() {
            return {
                entryId: ""
            }
        },
            methods:{
                delete_entry(){
                    this.token = cookies.get(`token`);
                    axios.request({
                        url:"http://127.0.0.1:5000/api/journal",
                        method:"DELETE",
                        headers:{
                            token :this.token,
                        },
                        data:{
                            entryId: this.entryId
                        }
                    }).then(()=>{
                        router.push('/journal');
                    }).catch((error)=>{
                        console.log(error);
                    })
                }
            }
    }
</script>

<style scoped>

</style>