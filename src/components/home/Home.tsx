import { useEffect, useState } from 'react';
import cn from 'classnames';
import Logo from '../../static/images/logo.png';

import './Home.scss';

function Home() {
    const [splash, setSplash] = useState<boolean>(false);
    useEffect(() => setSplash(true), []);
    return (
        <section id="home">
            <div className={cn('home-container', { splash })}>
                <img className="home-profile" src={Logo} alt="profile" />
                <h2 className="home-title">
                    Hi,
                    <br />
                    I'm Web Developer.
                </h2>
                <p>
                    끊임없는 배움을 통한 성장,
                    <br />
                    새로운 기술에 대한 지속적인 관심,
                    <br />
                    새로운 배움에 두려움을 두지 않는 태도
                    <br />
                    저는 프론트엔드 개발자입니다.
                </p>
            </div>
        </section>
    );
}

export default Home;
