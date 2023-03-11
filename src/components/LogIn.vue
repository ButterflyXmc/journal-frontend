<template>
    <div>
        <h1>LOG IN</h1>
        <v-form>
            <v-row>
                    <v-col cols="12" md="10">
                        <v-text-field v-model="username" label = "Username"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="10">
                        <v-text-field v-model="password" label = "Password"></v-text-field>
                    </v-col>
            </v-row>
            <v-btn @click="login">login</v-btn>
                <div v-if="result">
                    <p>{{result}}</p>    
                </div>
        </v-form>
        
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: "LogIn",
        data() {
            return {
                result: ""
            }
        },
        methods:{
            login(){
                axios.request({
                    url:"http://127.0.0.1:5000/api/user-login",
                    method : "POST",
                    data:{
                        username : this.username,
                        password: this.password
                    }
                }).then(()=>{
                    this.result = "Logged in"
                }).catch(()=>{
                    this.result = "Error"
                })
            }
        }
    }
</script>

<style scoped>

</style>