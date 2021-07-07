/*
 * @Descripttion: 接口请求公共方法
 * @version: V1.0
 * @Author: GaoWei
 * @Date: 2021-07-03 09:24:36
 * @LastEditors: GaoWei
 * @LastEditTime: 2021-07-03 15:20:09
 */
import axios from "axios";
import base from '@/config/base'

const service = axios.create({
    baseURL: base.apiUrl,
    timeout: 6000,
    // retry: 4,//请求失败后在请求的次数
    // retryDelay: 1000,//请求失败后在次请求的间隙
    // headers: { 'X-Custom-Header': 'foobar' }
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, err);

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, err);



// service.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
//     var config = err.config;
//     // If config does not exist or the retry option is not set, reject
//     if (!config || !config.retry) return Promise.reject(err);

//     // Set the variable for keeping track of the retry count
//     config.__retryCount = config.__retryCount || 0;

//     // Check if we've maxed out the total number of retries
//     if (config.__retryCount >= config.retry) {
//         // Reject with the error
//         return Promise.reject(err);
//     }

//     // Increase the retry count
//     config.__retryCount += 1;

//     // Create new promise to handle exponential backoff
//     var backoff = new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve();
//         }, config.retryDelay || 1);
//     });

//     // Return the promise in which recalls axios to retry the request
//     return backoff.then(function () {
//         return service(config);
//     });
// });

function get(url, params) {
    return service.get(url, params).then(checkStatus).catch(function (error) {
        console.log(error);
    });
}
function post(url, data) {
    return service.post(url, data).then(checkStatus).catch(function (error) {
        console.log(error);
    });
}
function put(url, data) {
    return service.put(url, data).then(checkStatus).catch(function (error) {
        console.log(error);
    });
}
function del(url, params) {
    return service.delete(url, params).then(checkStatus).catch(function (error) {
        console.log(error);
    });
}


// 成功处理函数
const checkStatus = (response) => {
    return new Promise((resolve, reject) => {
        if (response.status === 200) {
            resolve(response.data)
        } else {
            reject(response.data)
        }
    })
}

//错误处理函数

const err = (error) => {
    if (error.response) {
        const data = error.response.data;
        if (error.response.status === 403) {
            Notify({ type: 'danger', message: data.message || data.msg });
        }
        if (errsor.response.status === 401) {
            Notify({ type: 'danger', message: '你没有权限.' });
        }
    }
    return Promise.reject(error);
}

function test() {
    console.log('Nihao')
}

export { get, post, put, del, test }
