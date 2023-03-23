<template>
    <div>
        <v-app-bar app color= #4d7f8a>
            <v-tool-bar-title>
                <img class="cloudImg" src="@/assets/cl.png" alt="clouds">
            </v-tool-bar-title>
            <v-spacer></v-spacer>
            <router-link class="links" to="/">Home</router-link>
            <router-link class="links" to="/login">Login</router-link>
            <router-link  class="links" to="/contact">Contact Us</router-link>
        </v-app-bar>
        <section class="home">
            <div class="content">
                        <v-main>
                            <v-card class="card" :transparent="true">
                                <img src="@/assets/reg.png" height="200px" alt="login">
                                    <!-- <v-card-title></v-card-title> -->
                                        <v-card-text>
                                            <v-text-field  v-model="firstName" label = "First Name" :rules="[v => !!v || 'Field is required']"></v-text-field>
                                            <v-text-field v-model="lastName" label = "Last Name" :rules="[v => !!v || 'Field is required']"></v-text-field>
                                            <v-text-field  v-model="userName" label = "Username" :rules="[v => !!v || 'Field is required']"></v-text-field>
                                            <v-text-field v-model="email" label = "Email" :rules="[v => !!v || 'Field is required']"></v-text-field>
                                            <v-text-field  v-model="password" label = "Password" 
                                                            :type="showPassword ? 'text' :'password'"
                                                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                                            @click:append="showPassword =! showPassword" :rules="[v => !!v || 'Field is required']"/>
                                                            <!-- :type if showpass is true, I want text propery, if its false, i want the property to be false-->
                                                            <!-- if showPassword is true (?), then show the eye('mdi-eye') : if its false show no pass(mdi-eye-off) -->
                                                            <v-btn class="signupbtn" @click="signup">Sign up</v-btn>
                                                                <div v-if="result">
                                                                    <p>{{result}}</p>
                                                                </div>
                                        </v-card-text>
                            </v-card>
                        </v-main>
                    </div>
        </section>
        
        <!-- <div class="quote"><GetQuote/></div> -->
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies'
import router from '@/router'


    export default {
        name: "UserSignup",
        data() {
            return {
                result: "",
                firstName: "",
                lastName: "",
                userName:"",
                email: "",
                password: "",
                showPassword: false
            }
        },
            methods:{
                signup(){
                    axios.request({
                        url:"http://127.0.0.1:5000/api/user",
                        method: "POST",
                        data:{
                            firstName : this.firstName,
                            lastName: this.lastName,
                            userName: this.userName,
                            email: this.email,
                            password: this.password
                        }
                    }).then((response)=>{
                        cookies.set(`token`,response.data[1])
                        this.result = "signed up"
                        router.push('/profile')
                    }).catch(()=>{
                        this.result = "Please enter all required fields!"
                    })
                }
            }
    };
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
    width: 700px;
    height: 750px;
    background-color: transparent;
    background-color: rgba(99, 202, 221, 0.142);
    border: 1px solid;
    padding: 10px;
    box-shadow: 20px 10px 18px #53dce6;
}

.signupbtn{
    margin-top: 6%;
    background: url('@/assets/cloudy.png');
    background-size: cover;
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
    height: 6px;
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

.home{
    display: flex;
    align-items: center;
    min-height: 100vh;
    background: url('@/assets/clouds.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>

