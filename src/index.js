import "./styles/Index.css";
import Home from "./tabs/Home";
import Menu from "./tabs/Menu";
import About from "./tabs/About";

const container = document.querySelector("#content");
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => button.addEventListener("click", (e)=>{
    container.textContent = "";
    const tabName = e.target.innerText;
    if(tabName === "Home"){
        Home();
    }
    if(tabName === "Menu"){
        Menu();
    }
    if(tabName === "About"){
        About();
    }
}));
Home();
