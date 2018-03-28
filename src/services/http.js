/**
 * Created by sky on 2018/3/20.
 */
import axios from 'axios';
import {message} from 'antd';
//let bol='';
//let baseUrl = process.env.NODE_ENV === 'development'?'/':'';
axios.interceptors.request.use((config)=> {
    if (config.method === 'get') {
        config.params = {
            _ie: +(new Date())
        }
    }
    return config
}, (error)=> {
    return Promise.reject(error)
})
axios.interceptors.response.use((response)=> {
    if (!response.data.status) {
        message.error(response.data.message ? response.data.message : '未知错误')
    }
    return response.data
}, (error)=> {
    message.error(error.response.data.message ? error.response.data.message : '未知错误')
    return Promise.reject(error)
})
export const GET = (url) => {
    debugger
    const CancelToken = axios.CancelToken;
    const request = axios.get(url, {
        cancelToken: new CancelToken(function executor(c) {
            //window.$HttpPendingList.push(c)
        })
    }).catch((thrown)=> {
        if (axios.isCancel(thrown)) {
            console.log('Request canceled')
        } else {
            return false
        }
    })
    return request
}
export const POST = (url) => {
    const CancelToken = axios.CancelToken;
    const request = axios.post(url, {
        cancelToken: new CancelToken(function executor(c) {
            //window.$HttpPendingList.push(c)
        })
    }).catch((thrown)=> {
        if (axios.isCancel(thrown)) {
            console.log('Request canceled')
        } else {
            return false
        }
    })
    return request
}
export const DELETE = (url) => {
    const CancelToken = axios.CancelToken;
    const request = axios.delete(url, {
        cancelToken: new CancelToken(function executor(c) {
            //window.$HttpPendingList.push(c)
        })
    }).catch((thrown)=> {
        if (axios.isCancel(thrown)) {
            console.log('Request canceled')
        } else {
            return false
        }
    })
    return request
}
export const PUT = (url) => {
    const CancelToken = axios.CancelToken;
    const request = axios.put(url, {
        cancelToken: new CancelToken(function executor(c) {
            //window.$HttpPendingList.push(c)
        })
    }).catch((thrown)=> {
        if (axios.isCancel(thrown)) {
            console.log('Request canceled')
        } else {
            return false
        }
    })
    return request
}