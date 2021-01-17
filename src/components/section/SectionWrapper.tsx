import './SectionWrapper.scss';

interface SectionWrapperProps {
    id: string,
    title: string;
    children: React.ReactNode;
}

function SectionWrapper({ id, title, children }: SectionWrapperProps) {
    return (
        <section className="section-wrapper" id={id}>
            <h1 className="section-title">{title}</h1>
            {children}
        </section>
    );
}

export default SectionWrapper;
