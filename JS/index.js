document.getElementById("menuButton").addEventListener("mouseenter", menuOnHover)
document.getElementById("menuButton").addEventListener("mouseleave", menuOnLeave)
function menuOnHover() {
    document.getElementById("menuButtonImage").src = "../images/menuIconOnHover.png"
}
function menuOnLeave() {
    document.getElementById("menuButtonImage").src = "../images/menuIcon.png"

}