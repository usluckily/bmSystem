/**
 * Created by Administrator on 2017/6/7.
 */
import video from '@/components/ebook/video'
import videoCategory from '@/components/ebook/videoCategory'
import videoplay from '@/components/ebook/videoplay'
import videolist from '@/components/ebook/videolist'

export default[
  {
    path:'/video',
    name:'video',
    component:video
  },
  {
    path:'/videoCategory/:id',
    name:'videoCategory',
    component:videoCategory
  },
  {
    path:'/videoplay/:id',
    name:'videoplay',
    component:videoplay
  },
  {
    path:'/videolist/:id',
    name:'videolist',
    component:videolist
  }
]
