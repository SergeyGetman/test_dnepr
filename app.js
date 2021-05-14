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
    // for (let i = 0; i < array.length; i++) {
    //     let tr = document.createElement('tr');
    //     let td = document.createElement('td');
    //     document.querySelector("tbody").appendChild(tr);
    //     document.querySelector("tbody").innerHTML += array[i].nick_name + '\n' +
    //         array[i].real_name + " ";
    // }

    // console.log(array);
    // let tr = document.createElement('tr');

    // for (let i = 0; i < 5; i++) {
    //     let td = document.createElement('td');
    //     tr.appendChild(td);
    //     td.innerHTML += array[i].nick_name + "\n";
    // }
    for (let hero of array) {
        document.querySelector("tbody").innerHTML += `<tr>
            <td>${hero.nick_name}</td>
            <td>${hero.real_name}</td>
            <td>${hero.origin_description}</td>
            <td>${hero.superpowers}</td>
            <td>${hero.catch_phrase}</td>
        <td></td>
        </tr>`
    }



})