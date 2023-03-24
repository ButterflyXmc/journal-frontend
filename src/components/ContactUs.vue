<template>
    <div>
        <v-app-bar app color= #4d7f8a>
            <v-tool-bar-title>
                <img class="cloudpic" src="@/assets/cl.png" alt="clouds">
            </v-tool-bar-title>
            <v-spacer></v-spacer>
            <router-link class="links" to="/">Home</router-link>
            <router-link class="links" to="/login">Login</router-link>
            <router-link  class="links" to="/signup">Sign up</router-link>
        </v-app-bar>
                <div class=" content">
                    <div class="text">
                        <h3>THE FIVE MINUTE JOURNAL</h3>
                        <h4>Welcome to our journal community! We believe in the power of journaling 
                            and would love to help you along your journey. If you have any questions, 
                            you want to share your thoughts on our journal, request a new feature or 
                            just say hello, we'd love to hear from you. Don't hesitate to reach out 
                            to us using the form below and we'll get back to you as 
                            soon as we can. Happy journaling!</h4>
                    </div>
        
                        <v-form class="form">
                            <v-container>
                                <h1>We Want To Hear From You! Reach out to us!</h1>
                                <v-text-field v-model="name" label="Name" :rules="[v => !!v || 'Field is required']"></v-text-field>
                                <v-text-field v-model="email" label="Email" :rules="[v => !!v || 'Field is required', v => /.+@.+\..+/.test(v) || 'Email must be valid']"></v-text-field>
                                <v-textarea v-model="msg" label="Message" :rules="[v => !!v || 'Field is required']"></v-textarea>
                                <span>*optional*</span>
                                <p>Rating</p>
                                <v-rating v-model="rate"></v-rating>
                                <v-btn @click="submitForm">Submit</v-btn>
                                <p>{{response}}</p>
                            </v-container>
                        </v-form>
            
                </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name: "ContactUs",
        data() {
            return {
                response: "",
                name: "",
                email: "",
                msg: "",
                rate: null
            }
        },
            methods:{
                submitForm() {
                    if(this.name, this.email, this.msg ===''){
                    this.response = "Please fill out the required fields!"
                    return
                    }
                    axios
                        .request({
                        url: "https://mchavda.com/api/contact-us",
                        method: "POST",
                        data:{
                            name : this.name,
                            email: this.email,
                            msg: this.msg,
                            rate: this.rate,
                        }
                        }).then(() => {
                        this.response = "Thank you for submitting this form. We will get back to you shortly."
                        this.name = ""
                        this.email = ""
                        this.msg = ""
                        this.rate = null
                        }).catch(() => {
                        this.response = "Error"
                        });
                }
            }
    }

</script>

<style scoped>
.form{
    background-color: #9af0f651;
    margin-top: 5%;
    width: 90vw;
    border: solid 4px white;
    height: 60vh;
    margin-left: 5%;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 1px 1px 18px 18px #15838b9a;
    margin-bottom: 60px;
    transition: transform 0.5s ease-in-out; /* add a transition for the transform property */
}

.form:hover{
    background-color: rgba(255, 255, 255, 0.272);
}

h3{
    font-size: 2em;
    background-color: #15838b47;
    width:50%;
    margin-left: 25%;
    padding: 20px;
    color: white;
    font-family: 'Montserrat', sans-serif;
}

h4{
    color: white;
    margin-top: 2%;
    font-size: 1.6em;
    border-radius: 90px;
    padding: 30px;
    background-color: #53e6d026;
    font-family: 'Raleway', sans-serif;
}

h1{
    color: rgb(34, 154, 146);
    font-family: 'Pacifico', cursive
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

@media screen and (max-width: 899px) and (min-width: 600px) {
    .cloudpic{
        height: 150px;
    }

    .links {
        display: block;
        text-align: center;
        width: 80%;
    }

    h3{
        font-size: 2em;
        width: 70%;
        margin-left: 16%;
    }
}

@media screen and (max-width: 600px) and (min-width: 390px) {
    .links {
        display: block;
        text-align: center;
        width: 100%;
        padding: 7px;
        font-size: 8px;
    }

    .cloudpic{
        height: 80px;
        margin-left: -30%;
    }

    h1{
        font-size: 1.2em;
    }

    h3{
        font-size: 1em;
        width: 100%;
        margin-left: 0%;
    }
    h4{
        font-size: 1em;
    }

    .form{
        width: 90vw;
        border: solid 4px white;
        height: auto
    }
}


</style>