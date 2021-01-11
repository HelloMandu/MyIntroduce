import Person from "./model/Person.js";

const getMyInfo = async () => {
    const data = await fetch("../data/me.json")
        .then((response) => response.json())
        .then((json) => json.me);
    return data;
};


const setMyInfo = async () =>{
    const myInfo = await getMyInfo();
    me.set = myInfo;
    me.setCardInfo();
    me.setConsoleInfo();
    me.setGithubLink();
}

const me = new Person();
setMyInfo();
