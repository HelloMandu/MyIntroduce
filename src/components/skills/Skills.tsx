import { useEffect, useRef, useState } from 'react';
import SectionWrapper from '../section/SectionWrapper';
import SkillList from '../../static/data/skills.json';
import './Skills.scss';

interface SkillProps {
    title: string;
    content: string;
    color: string;
    percent: number;
}

function SkillItem({ title, content, color, percent }: SkillProps) {
    const [active, setActive] = useState<boolean>(false);
    const progressBarRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const progressAnimation = () => {
            const fromTop: number | undefined = progressBarRef.current?.getBoundingClientRect().top;
            if (!fromTop) {
                return;
            }
            else if (window.innerHeight > fromTop) {
                setActive(true);
            }
        };
        window.addEventListener('scroll', progressAnimation);
        return window.addEventListener('scroll', progressAnimation);
    }, [percent]);
    return (
        <div>
            <h3>{title}</h3>
            <div className="progress">
                <div className="progress-bar" style={{ width: !active ? '0%' : `${percent}%`, backgroundColor: color }} ref={progressBarRef}>
                <span className="progress-percent" style={{ display: !active ? 'none' : `inline`, color }}>
                    {`${percent}%`}
                </span>
                </div>

            </div>
            <p>{content}</p>
        </div>
    );
}

function Skills() {
    return (
        <SectionWrapper title={'Skills'}>
            <ul className="skill-wrapper">
                {SkillList.map(({ title, content, color, percent }, index) => (
                    <li className="skill" key={index}>
                        <SkillItem title={title} content={content} color={color} percent={percent} />
                    </li>
                ))}
            </ul>
        </SectionWrapper>
    );
}

export default Skills;
