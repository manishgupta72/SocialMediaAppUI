import axios from 'axios'


// export const addItem = (item) => {

//     return axios.post('http://localhost:5000/cart', item)
// }

export const loginApi = (formData) => {
    return axios.post('http://localhost:5000/auth/login', formData)
};

export const signupApi = ({formData}) => { 
  return   axios.post('http://localhost:5000/auth/register', formData) 
};

