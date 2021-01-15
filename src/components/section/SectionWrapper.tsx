import { title } from 'process';
import './SectionWrapper.scss';

interface SectionWrapperProps {
    title: string;
    children: React.ReactNode;
}

function SectionWrapper({ title, children }: SectionWrapperProps) {
    return (
        <section className="section-wrapper">
            <h1>{title}</h1>
            {children}
        </section>
    );
}

export default SectionWrapper;
