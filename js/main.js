function $(el) {
    return document.querySelector(el)
}

let homeBtn = $(".menu")
let homeCloseBtn = $(".close")
let mainLeft = $(".mainLeftPart")
let mainRight = $(".mainRightPart")
let homePart = $(".homeWrapper")
let ifr = document.querySelectorAll("iframe")
let videoWrapper = document.querySelectorAll(".videoWrapper")

homeBtn.onclick = () => {
    for (v of videoWrapper) {
        v.style.width = "315px"
        v.style.height = "200px"
    }
    for (i of ifr) {
        i.style.width = "100%"
        i.style.height = "100%"

    }
    mainLeft.style.display = "none"
    homePart.style.display = "flex"
    mainRight.style.width = "95%"
}
homeCloseBtn.onclick = () => {
    for (v of videoWrapper) {
        v.style.width = "350px"
        v.style.height = "230px"
    }
    for (i of ifr) {
        i.style.width = "100%"
        i.style.height = "100%"

    }
    mainLeft.style.display = "flex"
    homePart.style.display = "none"
    mainRight.style.width = "auto"
    mainRight.style.width = "100%"
}

let videosList = $(".videosList")

function videosRenderer(array) {
    videosList.innerHTML = null
    for (let element of array) {
        let videoItem = document.createElement('li')
        let topDiv = document.createElement('div')
        let bottomDiv = document.createElement('div')
        let h3 = document.createElement('h3')
        let span = document.createElement('span')

        li.classList.add('films-item')
        topDiv.innerHTML = element.sourceLink
        h3.textContent = element.title
        let found = genresList.find(e => e.id == element.genre)
        span.textContent = found.genre
        bottomDiv.classList.add('films-text-wrapper')

        bottomDiv.appendChild(h3)
        bottomDiv.appendChild(span)
        li.appendChild(topDiv)
        li.appendChild(bottomDiv)
        filmsList.appendChild(li)
    }
}