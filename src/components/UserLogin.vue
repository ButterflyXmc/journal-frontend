<template>
    <div>
        <v-app-bar app color= #4d7f8a>
            <v-tool-bar-title>
                <img class="cloudImg" src="@/assets/cl.png" alt="clouds">
            </v-tool-bar-title>
            <v-spacer></v-spacer>
            <router-link class="links" to="/">Home</router-link>
            <router-link class="links" to="/signup">Sign Up</router-link>
            <router-link class="links" to="/contact">Contact Us</router-link>
        </v-app-bar>

    <section class="home">
        <div class="content">
            <v-main>
                <v-card class="card" :transparent="true">
                    <h2>Write what should not be forgotten.</h2>
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
    </section>
        
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

<style>
.cloudImg{
    height: 400px;
}

.links {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 0.5px;
  padding: 10px 15px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: #4d7f8a;
  box-shadow: 10px 10px 18px #53dce6;
  transition: all 0.3s ease-in-out;
}

.links:hover {
  transform: translateY(-3px);
  box-shadow: 15px 15px 25px #53dce6;
  background-color: #53dce6;
}

/* ................................................................... */
/*DESKTOP MEDIA QUERY*/

/* @media only screen and (min-width:1000px) */


/* TABLET */
@media screen and (max-width: 899px) and (min-width: 600px) {
  .links {
    display: block;
    /* margin: 20px; */
    text-align: center;
    width: 80%;
  }

  .cloudImg{
    height: 150px;
}
}

/* MOBILE */
@media screen and (max-width: 600px) and (min-width: 390px) {
  .links {
    display: block;
    /* margin: 20px; */
    text-align: center;
    width: 100%;
    padding: 7px;
    font-size: 8px;
  }

  .cloudImg{
    height: 80px;
    margin-left: -30%;
}
}
</style>

<style scoped>
h2{
    color: white;
    background: rgba(8, 95, 110, 0.235);
    border-radius: 20px;
    font-family: Snell Roundhand, cursive;
    font-size: 2.4em;

}
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

@media screen and (max-width: 899px) and (min-width: 600px) {
    .content {
        margin: 0;
    }
    .card {
        width: 70%;
        margin-left: 15%;
        height: auto;
    }
}


@media screen and (max-width: 600px) and (min-width: 390px) {
    .content {
    margin: 0;
    }
    .card {
        width: 90%;
        margin-left: 5%;
        margin-top: -15%;
        height: auto;
    }
    img{
        height: 100px;
        margin-top: 10%;
    }
}
</style>