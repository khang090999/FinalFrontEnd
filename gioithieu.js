var check=0;
var checkShow=0;

function showList()
{
   
    var d2=document.getElementById("list");    
    var d3=document.getElementById("menu"); 
    var d4=document.getElementById("ngang");
    var d5=document.getElementById("cheo");
    if(checkShow==0)
    {
        d2.style.transform="translateX(-200px)";
        d3.style.transform="translateX(-200px)";
        d4.style.display="none";
        d5.style.display="inline";
    checkShow=1;
    }
    else
    {
        
        d2.style.transform="translateX(0)";
        d3.style.transform="translateX(0)";
        d4.style.display="inline";
        d5.style.display="none";
        checkShow=0;
    }
}
window.onscroll = function() {scroll()};
function scroll()
{
    var d=document.getElementById("menu");    
    var menu=document.getElementById("showMenu");
    var logoWhite=document.getElementById("whiteLogo");
    var logoBlack=document.getElementById("blackLogo");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        menu.style.color="grey";
        d.style.backgroundColor="white";
        logoWhite.style.display="none";
        logoBlack.style.display="inline"; 
    } else {
        menu.style.color="white";
        d.style.background="none";
        logoWhite.style.display="inline";
        logoBlack.style.display="none"; 
    }
}