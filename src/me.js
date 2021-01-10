import Person from "./model/Person.js";

const getMyInfo = async () => {
    const data = await fetch("../asset/me.json")
        .then((response) => response.json())
        .then((json) => json.me);
    return data;
};


const setMyInfo = async () =>{
    const myInfo = await getMyInfo();
    me.set = myInfo;
}

const me = new Person();
setMyInfo()
