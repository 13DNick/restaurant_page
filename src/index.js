import {landingDisplayController, landingClear} from "./landing";
import {menuDisplayController} from "./menu";
import {contactDisplayController} from "./contact";


const content = document.querySelector("#content");

function populateTabs(){
    const landingTab = document.createElement("button");
    landingTab.id = "landing";
    landingTab.textContent = "Home";

    const tablinks = document.createElement("div");
    
    const menuTab = document.createElement("button");
    menuTab.id = "menu";
    menuTab.textContent = "Menu";
    const contactTab = document.createElement("button");
    contactTab.textContent = "contact";
    contactTab.id = "contact";
    tablinks.append(landingTab, menuTab, contactTab);
    return tablinks;
}

content.append(populateTabs());

content.append(landingDisplayController());

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        content.removeChild(content.lastChild);
        
        if(button.id == "landing"){
            content.append(landingDisplayController());
        } else if (button.id == "menu"){
            content.append(menuDisplayController());
        } else{
            content.append(contactDisplayController());
        }
    });
});




