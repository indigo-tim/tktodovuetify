<template>
  <div class="tt-home-view">
    <v-toolbar class="tt-home-view__toolbar" color="indigo">
      <v-container pa-0>
        <v-layout flex align-center>
          <v-flex xs6>
            <v-layout>
              <h3 class="white--text">Create a Todo</h3>
            </v-layout>
          </v-flex>
          <v-flex xs6>
            <v-layout flex justify-end>
              <v-btn small fab color="cyan" :grow="false" @click="showCreate = !showCreate">
                <v-icon>add</v-icon>
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-toolbar>
    <Todo @delete="handleDelete" v-for="(todo, index) in todos" :key="index" :todo="todo"/>
    <v-dialog v-model="showCreate" max-width="500px">
      <v-card class="tt-home-view__create-dialog">
        <div class="pa-5">
          <h3>Type in your Todo</h3>
          <v-text-field class="tt-home-view__create-dialog__input" v-model="newTodoName" @keyup.enter.native="createTodo()" label="Todo Name" my-5></v-text-field>
          <v-layout flex justify-end>
          <v-btn color="success" :grow="false" :loading="isCreating" @click="createTodo()">
            Create
          </v-btn>
          </v-layout>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Todo from "@/components/Todo";
import { mapState } from "vuex";
import { CREATE_TODO, DELETE_TODO } from "@/api-service";

export default {
  components: {
    Todo
  },
  methods: {
    createTodo() {
      this.isCreating = true;
      CREATE_TODO(this.newTodoName)
      .then((response)=>{
        this.$store.commit('addTodo', response.data);
        this.showCreate = false;
      }).catch((error)=>{
        this.createError = true;
        console.log(error);
      })
    },
    handleDelete(id) {
      this.$store.commit('isDeleting', id);
      DELETE_TODO(id).then((response) => {
        this.$store.commit('isNotDeleting', id);
      }).catch((err) => {
        console.log(err);
      }) 
    }
  },

  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },
  watch: {
    showCreate(val) {
      this.newTodoName = "";
      this.isCreating = false;
      this.createError = false;
      console.log(document.querySelector(".tt-home-view__create-dialog__input input"))
      if(val) {
        const element = this.$el.querySelector('.tt-home-view__create-dialog__input input')
        if (element) this.$nextTick(() => { element.focus()})
      }
    }
  },
  data() {
    return {
      showCreate: false,
      showDelete: false,
      showEdit: false,
      newTodoName: "",
      createError: false,
      isCreating: false
    };
  }
};
</script>

<style lang="scss">

</style>
