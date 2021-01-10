class Person {
    set set({name, phone, email, github, birth, university}){
        this.name=name;
        this.phone=phone;
        this.email=email;
        this.github=github;
        this.birth=birth;
        this.university=university;
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
            university
        };
    }

}

export default Person;
