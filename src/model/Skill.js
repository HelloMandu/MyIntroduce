class Skill {
    constructor(title, content, color, percent){
        this.title=title;
        this.content=content;
        this.color=color;
        this.percent=percent;
    }

    getSkillWrapper() {
        const skillWrapper = document.createElement("div");
        skillWrapper.classList.add("skill");
        return skillWrapper;
    }
    
    getTitle() {
        const titleElment = document.createElement("h3");
        titleElment.appendChild(document.createTextNode(this.title));
        return titleElment;
    }
    
    getProgress() {
        const progress = document.createElement("div");
        progress.classList.add("progress");
        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
        progressBar.style.width = `${this.percent}%`
        progressBar.style.backgroundColor = this.color;
        progress.appendChild(progressBar);
        return progress;
    };
    
    getContent(content) {
        const contentElement = document.createElement("p");
        contentElement.appendChild(document.createTextNode(this.content))
        return contentElement;
    }

    createSkill(){
        const skillWrapper = this.getSkillWrapper();
        const titleElment = this.getTitle();
        const progress = this.getProgress();
        const contentElement = this.getContent();
        skillWrapper.appendChild(titleElment);
        skillWrapper.appendChild(progress);
        skillWrapper.appendChild(contentElement);
        return skillWrapper;
    }
}

export default Skill;