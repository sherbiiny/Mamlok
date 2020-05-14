<template>
  <nav class="Navbar">
    <v-app-bar class="app-bar" height="70px">
      <router-link class="brand" router :to='{name: "Landing"}'>ابراج مملوك</router-link>
      <v-list class="list d-flex transparent">
        <v-list-item v-for="link in links" :key="link.name">
          <router-link :to='link.to'>
            <v-icon>{{ link.icon }}</v-icon>
            {{ link.name }}
          </router-link>
        </v-list-item>
      </v-list>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {name: 'تفاصيل مالية', icon: 'fa fa-money', to: {name: 'Financial'}},
        {name: 'تفاصيل فنية', icon: 'fa fa-building', to: {name: 'Technical'}},
        {name: 'تواصل معنا', icon: 'fa fa-phone', to: ''},
        {name: 'من نحن', icon: 'fa fa-user', to: ''},
      ]
    }
  },
}
</script>

<style lang="scss">
@import '../assets/style/conf';

.Navbar {
  
  .app-bar {
    background: $prim !important;

    .brand {
      color: #FFF;
      margin-right: 100px;
      font-size: 26px;
    }

    .list {
      width: 700px;
      margin: auto;


      a {
        color: #FFF;
        transition: .3s;

        i {
          color: #FFF;
          margin-left: 10px;
          font-size: 16px;
        }

        &:hover {
          color: $sec;

          i {
            color: $sec
          }
        }
      }
    }
  }
}
</style>