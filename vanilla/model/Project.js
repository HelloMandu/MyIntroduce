import Modal from './Modal.js';

class Project {
    constructor(title, subTitle, images, techList, description) {
        this.title = title;
        this.subtitle = subTitle;
        this.images = images;
        this.techList = techList;
        this.description = description;
        this.modal = new Modal();
        this.$element = this.#createProject();
    }

    get getElement() {
        return this.$element;
    }

    #imageFormat() {
        if (Array.isArray(this.images)) {
            return `url(../images/${this.images[0]});`;
        }
        return `url(../images/${this.images});`;
    }

    #getImageElement() {
        const buttonElement = document.createElement("div");
        buttonElement.classList.add("project-image");
        buttonElement.style.backgroundImage = this.#imageFormat();
        return buttonElement;
    }

    #getTechElement(){
        const techElement = document.createElement('span');
        techElement.classList.add('project-tech');
        techElement.appendChild(document.createTextNode(this.techList.join('/')))
        return techElement;
    }

    #getButtonElement() {
        const buttonElement = document.createElement("button");
        buttonElement.classList.add("project-more");
        buttonElement.appendChild(document.createTextNode("MORE"));
        buttonElement.addEventListener('click', () => this.modal.openModal(this.images, this.title, this.subtitle, this.description))
        return buttonElement;
    }

    #getContentElement() {
        const contentElement = document.createElement("div");
        const titleElement = document.createElement("h2");
        const subTitleElement = document.createElement("p");
        titleElement.appendChild(document.createTextNode(this.title));
        subTitleElement.appendChild(document.createTextNode(this.subtitle));
        titleElement.appendChild(subTitleElement);
        titleElement.classList.add("project-title");
        contentElement.appendChild(titleElement);
        contentElement.appendChild(this.#getTechElement());
        contentElement.appendChild(this.#getButtonElement());
        contentElement.classList.add("project-content");
        return contentElement;
    }

    #getProjectElement() {
        const projectElement = document.createElement("li");
        projectElement.classList.add("project");
        return projectElement;
    }

    #createProject() {
        const projectElement = this.#getProjectElement();
        const contentElment = this.#getContentElement();
        const imageElement = this.#getImageElement()
        projectElement.appendChild(imageElement);
        projectElement.appendChild(contentElment);
        return projectElement;
    }
}

export default Project;
