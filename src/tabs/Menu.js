import "../styles/Menu.css";
import coffeeImg from "../images/coffee.jpg";
import lunchImg from "../images/lunch1.jpg";
import dinnerImg from "../images/dinner2.jpg";
import dessertImg from "../images/dessert3.jpg";

function Menu(){
    const container = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.textContent = "Our Menu";
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    for(let i = 0; i<4; i++){
        let title;
        let imgUrl;
        if (i === 0) {
            title = "Breakfast";
            imgUrl = coffeeImg;
        }
        else if (i === 1){
            title = "Lunch";
            imgUrl = lunchImg;   
        }
        else if (i === 2){
            title = "Dinner";
            imgUrl = dinnerImg;
        }
        else {
            title = "Dessert";
            imgUrl = dessertImg;
        }
        const card = document.createElement("div");
        card.classList.add("meal-card");
        const header = document.createElement("h2");
        header.textContent = title;
        const menuContainer = document.createElement("div");
        menuContainer.classList.add("meal-details");
        const details = document.createElement("p");
        details.classList.add("details");
        details.textContent = "list of meals on the menu goes here";
        const mealPic = document.createElement("img");
        mealPic.src = imgUrl;
        menuContainer.append(details, mealPic);
        card.append(header, menuContainer);
        menu.append(card);
    };
    
    const footer = document.createElement("div");
    footer.setAttribute("id","footer");
    const footerHeader = document.createElement("h3");
    footerHeader.textContent = "GET IN TOUCH W1TH US";
    const nextLine = document.createElement("br");
    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "Email: tastybites@gmail.com";
    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "Phone: +027325238";
    footer.append(footerHeader, paragraph1, paragraph2);


    container.append(h1, menu, footer);

    return container;
};

export default Menu;