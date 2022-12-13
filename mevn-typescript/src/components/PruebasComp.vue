<template>
    <div class="container mx-auto">
        <div class="p-5">
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
            <svg class="w-4 h-4 mx-2 text-slate-500 hover:text-purple-800 hover:cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
                <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>                      
            </div>
    </div>
    <div v-if="(idAccordion === item._id)" :class="isOpen ? 'd-block' : 'hidden ' "   class=" p-5 text-center bg-white col-start-1 col-end-4 ">{{item.description}}</div>
    </div>
</div>

    </div>



    <div class="border border-blue-100 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    
    <div class="flex-1 space-y-6 py-1">

      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-3 bg-slate-300 rounded col-span-2"></div>
          <div class="h-4 bg-slate-300 rounded col-span-1"></div>
          <div class="h-2 bg-slate-300 rounded"></div>
        </div>
        <br>
        <div class="h-2 bg-slate-300 rounded"></div>
        <hr>
        <div class="h-2 bg-slate-300 rounded"></div>
        <hr>
        <div class="h-2 bg-slate-300 rounded"></div>
      </div>
    </div>
  </div>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        return {}
    },
    data() {
        return {

            isOpen: false,
            idAccordion : '',
            // eslint-disable-next-line no-undef
            // eslint-disable-next-line no-undef
tasks: [{
_id: '1',
title: 'Task One',
description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
date: '2021-01-01'
},
{
_id: '2',
title: 'Task Two',
description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
date: '2021-01-01'
},
{
_id: '3',
title: 'Task Three',
description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
date: '2021-01-01'
}]
        }
    },
    methods: {
        accordion(_id: string) {
            this.isOpen = !this.isOpen
           this.idAccordion = _id
        }
    }
})
</script>

<style scoped>

</style>