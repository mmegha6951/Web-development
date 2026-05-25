let myForm=document.querySelector('form')
console.log(myForm)

myForm.onsubmit=(e)=>{
    e.preventDefault();
    console.log("form targetted")

    let email=document.querySelectorAll('input')[0].value
    let password=document.querySelectorAll('input')[1].value

    console.log(email);
    console.log(password);

    let storeData=JSON.parse(localStorage.getItem('userData'))
    console.log(storeData)

    if(storeData){
        if(email === storeData.email &&  password === storeData.password){
            alert("Login Successful")
            window.location.href = './HOMEPAGE.html'
        }else{
            alert("Invalid User")
        }
    }

}