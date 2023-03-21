<template>
<div>
    <v-app-bar app color= #4d7f8a>
            <v-tool-bar-title>
                <img src="@/assets/cl.png" alt="clouds">
            </v-tool-bar-title>
            <v-spacer></v-spacer>
            <div class="links"><UserLogout></UserLogout></div>
            <router-link class="links" to="/">Home</router-link>
            <router-link class="links" to="/signup">Sign Up</router-link>
            <router-link class="links" to="/contact">Contact Us</router-link>
        </v-app-bar>
    <div class="journal-options">
    <v-container class="update-form">
        <v-card>
        <v-card-title>Update Journal Entry</v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field v-model="entryId" label="Entry Id"></v-text-field>
                    <v-text-field v-model="grateful1" label="Grateful 1"></v-text-field>
                    <v-text-field v-model="grateful2" label="Grateful 2"></v-text-field>
                    <v-text-field v-model="grateful3" label="Grateful 3"></v-text-field>
                    <v-text-field v-model="great1" label="Great 1"></v-text-field>
                    <v-text-field v-model="great2" label="Great 2"></v-text-field>
                    <v-text-field v-model="affirm1" label="Affirm 1"></v-text-field>
                    <v-text-field v-model="affirm2" label="Affirm 2"></v-text-field>
                    <v-text-field v-model="highlights1" label="Highlights 1"></v-text-field>
                    <v-text-field v-model="highlights2" label="Highlights 2"></v-text-field>
                    <v-text-field v-model="learn1" label="Learn 1"></v-text-field>
                    <v-text-field v-model="learn2" label="Learn 2"></v-text-field>
                    <v-btn @click="edit_user_entry">Update Entry</v-btn>
                </v-form>
                <p>{{result}}</p>
            </v-card-text>
        </v-card>
    </v-container>

        <v-container class="delete-form">
            <v-card>
                <v-card-title>Delete Journal Entry</v-card-title> 
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="entryID" label="Entry Id"></v-text-field>
                            <v-btn @click="delete_entry">Delete Entry</v-btn>
                        </v-form>
                            <p>{{result}}</p>
                    </v-card-text>
            </v-card>
    </v-container>
</div>
</div>

    
</template> 

<script>
import axios from 'axios'
import cookies from "vue-cookies";
import router from '@/router';
import UserLogout from '@/components/UserLogout.vue'

    export default {
        name:"JournalOptions",
        components:{
            UserLogout
        },
        data() {
            return {
                token:"",
                entryID:"",
                entryId:"",
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
                result :""
            }
        },
        methods:{
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
                            url: "http://127.0.0.1:5000/api/journal",
                            method: "PATCH",
                            data: updateData,
                            headers: {
                                token: this.token,
                            },
                            }).then(() => {
                                router.push('/journal')
                            }).catch(() => {
                                this.result = "Error"
                            });
                },
                    delete_entry(){
                        this.token = cookies.get(`token`);
                        axios.request({
                            url:"http://127.0.0.1:5000/api/journal",
                            method:"DELETE",
                            headers:{
                                token :this.token,
                            },
                            data:{
                                entryID: this.entryID
                            }
                        }).then(()=>{
                            router.push('/journal');
                        }).catch((error)=>{
                            console.log(error);
                        })
                    }
        }
    }
</script>

<style scoped>
.v-card {
    background-color: rgba(0, 166, 255, 0.089);
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
	height: 700px; /* Set a fixed height for the content section */
	overflow-y: auto; 
}
.journal-options {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.update-form, .delete-form {
    flex-basis: 100%;
    max-width: 600px;
    margin: 20px;
}

img{
    height: 260px;
}

@media (min-width: 768px) {
  .update-form, .delete-form {
    flex-basis: 50%;
  }
}
</style>