function scroll(){
    var scrollpos = window.scrollY;
    var header = document.getElementById("header");

    document.addEventListener('scroll', function(){
        scrollpos = window.scrollY;
        if(scrollpos > 10){
            header.classList.add("bg-white");
            header.classList.add("shadow");
        }
        else{
            header.classList.remove("bg-white");
            header.classList.remove("shadow");
        }
    })
}
