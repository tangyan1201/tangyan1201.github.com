
//turn1

ready(function(){
	var oBox=document.querySelector('.box');
	oBox.style.backgroundImage='url(img/turn/0.jpg)'; 
	
	var F=true;//翻页变量，控制创建布局
	var G=true;//3D颗粒翻转变量，控制创建布局
	var B=true;//爆炸
	var C=true;//立方体
	var iNow=0;
	var bFalse=true;
		//3D颗粒翻转
		(function(){
			var oGrain=document.getElementById('grain');
			var Gflage=true;
			
			oGrain.onclick=function(){
				oBox.style.backgroundImage='none';
				if(G==true)
				{
					oBox.innerHTML='';
					var R=4;
					var C=7;
					for(var r=0;r<R;r++)
					{
						for(var c=0;c<C;c++)
						{
							//创建span
							var oSpan=document.createElement('span');
							oSpan.style.width=oBox.offsetWidth/C+'px';
							oSpan.style.height=oBox.offsetHeight/R+'px';
							oBox.appendChild(oSpan);
							//放span的位置
							oSpan.style.top=r*oSpan.offsetHeight+'px';
							oSpan.style.left=c*oSpan.offsetWidth+'px';
							
							//给span加面;
							
							oSpan.innerHTML='<em class="gfront"></em><em class="gback"></em>';
							
							//给span换面；换图片图片可以连续
							oSpan.children[0].style.backgroundImage='url(img/turn/'+iNow%4+'.jpg)';
							oSpan.children[1].style.backgroundImage='url(img/turn/'+(iNow+1)%4+'.jpg)';
							//定位置
							oSpan.children[0].style.backgroundPosition=-c*oSpan.offsetWidth+'px '+-r*oSpan.offsetHeight+'px';
							oSpan.children[1].style.backgroundPosition=-c*oSpan.offsetWidth+'px '+-r*oSpan.offsetHeight+'px';
							
							oSpan.dataset.r=r;
//							console.log('r='+oSpan.dataset.r)
	                    	oSpan.dataset.c=c;
//	                    	console.log('c='+oSpan.dataset.c)
						}
					}
					G=false;
				}
				
				if(Gflage==false)
				{
					return;
				}
				Gflage=false;
				
				
				var aSpan=oBox.children;
				
				iNow++;
				
				for(var i=0;i<aSpan.length;i++)
				{
					var delayTime=(parseInt(aSpan[i].dataset.r)+parseInt(aSpan[i].dataset.c))*200;
					
					aSpan[i].style.transition='.4s all ease '+delayTime+'ms';
					
					aSpan[i].style.transform='perspective(800px) rotateY(180deg)';
				}
//				alert(1)
				 aSpan[aSpan.length-1].addEventListener('transitionend',tEnd,false);
				 
				 
				 //最后一个块完成执行的函数
				 function tEnd(){
//					alert(2)
					for(var i=0;i<aSpan.length;i++)
					{
						aSpan[i].style.transition='none';
						aSpan[i].style.transform='perspective(800px) rotateY(0deg)';
						
						//换图
						
						aSpan[i].children[0].style.backgroundImage='url(img/turn/'+iNow%4+'.jpg)';
	//						console.log('0='+'url(img/turn/'+iNow%4+'.jpg)')
						aSpan[i].children[1].style.backgroundImage='url(img/turn/'+(iNow+1)%4+'.jpg)';
	//						console.log('1='+'url(img/turn/'+(iNow+1)%4+'.jpg)')
						aSpan[aSpan.length-1].removeEventListener('transitionend',tEnd,false);
					}
					Gflage=true;
					F=true;
					B=true;
					C=true;
				}
				 
			};
			
			
		})();
			
		//翻页
		;(function(){
			
			var Fblage=true;
//			var iNow=0
			var oFlip=document.getElementById('flip');
			
			oFlip.onclick=function(){
				if(F==true)
				{
					oBox.style.backgroundImage='url(img/turn/'+iNow%4+'.jpg)';
					oBox.innerHTML='<div class="page"><div class="ffront"></div><div class="fback"></div></div><div class="page2"></div>';
					
					//换图，接着上面3D的图片
					
					document.querySelector('.ffront').style.backgroundImage='url(img/turn/'+iNow%4+'.jpg)';
					
					document.querySelector('.fback').style.backgroundImage='url(img/turn/'+(iNow+1)%4+'.jpg)';
					document.querySelector('.page2').style.backgroundImage='url(img/turn/'+(iNow+1)%4+'.jpg)';
						
					F=false;
					
					return;
				}
				
				var oPage=document.querySelector('.page');
				var oPage2=document.querySelector('.page2');
				var Fback=document.querySelector('.fback');
				var Ffront=document.querySelector('.ffront');
				
				if(Fblage==false)
				{
					return;
				}
				Fblage=false;
				
				iNow++;
				oPage.style.transition='1s all ease';
				oPage.style.transform='perspective(800px) rotateY(-180deg)';
				
				oPage.addEventListener('transitionend',tEd,false);
				
				 //最后一个块完成执行的函数
				function tEd()
				{
					oPage.style.transition='none';
					oPage.style.transform='perspective(800px) rotateY(0deg)';
					
					//换图
					oBox.style.backgroundImage='url(img/turn/'+iNow%4+'.jpg)';
					Ffront.style.backgroundImage='url(img/turn/'+iNow%4+'.jpg)';
					
					Fback.style.backgroundImage='url(img/turn/'+(iNow+1)%4+'.jpg)';
					oPage2.style.backgroundImage='url(img/turn/'+(iNow+1)%4+'.jpg)';
					Fblage=true;
					oPage.removeEventListener('transitionend',tEd,false);
					G=true;
					B=true;
					C=true;
				}
				
			};
			
		})();
		
		
		
		//爆炸
		
		;(function(){
			
			var  oBlow=document.getElementById('blow');
			var Bflage=true;
			oBlow.onclick=function(){
				var divC=oBox.offsetWidth/2;
//				布局
				if(B)
				{
					oBox.innerHTML='';
					var R=4;
					var C=7;
					
					for(var r=0;r<R;r++)
					{
						for(var c=0;c<C;c++)
						{
							
							oBox.style.backgroundImage='url(img/turn/'+(iNow+1)%4+'.jpg)'
							var oI=document.createElement('i');
							//宽高
							oI.style.width=oBox.offsetWidth/C+'px';
							oI.style.height=oBox.offsetHeight/R+'px';
							oBox.appendChild(oI);
							//位置
							oI.style.left=oI.offsetWidth*c+'px';
							oI.style.top=oI.offsetHeight*r+'px';
							
							//定位图片
							oI.style.backgroundImage='url(img/turn/'+iNow%4+'.jpg)';
							oI.style.backgroundPosition=-c*oI.offsetWidth+'px '+-r*oI.offsetHeight+'px';
						}
					}
					
					B=false;
				}


				//效果
				var aI=oBox.children;
				
				if(Bflage==false)
				{
					return;
				}
				Bflage=false;
				
				iNow++;
				
				for(var i=0;i<aI.length;i++)
				{
					aI[i].style.transition='.6s all ease';
					
					var x=aI[i].offsetWidth/2+aI[i].offsetLeft-divC;
					var y=aI[i].offsetHeight/2+aI[i].offsetTop-oBox.offsetHeight/2;
					
					aI[i].style.transform='perspective(800px)  translate3d('+x+'px,'+y+'px,0) scale(1.2) rotateX('+rnd(-180,180)+'deg) rotateY('+rnd(-180,180)+'deg)';
					aI[i].style.opacity=0;
				}
				
				aI[aI.length-1].addEventListener('transitionend',tEnd,false);
				
				function tEnd()
				{
					for (var i=0;i<aI.length;i++) {
						aI[i].style.transition='none';
						aI[i].style.transform='perspective(800px) translate3d(0px,0px,0px) scale(1) rotateX(0deg) rotateY(0deg)';
						aI[i].style.opacity=1;
						
						aI[i].style.backgroundImage='url(img/turn/'+iNow%4+'.jpg)';
						oBox.style.backgroundImage='url(img/turn/'+(iNow+1)%4+'.jpg)';
					}
					Bflage=true;
					aI[aI.length-1].removeEventListener('transitionend',tEnd,false);
					G=true;
					F=true;
					C=true;
				}
				
			};
			
			
			function rnd(n,m)
			{
				return Math.floor(Math.random()*(m-n)+n)
			}
			
		})();
	
	//立方体
	;(function(){
		var y=0;
		var oldy=0;
		var oCubic=document.getElementById('cubic-btn');
		
		oCubic.onclick=function(){
			if(C)
			{
				oBox.style.backgroundImage='none'
				oBox.innerHTML='';
				oBox.innerHTML='<div class="cubic"><div class="above"></div><div class="after"></div><div class="left"></div><div class="right"></div></div>'
				C=false;
			}
			var oCu=document.querySelector('.cubic');
			
			var timer=setInterval(function(){
				y+=5;
				oCu.style.transform='rotateY('+(oldy+y)+'deg)';
				if(y==90)
				{
					clearInterval(timer);
					oldy+=y;
					y=0;
					F=true;
					G=true;
					B=true;
				}
			},30);
			
		};
		
	})();
	
		
	
	
});

