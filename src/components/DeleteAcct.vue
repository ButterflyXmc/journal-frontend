<template>
    <div>
        <v-app-bar app color= #4d7f8a>
            <v-tool-bar-title>
                <img class="cloudImg" src="@/assets/cl.png" alt="clouds">
            </v-tool-bar-title>
            <v-spacer></v-spacer>
            <router-link class="links" to="/logout">Log Out</router-link>
            <router-link class="links" to="/contact">Contact Us</router-link>
        </v-app-bar>
<br>
<br>
<br>
<br>
<br>
<br>
            <div class="main">
                <div class="section">
                <h2>We're sorry to see you go, but if you're sure you want to delete your account, 
                    all your data will be permanently deleted from our system. Remember, your journals
                    were securely stored in the clouds, but they will disappear forever if you proceed 
                    with deleting your account. Thank you for journaling in the clouds with us.</h2>
            </div>

            <div class="section">
                <h2>Click the button below to permanently delete your account</h2>
                <v-btn class="btn" @click="delete_acct">Delete Account</v-btn>
                            <div v-if="response">{{ response }}</div>
            </div>
            </div>
            
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
// import router from '@/router';

    export default {
        name: "DeleteAcct",
        data() {
            return {
                response: null
            }
        },
        methods:{
            delete_acct(){
                      this.token = cookies.get(`token`);
                      axios
                          .request({
                          url: "https://mchavda.com/api/user",
                          method: "DELETE",
                          headers: {
                              token: this.token,
                          },
                          }).then(() => {
                          // console.log("Acct deleted");
                          this.response = "Account was deleted Succesfully"
                          }).catch(() => {
                          this.response = "An unexpected error has occured, please try again!"
                          });
            },
        }
    }
</script>

<style scoped>
.btn {
  background-color: rgba(255, 0, 0, 0.296) !important;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  margin: 10px;
}

.section {
  background-color: rgb(220, 245, 241);
  font-family: Copperplate, Papyrus, fantasy;
  padding: 40px;
  border-radius: 20px;
  max-width: 800px;
  margin: 0 auto;
  margin: 20px;
}


.main {
  display: grid;
  grid-auto-columns: 1fr;
  background-color: rgba(22, 83, 137, 0.754);
  padding: 70px;
  position: absolute;
  top: 350%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media screen and (min-width: 900px) {
  .main {
    width: 900px;
  }
}

@media screen and (max-width: 899px) and (min-width: 600px) {
  .main {
    width: 90%;
    padding: 20px;
  }
}

@media screen and (max-width: 600px) and (min-width: 390px) {
  .main {
    max-width: 900px;
    padding: 20px;
  }
  h2{
    font-size: 1em;
  }
}

</style>