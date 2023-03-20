<template>
    <div>
        <v-app-bar app color= #4d7f8a>
            <v-tool-bar-title>
                <img src="@/assets/cl.png" alt="clouds">
            </v-tool-bar-title>
            <v-spacer></v-spacer>
            <router-link class="links" to="/">Home</router-link>
            <router-link class="links" to="/signup">Sign Up</router-link>
            <router-link class="links" to="/contact">Contact Us</router-link>
        </v-app-bar>

        <div class="content">
            <v-main>
                <v-card class="card" :transparent="true">
                    <img src="@/assets/login.png" height="250px" alt="login">
                        <!-- <v-card-title>Login</v-card-title> -->
                            <v-card-text>
                                <v-text-field v-model="username" label = "Username" :rules="[v => !!v || 'Field is required']"></v-text-field>
                                <v-text-field  v-model="password" label = "Password" 
                                                :type="showPassword ? 'text' :'password'"
                                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                                @click:append="showPassword =! showPassword" :rules="[v => !!v || 'Field is required']"/>
                                                <!-- :type if showpass is true, I want text propery, if its false, i want the property to be false-->
                                                <!-- if showPassword is true (?), then show the eye('mdi-eye') : if its false show no pass(mdi-eye-off) -->
                                                <v-btn @click="login">login</v-btn>
                                                        <div v-if="result">
                                                            <p>{{result}}</p>    
                                                    </div>
                            </v-card-text>
                </v-card>
            </v-main>
        </div>
        <!-- <div class="quote"><GetQuote/></div> -->
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
// import GetQuote from '@/components/GetQuote.vue'
import router from '@/router'

    export default {
        name: "LogIn",
        data() {
            return {
                result: "",
                username: "",
                password: "",
                showPassword: false
            }
        },
        methods:{
            login(){
                if(this.username, this.password ===''){
                    this.result = "Please enter a valid username and password"
                    return
                }
                axios.request({
                    url:"http://127.0.0.1:5000/api/user-login",
                    method : "POST",
                    data:{
                        username : this.username,
                        password: this.password
                    },
                }).then((response)=>{
                    // [0] will return the first element of the return 200 msg
                    // [1] will return the second item(token) of the return 200 msg
                    if (response.data[0] === "Logged in successfully"){
                        cookies.set(`token`,response.data[1])
                        router.push('/profile')
                    } else{
                        this.result = "Login failed, please check the username or password."
                    }
                    // router.push('/profile')
                }).catch((error)=>{
                    console.log(error.response.data);
                    // this.result = "Please enter required fields"
                });
            }
        }
    }
</script>

<style scoped>
.content{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    margin-left: 28%;
}

.card{
    width: 650px;
    height: 600px;
    background-color: rgba(99, 202, 221, 0.142);
    border: 1px solid;
    padding: 10px;
    box-shadow: 20px 10px 18px #53dce6;
}

.links{
    width: 7vw;
    position: relative;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 0.5px;
    box-shadow: 10px 10px 18px #53dce6;
    
}


.links:before,
.links:after{
    content: "";
    position: absolute;
    height: 5px;
    width: 0;
    background-color: rgb(145, 204, 241);
    transition: 0.5s;
}
.links:after{
    left: 0;
    bottom: -10px;
}

.links:before{
    right: 0;
    top: -10px;
}

.links:hover:after,
.links:hover:before{
    width: 100%;
}

</style>