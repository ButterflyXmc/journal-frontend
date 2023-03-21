<template>
    <div>
        <v-app-bar app color='#4d7f8a'>
                <img src="@/assets/cl.png" alt="clouds">
                <v-spacer></v-spacer>
                <div class="links"><UserLogout></UserLogout></div>
                <router-link class="links" to="/">Home</router-link>
                <router-link class="links" to="/journal">Your Journal</router-link>
                <router-link class="links" to="/contact">Contact Us</router-link>
        </v-app-bar>

            <div class="currentContent" v-for="u in users" :key="u.id">
                <h2>First Name : {{ u.firstname }}</h2>
                <h4>Last Name : {{ u.lastname }}</h4>
                <h3>Username : {{ u.username }}</h3>
                <h4>Email : {{ u.email }}</h4>
                <h4>created_at : {{ u.created_at }}</h4>
            </div>

                <v-btn @click="editUser = true">Edit</v-btn>

                    <div v-if="editUser">
                        <v-text-field v-model="firstName" label="First Name"></v-text-field>
                        <v-text-field v-model="lastName" label="Last Name"></v-text-field>
                        <v-text-field v-model="username" label="Username"></v-text-field>
                        <v-text-field v-model="email" label="Email"></v-text-field>
                        <v-btn @click="updateProfile">Save</v-btn>
                        <v-btn @click="cancelEdit">Cancel</v-btn>
                    </div>
                    <div><v-btn @click="delete_acct">Delete Account</v-btn></div>
                    <div v-if="response">{{ response }}</div>

    </div>
</template>

<script>
import UserLogout from '@/components/UserLogout.vue'

import axios from "axios";
import cookies from "vue-cookies";
import router from '@/router';

export default {
    name: "SeeProfile",
    components:{
        UserLogout
    },
        data() {
            return {
            users: [],
            token: "",
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            created_at: "", 
            response: "",
            editUser : false,
            };
        },
        methods: {
                    getUser() {
                        this.token = cookies.get(`token`);
                    axios
                        .request({
                        url: "http://127.0.0.1:5000/api/user",
                        method: "GET",
                        headers: {
                            token: this.token,
                        },
                        }).then((response) => {
                        this.users = response.data;
                        }).catch((error) => {
                        console.log(error);
                        });
                    },
                        updateProfile() {
                            this.token = cookies.get(`token`);
                        axios
                            .request({
                            url: "http://127.0.0.1:5000/api/user",
                            method: "PATCH",
                            data: {
                                firstName: this.firstName,
                                lastName: this.lastName,
                                username: this.username,
                                email: this.email,
                            },
                            headers: {
                                token: this.token,
                            },
                            }).then(() => {
                                this.response = "Account Updated successfully!";
                                // Update the user data displayed in the component
                                this.users[0].firstname = this.firstName;
                                this.users[0].lastname = this.lastName;
                                this.users[0].username = this.username;
                                this.users[0].email = this.email;
                                this.editUser = false;
                            }).catch((error) => {
                                console.log(error);
                            });
                        },
                            cancelEdit(){
                                this.editUser = false;
                            },
                                delete_acct(){
                                    this.token = cookies.get(`token`);
                                    axios
                                        .request({
                                        url: "http://127.0.0.1:5000/api/user",
                                        method: "DELETE",
                                        headers: {
                                            token: this.token,
                                        },
                                        }).then(() => {
                                        // console.log("Acct deleted");
                                        router.push('/')
                                        }).catch((error) => {
                                        console.log(error);
                                        });
                                        
                                },
                },
                        mounted() {
                            this.getUser();
                        },
};
</script>

<style scoped>
h1{
    margin-top: 20px;
}

.currentContent{
    margin-top: 10%;
}
</style>