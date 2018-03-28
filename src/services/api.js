/**
 * Created by sky on 2018/3/20.
 */
import * as http from './http';
import '@/mock/article';
export const getArticleList = () => http.GET('hello.json')