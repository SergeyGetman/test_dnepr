// console.log("sadqwe2");





for (let i = 0; i < 1; i++) {
    let newTag = document.createElement("div");
    newTag.classList.add("tools");
    newTag.innerHTML = "this create inside div";
    document.body.append(newTag);
}

const btnDownload = document.querySelector("#btn");
btnDownload.addEventListener("click", () => {});
console.log(btnDownload);

function addHerousDB() {
    fetch("http://localhost:5000/add", {
        method: "POST",
        body: JSON.stringify({
            nick_name: 'iron-man',
            real_name: "Tony_Stark",
            origin_description: "Can throught rocket",
            superpowers: "pow pow pow",
            catch_phrase: "lets go fight"
        }),
        headers: { 'Content-Type': 'application/json' }
    });
}


async function getAll() {
    return await fetch("/heroes", { method: "GET" }).then(r => r.json());
}

getAll().then(array => {


    console.log(array);

    for (let hero of array) {
        document.querySelector("tbody").innerHTML += `<tr>
            <td>${hero.nick_name}</td>
            <td>${hero.real_name}</td>
            <td>${hero.origin_description}</td>
            <td>${hero.superpowers}</td>
            <td>${hero.catch_phrase}</td>
        <td><img height=160 src="${hero.images}"></td>
        </tr>`
    }
})

//images 
let arrImages = ['superman.png', 'spiderman.jpg', 'hulk.jpg', 'batman.jpg', 'iron-man.jpg'];
console.log(arrImages);