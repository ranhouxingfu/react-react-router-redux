/**
 * Created by sky on 2018/3/20.
 */
import * as http from './http';
import '@/mock/article';
import '@/mock/lifeList';
import '@/mock/articleDetail';
import '@/mock/archive';
export const getArticleList = () => http.GET('article.json');
export const getLifeList = () => http.GET('life.json');
export const getArticleDetail = params => http.GET(`articleDetial.json/${params}`);
export const getArchiveList = () =>http.GET('archive.json');
