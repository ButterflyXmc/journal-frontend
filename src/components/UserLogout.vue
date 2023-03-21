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
            }
        },
        methods:{
            user_logout(){
                this.token = cookies.get(`token`);
                axios.request({
                    url:"http://127.0.0.1:5000/api/user-login",
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
/* .links{
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

.currentContent{
    margin-top: 20%;
} */

</style>