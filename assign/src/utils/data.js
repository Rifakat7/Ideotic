export const Signupdata=({email,password})=>{
     let user_records = new Array();
     user_records = JSON.parse(localStorage.getItem("users"))
       ? JSON.parse(localStorage.getItem("users"))
       : [];
     if (
       user_records.some((v) => {
         return v.email == email;
       })
     ) {
       alert("email already Exist");
       return 
     } else {
       user_records.push({
         email: email,
         password: password,
       });
       localStorage.setItem("users", JSON.stringify(user_records));
     }
     return "done"
}

export const Logindata=({email,password})=>{
  let user_records = new Array();
  let user_login=new Array()
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  user_login = JSON.parse(localStorage.getItem("userLogin"))
    ? JSON.parse(localStorage.getItem("userLogin"))
    : "";
  if (
    user_records.some((v) => {
      return v.email == email&& v.password==password;
    })
  ) {
    alert("login succesfful");
    localStorage.setItem("userLogin", "true");
    return true
  }
  else{
    alert ("Either password or email is wrong")
  }
}

