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