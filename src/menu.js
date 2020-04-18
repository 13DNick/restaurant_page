function menuDisplayController() {
    
    
    const container = document.createElement("div");
    const content = document.querySelector("#content");
    content.append(container);

    const title = document.createElement("div");
    title.style.border = "solid";
    title.textContent = "Menu";
    container.append(title);

    const text = document.createElement("div");
    
    text.textContent = "If you a chick and you hot you can get this dick";
    container.append(text);

    return container; 
};



export {menuDisplayController}