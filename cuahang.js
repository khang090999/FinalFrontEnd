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
var hcm=[
    {
        path:"hcmLarge1.jpg",
        add:"400A HUỲNH TẤN PHÁT",
        district:"",
    },
    {
        path:"hcmLarge2.jpg",
        add:"93/5B NGUYỄN ẢNH THỦ",
        district:"",
    },
    {
        path:"hcmLarge3.jpg",
        add:"112-114 ĐƯỜNG 9A, KHU DÂN CƯ TRUNG SƠN",
        district:"",
    },
    {
        path:"hcmLarge4.jpg",
        add:"45 ĐƯỜNG SỐ 5 CƯ XÁ BÌNH THỚI",
        district:"",
    },
    {
        path:"hcmLarge5.jpg",
        add:"44 HÒA BÌNH",
        district:"",
    },
    {
        path:"hcmLarge6.jpg",
        add:"111-113 BÌNH PHÚ",
        district:"",
    },
    {
        path:"hcmLarge7.jpg",
        add:"223 VÕ VĂN TẦN",
        district:"",
    },
    {
        path:"hcmLarge8.jpg",
        add:"1056 HẬU GIANG",
        district:"Quận 6",
    },
    {
        path:"hcmLarge9.jpg",
        add:"270 BÙI HỮU NGHĨA ",
        district:"Q.Bình Thạnh",
    },
    {
        path:"hcmLarge10.jpg",
        add:"45 TRƯƠNG CÔNG ĐỊNH",
        district:"Phường 14, Tân Bình",
    },
    {
        path:"hcmLarge11.jpg",
        add:"559 TRƯỜNG CHINH",
        district:"Q.Tân Bình",
    },
    {
        path:"hcmLarge12.jpg",
        add:"185 TRẦN HUY LIỆU",
        district:"Q.Phú Nhuận",
    },
    {
        path:"hcmLarge13.jpg",
        add:"771 PHAN VĂN TRỊ",
        district:"Q.Gò Vấp",
    },
    {
        path:"hcmLarge14.jpg",
        add:"685 ÂU CƠ",
        district:"",
    },
    {
        path:"hcmLarge15.jpg",
        add:"51 THĂNG LONG",
        district:"Phường 4, Quận Tân Bình",
    },
    {
        path:"hcmLarge16.jpg",
        add:"329 LÃNH BINH THĂNG",
        district:"Phường 8, Quận 11",
    },
    {
        path:"hcmLarge17.jpg",
        add:"177 ĐỘC LẬP",
        district:"Phường Tân Quý, Quận Tân Phú",
    },
    {
        path:"hcmLarge18.jpg",
        add:"178 HẬU GIANG",
        district:"Phường 6, Quận 6",
    },
    {
        path:"hcmLarge19.jpg",
        add:"787 LŨY BÁN BÍCH",
        district:"Quận Tân Phú",
    },
    {
        path:"hcmLarge20.jpg",
        add:"18 HỒNG HÀ",
        district:"Phường 2, Quận Tân Bình",
    },
    {
        path:"hcmLarge21.jpg",
        add:"68 HUỲNH VĂN BÁNH",
        district:"Phường 15, Quận Phú Nhuận",
    },
    {
        path:"hcmLarge22.jpg",
        add:"6A NGÔ THỜI NHIỆM",
        district:"Phường 7, Quận 3",
    },
    {
        path:"hcmLarge23.jpg",
        add:"258 NGUYỄN VĂN LƯỢNG",
        district:"Phường 17, Quận Gò Vấp",
    },
    {
        path:"hcmLarge24.jpg",
        add:"132 HOÀNG HOA THÁM",
        district:"Phường 12, Quận Tân Bình",
    },
    {
        path:"hcmLarge25.jpg",
        add:"8BIS HOÀNG HOA THÁM",
        district:"Phường 7, Quận Bình Thạnh",
    },
    {
        path:"hcmLarge26.jpg",
        add:"371 NGUYỄN KIỆM",
        district:"Phường 3, Quận Gò Vấp",
    },
    {
        path:"hcmLarge27.jpg",
        add:"02 ĐỐNG ĐA",
        district:"Phường 2, Quận Tân Bình",
    },
    {
        path:"hcmLarge28.jpg",
        add:"14B1 NGÔ TẤT TỐ",
        district:"Quận Bình Thạnh",
    },
    {
        path:"hcmLarge29.jpg",
        add:"572 BA THÁNG HAI ",
        district:"Quận 10",
    },
    {
        path:"hcmLarge30.jpg",
        add:"197 XÔ VIẾT NGHỆ TĨNH",
        district:"Quận Bình Thạnh",
    },
    {
        path:"hcmLarge31.jpg",
        add:"41 NGUYỄN THÁI SƠN",
        district:"Quận Gò Vấp",
    },
    {
        path:"hcmLarge32.jpg",
        add:"AEON MALL BÌNH TÂN",
        district:"Quầy 33, tầng 3 - AEON Bình Tân, Quận Bình Tân ",
    },
    {
        path:"hcmLarge33.jpg",
        add:"403A-405A LÊ ĐẠI HÀNH",
        district:"Quận 11, TP Hồ Chí Minh",
    },
    {
        path:"hcmLarge34.jpg",
        add:"183 F TRẦN QUỐC THẢO",
        district:"Quận 3, TP Hồ Chí Minh",
    },
    {
        path:"hcmLarge35.jpg",
        add:"313 NGUYỄN THỊ THẬP",
        district:"Quận 7, TP Hồ Chí Minh",
    },
    {
        path:"hcmLarge36.jpg",
        add:"141 NGUYỄN THÁI BÌNH",
        district:"Quận 1, TP Hồ Chí Minh",
    },
    {
        path:"hcmLarge37.jpg",
        add:"469 ĐIỆN BIÊN PHỦ",
        district:"Quận Bình Thạnh, TP Hồ Chí Minh",
    },
    {
        path:"hcmLarge38.jpg",
        add:"130 CÁCH MẠNG THÁNG TÁM",
        district:"Phường 10, Quận 3, TP Hồ Chí Minh",
    },
    {
        path:"hcmLarge39.jpg",
        add:"43 HOA HỒNG",
        district:"Quận Phú Nhuận, TP Hồ Chí Minh",
    },
    {
        path:"hcmLarge40.jpg",
        add:"293 QUANG TRUNG",
        district:"Phường 10, Quận Gò Vấp, TP Hồ Chí Minh",
    },
    {
        path:"hcmLarge41.jpg",
        add:"798 SƯ VẠN HẠNH",
        district:"Quận 10, TP Hồ Chí Minh",
    },
    {
        path:"hcmLarge42.jpg",
        add:"42 TRẦN CAO VÂN",
        district:"Phường 6, Quận 3, TP Hồ Chí Minh",
    },
    {
        path:"hcmLarge43.jpg",
        add:"17B ÚT TỊCH",
        district:"Quận Tân Bình, TP Hồ Chí Minh",
    },
    {
        path:"hcmLarge44.jpg",
        add:"114 VÕ VĂN NGÂN",
        district:"Quận Thủ Đức, TP Hồ Chí Minh",
    },
    {
        path:"hcmLarge45.png",
        add:"249 LÝ THƯỜNG KIỆT",
        district:"Quận 11, TP Hồ Chí Minh",
    },
    {
        path:"hcmLarge46.jpg",
        add:"281 LÊ VĂN SỸ",
        district:"Phường 1, Quận Tân Bình, TP Hồ Chí Minh",
    },
    {
        path:"hcmLarge47.jpg",
        add:"62 NGUYỄN HUY TỰ",
        district:"Quận 1, TP Hồ Chí Minh",
    },
    {
        path:"hcmLarge48.jpg",
        add:"86-88 CAO THẮNG",
        district:"Quận 3, TP Hồ Chí Minh",
    },
    {
        path:"hcmLarge49.jpg",
        add:"112 BÀU CÁT",
        district:"Quận Tân Bình, TP Hồ Chí Minh",
    },
];
var hn=[
    {
        path:"hnLarge1.jpg",
        add:"12 LÔ 14B, KĐT MỚI TRUNG YÊN, TRUNG HÒA, P.TRUNG HÒA",
        district:"",
    },
    {
        path:"hnLarge2.jpg",
        add:"122 BÙI THỊ XUÂN",
        district:"Quận Hai Bà Trưng, Hà Nội",
    },
    {
        path:"hnLarge3.jpg",
        add:"160 NGUYỄN KHÁNH TOÀN",
        district:"Phường Quan Hoa, Quận Cầu Giấy",
    },
    {
        path:"hnLarge4.jpg",
        add:"23M HAI BÀ TRƯNG",
        district:"Quận Hoàn Kiếm, Hà Nội",
    },
    {
        path:"hnLarge5.jpg",
        add:"259 KIM MÃ",
        district:"Quận Ba Đình, Hà Nội",
    },
    {
        path:"hnLarge6.jpg",
        add:"56A BÀ TRIỆU",
        district:"Quận Hoàn Kiếm, Hà Nội",
    },
    {
        path:"hnLarge7.jpg",
        add:"68A HOÀNG CẦU",
        district:"Quận Đống Đa",
    },
    {
        path:"hnLarge8.jpg",
        add:"RICE CITY LINH ĐÀM",
        district:"Tầng G1, Toà nhà Trung-Rice City Linh Đàm, Quận Hoàng Mai",
    },
    {
        path:"hnLarge9.jpg",
        add:"TIMES CITY",
        district:"Tầng 1-T05 Times City, 458 Minh Khai, Quận Hai Bà Trưng",
    },
    {
        path:"hnLarge10.jpg",
        add:"XUÂN THỦY",
        district:"Tòa nhà Richland, số 2 ngõ 181, Xuân Thủy",
    },
];
var dn=[
    {
        path:"dnLarge1.jpg",
        add:"233 TRẦN PHÚ",
        district:"Quận Hải Châu",
    },
    {
        path:"dnLarge2.jpg",
        add:"435 LÊ DUẨN",
        district:"Quận Thanh Khê",
    },
    {
        path:"dnLarge3.jpg",
        add:"80 PASTEUR",
        district:"Quận Hải Châu",
    },
];
var vt=[
    {
        path:"vtlarge1.jpg",
        add:"5 BA CU",
        district:"Phường 1, Thành phố Vũng Tàu",
    },
];
var bh=[
    {
        path:"bhLarge1.jpg",
        add:"240 PHẠM VĂN THUẬN",
        district:"P.Thống Nhất, tỉnh Đồng Nai",
    },
]
function addPlace()
{
    var a=document.getElementById("hcm");
    var b=document.getElementById("hn");
    var c=document.getElementById("dn");
    var d=document.getElementById("vt");
    var e=document.getElementById("bh");
    var p1=document.createElement("p");
    var p2=document.createElement("p");
    var p3=document.createElement("p");
    var p4=document.createElement("p");
    var p5=document.createElement("p");
    p1.className="number";
    p2.className="number";
    p3.className="number";
    p4.className="number";
    p5.className="number";
    p1.innerHTML="Tìm thấy <span>"+hcm.length+ "</span> cửa hàng";
    p2.innerHTML="Tìm thấy <span>"+hn.length+ "</span> cửa hàng";
    p3.innerHTML="Tìm thấy <span>"+dn.length+ "</span> cửa hàng";
    p4.innerHTML="Tìm thấy <span>"+vt.length+ "</span> cửa hàng";
    p5.innerHTML="Tìm thấy <span>"+bh.length+ "</span> cửa hàng";
    a.appendChild(p1);
    b.appendChild(p2);
    c.appendChild(p3);
    d.appendChild(p4);
    e.appendChild(p5);
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
        img.className="myImg";
        img.src=hcm[i].path;
        div.appendChild(s);
        div.appendChild(img);
        div.appendChild(p);
        p.appendChild(h4);
        p.appendChild(span);
        a.appendChild(div);
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
        img.className="myImg";
        img.src=hn[i].path;
        div.appendChild(s);
        div.appendChild(img);
        div.appendChild(p);
        p.appendChild(h4);
        p.appendChild(span);
        b.appendChild(div);
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
        img.className="myImg";
        img.src=dn[i].path;
        div.appendChild(s);
        div.appendChild(img);
        div.appendChild(p);
        p.appendChild(h4);
        p.appendChild(span);
        c.appendChild(div);
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
        img.className="myImg";
        img.src=vt[i].path;
        div.appendChild(s);
        div.appendChild(img);
        div.appendChild(p);
        p.appendChild(h4);
        p.appendChild(span);
        d.appendChild(div);
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
        img.className="myImg";
        img.src=bh[i].path;
        div.appendChild(s);
        div.appendChild(img);
        div.appendChild(p);
        p.appendChild(h4);
        p.appendChild(span);
        e.appendChild(div);
    }
}
function show(id1,id2,id3,id4,id5)
{
    id1.style.display="inline";
    id2.style.display="none";
    id3.style.display="none";
    id4.style.display="none";
    id5.style.display="none";
}
function getPlace()
{
    var s= document.getElementById("myList").value;
    var a=document.getElementById("hcm");
    var b=document.getElementById("hn");
    var c=document.getElementById("dn");
    var d=document.getElementById("bh");
    var e=document.getElementById("vt");
    if(s=="Hồ Chí Minh")
    show(a,b,c,d,e);
    else if(s=="Hà Nội")
    show(b,a,c,d,e);   
    else if(s=="Đà Nẵng")
    show(c,a,b,d,e);   
    else if(s=="Biên Hòa")
    show(d,a,c,b,e);   
    else if(s=="Vũng Tàu")
    show(e,a,c,d,b);   
}

var t;
function getInfo()
{
    var but= document.getElementById("find");
    var list=document.getElementById("myList");
     t= document.getElementById("myList").value;
    but.onclick=function()
    {
        window.scrollTo(
            {
                top:450,
                left:0,
                behavior:'smooth'
            })
        var s= document.getElementById("myList").value;
        var a=document.getElementById("hcm");
        var b=document.getElementById("hn");
        var c=document.getElementById("dn");
        var d=document.getElementById("bh");
        var e=document.getElementById("vt");
        if(t!=s){
        if(s=="Hồ Chí Minh")
        show(a,b,c,d,e);
        else if(s=="Hà Nội")
        show(b,a,c,d,e);   
        else if(s=="Đà Nẵng")
        show(c,a,b,d,e);   
        else if(s=="Biên Hòa")
        show(d,a,c,b,e);   
        else if(s=="Vũng Tàu")
        show(e,a,c,d,b);   
        t=s;
        }
    }
}
function expand(){
var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");

for(var i=0;i<img.length;i++){
img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
}
var sp1 = document.getElementsByClassName("close")[0];
sp1.onclick = function() { 
  modal.style.display = "none";
}
}
