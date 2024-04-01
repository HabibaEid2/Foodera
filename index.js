// header
let header = document.querySelector("header") ; 
let spans = document.getElementById("spans") ; 
let menu = document.getElementById("menu") ; 
spans.onclick = clickNav ; 
function clickNav() {
    menu.style.cssText = 
    `height : 260px ;`
    spans.onclick = removeClickNav ;
}

function removeClickNav() {
    menu.style.cssText = 
    `height : 0 ;`
    spans.onclick = clickNav ; 
}

// rates
let num = document.querySelectorAll(".num") ;
for(let i of num) {
    let j = 0 ; 
    let check = setInterval(() => {
    let value = i.innerHTML ; 
    i.innerHTML = +value+j; 
    j++
    if (j === 50) clearInterval(check)

    }, 100);
}

// start the video 
let videoParent = document.getElementById("theVideo") ; 
let closeVideo = document.getElementById("closeVideo") ; 
let getVideo = document.getElementById("getVideo") ; 
closeVideo.onclick = function () {
    videoParent.style.display = "none" ; 
}
getVideo.onclick = function() {
    videoParent.style.display = "flex"
}
// end the video 

// start fresh section
let freshBg = document.getElementById("fresh") ; 
onscroll = function() {
    if (window.scrollY >= 50) {
        header.style.cssText = `
        background-color : white ; 
        box-shadow: 0 0 12px #b2aaaa;
    `
    }
    else {
        header.style.cssText = `
        background-color : transparent ; 
        box-shadow: none `
    }
}
// end fresh section