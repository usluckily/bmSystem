/**
 * Created by Administrator on 2017/5/19.
 */
import ebook from '@/components/ebook'
import video from '@/components/ebook/video'
import ebooklist from '@/components/ebook/ebooklist'
import pageturn from './pageturn'
import videoCategory from './videocategory'

export default [
  {
    path:'/ebook',
    name:'ebook',
    component:ebook
  },
  {
    path:'/video',
    name:'video',
    component:video
  },
  {
    path:'/ebooklist/:id',
    name:'ebooklist',
    component:ebooklist
  },
  pageturn,
  ...videoCategory
]
