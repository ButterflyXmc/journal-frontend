<template>
    <div class="content">
        <v-app-bar app color='#4d7f8a'>
            <img class="cloudImg" src="@/assets/cl.png" alt="clouds">
                <v-spacer></v-spacer>
                    <div class="links"><UserLogout></UserLogout></div>
                    <router-link class="links" to="/">Home</router-link>
                    <router-link class="links" to="/journal"> My Journal</router-link>
                    <!-- <router-link class="links" to="/contact">Contact Us</router-link> -->
        </v-app-bar>
        
        <v-form @click="create_new_entries">
            <v-container fluid class="content">
                <h2>START EACH DAY WITH A GRATEFUL HEART</h2>
                <div class="quote"><img class="sun" src="@/assets/sun.png" alt="sun"><GetQuote/></div>
                <div class="am">
                    <div class="grateful">
                        <h2>I am grateful for...</h2>
                            <v-row>
                                    <v-text-field label="1." v-model="grtf1"></v-text-field>
                            </v-row>
                            <v-row>
                                    <v-text-field label="2." v-model="grtf2"></v-text-field>
                            </v-row>
                            <v-row>
                                    <v-text-field label="3." v-model="grtf3"></v-text-field>
                            </v-row>
                    </div>
                    
                    <div  class="great"> 
                        <h2>What would make today great?</h2>
                            <v-row>
                                <v-text-field label="1." v-model="grt1"></v-text-field>
                            </v-row>
                            <v-row>
                                <v-text-field label="2." v-model="grt2"></v-text-field>
                            </v-row>
                    </div>

                    <div class="aff">
                        <h2>Daily affirmation</h2>
                            <v-row>
                                    <v-text-field label="1." v-model="af1"></v-text-field>
                            </v-row>
                            <v-row>
                                    <v-text-field label="2." v-model="af2"></v-text-field>
                            </v-row>
                    </div>
                </div>
                <h3>WHAT WE DO EVERYDAY MATTERS MORE THAN WHAT WE DO ONCE IN A WHILE</h3>
                <div class="quote"> <img class="moon" src="@/assets/moon.png" alt="moon"><GetQuote/> </div>
                <v-container fluid class="content">
                <div class="pm">
                        <div class="high">
                            <h2>Highlights of the Day</h2>
                                <v-row>
                                    <v-text-field label="1." v-model="highlights1"></v-text-field>
                                </v-row>
                                <v-row>
                                        <v-text-field label="2." v-model="highlights2"></v-text-field>
                                </v-row>
                                </div>

                                <div class="learn">
                                    <h2>What did I learn today?</h2>
                                        <v-row>
                                                <v-text-field label="1." v-model="learn1"></v-text-field>
                                        </v-row>
                                        <v-row>
                                                <v-text-field label="2." v-model="learn2"></v-text-field>
                                        </v-row>
                                </div>
                        </div>
                        <v-btn class="save" @click="create_new_entries">Save</v-btn>
                    </v-container>
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
import GetQuote from '@/components/GetQuote.vue'



    export default {
        name: "NewEtry",
        components:{
                UserLogout,
                GetQuote,
    },
        data() {
            return {
                token: "",
                grtf1: "",
                grtf2:"",
                grtf3:"",
                grt1:"",
                grt2:"",
                af1:"",
                af2:"",
                msg: "",
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


h2{
    font-family: Copperplate, Papyrus, fantasy;
}
.am{
    background-color: rgba(240, 248, 255, 0.532);
    padding: 20px;
    border-radius: 30px;
}

.grateful {
    background-color: #f7e9d6;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 10px;
}

.great {
    background-color: #f2f2f2;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 10px;
}

.aff {
    background-color: #d9f1e9;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 10px;
}

.sun{
    height: 200px;
    margin-top: 0;
}
    
.save{
    margin-top: 20px;
    background: rgba(80, 173, 209, 0.4) !important;
    color: white;
}

.quote{
    font-family: Copperplate, Papyrus, fantasy;
    margin: 10px;
    color: rgb(38, 38, 6);
    font-size: 1.5em;
}

.pm{
    background-color: rgba(7, 7, 79, 0.196);
    padding: 20px;;
    border-radius: 30px;
}
.high {
    background-color: #d9e9f1bb;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 10px;
}

.learn {
    background-color: #e9d9f1c7;
    padding: 30px;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 10px;
}
.moon{
    height: 300px;
    margin-top: 0;
}

.save{
    margin-top: 20px;
    background: rgba(80, 209, 170, 0.632) !important;
    color: white;
}
h2{
    color: rgb(2, 5, 18);
    font-family: Copperplate, Papyrus, fantasy;
    margin-top: 5%;
    font-size: 1.7em;
    /* background-color: rgba(0, 255, 255, 0.052); */
}
h3{
    margin-top: 30px;
    font-family: Copperplate, Papyrus, fantasy;
}

/* PHONE */
@media screen and (max-width: 600px) and (min-width: 390px) {
    .sun, .moon {
        height: 100px;
    }

    .grateful h2, .great h2, .aff h2, .high h2, .learn h2{
        font-size: 1.5em;
    }

    .grateful, .great, .aff, .high, .learn{
        padding: 30px;
    }

    .quote { 
    font-size: 1em;
    margin-bottom: 16px;
  }
}

</style>

