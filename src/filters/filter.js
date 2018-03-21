/**
 * Created by sky on 2018/3/21.
 */
export function filterWeather(id){
    switch (id){
        case 0:
            return 'smile-o';
        case 1:
            return 'meh-o';
        case 2:
            return 'frown-o';
        default:
            return 'smile-o';
    }
}