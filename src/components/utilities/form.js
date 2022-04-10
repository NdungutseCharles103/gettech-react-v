import { api } from './one';

let username, email, password;

export const getuname = (e) => {
    username = e.target.value;
}
// export const getfname = (e) => {
//     username = e.target.value;
// }
export const getemail = (e) => {
    email = e.target.value;
}
export const getpassw = (e) => {
    password = e.target.value;
}

export const regUser =  async (e) => {
    e.preventDefault()
    // console.log(`${username}, ${email}, ${password}`);
    const newUser = {
        username: username,
        email: email,
        passsword: password
    }
   const done = await api.post('/user/register', newUser)
   console.log(done);
}