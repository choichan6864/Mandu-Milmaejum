const go_gi_Mandu = document.querySelector(".js-go-gi-mandu");
const kimchi_Mandu = document.querySelector(".js-kimchi-mandu");
const china_Mandu = document.querySelector(".js-china-mandu");
const real_china_Mandu = document.querySelector(".js-real-china-mandu");

let nowManduImage_text = document.querySelector(".js-go-gi-mandu-text");

function go_gi_Mandu_Image() {
    const mandu_image = document.querySelector(".mandu-click-image img");
    const mandu_text = document.querySelector(".js-go-gi-mandu-text");
    mandu_image.src = "img/2571984057DCADD324-1953117213.jpg";
    if(nowManduImage_text != undefined){

        nowManduImage_text.classList.add("hidden");
    }
    
    mandu_text.classList.remove("hidden");
    nowManduImage_text = mandu_text;    
}

function kimchi_Mandu_Image() {
    const mandu_image = document.querySelector(".mandu-click-image img");
    const mandu_text = document.querySelector(".js-kimchi-mandu-text");
    mandu_image.src = "img/kimchi-mandu.jpg";
    if(nowManduImage_text != undefined){

        nowManduImage_text.classList.add("hidden");
    }
    mandu_text.classList.remove("hidden");
    nowManduImage_text = mandu_text;    
}

function china_Mandu_Image() {
    const mandu_image = document.querySelector(".mandu-click-image img");
    const mandu_text = document.querySelector(".js-china-mandu-text");
    mandu_image.src = "img/china-mandu.jpg";
    if(nowManduImage_text != undefined){

        nowManduImage_text.classList.add("hidden");
    }
    mandu_text.classList.remove("hidden");
    nowManduImage_text = mandu_text;    
}

function real_china_Mandu_Image() {
    const mandu_image = document.querySelector(".mandu-click-image img");
    const mandu_text = document.querySelector(".js-real-china-mandu-text");
    mandu_image.src = "img/real_china_mandu.jpg";
    if(nowManduImage_text != undefined){

        nowManduImage_text.classList.add("hidden");
    }
    mandu_text.classList.remove("hidden");
    nowManduImage_text = mandu_text;    
}


go_gi_Mandu.addEventListener("mousemove", go_gi_Mandu_Image);
kimchi_Mandu.addEventListener("mousemove", kimchi_Mandu_Image);
china_Mandu.addEventListener("mousemove", china_Mandu_Image);
real_china_Mandu.addEventListener("mousemove", real_china_Mandu_Image);