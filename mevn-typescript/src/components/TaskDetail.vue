!<template>

        <form v-if="(loading != false)"  @submit.prevent=""  class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">

<!-- <div  class="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800 mb-5" role="alert">
    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">Success alert!</span> The task was created 💪
    </div>
</div> -->
<div v-if="error" class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 mb-5" role="alert">
    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">Danger alert!</span> Problem edit the task 😢
    </div>
</div>

    <div class="flex flex-row justify-between items-center">
        <div>
            <h1 class="text-3xl font-medium">Edit task </h1>
        </div>
        <div class="inline-flex space-x-2 items-center">
            <button  @click="updateTask()" class="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center text-indigo-200 hover:text-white bg-indigo-600 hover:bg-indigo-500">
         
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                </svg>

            
                  <span class="text-sm font-medium hidden md:block">Apply</span>                     
            </button>
            <router-link to="/task"  href="#" class="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg> 
                  <span class="text-sm hidden md:block">List</span>                    
            </router-link>

        </div>
    </div>
    <p class="text-slate-500">You can edit the title and description of your task</p>

    <div id="tasks" class="my-5">
        <hr>
        <div class="my-5">
          <label for="default-input" class="block mb-0 text-sm font-medium text-gray-900 dark:text-black">Title</label>
          <input  v-model="task.title" type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
      </div>
      <div class="my-5">
          <label for="default-input" class="block mb-0 text-sm font-medium text-gray-900 dark:text-black">Description</label>
          <textarea  v-model="task.description" type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required> </textarea>
      </div>
    </div>
        <hr>
    <p class="text-xs text-slate-500 text-center my-5">Create many tasks as you like 😎✍🤙</p>
    



  </form>
  <div v-if="(loading != true)" class="flex justify-center align-middle">
    <div role="status">
    <svg class="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-200 fill-indigo-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
<span class="sr-only">Loading...</span>
</div>

  

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskService from "../../services/TaskService";

export default defineComponent({
    setup () {
    
        return {}
    },

    data() {
        return {
            task: {
                title: '',
                description: ''
            },
            loading: true,
            error : false
        }
    },
    mounted() {
        const id = this.$route.params.id
        this.loading = true;
        TaskService.getTaskDTO(id.toString()).then((response) => {
            this.task = response;
            this.loading = true;
        });
    },

    methods: {
        updateTask() {
            const id = this.$route.params.id
            TaskService.updateTask(id.toString(), this.task).then((response) => {
                this.loading = false;
                this.$router.push('/task')
            })
            .catch((error) => {
                this.error = true;
                console.log(error)
            })
        }
    }
})
</script>

<style scoped>

</style>