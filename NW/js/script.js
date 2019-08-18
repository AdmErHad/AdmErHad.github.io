const _Btn = document.querySelector(".gn-ham"),
_Sidebar = document.querySelector(".gn-sidebar"),
_botElement = document.querySelector(".gn-ham-bot"),
_topElement = document.querySelector(".gn-ham-top");

function _toggleClass() {
    document.body.classList.toggle("curtain");
    window.scrollTo(0,0);
    _Sidebar.classList.toggle("opened");
    _topElement.classList.toggle("active");
    _botElement.classList.toggle("active");
};

_Btn.addEventListener("click", _toggleClass);