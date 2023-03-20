<template>
    <div>
        <v-app-bar app color= #4d7f8a>
            <v-tool-bar-title>
                <img src="@/assets/cl.png" alt="clouds">
            </v-tool-bar-title>
            <v-spacer></v-spacer>
            <router-link class="links" to="/">Home</router-link>
            <router-link class="links" to="/login">Login</router-link>
            <router-link  class="links" to="/signup">Sign up</router-link>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "ContactUs"
    }
</script>

<style scoped>
.links{
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
</style>