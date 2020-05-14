<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import $ from 'jquery'
import niceScroll from 'jquery.nicescroll'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {Navbar},

  mounted() {
    $('html').niceScroll({
      cursorborder: 'none',
      cursorcolor: '#2c1c94'
    })

    $('a').click(() => $("html").getNiceScroll().resize())
  },
};
</script>

<style lang="scss">
@import './assets/style/conf';
</style>
