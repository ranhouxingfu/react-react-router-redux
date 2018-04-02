/**
 * Created by sky on 2018/3/29.
 */
export function filterDate(date) {
    var arr = date;
    arr.sort((a, b)=> {
        return a < b ? 1 : -1
    })
}