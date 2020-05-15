<template>
  <main class="Landing">
    <div class="content">
      <h1> مشروع اتحاد ملاك ابراج مملوك</h1>
      <router-link class="v-btn btn" :to="{name: 'Financial'}">
        تفاصيل مالية
      </router-link>
      <router-link class="v-btn btn" :to="{name: 'Technical'}">
        تفاصيل فنية
      </router-link>
    </div>
  </main>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import '../assets/style/conf';

.Landing {
  width: 100%;
  height: 100%;
  background-image: url('../assets/img/1.jpeg');
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  position: relative;
  user-select: none;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba($color: $prim, $alpha: .2);
  }

  .content {
    color: #FFF;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    margin: auto;
    position: relative;
    top: 30%;
    z-index: 10;

    h1 {
      margin-bottom: 30px;
    }

    .v-btn {
      margin: 20px;
      background: $sec !important;
      color: #FFF;
      font-size: 22px;
      height: 55px !important;
      width: 250px !important;
    }
  }
}
</style>