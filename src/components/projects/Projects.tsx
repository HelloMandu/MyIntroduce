import SectionWrapper from "../section/SectionWrapper";
import ProjectList from '../../static/data/skills.json';

// function ProjectItem(){
//     return(

//     )
// }

function Projects() {
    return(
        <SectionWrapper title={'Project'}>
            <ul className="project-list">
                {/* {ProjectList.map()} */}
            </ul>
        </SectionWrapper>
    )
}

export default Projects;