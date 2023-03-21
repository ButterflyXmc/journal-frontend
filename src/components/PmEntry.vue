<template>
    <div class="content">
        <v-app-bar app color='#4d7f8a'>
            <img src="@/assets/cl.png" alt="clouds">
                <v-spacer></v-spacer>
                    <div class="links"><UserLogout></UserLogout></div>
                    <router-link class="links" to="/">Home</router-link>
                    <router-link class="links" to="/journal"> My Journal</router-link>
                    <router-link class="links" to="/contact">Contact Us</router-link>
        </v-app-bar>
        <div class="pm">
                    <div class="high">
                        <h2>Highlights of the Day</h2>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="5">
                            <v-text-field label="Highlight 1" v-model="highlights1"></v-text-field>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="5">
                            <v-text-field label="Highlight 2" v-model="highlights2"></v-text-field>
                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>
                    </div>

                    <div class="learn">
                        <h2>What did I learn today?</h2>
                            <v-row>
                                <v-spacer></v-spacer>
                                <v-col cols="5">
                                    <v-text-field label="Lesson Learned 1" v-model="learn1"></v-text-field>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="5">
                                    <v-text-field label="Lesson Learned 2" v-model="learn2"></v-text-field>
                                </v-col>
                                <v-spacer></v-spacer>
                            </v-row>
                    </div>
                    <v-row>
                        <v-col>
                            <v-btn @click="create_new_entries">Save</v-btn>
                        </v-col>
                    </v-row>
                </div>
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies'
import router from '@/router';

    export default {
        name: "PmEntry",
        data() {
            return {
                entryId: "",
                highlights1:"",
                highlights2:"",
                learn1:"",
                learn2:"",
            }
        },
        methods:{
            create_new_entries(){
                this.token = cookies.get(`token`);
                axios.request({
                    url:"http://127.0.0.1:5000/api/pm-journal",
                    method: "POST",
                    headers:{
                        token : this.token
                    },
                    data:{
                        entryId: this.entryId,
                        highlights1: this.highlights1,
                        highlights2: this.highlights2,
                        learn1: this.learn1,
                        learn2: this.learn2,
                    }
                }).then(()=>{
                    this.msg = "Created!"
                    router.push('/journal')
                }).catch(()=>{
                    this.msg = "Something happened"
                })
        }
    }
    }
</script>

<style scoped>
.content {
    margin-top: 10%;
}

.pm{
    background-color: rgba(0, 0, 255, 0.11);
    padding: 90px;
}
.high {
    background-color: #d9e9f1;
    padding: 10px;
    margin-bottom: 20px;
}

.learn {
    background-color: #e9d9f1;
    padding: 10px;
    margin-bottom: 20px;
}
</style>