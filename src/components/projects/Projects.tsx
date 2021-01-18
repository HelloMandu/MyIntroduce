import { useState, useCallback } from 'react';
import SectionWrapper from '../section/SectionWrapper';
import DetailDialog, { DialogInfo } from './DetailDialog';
import ProjectList from '../../static/data/projects.json';
import './Projects.scss';

interface ProjectItemProps {
    title: string;
    subtitle: string;
    techList: string[];
    background: string;
    onDetail: () => void;
}

function ProjectItem({ title, subtitle, techList, background, onDetail }: ProjectItemProps) {
    return (
        <>
            <div
                className="project-image"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${background})` }}
            ></div>
            <div className="project-content">
                <div className="project-title-wrapper">
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                </div>
                <span className="project-tech">{techList.join('/')}</span>
                <button className="project-more" onClick={onDetail}>
                    MORE
                </button>
            </div>
        </>
    );
}

function Projects() {
    const [onDialog, setOnDialog] = useState<boolean>(false);
    const [dialogContent, setDialogContent] = useState<DialogInfo>({
        title: '',
        subtitle: '',
        description: '',
        images: [],
        github: '',
        techList: [],
    });
    const openDialog = useCallback((dialogInfo: DialogInfo) => {
        setDialogContent(dialogInfo);
        setOnDialog(true);
    }, []);
    const offDialog = useCallback(() => setOnDialog(false), []);
    const { title, subtitle, description, images, github, techList }: DialogInfo = dialogContent;
    return (
        <>
            <SectionWrapper id={'projects'} title={'Projects'}>
                <ul className="project-list">
                    {ProjectList.map((project, index) => {
                        const { title, subtitle, techList, images, description, background, github } = project;
                        return (
                            <li className="project" key={index}>
                                <ProjectItem
                                    title={title}
                                    subtitle={subtitle}
                                    techList={techList}
                                    background={background}
                                    onDetail={() => openDialog({ title, subtitle, description, images, github, techList })}
                                />
                            </li>
                        );
                    })}
                </ul>
            </SectionWrapper>
            <DetailDialog
                on={onDialog}
                title={title}
                subtitle={subtitle}
                description={description}
                images={images}
                github={github}
                techList={techList}
                offDialog={offDialog}
            />
        </>
    );
}

export default Projects;
