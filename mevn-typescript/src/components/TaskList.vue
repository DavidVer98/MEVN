!
<template>
  <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">

    <div v-if="error" class="flex p-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 mb-5" role="alert">
        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">Danger alert!</span> Opps.. problem get the list of the taks 😢
        </div>
    </div>

        <div class="flex flex-row justify-between items-center">
            <div>
                <h1 class="text-3xl font-medium">Tasks list</h1>
            </div>
            <div class="inline-flex space-x-2 items-center">
                <router-link to="/task/new" class="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center text-indigo-200 hover:text-white bg-indigo-600 hover:bg-indigo-500">
                
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4">
                      </path></svg>
                      <span class="text-sm font-medium hidden md:block">Add</span>                     
                </router-link>
                <!-- <a href="#" class="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg> 
                      <span class="text-sm hidden md:block">Latest</span>                    
                </a> -->
            </div>
        </div>
        <p class="text-slate-500">Hello, here are your latest tasks</p>

        <div id="tasks" class="my-5">
          <div v-for="item in tasks" :key="item._id"  class="grid grid-cols-1  grid-flow-row ">
          <div @click="accordion(item._id)" class="cursor-pointer inline-flex p-5 text-center bg-white row-start-1 row-end-1  border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
              <div class="inline-flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-slate-500 hover:text-indigo-600 hover:cursor-pointer">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg> 
              <div class="text-gray-800">{{item.title}}</div>
          </div>
          </div>
          <div class=" p-5 text-center bg-white col-start-2 col-end-4 border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent">
              <div class="inline-flex"> 
                <router-link :to="{path:`/task/${item._id}`, params:{} } " >
                    <svg  class="w-4 h-4 mx-2 text-slate-500 hover:text-purple-800 hover:cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                </router-link>

                  <svg  @click="deleteTask(item._id)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>                      
                </div>
          </div>
          <div v-if="(idAccordion === item._id)" :class="isOpen ? 'd-block' : 'hidden ' "   class="p-5  bg-white col-start-1 col-end-4 ">
            <ul>
              <li>
                <span class="text-slate-800">Descripción: </span> 
                <span class="text-slate-400">{{item.description}}</span>
              </li>
              <li>
                <span class="text-slate-800">Fecha: </span> 
                <span class="text-slate-400">{{ filterformatDate(new Date (item.date))  }}</span>
                </li>
            </ul>
            </div>
          </div>
      </div>
  
        <p class="text-xs text-slate-500 text-center">Last updated {{minutos}} minutes ago</p>
    </div>
    
</template>

<script lang="ts">

import { defineComponent } from "vue";
import TaskService from '../../services/TaskService';
import {Task} from 'src/interfaces/Task';
import moment from 'moment';

export default defineComponent({
  name: "TasksList",
  setup() {
    return {};
  },
  data() {
    return {
      tasks: [] as Task[],
      newTask:[] as Task[],
      // idTaskDelete : String
      dateUpdate: new Date(),
      minutos: 0,
      error: false,
      idAccordion : '',
      isOpen: false,
    };
  },

  // watch: {
  //   tasks: {
  //     handler: function (idTaskDelete) {
  //       if(this.tasks.filter((task) => task._id !== idTaskDelete))
  //       {
  //         this.tasks = this.tasks.filter((task) => task._id !== idTaskDelete);
  //       }
      
  //     },
  //     deep: true,
  //   },
  // },
  mounted() {
    TaskService.getTasks().then((response) => {
      this.tasks = response;
      console.log(response);
      var utc_a = new Date(this.tasks[this.tasks.length-1].date);
      var utc_b = new Date(this.dateUpdate.toUTCString());
      let diff = Math.abs(utc_b.getMinutes()  - utc_a.getMinutes() );
      console.log(utc_a.getMinutes() , utc_b.getMinutes());
      console.log(diff)
      this.minutos = diff;
      this.tasks.forEach(task => {
        console.log("--------->",new Date(task.date).getHours(), new Date(task.date).getMinutes(), new Date(task.date).getSeconds())  
      })
    }).catch((error) => {
      console.log(error);
    });
  },
  methods: {
    deleteTask(id: any) {
      TaskService.deleteTask(id).then((response) => {
        this.tasks = this.tasks.filter((task) => task._id !== response._id);
      }).catch((error) => {
        console.log(error);
      });
    },
    accordion(_id: any) {
            this.isOpen = !this.isOpen
           this.idAccordion = _id
        },
        filterformatDate(date: any) {
    return moment(date).format("DD/MM/YYYY HH:mm:ss");
  },
  },

  },
);
</script>

<style scoped></style>
