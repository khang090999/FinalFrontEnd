var check=0;
var checkShow=0;
var listPlace= [
    {
        path:"tphcm.jpg",
        place: "TẠI HỒ CHÍ MINH",
        number: "(Tất cả 49 cửa hàng)",
    },
    {
        path:"hanoi.jpg",
        place: "TẠI HÀ NỘI",
        number: "(Tất cả 10 cửa hàng)",
    },
    {
        path:"danang.jpg",
        place: "TẠI ĐÀ NẴNG",
        number: "(Tất cả 3 cửa hàng)",
    },
    {
        path:"bienhoa.jpg",
        place: "TẠI BIÊN HÒA",
        number: "(Tất cả 1 cửa hàng)",
    },
    {
        path:"vungtau.jpg",
        place: "TẠI VŨNG TÀU",
        number: "(Tất cả 1 cửa hàng)",
    },
]; 
function showBig()
{  
    var d=document.getElementById("showMore");        
    if(check==0){    
        d.style.transform="scale(1.2)";
        check=1;
    }
    else
    {
        d.style.transform="scale(1)";
        check=0;
    }
}

function setTime()
{
    var d1 = window.setInterval(showBig,1200);
} 
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
function getPlace()
{
    var places= document.getElementById("store");
    var div=document.getElementsByClassName("place");
    for(var i=0;i<listPlace.length;i++)
    {
        var p= document.createElement("p");
        var h4=document.createElement("h4");
        var span= document.createElement("span");     
        h4.innerHTML= listPlace[i].place;
        span.innerHTML=listPlace[i].number;
        var img=document.createElement("img");
        img.src=listPlace[i].path;
        div[i].appendChild(img);
        div[i].appendChild(p);
        p.appendChild(h4);
        p.appendChild(span);
    }
}   
var hcm=[
    {
        path:"hcm1.jpg",
        add:"400A HUỲNH TẤN PHÁT",
        district:"",
    },
    {
        path:"hcm2.jpg",
        add:"93/5B NGUYỄN ẢNH THỦ",
        district:"",
    },
    {
        path:"hcm3.jpg",
        add:"112-114 ĐƯỜNG 9A, KHU DÂN CƯ TRUNG SƠN",
        district:"",
    },
    {
        path:"hcm4.jpg",
        add:"45 ĐƯỜNG SỐ 5 CƯ XÁ BÌNH THỚI",
        district:"",
    },
    {
        path:"hcm5.jpg",
        add:"44 HÒA BÌNH",
        district:"",
    },
    {
        path:"hcm6.jpg",
        add:"111-113 BÌNH PHÚ",
        district:"",
    },
    {
        path:"hcm7.jpg",
        add:"223 VÕ VĂN TẦN",
        district:"",
    },
    {
        path:"hcm8.jpg",
        add:"1056 HẬU GIANG",
        district:"Quận 6",
    },
    {
        path:"hcm9.jpg",
        add:"270 BÙI HỮU NGHĨA ",
        district:"Q.Bình Thạnh",
    },
    {
        path:"hcm10.jpg",
        add:"45 TRƯƠNG CÔNG ĐỊNH",
        district:"Phường 14, Tân Bình",
    },
    {
        path:"hcm11.jpg",
        add:"559 TRƯỜNG CHINH",
        district:"Q.Tân Bình",
    },
    {
        path:"hcm12.jpg",
        add:"185 TRẦN HUY LIỆU",
        district:"Q.Phú Nhuận",
    },
    {
        path:"hcm13.jpg",
        add:"771 PHAN VĂN TRỊ",
        district:"Q.Gò Vấp",
    },
    {
        path:"hcm14.jpg",
        add:"685 ÂU CƠ",
        district:"",
    },
    {
        path:"hcm15.jpg",
        add:"51 THĂNG LONG",
        district:"Phường 4, Quận Tân Bình",
    },
    {
        path:"hcm16.jpg",
        add:"329 LÃNH BINH THĂNG",
        district:"Phường 8, Quận 11",
    },
    {
        path:"hcm17.jpg",
        add:"177 ĐỘC LẬP",
        district:"Phường Tân Quý, Quận Tân Phú",
    },
    {
        path:"hcm18.jpg",
        add:"178 HẬU GIANG",
        district:"Phường 6, Quận 6",
    },
    {
        path:"hcm19.jpg",
        add:"787 LŨY BÁN BÍCH",
        district:"Quận Tân Phú",
    },
    {
        path:"hcm20.jpg",
        add:"18 HỒNG HÀ",
        district:"Phường 2, Quận Tân Bình",
    },
    {
        path:"hcm21.jpg",
        add:"68 HUỲNH VĂN BÁNH",
        district:"Phường 15, Quận Phú Nhuận",
    },
    {
        path:"hcm22.jpg",
        add:"6A NGÔ THỜI NHIỆM",
        district:"Phường 7, Quận 3",
    },
    {
        path:"hcm23.jpg",
        add:"258 NGUYỄN VĂN LƯỢNG",
        district:"Phường 17, Quận Gò Vấp",
    },
    {
        path:"hcm24.jpg",
        add:"132 HOÀNG HOA THÁM",
        district:"Phường 12, Quận Tân Bình",
    },
    {
        path:"hcm25.jpg",
        add:"8BIS HOÀNG HOA THÁM",
        district:"Phường 7, Quận Bình Thạnh",
    },
    {
        path:"hcm26.jpg",
        add:"371 NGUYỄN KIỆM",
        district:"Phường 3, Quận Gò Vấp",
    },
    {
        path:"hcm27.jpg",
        add:"02 ĐỐNG ĐA",
        district:"Phường 2, Quận Tân Bình",
    },
    {
        path:"hcm28.jpg",
        add:"14B1 NGÔ TẤT TỐ",
        district:"Quận Bình Thạnh",
    },
    {
        path:"hcm29.jpg",
        add:"572 BA THÁNG HAI ",
        district:"Quận 10",
    },
    {
        path:"hcm30.jpg",
        add:"197 XÔ VIẾT NGHỆ TĨNH",
        district:"Quận Bình Thạnh",
    },
    {
        path:"hcm31.jpg",
        add:"41 NGUYỄN THÁI SƠN",
        district:"Quận Gò Vấp",
    },
    {
        path:"hcm32.jpg",
        add:"AEON MALL BÌNH TÂN",
        district:"Quầy 33, tầng 3 - AEON Bình Tân, Quận Bình Tân ",
    },
    {
        path:"hcm33.jpg",
        add:"403A-405A LÊ ĐẠI HÀNH",
        district:"Quận 11, TP Hồ Chí Minh",
    },
    {
        path:"hcm34.jpg",
        add:"183 F TRẦN QUỐC THẢO",
        district:"Quận 3, TP Hồ Chí Minh",
    },
    {
        path:"hcm35.jpg",
        add:"313 NGUYỄN THỊ THẬP",
        district:"Quận 7, TP Hồ Chí Minh",
    },
    {
        path:"hcm36.jpg",
        add:"141 NGUYỄN THÁI BÌNH",
        district:"Quận 1, TP Hồ Chí Minh",
    },
    {
        path:"hcm37.jpg",
        add:"469 ĐIỆN BIÊN PHỦ",
        district:"Quận Bình Thạnh, TP Hồ Chí Minh",
    },
    {
        path:"hcm38.jpg",
        add:"130 CÁCH MẠNG THÁNG TÁM",
        district:"Phường 10, Quận 3, TP Hồ Chí Minh",
    },
    {
        path:"hcm39.jpg",
        add:"43 HOA HỒNG",
        district:"Quận Phú Nhuận, TP Hồ Chí Minh",
    },
    {
        path:"hcm40.jpg",
        add:"293 QUANG TRUNG",
        district:"Phường 10, Quận Gò Vấp, TP Hồ Chí Minh",
    },
    {
        path:"hcm41.jpg",
        add:"798 SƯ VẠN HẠNH",
        district:"Quận 10, TP Hồ Chí Minh",
    },
    {
        path:"hcm42.jpg",
        add:"42 TRẦN CAO VÂN",
        district:"Phường 6, Quận 3, TP Hồ Chí Minh",
    },
    {
        path:"hcm43.jpg",
        add:"17B ÚT TỊCH",
        district:"Quận Tân Bình, TP Hồ Chí Minh",
    },
    {
        path:"hcm44.jpg",
        add:"114 VÕ VĂN NGÂN",
        district:"Quận Thủ Đức, TP Hồ Chí Minh",
    },
    {
        path:"hcm45.png",
        add:"249 LÝ THƯỜNG KIỆT",
        district:"Quận 11, TP Hồ Chí Minh",
    },
    {
        path:"hcm46.jpg",
        add:"281 LÊ VĂN SỸ",
        district:"Phường 1, Quận Tân Bình, TP Hồ Chí Minh",
    },
    {
        path:"hcm47.jpg",
        add:"62 NGUYỄN HUY TỰ",
        district:"Quận 1, TP Hồ Chí Minh",
    },
    {
        path:"hcm48.jpg",
        add:"86-88 CAO THẮNG",
        district:"Quận 3, TP Hồ Chí Minh",
    },
    {
        path:"hcm49.jpg",
        add:"112 BÀU CÁT",
        district:"Quận Tân Bình, TP Hồ Chí Minh",
    },
];
var hn=[
    {
        path:"hn1.jpg",
        add:"12 LÔ 14B, KĐT MỚI TRUNG YÊN, TRUNG HÒA, P.TRUNG HÒA",
        district:"",
    },
    {
        path:"hn2.jpg",
        add:"122 BÙI THỊ XUÂN",
        district:"Quận Hai Bà Trưng, Hà Nội",
    },
    {
        path:"hn3.jpg",
        add:"160 NGUYỄN KHÁNH TOÀN",
        district:"Phường Quan Hoa, Quận Cầu Giấy",
    },
    {
        path:"hn4.jpg",
        add:"23M HAI BÀ TRƯNG",
        district:"Quận Hoàn Kiếm, Hà Nội",
    },
    {
        path:"hn5.jpg",
        add:"259 KIM MÃ",
        district:"Quận Ba Đình, Hà Nội",
    },
    {
        path:"hn6.jpg",
        add:"56A BÀ TRIỆU",
        district:"Quận Hoàn Kiếm, Hà Nội",
    },
    {
        path:"hn7.jpg",
        add:"68A HOÀNG CẦU",
        district:"Quận Đống Đa",
    },
    {
        path:"hn8.jpg",
        add:"RICE CITY LINH ĐÀM",
        district:"Tầng G1, Toà nhà Trung-Rice City Linh Đàm, Quận Hoàng Mai",
    },
    {
        path:"hn9.jpg",
        add:"TIMES CITY",
        district:"Tầng 1-T05 Times City, 458 Minh Khai, Quận Hai Bà Trưng",
    },
    {
        path:"hn10.jpg",
        add:"XUÂN THỦY",
        district:"Tòa nhà Richland, số 2 ngõ 181, Xuân Thủy",
    },
];
var dn=[
    {
        path:"dn1.jpg",
        add:"233 TRẦN PHÚ",
        district:"Quận Hải Châu",
    },
    {
        path:"dn2.jpg",
        add:"435 LÊ DUẨN",
        district:"Quận Thanh Khê",
    },
    {
        path:"dn3.jpg",
        add:"80 PASTEUR",
        district:"Quận Hải Châu",
    },
];
var vt=[
    {
        path:"vt1.jpg",
        add:"5 BA CU",
        district:"Phường 1, Thành phố Vũng Tàu",
    },
];
var bh=[
    {
        path:"bh1.jpg",
        add:"240 PHẠM VĂN THUẬN",
        district:"P.Thống Nhất, tỉnh Đồng Nai",
    },
]
function addPlace()
{
    var places= document.getElementById("image");
    var div=document.getElementsByClassName("main");
    var a=document.getElementById("hcm");
    var b=document.getElementById("hn");
    var c=document.getElementById("dn");
    var d=document.getElementById("vt");
    var e=document.getElementById("bh");
    var scr= document.getElementsByClassName("screen");
    for(var i=0;i<hcm.length;i++)
    {             
        
        var div=document.createElement("div");
        div.className="listPlace";
        var p= document.createElement("p");
        var s=document.createElement("span");
        s.className="coffee";
        var h4=document.createElement("h4");
        var span= document.createElement("span");
        s.innerHTML="THE COFFEE HOUSE";
        h4.innerHTML= hcm[i].add;
        span.innerHTML=hcm[i].district;
        span.className="district";
        var img=document.createElement("img");
        img.src=hcm[i].path;
        div.appendChild(s);
        div.appendChild(img);
        div.appendChild(p);
        p.appendChild(h4);
        p.appendChild(span);
        scr[parseInt(i/3)].appendChild(div);
    }
    for(var i=0;i<hn.length;i++)
    {             
        
        var div=document.createElement("div");
        div.className="listPlace";
        var p= document.createElement("p");
        var s=document.createElement("span");
        s.className="coffee";
        var h4=document.createElement("h4");
        var span= document.createElement("span");
        s.innerHTML="THE COFFEE HOUSE";
        h4.innerHTML= hn[i].add;
        span.innerHTML=hn[i].district;
        span.className="district";
        var img=document.createElement("img");
        img.src=hn[i].path;
        div.appendChild(s);
        div.appendChild(img);
        div.appendChild(p);
        p.appendChild(h4);
        p.appendChild(span);
        scr[parseInt(i/3)+17].appendChild(div);
    }
    for(var i=0;i<dn.length;i++)
    {             
        
        var div=document.createElement("div");
        div.className="listPlace";
        var p= document.createElement("p");
        var s=document.createElement("span");
        s.className="coffee";
        var h4=document.createElement("h4");
        var span= document.createElement("span");
        s.innerHTML="THE COFFEE HOUSE";
        h4.innerHTML= dn[i].add;
        span.innerHTML=dn[i].district;
        span.className="district";
        var img=document.createElement("img");
        img.src=dn[i].path;
        div.appendChild(s);
        div.appendChild(img);
        div.appendChild(p);
        p.appendChild(h4);
        p.appendChild(span);
        scr[parseInt(i/3)+21].appendChild(div);
    }
    for(var i=0;i<bh.length;i++)
    {             
        
        var div=document.createElement("div");
        div.className="listPlace";
        var p= document.createElement("p");
        var s=document.createElement("span");
        s.className="coffee";
        var h4=document.createElement("h4");
        var span= document.createElement("span");
        s.innerHTML="THE COFFEE HOUSE";
        h4.innerHTML= bh[i].add;
        span.innerHTML=bh[i].district;
        span.className="district";
        var img=document.createElement("img");
        img.src=bh[i].path;
        div.appendChild(s);
        div.appendChild(img);
        div.appendChild(p);
        p.appendChild(h4);
        p.appendChild(span);
        scr[parseInt(i/3)+22].appendChild(div);
    }
    for(var i=0;i<vt.length;i++)
    {             
        
        var div=document.createElement("div");
        div.className="listPlace";
        var p= document.createElement("p");
        var s=document.createElement("span");
        s.className="coffee";
        var h4=document.createElement("h4");
        var span= document.createElement("span");
        s.innerHTML="THE COFFEE HOUSE";
        h4.innerHTML= vt[i].add;
        span.innerHTML=vt[i].district;
        span.className="district";
        var img=document.createElement("img");
        img.src=vt[i].path;
        div.appendChild(s);
        div.appendChild(img);
        div.appendChild(p);
        p.appendChild(h4);
        p.appendChild(span);
        scr[parseInt(i/3)+23].appendChild(div);
    }
    
}
function changeColor1(id1,id2,id3,id4,id5,id6,id7,id8,id9,id10,id11,id12,id13,id14,id15,id16,id17)
{
    id1.style.backgroundColor="rgb(234, 128, 36)";
    id2.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id3.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id4.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id5.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id6.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id7.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id8.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id9.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id10.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id11.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id12.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id13.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id14.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id15.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id16.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id17.style.backgroundColor="rgba(234, 128, 36,0.5)";
}
function changeColor2(id1,id2,id3,id4)
{
    id1.style.backgroundColor="rgb(234, 128, 36)";
    id2.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id3.style.backgroundColor="rgba(234, 128, 36,0.5)";
    id4.style.backgroundColor="rgba(234, 128, 36,0.5)";
}
function slide(distance)
{
    var id= document.getElementById("hcm");
    id.style.transform="translateX(-"+distance+"px)";
}
function slide1(distance)
{
    var id= document.getElementById("hn");
    id.style.transform="translateX(-"+distance+"px)";
}

function test()
{
    var email= document.checkForm.t2;
    var name= document.checkForm.t1; 
    var  list=document.checkForm.getElementsByTagName("span");
    if(name.value.match("^[a-zA-Z]")==null)
    {
        list[0].style.display="inline";
        name.focus();
        return false; 
    }
    else
    list[0].style.display="none";
    if(email.value.match("^[a-zA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+([.][a-zA-Z]+)?$")==null)
    { 
        list[1].style.display="inline";
        email.focus();
        return false; 
    }
    else
    {
    list[1].style.display="none";  
    }
    return true;

}
function showImg(id1, id2, id3, id4, id5)
{
    id1.style.display="inline";
    id2.style.display="none";
    id3.style.display="none";
    id4.style.display="none";
    id5.style.display="none";
}
function goSmooth(distance)
{
    window.scrollTo({
        top: distance, 
        left: 0, 
        behavior: 'smooth' 
      });

}
