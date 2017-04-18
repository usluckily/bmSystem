import Vue from 'vue'
import Router from 'vue-router'
// import hello from '@/components/Hello'
import index from '@/components/index'
import article from '@/components/article'
import pageone from '@/components/pageone'
import pagetwo from '@/components/pagetwo'
import pagethree from '@/components/pagethree'
import yddr from '@/components/yddr'
import booklist from '@/components/littlecomp/booklist'
import cardone from '@/components/littlecomp/cardone'
import cardtwo from '@/components/littlecomp/cardtwo'
import statistics from '@/components/statistics'
import myborrow from '@/components/myborrow'
import borrowdetails from '@/components/borrowdetails'
import mycollect from '@/components/mycollect'
import bookclassify from '@/components/bookclassify'
import drsbooks from '@/components/drsbooks'
import personhomepage from '@/components/personhomepage'
import favorite from '@/components/favorite'
import tabpage from '@/components/tabpage'
import personinfo from '@/components/personinfo'

Vue.use(Router)

export default new Router({
  // history: true,
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/page/1',
      component: index,
      children:[
        {
          path:'/page/1',
          // redirect:'/page/1/1',
          component:pageone,
          // children:[
          //   {
          //     path:'/page/1/1',
          //     component:cardone
          //   },
          //   {
          //     path:'/page/1/2',
          //     component:cardtwo
          //   }
          // ]
        },
        {
          path:'/page/2',
          component:pagetwo
        },
        {
          path:'/page/3',
          component:pagethree
        },
        {
          path:'/outlinks/',
          name:'outlinks',
          component:pageone
        }
      ]
    },
    {
      path:'/article/:id',
      name:'article',
      component:article
    },
    {
      path:'/yddr/',
      name:'阅读达人',
      component:yddr
    },
    {
      path:'/yddr/:name',
      name:'阅读达人',
      component:yddr
    },
    {
      path:'/booklist/:module/:id',
      name:'booklist',
      component:booklist,
    },
    // {
    //   path:'/booklist/person/:person',
    //   name:'booklist',
    //   component:booklist,
    // }
    {
      path:'/statistics/:type',
      name:'statistics',
      component:statistics
    },
    {
      path:'/myborrow/',
      name:'myborrow',
      component:myborrow
    },
    {
      path:'/myborrowdetails/',
      name:'borrowdetails',
      component:borrowdetails
    },
    {
      path:'/mycollect/',
      name:'mycollect',
      component:mycollect
    },
    {
      path:'/bookclassify/:id',
      name:'bookclassify',
      component:bookclassify
    },
    {
      path:'/drsbooks/:id',
      name:'drsbooks',
      component:drsbooks
    },
    {
      path:'/personhomepage/:id',
      name:'personhomepage',
      component:personhomepage
    },
    {
      path:'/favorite/',
      name:'favorite',
      component:favorite
    },
    {
      path:'/tabpage/',
      name:'tabpage',
      component:tabpage
    },
    {
      path:'/personinfo/',
      name:'personinfo',
      component:personinfo
    }
  ]
})

