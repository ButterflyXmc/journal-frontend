<template>
    <v-main>
      <router-view>
      </router-view>
    </v-main>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
/* route trasnitions */
.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active{
  transition: all 0.3s ease-out;
}

.route-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active{
  transition: all 0.3s ease-in;
}
</style>
