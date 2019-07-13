const API_URL = process.env.VUE_APP_API_URL;
import axios from "axios";
const GET_TODOS = ()=> {
    return new Promise((resolve, reject)=>{
        axios.get(`${API_URL}/todos/read`)
        .then((response)=>{
            resolve(response)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}
const CREATE_TODO = (name)=> {
    return new Promise((resolve, reject)=>{
        axios.put(`${API_URL}/todos/create`, {name:name})
        .then((response)=>{
            resolve(response)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}
const DELETE_TODO = (id)=> {
    return new Promise((resolve, reject)=>{
        axios.post(`${API_URL}/todos/delete`, {_id: id})
        .then((response)=>{
            resolve(response)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}
const UPDATE_TODO = (todo)=> {
    return new Promise((resolve, reject)=>{
        axios.patch(`${API_URL}/todos/update`, todo)
        .then((response)=>{
            resolve(response)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}
// const GET_TODOS = ()=> {
//     return new Promise((resolve, reject)=>{
//         axios.get(`${API_URL}/todos/read`)
//         .then((response)=>{
//             resolve(response)
//         })
//         .catch((err)=>{
//             reject(err)
//         })
//     })
// }

export {
    GET_TODOS,
    CREATE_TODO,
    DELETE_TODO,
    UPDATE_TODO
}