<template>
<div>
    <header>
        <h1>THE FIVE MINUTE CLOUD JOURNAL</h1>
    </header> 

    <div class="quote"><GetQuote/></div>

        <div class="grid">
            <div class="grid-item">
                <router-link to="/signup">
                <img class="ring1" src="@/assets/reg.png" alt="signup">
                </router-link>
            </div>
            <div class="grid-item">
                <router-link to="/login">
                <img class="ring2" src="@/assets/login.png" alt="login">
                </router-link>
            </div>
        </div>      

</div>
</template>

// <script>
import GetQuote from '@/components/GetQuote.vue'


    export default {
        name:"HomePage",
        components:{
            GetQuote,
        },
    
    }
</script>

<style>
/* STYLE will be global */
html{
    text-align: center;
    background-image: url('@/assets/re.png');
    background-size: cover;
    /* will center the image within the element, regardless of its size. */
    background-position: center center;
    background-repeat: no-repeat;
    font-family: 'Poppins', sans-serif;
    height: 100%;
}

.quote{
    color: #4d7f8a;
    background-color: #9092981d;
    border: solid 1px;
    border-color: rgb(209, 192, 98);
    text-align: center;
    width: 100%;
    font-size: 1.2em;
    position: absolute;
    top: 43%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>


<style scoped>
header {
    color: #40AEC7;
    font-family: Georgia, serif;
    font-size: 2em;
    position: absolute;
    width: 10%;
    top: 20%;
    left: 38%;
    transform: translateY(-50%);
    display: flex;
    align-items: flex-start;
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 0.6fr);
    grid-column-gap: 0px;
    justify-items: center;
    margin-top: 40vh;
    grid-template-rows: 50vh; 
    grid-row-gap: 10px; 
    align-items: center;
}

.grid-item {
    width: 100%;
    height: 100%;
}

.ring1 {
    height: 123%;
    /* width: auto; */
}

.ring2 {
    height: 123%;
    /* width: auto; */
}
</style>