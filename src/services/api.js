/**
 * Created by sky on 2018/3/20.
 */
import * as http from './http';
import '../mock/article';
let api ={
 getArticleList() {
     return http.GET('/api/article')
 }
}
export default api