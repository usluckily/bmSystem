/**
 * Created by Administrator on 2017/6/7.
 */
import ebook from '@/components/ebook'
import ebooklist from '@/components/ebook/ebooklist'
import pageturn from '@/components/ebook/pageturn'

export default [
  {
    path:'/ebook',
    name:'ebook',
    component:ebook
  },
  {
    path:'/pageturn',
    name:'pageturn',
    component:pageturn
  },
  {
    path:'/ebooklist/:id',
    name:'ebooklist',
    component:ebooklist
  },
]
