/**
 * Created by Administrator on 2017/4/10.
 */
let host = '/nuotu' , ehost = 'http://42.159.228.129';

export default{
  getUserBasic:host+'/jjNtBook_book.do?method=getUserInfo',//jjUserId
  getBorrowDetails:host+'/jjNtBook_book.do?method=readBorrowByUserId',//userId  借读详情跟借阅排名公用此接口
  getFavorite:host+'/jjNtBook_book.do?method=searchBookshelf',//userId , pageIndexName
  addFavorite:host+'/jjNtBook_book.do?method=addBook',//userId , book _id
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

  //电子图书
  getEbookCategory:ehost+'/getfilepath/index.php/welcome/getBookCategory',//cid 1.获取图书分类
  getEbookList:ehost+'/getfilepath/index.php/welcome/getBook', //cid , offset  , limit   根据书类ID获取书的列表
  getEbook:ehost+'/getfilepath/index.php/welcome/getBookDetail', //bid 根据书ID获取书的详情
  searchEbook:ehost+'/getfilepath/index.php/welcome/seachBook', //bookName  4.根据书名搜索书
  getVideo:ehost+'/getfilepath/index.php/welcome/videoIndex', //获取视频首页数据
  getVideoCategory:ehost+'/getfilepath/index.php/welcome/getVideoCategory',//cid  根据主分类获取子分类和子分类视频列表
  getVideoList:ehost+'/getfilepath/index.php/welcome/getVideoList',//cid , offset  , limit  根据子分类获取视频列表
  searchVideo:ehost+'/getfilepath/index.php/welcome/seachVideo'//videoName  根据视频名称搜索视频
}
