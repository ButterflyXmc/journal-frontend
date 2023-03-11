<template>
    <div>
        <h1>Sign Up</h1>
        <form>
            <v-row>
                <v-col cols="12" md="10">
                <v-text-field v-model="firstName" label = "First Name"></v-text-field>
                </v-col>
                <v-col cols="12" md="10">
                    <v-text-field v-model="lastName" label = "Last Name"></v-text-field>
                </v-col>
                <v-col cols="12" md="10">
                    <v-text-field v-model="userName" label = "Username"></v-text-field>
                </v-col>
                <v-col cols="12" md="10">
                    <v-text-field v-model="email" label = "Email"></v-text-field>
                    </v-col>
                <v-col cols="12" md="10">
                    <v-text-field v-model="password" label = "Password"></v-text-field>
                </v-col>
            </v-row>
            <v-btn @click="signup">Sign up</v-btn>
            <div v-if="result">
                <p>{{result}}</p>
            </div>
        </form>
        
    </div>
</template>

<script>
import axios from 'axios';
// import cookies from 'vue-cookies'

    export default {
        name: "UserSignup",
        data() {
            return {
                result: ""
            }
        },
            methods:{
                signup(){
                    axios.request({
                        url:"http://127.0.0.1:5000/api/user",
                        method: "POST",
                        headers : {
                            token : this.token
                        },
                        data:{
                            firstName : this.firstName,
                            lastName: this.lastName,
                            userName: this.userName,
                            email: this.email,
                            password: this.password
                        }
                    }).then((response)=>{
                        this.result = "Account created!"
                        localStorage.setItem('token', response.data.token)
                    }).catch(()=>{
                        this.result = "An error has occured!"
                    })
                }
            }
    };
</script>

<style scoped>

</style>