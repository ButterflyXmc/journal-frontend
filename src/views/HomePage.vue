<template>
    <div>
        <v-app-bar app color= #4d7f8a>
            <v-tool-bar-title>
                <img class="cloudpic" src="@/assets/cl.png" alt="clouds">
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
                                    Welcome to our Five Minute Journal, an uplifting space where you can write 
                                    in the clouds and bring your dreams to life. Let each moment be a canvas 
                                    for your imagination, and every page a reflection of your innermost thoughts.
                                </p>
                                <p>Our journal is more than just a notebook. It's a powerful tool to help you cultivate 
                                    a positive mindset, enhance your self-awareness, and nurture gratitude in your life. 
                                    By taking just five minutes a day to reflect, you can transform your life and create 
                                    a brighter future.</p>

                                <p>Join us on this journey of self-discovery and personal growth. Embrace every moment, 
                                    find beauty in the journey, and let our Five Minute Journal be your guide. Together, 
                                    let's create a life filled with purpose, joy, and abundance.</p>
                    </div>
                </div> 

                <div class="grid-item">
                        <router-link class="rl" to="/signup">
                            <h4 class="h4">START JOURNALING TODAY!</h4>
                                <img class="ring1" src="@/assets/reg.png" alt="signup">
                        </router-link>

                        <router-link  class="rl" to="/login">
                            <h4 class="h4">WELCOME BACK!</h4>
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
.cloudpic {
    margin-top: 14%;
    height: 400px;
}

section {
    padding: 2rem 9%;
}

.home {
    /* display: flex; */
    align-items: center;
    min-height: 100vh;
    background: url('@/assets/clouds.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.home .content {
    max-width: 100%;
}

.home .content h3 {
    font-size: 7rem;
    color: rgba(15, 45, 62, 0.433);
}

.home .content span {
    font-size: 3.5rem;
    color: rgb(191, 169, 48);
    padding: 1rem 0;
    line-height: 1.5;
    font-family: Snell Roundhand, cursive;
}

.home .content p {
    font-size: 2rem;
    color: rgb(111, 111, 90);
    padding: 1rem 0;
    line-height: 1.5;
    /* font-family: Snell Roundhand, cursive; */
}

img {
    height: 250px;
    padding: 10px;
}

.bc {
    background-color: rgba(50, 78, 94, 0.118);
    border: solid 6px rgba(62, 128, 166, 0.1);
    /* border: solid 6px rgba(62, 128, 166, 0.329); */
    border-radius: 50px;
    padding: 50px;
    margin: 20px;
}

.links {
    padding: 9px;
}

.grid-item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    background-color: rgba(50, 78, 94, 0.118);
    height: 800px;
    padding-bottom: 5%;
    padding-top: 7%;
    padding-left: 6%;
    padding-right: 5%;
    border: solid 6px rgba(62, 128, 166, 0.1);
    border-radius: 90px;
    margin-top: 10%;
}
.ring1, .ring2 {
    max-width: 100%;
    height: auto;
    margin-top: 10%;
}
.h4 {
    color: rgb(25, 102, 102);   
    padding: 10px;
    background-color: rgba(138, 187, 201, 0.281);
    border-radius: 20px;
    text-align: center;
    font-size: 2rem;
    text-decoration:aquamarine
}

.rl{
    text-decoration: none;
}

@media screen and (max-width: 899px) and (min-width: 600px) {
    .cloudpic{
        height: 150px;
    }

    section {
        padding: 1px;
    } 

    .home .content h3 {
        font-size: 3.2em;
    }

    .home .content span {
        font-size: 3rem;
    }

    .home .content p {
        font-size: 1.5rem;
    }

    img {
        height: 200px;
    }

    .grid-item {
        height: 450px;
        padding-left: 4%;
        padding-right: 4%;
    }
    .h4{
        font-size: 1rem;
    }
}

@media screen and (max-width: 600px) and (min-width: 390px) {
    .cloudpic {
        margin-top: 8%;
        height: 10vh;
    }
    section {
        padding: 1px;
    }       
    .home .content h3 {
        font-size: 2rem;
    }

    .home .content span {
        font-size: 2.3rem;
    }

    .home .content p {
        font-size: 0.8rem;
        padding: 0.5rem 0;
    }
    .h4{
        font-size: 0.6rem;
    }
    .grid-item {
        height: 250px;
        padding-left: 4%;
        padding-right: 4%;
    }
    
    .ring1, .ring2 {
        max-width: 100%;
    }
}
</style>