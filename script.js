const a = document.querySelector("a");
a.addEventListener("click",() => {
    let h1 = document.querySelector("h1");
    // if(h1.innerText === "I'm Mr. JavaScript!") {
    //     h1.innerText = "It has changed!";
    // } else {
    //     h1.innerText = "I'm Mr. JavaScript!";
    // }
    h1.innerText == "I'm Mr. JavaScript!" ? h1.innerText ="It has changed!" : h1.innerText = "I'm Mr. JavaScript!";
});
