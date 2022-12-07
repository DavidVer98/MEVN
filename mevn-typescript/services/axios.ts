import Axios  from 'axios'

const axiosInstance = Axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: { 'X-Custom-Header': 'foobar' }
})

export default axiosInstance