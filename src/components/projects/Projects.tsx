import { useState, useCallback } from 'react';
import SectionWrapper from '../section/SectionWrapper';
import DetailDialog, { DialogInfo } from './DetailDialog';
import ProjectList from '../../static/data/projects.json';
import './Projects.scss';

interface ProjectItemProps {
    title: string;
    subtitle: string;
    techList: string[];
    images: string;
    onDetail: () => void;
}

function ProjectItem({ title, subtitle, techList, images, onDetail }: ProjectItemProps) {
    return (
        <>
            <div className="project-image"></div>
            <div className="project-content">
                <h2 className="project-title">
                    {title}
                    <p>{subtitle}</p>
                </h2>
                <span className="project-tech">{techList.join('/')}</span>
                <button className="project-more" onClick={onDetail}>MORE</button>
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
    });
    const openDialog = useCallback((dialogInfo: DialogInfo) => {
        setDialogContent(dialogInfo);
        setOnDialog(true);
    }, []);
    const offDialog = useCallback(() => setOnDialog(false), []);
    const { title, subtitle, description, images }: DialogInfo = dialogContent;
    return (
        <>
            <SectionWrapper id={'projects'} title={'Projects'}>
                <ul className="project-list">
                    {ProjectList.map((project, index) => {
                        const { title, subtitle, techList, images, description } = project;
                        return (
                            <li className="project" key={index}>
                                <ProjectItem
                                    title={title}
                                    subtitle={subtitle}
                                    techList={techList}
                                    images={images[0]}
                                    onDetail={() => openDialog({ title, subtitle, description, images })}
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
                offDialog={offDialog}
            />
        </>
    );
}

export default Projects;
