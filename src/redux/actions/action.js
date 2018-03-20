/**
 * Created by sky on 2018/3/20.
 */
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const EDIT_ARTICLET = 'EDIT_ARTICLET';
export const GET_ARTICLE_LIST='GET_ARTICLE_LIST'
export function getArticleList() {
    return {
        type:GET_ARTICLE_LIST
    }
}
export function editArticle(list) {
    return {
        type:EDIT_ARTICLET,
        list
    }
}
export function addArticle(list) {
    return {
        type:ADD_ARTICLE,
        list
    }
}
export function deleteArticle(id){
    return {
        type:DELETE_ARTICLE,
        id
    }
}