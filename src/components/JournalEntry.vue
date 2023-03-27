<template>
    <div>
        <v-app-bar app color='#4d7f8a'>
            <img class="cloudImg" src="@/assets/cl.png" alt="clouds">
                <v-spacer></v-spacer>
                    <div class="l"><UserLogout></UserLogout></div>
                    <router-link class="links" to="/profile"> Your Account</router-link>
                    <router-link class="links" to="/new-entry"> New Journal</router-link>
                    <router-link class="links" to="/contact"> Contact Us</router-link>
        </v-app-bar>
            
            <v-container class="grid">
                    <v-container>
                            <v-row>
                                <v-col v-for="e in entries" :key="e.id" cols="12" md="6" lg="4" xl="3">
                                    <v-card class="am">
                                        <v-card-title>
                                            <!-- I'm creating a new Date object from the created_at property of the e object, 
                                            and then converting it to an ISO string using toISOString(). I'm then using the 
                                            slice() method to extract the first 10 characters of the string, which correspond 
                                            to the yyyy-mm-dd part of the string. -->
                                            
                                            <p class="date">{{ new Date(e.created_at).toISOString().slice(0, 10) }}</p>
                                        </v-card-title>
                                            <v-card-text>
                                                <v-btn class="btn" @click="showEditForm(e)">Edit</v-btn>
                                                <v-btn v-if="isEditing" class="cancel" @click="cancelEdit">Cancel</v-btn>
                                                <h2>AM</h2>
                                                <img class="pic" src="@/assets/sun.png" alt="sun">
                                                    <div>Entry ID: {{ e.entryId }}</div>
                                                    <div class="morning">
                                                        <h4>I am grateful for...</h4>
                                                        <div>1. {{ e.grateful1 }}</div>
                                                        <div>2. {{ e.grateful2 }}</div>
                                                        <div>3. {{ e.grateful3 }}</div>
                                                        <h4>What would make today great?</h4>
                                                        <div>1. {{ e.great1 }}</div>
                                                        <div>2.{{ e.great2 }}</div>
                                                        <h4>Daily affirmation</h4>
                                                        <div>1. {{ e.affirm1 }}</div>
                                                        <div>2. {{ e.affirm2 }}</div>
                                                    </div>
                                                    
                                                    <br>
                                                        <h2>PM</h2>
                                                        <img class="pic" src="@/assets/moon.png" alt="moon">
                                                    <div class="night">
                                                        <h4>Highlights of the Day</h4>
                                                        <div> 1. {{ e.highlights1}}</div>
                                                        <div>2. {{ e.highlights2 }}</div>
                                                        <h4>What did I learn today?</h4>
                                                        <div>1. {{ e.learn1 }}</div>
                                                        <div>2. {{ e.learn2 }}</div> 
                                                    </div>
                                                                                    
                                            </v-card-text>

                                            <div v-if="showModal">
                                                <div class="modal-content">
                                                        <form>
                                                            <p>*Warning*</p>
                                                            <p>Please note that when editing an entry, it is important to pay attention to 
                                                                its corresponding Entry Id, as this will ensure that only the intended entry is edited.</p>
                                                            <v-text-field v-model="entryId" label="Entry Id"></v-text-field>
                                                            <h4>I am grateful for...</h4>
                                                            <v-text-field v-model="grateful1" label="1."></v-text-field>
                                                            <v-text-field v-model="grateful2" label="2."></v-text-field>
                                                            <v-text-field v-model="grateful3" label="3."></v-text-field>
                                                            <h4>What would make today great?</h4>
                                                            <v-text-field v-model="great1" label="1."></v-text-field>
                                                            <v-text-field v-model="great2" label="2."></v-text-field>
                                                            <h4>Daily affirmation</h4>
                                                            <v-text-field v-model="affirm1" label="1."></v-text-field>
                                                            <v-text-field v-model="affirm2" label="2."></v-text-field>
                                                            <h4>Highlights of the Day</h4>
                                                            <v-text-field v-model="highlights1" label="1."></v-text-field>
                                                            <v-text-field v-model="highlights2" label="2."></v-text-field>
                                                            <h4>What did I learn today?</h4>
                                                            <v-text-field v-model="learn1" label="1."></v-text-field>
                                                            <v-text-field v-model="learn2" label="2."></v-text-field>
                                                            <v-btn class="btn" @click="edit_user_entry">Update Entry</v-btn>
                                                            <v-btn class="cancel" @click="cancelEdit">Cancel</v-btn>
                                                            <div>
                                                                <h1>Delete Entry</h1>
                                                                <v-row align="center">
                                                                    <v-col cols="6">
                                                                        <v-text-field label="Entry ID : " v-model="entryID"></v-text-field>
                                                            
                                                                    </v-col>
                                                                </v-row>
                                                                <v-btn class="cancel" @click="cancelEdit">Cancel</v-btn>
                                                                        <v-btn class="delete" @click="delete_entry">Delete</v-btn>
                                                            </div>
                                                        </form>
                                                </div>
                                                <p>{{result}}</p>
                                            </div>
                                    </v-card>
                                </v-col>
                            </v-row>
                    </v-container>
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
                highlights1: "",
                highlights2: "",
                learn1: "",
                learn2: "",
                created_at: "",
                showModal : false,
                result : null,
                apiUrl : process.env.VUE_APP_API_URL
            }
        },
            methods:{
                cancelEdit(){
                        this.showModal = false;
                        this.isEditing = false;
                },
                showEditForm(e) {
                        this.entryId = e.entryId
                        this.grateful1 = e.grateful1
                        this.grateful2 = e.grateful2
                        this.grateful3 = e.grateful3
                        this.great1 = e.great1
                        this.great2 = e.great2
                        this.affirm1 = e.affirm1
                        this.affirm2 = e.affirm2
                        this.highlights1 = e.highlights1
                        this.highlights2 = e.highlights2
                        this.learn1 = e.learn1
                        this.learn2 = e.learn2
                        this.content = e.content
                        this.showModal = true
                        this.isEditing = true;
                },
                get_user_entries(){
                    this.token = cookies.get(`token`);
                    axios.request({
                        url: this.apiUrl+"/journal",
                        method: "GET",
                        headers:{
                            token: this.token,
                        },
                    }).then((response)=>{
                        // console.log(response.data);
                        this.entries = response.data;
                    }).catch((error)=>{
                        console.log(error);
                    })
                },
                edit_user_entry(){
                    this.token = cookies.get(`token`);
                    // &..........
                    // Const updateData is set to an empty object {} 
                    // I used this object to store the properties that the user wants to update
                    // &..........
                    const updateData = {
                                        entryId: this.entryId,
                                        //&..........
                                        // using || undefineds to set a default value for a property 
                                        // in case the user does not enter a new value for that property.
                                        // If the user enters a value for a field, that value will be added to the
                                        // updateData object. And if the user leaves it blank, than the previously stored
                                        // value will be displayed and that can we either an actual value or just null.
                                        //&.........
                                        grateful1: this.grateful1 || undefined,
                                        grateful2: this.grateful2 || undefined,
                                        grateful3: this.grateful3 || undefined,
                                        great1: this.great1 || undefined,
                                        great2: this.great2 || undefined,
                                        affirm1: this.affirm1 || undefined,
                                        affirm2: this.affirm2 || undefined,
                                        highlights1: this.highlights1 || undefined,
                                        highlights2: this.highlights2 || undefined,
                                        learn1: this.learn1 || undefined,
                                        learn2: this.learn2 || undefined,
                                    };
                        axios
                            .request({
                            url: this.apiUrl+"/journal",
                            method: "PATCH",
                            data: updateData,
                            headers: {
                                token: this.token,
                            },
                            }).then(() => {
                                location.reload()
                            }).catch(() => {
                                this.result = "Error"
                            });
                },
                delete_entry(){
                    this.token = cookies.get(`token`);
                    axios.request({
                        url: this.apiUrl+"/journal",
                        method:"DELETE",
                        headers:{
                            token :this.token,
                        },
                        data:{
                            entryID: this.entryID
                        }
                    }).then(()=>{
                        location.reload()
                    }).catch(()=>{
                        if (!this.entryID) {
                            this.result = "Please enter this entry's ID.";
                            return;
                        }
                        this.result = "Failed to delete entry.";
                    })
                },
            },
                mounted(){
                    this.get_user_entries();
                }
    };
</script>

<style scoped>
.morning{
    background-color: rgba(245, 245, 220, 0.354);
    padding: 20px;
    border-radius: 10px;
}
.night{
    background-color: rgba(0, 102, 255, 0.116);
    padding: 20px;
    border-radius: 10px;
}
.pic{
    height: 80px;
}
.btn{
    background-color: rgba(0, 255, 38, 0.251) !important;
    color: white;
    margin: 20px;
}
.cancel{
    background-color: rgba(0, 132, 255, 0.299) !important;
    color: white;
    margin: 20px;
}

.delete{
    background-color: rgba(215, 89, 97, 0.361) !important;
    color: white;
    margin: 20px;
}
.v-card {
    background-color: rgba(0, 166, 255, 0.089);
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
}
.v-card__title {
    font-size: 20px;
    color: #4d7f8a;
}
.am{
    background-color: rgba(132, 203, 218, 0.231);
}
.pm{
    background-color: rgba(8, 60, 202, 0.17);
}
.date{
    margin-left: 34%;
}

@media screen and (max-width: 899px) and (min-width: 600px){
    .cloudImg{
        height: 170px;
        margin-left: -20%;
    }
    .date{
        margin-left: 41%;
    }
}
</style>