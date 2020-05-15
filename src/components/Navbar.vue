<template>
  <nav class="Navbar">
    <v-app-bar class="app-bar" height="70px">
      <router-link class="brand" router :to='{name: "Landing"}'>ابراج مملوك</router-link>
      <v-app-bar-nav-icon color="#FFF" class="d-none bars" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-list class="list transparent">
        <v-list-item v-for="link in links" :key="link.name" router>
          <router-link :to='link.to'>
            <v-icon>{{ link.icon }}</v-icon>
            {{ link.name }}
          </router-link>
        </v-list-item>
      </v-list>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app right>
      <v-list class="drawer-list">
        <v-list-item v-for="link in links" :key="link.name" router :to="link.to">
          <v-list-item-icon right>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <div>
            {{ link.name }}
          </div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {name: 'تفاصيل مالية', icon: 'fa fa-money', to: {name: 'Financial'}},
        {name: 'تفاصيل فنية', icon: 'fa fa-building', to: {name: 'Technical'}},
        {name: 'تواصل معنا', icon: 'fa fa-phone', to: '/contant'},
        {name: 'من نحن', icon: 'fa fa-user', to: '/about'},
      ],

      drawer: false
    }
  },

  mounted() {
    $(window).resize(() => {
      if(window.innerWidth > 960) this.drawer = false
    })
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
      display: flex;


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

  .v-navigation-drawer {
    background: $prim !important;
    z-index: 15;

    .drawer-list {
      margin-top: 50px;

      .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
        color:  #FFF !important;
      }
      
      a {
        margin: 20px;
        color: #FFF !important;

        i {
          color: #FFF;
          margin-left: 10px;
        }
      }
    }
  }

}

@media screen and (max-width: 960px) {
  .Navbar {

    .brand {
      margin-right: 20px !important;
    }

    .app-bar {

      .bars {
        display: block !important;
        position: absolute;
        left: 50px
      }

      .list {
        display: none !important;
      }
    }
  }
}
</style>