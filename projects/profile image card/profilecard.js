const profilePic = document.getElementById('profilepic');
const choosePic = document.getElementById('choosepic');
choosePic.addEventListener("change", function(event){
    const chosenfile = event.target.files[0];
    if(chosenfile){
        const newimage = URL.createObjectURL(chosenfile);
        profilePic.src = newimage;
    };
    
});
const formsData ={
    email: document.getElementById('email').value,
    gender: document.getElementById('gender').value,
    phoneNumber: document.getElementById('phone').value,
    dob: document.getElementById('dob').value,
    occupation: document.getElementById('occupation').value,
    bio: document.getElementById('bio').value,
}
export function dataTransfer(){
    return formsData;
}



