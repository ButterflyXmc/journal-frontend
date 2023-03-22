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
                <div class=" content">
                    <div class="bc">
                        <h3>THE FIVE MINUTE JOURNAL</h3>
                            <span>Journal in clouds</span>
                                <p>Journal in clouds and manifest your life. With our Five Minute Journal, 
                                    you can embrace the fluidity of both clouds and life, and find beauty 
                                    in the journey. Capture your thoughts and ideas in the clouds, and 
                                    let them inspire you to create the life you want.</p>
                                <p>
                                    Welcome to our Five Minute Journal, where you can journal in the clouds 
                                    and manifest your life. As you write your thoughts and ideas, watch them 
                                    shift and change like the clouds in the sky. Embrace the fluidity of both 
                                    clouds and life, and find beauty in the journey.
                                </p>

                                <p>
                                    With our journal, you have the opportunity to reflect on your past, 
                                    focus on your present, and visualize your future. Use the power of the 
                                    clouds to manifest your dreams and goals, and make them a reality.
                                </p>

                                <p>Our journal is designed to help you cultivate a positive mindset, 
                                    build self-awareness, and develop a sense of gratitude. With just 
                                    five minutes a day, you can transform your life and create a 
                                    brighter future.</p>
                                
                                <p>
                                    So start journaling in the clouds today, and let your thoughts soar 
                                    like the birds in the sky. The possibilities are endless.
                                </p>
                    </div>
                </div> 

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