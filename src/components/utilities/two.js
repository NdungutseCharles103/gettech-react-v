import { api } from "./one";

export function comPrice(a, b) {
  if (a.price < b.price) {
    return 1;
  } else if (a.price > b.price) {
    return -1;
  } else {
    return 0;
  }
}
export function compDates(a, b) {
  if (a.date < b.date) {
    return 1;
  } else if (a.date > b.date) {
    return -1;
  } else {
    return 0;
  }
}

export const compareAndUpdate = (a, b)=>{
  console.log(a, b);
for(let i=0; i<a.length; i++){
    for(let j=0; j<b.length; j++){
        if(a[i]._id === b[j]._id){
            b[j]=a[i]
        }
    }
}
return b
}

export const getUserPro = async (id)=>{
  const res = await api.get(`/user/${id}/products`)
  const pro = await res.data
  return pro
}

export const getUserCounts = async (id)=>{
  const res = await api.get(`/user/${id}/counts`)
  const count = await res.data
  console.log(res);
  return count
}