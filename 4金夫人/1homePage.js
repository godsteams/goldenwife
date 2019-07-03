	var carousel={
		"imgs":document.getElementsByClassName("banner-img"),
		"lis":document.getElementsByClassName("banner-li"),
		"buts":document.getElementsByClassName("banner-botton"),
		"div":document.getElementsByClassName("banner")[0],
		"index":0,
			"init":function(){
				this.buts[0].onclick=function(){
					carousel.jianin();
					carousel.show();
				};
				this.buts[1].onclick=function(){
					carousel.jiain();
					carousel.show();
				};
				timer=setInterval(function(){
					carousel.buts[1].onclick();
				},3000)
				
				for(var i=0;i<this.lis.length;i++){
					carousel.lis[i].onclick=function(){
					carousel.index=this.getAttribute("lv");
					carousel.show();
					};
				};
				carousel.tz();
				carousel.ks();
				
			},
			"show":function(){
			
				for(var i=0;i<this.imgs.length;i++){
			this.imgs[i].style.display="none"
				}
				carousel.imgs[this.index].style.display="block"
					for(var i=0;i<this.lis.length;i++){
						this.lis[i].style.background=""
					}
				carousel.lis[this.index].style.background="blue"
			},
			
			"jiain":function(){
					this.index++;
				if(carousel.index==3){
					carousel.index=0;
				}
			},
			"jianin":function(){
				this.index--;
				if(carousel.index==-1){
					carousel.index=2;
				}
			},
			"tz":function(){
				carousel.div.onmouseover=function(){
					clearInterval(timer);
				}
			},
			"ks":function(){
				timer=setInterval(function(){
					carousel.buts[0].onclick();
				},3000)
			}
				
	}
		window.onload=function(){
			carousel.init();
		}