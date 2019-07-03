//左边收缩菜单
function cd(){
	var spans=document.querySelectorAll(".tree span")

var tree=document.querySelector(".tree")
var lis=document.querySelectorAll(".li")
for(var i=0;i<spans.length;i++){
	spans[i].onclick=function(){
			for(var i=0;i<spans.length;i++){
				spans[i].style.color=""
				spans[i].nextElementSibling.className="hide";
				spans[i].parentNode.className="closed";
				}
			
		if(this.parentNode.className=="closed"){
			this.nextElementSibling.className="show"
			this.parentNode.className="open";
			
			this.style.color="red";
		}else{
			this.parentNode.className="closed";
			this.nextElementSibling.className="hide";
			
		}
		
	}
}
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		for(var i=0;i<lis.length;i++){
			lis[i].style.color="";
			lis[i].style.border="";
		}
		this.style.color="darkred";
		this.style.borderBottom="1px solid #999"
	}
}
}
cd();
//轮播
function lb(){
		var car=document.querySelector(".carousel_img");
			var buts=document.querySelectorAll(".carousel button");
			var index=0;
			var imgs=document.querySelectorAll(".carousel_img img")
			var modal=document.querySelector(".modal")
			var modalButs=document.querySelectorAll(".modal button")
			var modImg=document.querySelector(".modal img")
			var arr=["images/psjd1.png.jpg","images/psjd2.png.jpg","images/psjd3.png.png","images/psjd4.png.png","images/psjd5.png.png","images/psjd6.png.png"]
			for(var i=0;i<buts.length;i++){ 
				buts[i].onclick=function(){
					if(this.innerHTML=="&lt;"){
						index--;
						if(index==-1){
							index=3
						}
						car.style.left=-index*320+"px";
					}else{
						index++;
						if(index==4){
							index=0
						}
						car.style.right=index*320+"px";
					}
				}
			}
			
	for(var i=0;i<imgs.length;i++){
		imgs[i].onclick=function(){ 
		 j=parseInt(this.getAttribute("lv"))
			modal.style.display="block";
			modImg.src=arr[j];
		}
	}
	for(var i=0;i<modalButs.length;i++){
		modalButs[i].onclick=function(){ 
			if(this.innerHTML=="&lt;"){
					j--;
					if(j==-1){
						j=5
						}
					modImg.src=arr[j];
			}else if(this.innerHTML=="&gt;"){
					j++;
					if(j==6){
						j=0
						}
					modImg.src=arr[j];
			}else{
				modal.style.display="none";	
			}

		}
	}
	
}
lb();
//模块切换
function mkjh(){
	var h3s=document.querySelectorAll(".shooting-left div:nth-of-type(1) h3")
	console.log(h3s);
	var h5=document.querySelector(".shooting h5");
	console.log(h5);
	var ul=document.querySelectorAll(".tree:nth-of-type(1) ul");
	var lis0=ul[0].children;
	var lis1=ul[1].children;
	var choose=document.querySelectorAll(".choose")
	var shooting=document.querySelectorAll(".shooting-main");
	console.log(shooting[0])
	for(var i=0;i<lis0.length;i++){
			lis0[i].onclick=function(){
				j=this.getAttribute("lv");
					for(var i=0;i<lis0.length;i++){
						shooting[i].style.display="none";
						lis0[i].style.color="";
						lis0[i].style.borderBottom=""
						h3s[i].style.display="none";
					}
				shooting[j].style.display="block";
				h3s[0].style.display="block";
				this.style.color="darkred";
				this.style.borderBottom="1px solid #999"
				b=this.innerHTML;
				h5.innerHTML="首页：选择摄影 > <b>"+b+"</b>"
			}
	}
		for(var i=0;i< lis1.length;i++){
			lis1[i].onclick=function(){
				j=this.getAttribute("lv");
					for(var i=0;i< choose.length;i++){
						choose[i].style.display="none";
						lis1[i].style.color="";
						lis1[i].style.borderBottom=""
						h3s[i].style.display="none";
						
					}	
				choose[j].style.display="block";
				h3s[1].style.display="block";
				this.style.color="darkred";
				this.style.borderBottom="1px solid #999"
				b=this.innerHTML;
				h5.innerHTML="首页：选择摄影 > <b>"+b+"</b>"
				
			}
		}

}
mkjh();