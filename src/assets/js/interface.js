/**
 * Created by Administrator on 2017/4/10.
 */
let host = '/nuotu';

export default{
  getUserBasic:host+'/jjNtBook_book.do?method=getUserInfo',//jjUserId
  getBorrowDetails:host+'/jjNtBook_book.do?method=readBorrowByUserId',//userId  借读详情跟借阅排名公用此接口
  getFavorite:host+'/jjNtBook_book.do?method=searchBookshelf',//userId , pageIndexName
  addFavorite:host+'/jjNtBook_book.do?method=addBook',//userId , book_id
  delFavorite:host+'/jjNtBook_book.do?method=delBook',//userId , book_id
  getUserHomePage:host+'/jjNtBook_book.do?method=user_Homepage',//userId , begin , end
  getReadTalentFromClass:host+'/jjNtBook_book.do?method=searchByClassReaderDesc',//userId
  getReadTalentFromSchool:host+'/jjNtBook_book.do?method=searchBySchoolReaderDesc',//userId
  getStatistics:host+'/jjNtBook_book.do?method=readBorrowBy',//schoolId || classId
  getTheBookYouWouldLike:host+'/jjNtBook_book.do?method=loveBookCatalogue',//userId
  userLikes:host+'/jjNtBook_book.do?method=user_Likes',//myUserId , userId
  getBookKind:host+'/jjNtBook_book.do?method=searchBookKind',//
  getKindList:host+'/jjNtBook_book.do?method=searchBookCatalogue',//kind , userId , school_Id
  getHomeBookList:host+'/jjNtBook_book.do?method=randBookCatalogue',//school_Id
}
