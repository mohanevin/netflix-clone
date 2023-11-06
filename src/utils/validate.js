export const validateForm=(email,password)=>{
    let isEmailValid=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
    let isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)


    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid"

    return null;
}