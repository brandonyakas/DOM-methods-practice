const parentElement = document.querySelector("body")

const buttonElement = document.createElement("button")

parentElement.append(buttonElement)

buttonElement.append("Remove")

const mainElement = document.createElement("main")

parentElement.append(mainElement)

const imageElement = document.createElement("img")

imageElement.src = "https://assets1.ignimgs.com/2019/05/29/dndmobile-br-1559158957902_1280w.jpg"

imageElement.className = "image"

mainElement.append(imageElement)

const linkElement = document.createElement("a")

linkElement.href = "https://dnd.wizards.com/dungeons-and-dragons"

linkElement.className = "link"

mainElement.append(linkElement)

linkElement.append("Dungeons & Dragons")

buttonElement.addEventListener("click", function() {

    mainElement.remove()
    
})