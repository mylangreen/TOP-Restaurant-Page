import heroImg from "../images/heroImg.jpg";
import "../styles/Home.css"
import foods from "../foods.js";

function Home(){
    const container = document.querySelector("#content");
    const homeContainer = document.createElement("div");
    homeContainer.setAttribute("id","home");
    const hero = document.createElement("div");
    hero.setAttribute("id","hero");
    const heroPic = document.createElement("img");
    heroPic.setAttribute("id","hero-img");
    heroPic.src = heroImg;
    heroPic.width = 500;
    const heroText = document.createElement("div");
    heroText.setAttribute("id","hero-text");
    const headerText = document.createElement("h1");
    headerText.textContent = "Deliciousness in every bite!";
    const otherText = document.createElement("p");
    otherText.textContent = "Want to enjoy some of the tastiest cuisines around the world?";
    const heroBtn = document.createElement("button");
    heroBtn.textContent = "Order Now";
    heroText.append(headerText, otherText, heroBtn);
    hero.append(heroText,heroPic);

    const section2 = document.createElement("div");
    section2.setAttribute("id", "main-content");
    const sectionHeader = document.createElement("h2");
    sectionHeader.textContent = "Customer's favourites";
    const cardList = document.createElement("div");
    cardList.setAttribute("id","home-cards");
    foods.forEach(food => {
        const card = document.createElement("div");
        card.classList.add("food-card");
        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");
        const name = document.createElement("h3");
        name.textContent = food.name;
        const foodImg = document.createElement("img");
        foodImg.src = food.img;
        const price = document.createElement("p");
        price.textContent = "$"+food.price;
        cardInfo.append(name, price)
        card.append(foodImg, cardInfo);
        cardList.appendChild(card);
    })
    section2.append(sectionHeader, cardList);
    
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

    homeContainer.append(hero,section2, footer);

    container.appendChild(homeContainer);
    return container;
};
export default Home;