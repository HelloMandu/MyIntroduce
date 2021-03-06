class Skill {
    constructor(title, content, color, percent) {
        this.title = title;
        this.content = content;
        this.color = color;
        this.percent = percent;
        this.$element = this.#createSkill();
    }

    get getElement() {
        return this.$element;
    }

    get getPercent() {
        return this.percent;
    }

    get getProgressBar() {
        return this.$progressBar;
    }

    #getSkillWrapper() {
        const skillWrapper = document.createElement("div");
        skillWrapper.classList.add("skill");
        return skillWrapper;
    }

    #getTitle() {
        const titleElment = document.createElement("h3");
        titleElment.appendChild(document.createTextNode(this.title));
        return titleElment;
    }

    #getProgress() {
        const progress = document.createElement("div");
        const progressBar = document.createElement("div");
        const percent = document.createElement("span");
        progress.classList.add("progress");
        progressBar.classList.add("progress-bar");
        progressBar.style.width = `0%`;
        progressBar.style.backgroundColor = this.color;
        percent.classList.add("progress-percent");
        percent.appendChild(document.createTextNode(`${this.percent}%`));
        percent.style.color = this.color;
        progressBar.appendChild(percent);
        progress.appendChild(progressBar);
        this.$progressBar = progressBar;
        return progress;
    }

    #getContent() {
        const contentElement = document.createElement("p");
        contentElement.appendChild(document.createTextNode(this.content));
        return contentElement;
    }

    #createSkill() {
        const skillWrapper = this.#getSkillWrapper();
        const titleElment = this.#getTitle();
        const progress = this.#getProgress();
        const contentElement = this.#getContent();
        skillWrapper.appendChild(titleElment);
        skillWrapper.appendChild(progress);
        skillWrapper.appendChild(contentElement);
        return skillWrapper;
    }
}

export default Skill;
