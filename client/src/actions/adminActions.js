import axios from "axios";

export const loginAdmin = (admin, history) => {
    axios.post('/api/admin/login', admin)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err.response.data);
        });
};