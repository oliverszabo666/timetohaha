function _load() {
    function clickEvent(){
        document.querySelector("body").classList.toggle("clicked");
    }
    document.getElementById("menu").addEventListener("click", clickEvent);
}


window.addEventListener("load", _load);
