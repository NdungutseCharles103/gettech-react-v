import { api } from "./one";

let username, email, password;

export const getuname = (e) => {
  username = e.target.value;
};

export const getemail = (e) => {
  email = e.target.value;
};
export const getpassw = (e) => {
  password = e.target.value;
};

export const regUser = async (e) => {
  e.preventDefault();
  console.log(`${username}, ${email}, ${password}`);
  const newUser = {
    username: username,
    email: email,
    password: password,
  };
  console.log(newUser);

  const done = await api.post("/user/register", newUser);
  console.log(done);
  if(done){
       window.localStorage.setItem("username", JSON.stringify(username));
       window.location.replace("https://hitech1.vercel.app/");
    }
};


export const logUser = async (e) => {
    e.preventDefault();
    console.log(`${username}, ${email}, ${password}`);
    const backUser = {
        username: username,
        password: password
    };
    const done = await api.post('/user/login', backUser);
    console.log(done);
    if(done){
         window.localStorage.setItem("username", JSON.stringify(username));
         window.location.replace("http://localhost:4040/");}
}