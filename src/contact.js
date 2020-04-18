function contactDisplayController() {
    
    
    const container = document.createElement("div");
    const content = document.querySelector("#content");
    content.append(container);

    const title = document.createElement("div");
    title.style.border = "solid";
    title.textContent = "Contact";
    container.append(title);

    const text = document.createElement("div");
    
    text.textContent = "You can find me at yo mommas house";
    container.append(text);

    return container; 
};



export {contactDisplayController}