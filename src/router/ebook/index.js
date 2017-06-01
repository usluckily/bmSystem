/**
 * Created by Administrator on 2017/5/19.
 */
import ebooklist from '@/components/ebook/ebooklist'
import pageturn from './pageturn'

export default [
  {
    path:'/ebooklist/:id',
    name:'ebooklist',
    component:ebooklist
  },
  pageturn
]
