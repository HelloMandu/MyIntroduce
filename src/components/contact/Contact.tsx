import SectionWrapper from '../section/SectionWrapper';
import emailjs from 'emailjs-com';
import './Contact.scss';
import { useCallback } from 'react';
import useInput from '../../hooks/useInput';
import dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });
function Contact() {
    const [mailForm, onChangeMailForm] = useInput({ name: '', email: '', message: '' });
    const { name, email, message } = mailForm;
    console.log(
        process.env.REACT_APP_EMAIL_USER ,
        process.env.REACT_APP_EMAIL_SERVICE || '',
         process.env.REACT_APP_EMAIL_TEMPLATE || '',
         process.env.NODE_ENV
    )
    const sendEmail = useCallback((e) => {
        e.preventDefault();
        if(!name.length || !email.length || !message.length){
            alert('입려칸에 내용을 적어주세요.')
            return;
        }
        const USER_KEY: string = process.env.EMAIL_USER || '';
        const SERVIVE_KEY: string = process.env.EMAIL_SERVICE || '';
        const TEMPLATE_KEY: string = process.env.EMAIL_TEMPLATE || '';
        console.log(SERVIVE_KEY, TEMPLATE_KEY, USER_KEY)
        console.log(e.target)
        emailjs.send(SERVIVE_KEY, TEMPLATE_KEY, mailForm, USER_KEY).then(
            (response)=>{
                console.log(response);
                if(response.status === 200){
                    alert('전송되었습니다! 빠른 시일내에 답변 드리겠습니다.')
                }
            }, (err) =>{
                alert('전송실패.')
            }
        );
    }, [email.length, mailForm, message.length, name.length]);
    return (
        <SectionWrapper id="contact" title="Contact">
            <div className="contact-container">
                <form id="form-email" onSubmit={sendEmail}>
                    <input type="name" name="name" placeholder="이름" value={name} onChange={onChangeMailForm} />
                    <br />
                    <input type="email" name="email" placeholder="이메일" value={email} onChange={onChangeMailForm} />
                    <br />
                    <textarea name="message" placeholder="내용" value={message} onChange={onChangeMailForm} />
                    <button type="submit">
                        SEND MESSAGE
                    </button>
                </form>
                <div className="github-link-wrapper">
                    <a className="github-link" href={'https://github.com/HelloMandu'} target="_blank" rel="noreferrer">
                        <i className="fa fa-github"></i>
                    </a>
                    <p className="github-url">https://github.com/HelloMandu</p>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default Contact;
