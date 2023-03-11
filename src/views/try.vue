<template>
<div class="journal">
    <div class="journal-cover"></div>
        <div class="journal-pages">
        <div class="page page1">
            <h1>HOME PAGE</h1>
            <section><GetQuote/></section>
        </div>
        <div class="page page2"></div>
    </div>
</div>

</template>

<script>
import GetQuote from '@/components/GetQuote.vue'


    export default {
        name:"HomePage",
        components:{
            GetQuote,
        },
    
    }
</script>

<style>
/* JUST STYLE will be global */
html{
    text-align: center;
    
}
</style>

<style scoped>
/* STYLE SCOOPED is limited to ONLY this file */
.journal {
  position: relative;
  width: 300px;
  height: 400px;
  margin: 50px auto;
  perspective: 800px;
}

.journal-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #b5ddf7;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  transition: transform 1s;
  transform-origin: left;
}

.journal:hover .journal-cover {
  transform: rotateY(-90deg);
}

.journal-pages {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #b599ecbd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.013);
  backface-visibility: hidden;
  animation: zoom-in 2.0s ease-in-out backwards;
}

.page1 {
  transform: rotateY(0deg) translateZ(1px);
}

.page2 {
  transform: rotateY(-180deg) translateZ(1px);
}

@keyframes zoom-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>