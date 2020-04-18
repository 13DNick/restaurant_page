

function landingDisplayController() {
    
    const container = document.createElement("div");
    container.id = "container";
    const content = document.querySelector("#content");
    content.append(container);

    const title = document.createElement("div");
    title.style.border = "solid";
    title.textContent = "Organic Nick's";
    container.append(title);

    const text = document.createElement("div");
    
    text.textContent = "Lorem Ipsum is simply dummy text of" +
    "the printing and typesetting industry. Lorem Ipsum has" +
    "been the industry's standard dummy text ever since the" +
    "1500s, when an unknown printer took a galley of type and" +
    "scrambled it to make a type specimen book. It has survived" +
    "not only five centuries, but also the leap into" +
    "electronic typesetting, remaining essentially" +
    "unchanged. It was popularised in the 1960s with the" 
    +"release of Letraset sheets containing Lorem Ipsum" +
    "passages and more recently with desktop publishing" +
    "software like Aldus PageMaker including versions of Lorem Ipsum.";
    container.append(text);

    return container; 
};

function landingClear(){
    const container = document.querySelector("#container");
    container.remove();
}



export {landingDisplayController, landingClear}