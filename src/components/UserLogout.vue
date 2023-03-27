<template>
    <div>
        <v-btn class="btn" @click="user_logout">Log Out</v-btn>
    </div>
</template>

<script>
import axios from 'axios'
import router from '@/router';
import cookies from "vue-cookies";


    export default {
        name : "UserLogout",
        data() {
            return {
                token: "",
                apiUrl : process.env.VUE_APP_API_URL
            }
        },
        methods:{
            user_logout(){
                this.token = cookies.get(`token`);
                axios.request({
                    url: this.apiUrl+"/user-login",
                    method:"DELETE",
                    headers:{
                        token :this.token,
                    },
                }).then(()=>{
                    cookies.remove(`token`);
                    router.push('/');
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>
.btn{
    background-color: transparent !important;
    color: white;
    width: 100%;
}
</style>