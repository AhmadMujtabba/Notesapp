import axios from "axios"
//const baseurl='http://localhost:3001/notes'
const baseurl='/api/notes'
const getAll=()=>{
    const request=axios.get(baseurl)
    return request.then(response=>response.data)
}

const create=(newObj)=>{
    const request=axios.post(baseurl,newObj)
    return request.then(response=>response.data)
}

const update=(id,changednote)=>{
    const request=axios.put(`${baseurl}/${id}`,changednote)
    return request.then(response=>response.data)
}

export default {
    getAll,create,update
}
