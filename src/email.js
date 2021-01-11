(function () {
    emailjs.init("user_Z0i5yQpdGUnP0EGyn0vqE");
})();

const form = document.getElementById('form-email');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;
    if(!name.length || !email.length || !message.length){
        alert('입려칸에 내용을 적어주세요.')
        return;
    }
    const data = {
        name, email, message
    };
    emailjs.send('service_3a1kk5q', 'template_d72w3y9', data).then(
        (response)=>{
            if(response.status === 200){
                alert('전송되었습니다! 빠른 시일내에 답변 드리겠습니다.')
            }
        }, (err) =>{
            alert('전송실패.')
            console.log(err);
        }
    )
})
