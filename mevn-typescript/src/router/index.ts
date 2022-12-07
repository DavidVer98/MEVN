import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'
import TaskDetail from '../components/TaskDetail.vue'
// import NavBar from '../components/NavBar.vue'
import prueba from '../components/PruebasComp.vue'

const routes : RouteRecordRaw[] = [
    { path: '/',alias: "/task" ,name: 'TaskList', component: TaskList },
    { path: '/task/new', name: 'TaskForm', component: TaskForm },
    { path: '/task/:id', name: 'TaskDetail', component: TaskDetail },
    { path: '/pruebas', name: 'Pruebas', component: prueba },
   
  ]

 const router =  createRouter({
    history: createWebHistory(), // createWebHashHistory() for hash mode
    routes, // short for `routes: routes`
    })

export default router