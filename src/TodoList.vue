<template lang="pug">
ion-page
  ion-header
    ion-toolbar.toolbar-md-primary
      ion-title TodoList
  ion-list
    ion-item(v-for="todo in todos" :key="todo.id")
      | {{todo.name}}
  ion-fab-button.todo-fab(@click='addTodo')
    ion-icon(name='add')
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: []
    }
  },
  methods: {
    addTodo() {
      this.$router.push({path: '/todos/add'})
    }
  },
  created() {
    axios.get('http://localhost:3002/todos')
      .then(res => this.todos = res.data)
  }
}
</script>

<style>
.todo-fab {
  position: fixed;
  bottom: 25px;
  right: 15px;
  font-size: 30px;
}

.content {
  padding: 10px 10px 10px 0px
}
</style>
