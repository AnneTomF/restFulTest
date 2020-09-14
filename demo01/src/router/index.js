import Vue from 'vue'
import Router from 'vue-router'
import mainindex from '@/components/mainindex.vue'    //项目进度
import ProjectProgress from '@/components/ProjectProgress.vue'   //项目进度
import HelloWorld from '@/components/HelloWorld'    //el table
import AlipayJs from '@/components/AlipayJs.vue'    //el table


Vue.use(Router)


 

export default new Router({
    routes:[
        {
            path:'/',
            name:'mainindex',
            component:mainindex
        },
        {
            path:'/mainindex',
            name:'mainindex',
            component:mainindex
        },
        {
            path:'/AlipayJs',
            name:'AlipayJs',
            component:AlipayJs
        },
        {
            path:'/ProjectProgress',
            name:'ProjectProgress',
            component:ProjectProgress
        },
        {
            path:'/HelloWorld',
            name:'HelloWorld',
            component:HelloWorld
        }
    ]
})