import SectionWrapper from '../section/SectionWrapper';
import ConsoleInfo from './ConsoleInfo';
import Card from './Card';
import MyInfo from '../../static/data/myinfo.json';
import './About.scss';

function About() {
    const { name, phone, email, github, birth, university, job } = MyInfo;
    return (
        <SectionWrapper id={'about'} title={'About'}>
            <div className="about-wrapper">
                <Card job={job} name={name} phone={phone} email={email} github={github}></Card>
                <ConsoleInfo name={name} birth={birth} university={university}></ConsoleInfo>
            </div>
        </SectionWrapper>
    );
}

export default About;
