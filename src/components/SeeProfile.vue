<template>
    <div>
        <v-app-bar app color='#4d7f8a'>
                <img src="@/assets/cl.png" alt="clouds">
                <v-spacer></v-spacer>
                <router-link class="links" to="/journal">Your Journal</router-link>
                <div class="links"><UserLogout></UserLogout></div>
                <router-link class="links" to="/contact">Contact Us</router-link>
        </v-app-bar>

    <div class="card-container">
        <div class="card">
            <div class="card-header">
                <h2>Profile Information</h2>
                <v-btn class="btn" @click="editUser = true">Edit</v-btn>
            </div>

            <div class="card-body">
                <div v-for="u in users" :key="u.id">
                    <h2>First Name : {{ u.firstname }}</h2>
                    <h4>Last Name : {{ u.lastname }}</h4>
                    <h3>Username : {{ u.username }}</h3>
                    <h4>Email : {{ u.email }}</h4>
                    <h4>created_at : {{ u.created_at }}</h4>
                </div>
            </div>

            <div class="card-footer">
                <div><v-btn class="dbtn" @click="delete_acct">Delete Account</v-btn></div>
                <div v-if="response">{{ response }}</div>
            </div>

            <div v-if="editUser" class="card-edit">
                <v-text-field v-model="firstName" label="First Name"></v-text-field>
                <v-text-field v-model="lastName" label="Last Name"></v-text-field>
                <v-text-field v-model="username" label="Username"></v-text-field>
                <v-text-field v-model="email" label="Email"></v-text-field>
                <v-btn class="btn" @click="updateProfile">Save</v-btn>
                <v-btn class="btn" @click="cancelEdit">Cancel</v-btn>
            </div>
        </div>
    </div>

                

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


.card-container {
    display: flex;
    justify-content: center;
    margin-top: 10%;
}

.card {
    width: 50%;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #4a8ccf4b;
}

.card-header h2 {
    margin: 0;
    font-family:fantasy;
    color: rgb(63, 63, 144);
}

.card-body {
    padding: 20px;
}

.card-footer {
    display: flex;
    /* align-items: center; */
    padding: 10px;
    border-top: 1px solid #ccc;
}

.card-edit {
    padding: 10px;
    background-color: #6ba5de3d;
}

.btn{
    background-color: rgba(116, 212, 222, 0.624) !important
}

.card-edit .btn {
    margin-right: 10px;
}

.dbtn{
    background-color: rgba(236, 53, 53, 0.195) !important
}

.btn, .dbtn{
    position: relative;
    text-decoration: none;
    color: white;
    font-size: 18px;
    box-shadow: 10px 10px 18px #7d53e665;
    
}

.btn:before,
.btn:after{
    content: "";
    position: absolute;
    height: 5px;
    width: 0;
    background-color: rgb(32, 153, 228);
    transition: 0.5s;
}
.dbtn:before,
.dbtn:after{
    content: "";
    position: absolute;
    height: 5px;
    width: 0;
    background-color: rgba(204, 39, 42, 0.781);
    transition: 0.5s;
}

.dbtn:after{
    left: 0;
    bottom: -10px;
}
.btn:after{
    left: 0;
    bottom: -10px;
}

.dbtn:hover:after,
.dbtn:hover:before{
    width: 100%
}
.btn:hover:after,
.btn:hover:before{
    width: 100%
}
</style>