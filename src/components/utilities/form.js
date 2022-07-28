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
  try {
    const done = await api.post("/user/register", newUser);
    console.log(done);
    if (done) {
      window.localStorage.setItem("username", JSON.stringify(username));
      window.location.replace("https://hitech1.vercel.app/login");
    }
  } catch (error) {
    console.log(error.message);
  }
  
};


export const logUser = async (e) => {
    e.preventDefault();
    console.log(`${username}, ${password}`);
    const backUser = {
        username: username,
        password: password
    };
    const done = await api.post('/user/login', backUser);
    console.log(done);
    if(done){
      window.localStorage.setItem("username", JSON.stringify(username));
      window.location.replace("https://hitech1.vercel.app/");
    }else{
      console.error("Failed to login");
    }
}