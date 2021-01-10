(function () {
    emailjs.init("user_Z0i5yQpdGUnP0EGyn0vqE");
})();

const form = document.getElementById('form-email');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;
    const data = {
        name, email, message
    };
    console.log(data);
    emailjs.sendForm('service_3a1kk5q', 'template_d72w3y9', data, 'user_Z0i5yQpdGUnP0EGyn0vqE').then(
        (res)=>{
            console.log(res)
        }, (err) =>{
            console.log(err)
        }
    )
    console.log(sent);
})
