<template>
    <div>
        <v-app-bar app color='#4d7f8a'>
            <img src="@/assets/cl.png" alt="clouds">
                <v-spacer></v-spacer>
                    <div class="links"><UserLogout></UserLogout></div>
                    <router-link class="links" to="/profile"> Your Account</router-link>
                    <router-link class="links" to="/new-journal"> New Journal</router-link>
                    <router-link class="links" to="/contact">Contact Us</router-link>
                    <router-link class="links" to="/options">Journal options</router-link>
        </v-app-bar>
            
            <v-container>
                <v-row>
                    <v-col v-for="e in entries" :key="e.id" cols="12" md="6" lg="4" xl="3">
                        <v-card>
                            <v-card-title>
                                {{ e.created_at }}
                            </v-card-title>
                                <v-card-text>
                                    <div>Entry ID: {{ e.entryId }}</div>
                                    <div>Grateful 1: {{ e.grateful1 }}</div>
                                    <div>Grateful 2: {{ e.grateful2 }}</div>
                                    <div>Grateful 3: {{ e.grateful3 }}</div>
                                    <div>Great 1: {{ e.great1 }}</div>
                                    <div>Great 2: {{ e.great2 }}</div>
                                    <div>Affirm 1: {{ e.affirm1 }}</div>
                                    <div>Affirm 2: {{ e.affirm2 }}</div>
                                    <div>Highlights 1: {{ e.highlights1 }}</div>
                                    <div>Highlights 2: {{ e.highlights2 }}</div>
                                    <div>Learn 1: {{ e.learn1 }}</div>
                                    <div>Learn 2: {{ e.learn2 }}</div>
                                </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from "vue-cookies";
import UserLogout from '@/components/UserLogout.vue'


    export default {
        name: "JournalEntry",
        components:{
                UserLogout
    },
        data() {
            return {
                entries: [],
                token:"",
                entryID:"",
                entryId: "",
                grateful1:"",
                grateful2:"",
                grateful3:"",
                great1:"",
                great2:"",
                affirm1:"",
                affirm2:"",
                highlights1:"",
                highlights2:"",
                learn1:"",
                learn2:"",
                created_at:"",
            }
        },
            methods:{
                see_user_entries(){
                    this.token = cookies.get(`token`);
                    axios.request({
                        url:"http://127.0.0.1:5000/api/journal",
                        method: "GET",
                        headers:{
                            token: this.token,
                        }
                    }).then((response)=>{
                        // console.log(response.data);
                        this.entries = response.data;
                    }).catch((error)=>{
                        console.log(error);
                    })
                },
                edit_user_entry(){
                    this.token = cookies.get(`token`);
                        axios
                            .request({
                            url: "http://127.0.0.1:5000/api/journal",
                            method: "PATCH",
                            data: {
                                entryId: this.entryId,
                                grateful1: this.grateful1,
                                grateful2: this.grateful2,
                                grateful3: this.grateful3,
                                great1: this.great1,
                                great2: this.great2,
                                affirm1: this.affirm1,
                                affirm2: this.affirm2,
                                highlights1: this.highlights1,
                                highlights2: this.highlights2,
                                learn1: this.learn1,
                                learn2: this.learn2
                            },
                            headers: {
                                token: this.token,
                            },
                            }).then(() => {
                                this.response = "Account Updated successfully!";
                                // Update the user data displayed in the componen
                            }).catch((error) => {
                                console.log(error);
                            });
                }
            },
                mounted(){
                    this.see_user_entries();
                }
    };
</script>

<style scoped>
.v-card__title {
    font-size: 20px;
    color: #4d7f8a;
}
.v-card{
    background-color: rgba(132, 203, 218, 0.231);
}

</style>