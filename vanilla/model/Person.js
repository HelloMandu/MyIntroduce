class Person {
    set set({ name, phone, email, github, birth, university, job }) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.github = github;
        this.birth = birth;
        this.university = university;
        this.job = job;
    }
    get get() {
        const name = this.name;
        const phone = this.phone;
        const email = this.email;
        const github = this.github;
        const birth = this.birth;
        const university = this.university;
        return {
            name,
            phone,
            email,
            github,
            birth,
            university,
        };
    }

    setCardInfo() {
        const jobElement = document.querySelector(".job");
        const nameElement = document.querySelector(".name");
        const phoneElement = document.querySelector(".card-phone");
        const emailElement = document.querySelector(".card-email");
        const githubElement = document.querySelector(".card-github");

        jobElement.appendChild(document.createTextNode(this.job));
        nameElement.appendChild(document.createTextNode(this.name));
        phoneElement.appendChild(document.createTextNode(this.phone));
        emailElement.appendChild(document.createTextNode(this.email));
        githubElement.appendChild(document.createTextNode(this.github));
    }

    setConsoleInfo() {
        const myConsoleInfo = [this.name, this.birth, this.university];
        const responseList = document.querySelectorAll(".cli.info");
        responseList.forEach((response, index) =>
            response.appendChild(
                document.createTextNode(`"${myConsoleInfo[index]}"`)
            )
        );
    }
    
    setGithubLink() {
        const githubElement = document.querySelector(".github-link");
        const githubUrlElement = document.querySelector(".github-url");
        githubElement.href = this.github;
        githubElement.target = "_blank";
        githubUrlElement.appendChild(document.createTextNode(this.github))
    }
}

export default Person;
