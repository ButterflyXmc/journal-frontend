<template>
    <div>
        <v-app-bar app color= #4d7f8a>
            <v-tool-bar-title>
                <img class="journal" src="@/assets/cl.png" alt="clouds">
            </v-tool-bar-title>
                <v-spacer></v-spacer>
                <router-link class="links" to="/contact"> Contact Us</router-link>
                <router-link class="links" to="/login">Login</router-link>
                <router-link  class="links" to="/signup">Sign up</router-link>
        </v-app-bar>

            <section class="home">
                <div class=" content">
                    <div class="bc">
                        <h3>THE FIVE MINUTE JOURNAL</h3>
                            <span>Journal in clouds</span>
                                <p>
                                    Welcome to our Five Minute Journal, where you can journal in the clouds 
                                    and manifest your life. As you write your thoughts and ideas, watch them 
                                    shift and change like the clouds in the sky. Embrace the life and find beauty in the journey.
                                </p>
                                <p>Our journal is designed to help you cultivate a positive mindset, 
                                    build self-awareness, and develop a sense of gratitude. With just 
                                    five minutes a day, you can transform your life and create a 
                                    brighter future.</p>
                    </div>
                </div> 

                <div class="grid-item">
                    <h4 class="h4">START JOURNALING TODAY!</h4>
                        <router-link to="/signup">
                            <img class="ring1" src="@/assets/reg.png" alt="signup">
                        </router-link>
                    <h4 class="h4">WELCOME BACK!</h4>
                        <router-link to="/login">
                            <img class="ring2" src="@/assets/login.png" alt="login">
                        </router-link>
                </div>
            </section>
    </div>
</template>

<script>
    export default {
        name:"HomePage",
    }
</script>

<style>
/* STYLE will be global */
html{
    font-family: Tahoma, Verdana, sans-serif;
    text-align: center;
}
</style>

<style scoped>
.journal{
    margin-top: 14%;
    height: 400px;
}

section{
    padding: 2rem 9%;
}

.home{
    display: flex;
    align-items: center;
    min-height: 100vh;
    background: url('@/assets/clouds.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.home .content {
    max-width: 80rem;
}

.home .content h3{
    font-size: 7rem;
    color: rgba(15, 45, 62, 0.433);
}

.home .content span{
    font-size: 3.5rem;
    color: rgba(195, 172, 44, 0.652);
    padding: 1rem 0;
    line-height: 1.5;
    font-family: Snell Roundhand, cursive;
}

.home .content p{
    font-size: 2rem;
    color: rgb(111, 111, 90);
    padding: 1rem 0;
    line-height: 1.5;
    /* font-family: Snell Roundhand, cursive; */
    
}

img{
    height: 250px;
    padding: 10px;
}

.bc{
    background-color: rgba(50, 78, 94, 0.118);
    /* border: solid 6px rgba(62, 128, 166, 0.329); */
    border-radius: 80px;
    padding: 20px;
    margin: 20px;
}

.links{
    padding: 2px;
}

.grid-item{
    background-color: rgba(50, 78, 94, 0.118);
    height: 800px;
    padding-bottom: 5%;
    padding-top: 7%;
    padding-left: 6%;
    padding-right: 5%;
    border: solid 6px rgba(62, 128, 166, 0.329);
    border-radius: 90px;
    /* margin: 20px; */
}

.h4{
    color: rgba(166, 133, 62, 0.623);
    text-align: center;
    font-size: 1.5em;
}
</style>