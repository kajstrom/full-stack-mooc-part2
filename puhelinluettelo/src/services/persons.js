import axios from "axios"
const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    return axios.get(baseUrl)
}

const add = (number) => {
    return axios.post(baseUrl, number)
}

const update = (id, number) => {
    return axios.put(`${baseUrl}/${id}`, number)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {getAll, add, update, remove}