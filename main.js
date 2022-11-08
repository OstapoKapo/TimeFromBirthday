getBgcForStartPage();
$('.startPage').slideDown(0);
$('.loadPage').slideUp(0); 
$('.infoPage').slideUp(0); 
$('.final').slideUp(0);

let underAva = localStorage.getItem('timeFromB') || 'red';  

$('.startPage__btn').click(function(){
    $('.startPage').slideUp(0);
    $('.infoPage').slideDown(500); 
})

myD.onchange = function(){
    $('.loadPage').slideDown(300);
    $('.infoPage').slideUp(0); 
       let x = setInterval(function(){
        $('.final').slideDown(300);
        $('.loadPage').slideUp(0); 
        clearTimeout(x)
    },3000)

    let ms = new Date(myD.value).getTime();
let cur = new Date();
let diff = cur - ms;
let years = Math.floor(diff/(365*24*60*60*1000));
let yearssms = diff%(365*24*60*60*1000);

let days = Math.floor(yearssms/(24*60*60*1000));
let daysms = diff%(24*60*60*1000);
let hoursInfo =Math.floor(daysms/(60*60*1000));
let hoursms= diff%(60*60*1000);
let minutesInfo =Math.floor(hoursms/(60*1000));
let minutesms= diff%(60*1000);
let sec = Math.floor(minutesms/1000);
localStorage.setItem('timeFromB', years +':'+days+':'+hoursInfo+':'+minutesInfo+':'+sec)
let timeFromB =  years +':'+days+':'+hoursInfo+':'+minutesInfo+':'+sec;
clockYear.innerText = years;
clockDay.innerText = days;
clockHour.innerText = hoursInfo;
clockMinut.innerText = minutesInfo;
}

function getBgcForStartPage(){
    let startPageBgcColor1 ='#' + Math.floor(Math.random()*16777217).toString(16);
    let startPageBgcColor2 ='#' + Math.floor(Math.random()*16777217).toString(16);
    $('.startPage').css('background','linear-gradient(90deg, '+startPageBgcColor1+', '+startPageBgcColor2+')');
    $('.loadPage').css('background','linear-gradient(90deg, '+startPageBgcColor1+', '+startPageBgcColor2+')');
    $('body').css('background','linear-gradient(90deg, '+startPageBgcColor1+', '+startPageBgcColor2+')');
    $('infoPage').css('background','linear-gradient(90deg, '+startPageBgcColor1+', '+startPageBgcColor2+')');
}




