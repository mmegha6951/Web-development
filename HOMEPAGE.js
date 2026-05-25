let storedData=JSON.parse(localStorage.getItem('userData'))
console.log(storedData)
let personImage=storedData.image
console.log(personImage)

let profileImg=document.getElementById('profile')
profileImg.src=`${personImage}`













