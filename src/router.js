import Vue from 'vue'
import VueRouter from 'vue-router'

import TodoList from './TodoList'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '', redirect: '/todos'},
    { path: '/todos', component: TodoList },
    // { path: '/todos/add', component: AddTodoItem}
  ]
})

export default router
