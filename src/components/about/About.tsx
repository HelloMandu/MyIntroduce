import SectionWrapper from '../section/SectionWrapper';
import './About.scss'
import Card from './Card';
import ConsoleInfo from './ConsoleInfo'

// function Card(){
//     return(
        
//     )
// }

function About() {
    return (
        <SectionWrapper title={'About'}>
            <p>
                항상 제가 하는 일들이 사람들에게 좀 더 나은 삶을 주었으면 하였고, 일반적인 일들을 통해서는 그 한계가 명확하다고 느낄 수 있었습니다.
                그러던 도중 프로그래밍이라는 것을 접하게 되었고, 프로그래밍을 통해 사람들에게 이로운 서비스를 개발하고 우리의 인생이라는 한정된 시간
                안에서 사람들이 시간을 좀 더 가치 있게 쓸 수 있도록 해주고 싶었습니다.
            </p>
            <div className="about-wrapper">
                <Card></Card>
                <ConsoleInfo></ConsoleInfo>
            </div>
        </SectionWrapper>
    );
}

export default About;
