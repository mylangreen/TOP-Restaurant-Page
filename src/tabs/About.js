import "../styles/About.css";
import outlet1Img from "../images/outlet1.jpg";
import outlet2Img from "../images/outlet2.jpg";
import outlet3Img from "../images/outlet3.jpg";

function About(){
    const container = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.textContent = "About Page";
    const about = document.createElement("div");
    about.setAttribute("id", "about");
    for(let i = 0; i<3; i++){
        let title;
        let imgUrl;
        if (i === 0) {
            title = "Outlet1";
            imgUrl = outlet1Img;
        }
        else if (i === 1){
            title = "Outlet2";
            imgUrl = outlet2Img;   
        }
        else {
            title = "Outlet3";
            imgUrl = outlet3Img;
        }
        const card = document.createElement("div");
        card.classList.add("outlet-card");
        const header = document.createElement("h2");
        header.textContent = title;
        const outletContainer = document.createElement("div");
        outletContainer.classList.add("outlet-details");
        const details = document.createElement("p");
        details.classList.add("details");
        details.textContent = "contacts of the outlet goes here";
        const outletPic = document.createElement("img");
        outletPic.src = imgUrl;
        outletContainer.append(details, outletPic);
        card.append(header, outletContainer);
        about.append(card);
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


    container.append(h1, about, footer);

    return container;
};

export default About;