<template>
  <v-app class="tt-app">
    <v-container :justify-center="true" :d-flex="true">
      <v-card class="tt-app__main-card">
        <v-toolbar>
          <h1>Tim's Todos</h1>
         
     
        </v-toolbar>
        <div class="tt-app__router-main">
          <router-view></router-view>
        </div>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import { GET_TODOS } from '@/api-service';


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    GET_TODOS()
    .then((response)=>{
      response.data.forEach((item) => {
        item.isDeleting = false;
      });
      this.$store.commit('setTodos', response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style lang="scss">
  .tt-app {
    background-color: rgb(84, 136, 231) !important;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    &__main-card {
      max-width: 800px;
    }
    &__main-router {
      max-height: 100%;
      overflow-y: auto;
    }
  }
</style>
