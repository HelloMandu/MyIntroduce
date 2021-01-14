class Modal {
    constructor(){
        this.$modal = document.querySelector('.modal');
        this.$overlay = document.querySelector('.modal-overlay');
        this.$imageWrapper = document.querySelector('.modal-image-wrapper');
        this.$title = document.querySelector('.modal-title');
        this.$subtitle = document.querySelector('.modal-subtitle');
        this.$description = document.querySelector('.modal-description');
        this.$modalClose = document.querySelector('.modal-close');
        this.openModal.bind(this);
        this.#offModal.bind(this);
        this.$overlay.addEventListener('click', () => this.#offModal());
        this.$modalClose.addEventListener('click', () => this.#offModal());
    }
    #imageFormat(image){
        return `./images/${image}`
    }
    #getImage(image){
        const imageElement = document.createElement('img');
        imageElement.classList.add('modal-image');
        imageElement.src = this.#imageFormat(image);
        imageElement.alt = 'project-image';
        return imageElement;
    }
    #offModal(){
        this.$modal.classList.remove('on');
        this.$title.innerHTML = '';
        this.$subtitle.innerHTML = '';
        this.$description.innerHTML = '';
        this.$imageWrapper.innerHTML = ''
    }
    openModal(images, title, subTitle, description){
        this.$title.innerHTML = title;
        this.$subtitle.innerHTML = subTitle;
        this.$description.innerHTML = description;
        if(Array.isArray(images)){
            images.forEach((image) => {
                this.$imageWrapper.appendChild(this.#getImage(image));
            })
        }
        this.$modal.classList.add('on');
    }
}

export default Modal;