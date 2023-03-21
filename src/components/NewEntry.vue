<template>
    <div>
        <h1>NEW ENTRY</h1>

        <v-app-bar app color='#4d7f8a'>
            <img src="@/assets/cl.png" alt="clouds">
                <v-spacer></v-spacer>
                    <div class="links"><UserLogout></UserLogout></div>
                    <router-link class="links" to="/">Home</router-link>
                    <router-link class="links" to="/journal"> My Journal</router-link>
                    <router-link class="links" to="/contact">Contact Us</router-link>
        </v-app-bar>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <v-form @submit.prevent="create_new_entries">
            <v-container>
                <v-row>
                    <v-col cols="6">
                        <v-text-field label="Grateful 1" v-model="grtf1"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field label="Grateful 2" v-model="grtf2"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6">
                        <v-text-field label="Grateful 3" v-model="grtf3"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field label="Great 1" v-model="grt1"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6">
                        <v-text-field label="Great 2" v-model="grt2"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field label="Affirmation 1" v-model="af1"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6">
                        <v-text-field label="Affirmation 2" v-model="af2"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field label="Highlight 1" v-model="h1"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6">
                        <v-text-field label="Highlight 2" v-model="h2"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field label="Lesson Learned 1" v-model="l1"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6">
                        <v-text-field label="Lesson Learned 2" v-model="l2"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-btn @click="create_new_entries">Save</v-btn>
                    </v-col>
                </v-row>
                <p>{{msg}}</p>
            </v-container>
    </v-form>
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies'
import router from '@/router';
import UserLogout from '@/components/UserLogout.vue'



    export default {
        name: "NewEtry",
        components:{
                UserLogout
    },
        data() {
            return {
                grtf1: "",
                grtf2:"",
                grtf3:"",
                grt1:"",
                grt2:"",
                af1:"",
                af2:"",
                h1:"",
                h2:"",
                l1:"",
                l2:"",
                msg: "",
                token: ""
            }
        },
        methods:{
            create_new_entries(){
                this.token = cookies.get(`token`);
                axios.request({
                    url:"http://127.0.0.1:5000/api/journal",
                    method: "POST",
                    headers:{
                        token : this.token
                    },
                    data:{
                        grtf1: this.grtf1,
                        grtf2: this.grtf2,
                        grtf3: this.grtf3,
                        grt1: this.grt1,
                        grt2: this.grt2,
                        af1: this.af1,
                        af2: this.af2,
                        h1: this.h1,
                        h2: this.h2,
                        l1: this.l1,
                        l2: this.l2
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

</style>