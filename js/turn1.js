
//turn1

ready(function(){
	var oBox=document.querySelector('.box');
	oBox.style.backgroundImage='url(img/turn/0.jpg)'; 
	var iNow=0;
	
	function clear()
	{
		oBox.innerHTML='';
		oBox.style.transform='';
		oBox.style.transition='none';
	}
	
	var bFalse=false;
		//3D颗粒翻转
		(function(){
			var oGrain=document.getElementById('grain');
			
			oGrain.onclick=function(){
				if(bFalse)
				{
					return
				}
				bFalse=true;
				
				oBox.style.backgroundImage='none';
					clear();
					Grain();
				
				
				var aSpan=oBox.children;
				
				setTimeout(function(){
				
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
						bFalse=false;
					}
				},30);
				 
			};
			
			//创建3D颗粒翻转布局
			function Grain(){
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
			}
			
			
		})();
			
		//翻页
		;(function(){
			
//			var iNow=0
			var oFlip=document.getElementById('flip');
			
			oFlip.onclick=function(){
					if(bFalse)
					{
						return
					}
					bFalse=true;
					clear();
					Flip();
						
				var oPage=document.querySelector('.page');
				var oPage2=document.querySelector('.page2');
				var Fback=document.querySelector('.fback');
				var Ffront=document.querySelector('.ffront');
				
				setTimeout(function(){
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
						oPage.removeEventListener('transitionend',tEd,false);
						bFalse=false;
					}
				},30);
				
			};
			
			
			//翻页布局
			function Flip(){
				oBox.style.backgroundImage='url(img/turn/'+iNow%4+'.jpg)';
					oBox.innerHTML='<div class="page"><div class="ffront"></div><div class="fback"></div></div><div class="page2"></div>';
					
					//换图，接着上面3D的图片
					
					document.querySelector('.ffront').style.backgroundImage='url(img/turn/'+iNow%4+'.jpg)';
					
					document.querySelector('.fback').style.backgroundImage='url(img/turn/'+(iNow+1)%4+'.jpg)';
					document.querySelector('.page2').style.backgroundImage='url(img/turn/'+(iNow+1)%4+'.jpg)';
			};
			
		})();
		
		//爆炸
		;(function(){
			
			var  oBlow=document.getElementById('blow');
			oBlow.onclick=function(){
				if(bFalse)
				{
					return
				}
				bFalse=true;
				var divC=oBox.offsetWidth/2;
//				布局
					clear();
					Blow();
					

				//效果
				var aI=oBox.children;
				
				
				setTimeout(function(){
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
						aI[aI.length-1].removeEventListener('transitionend',tEnd,false);
						bFalse=false;
					}
				},30);
				
			};
			
			function rnd(n,m)
			{
				return Math.floor(Math.random()*(m-n)+n)
			}
			
			
			
			//爆炸布局
			function Blow(){
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
			}
			
		})();
	
	//立方体
	;(function(){
		var y=0;
		var oldy=0;
		var oCubic=document.getElementById('cubic-btn');
		
		oCubic.onclick=function(){
				if(bFalse)
				{
					return
				}
				bFalse=true;
				clear();
			
					oBox.style.backgroundImage='none'
					oBox.innerHTML='<div class="cubic"><div class="above"></div><div class="right"></div>';
					var oCu=document.querySelector('.cubic');
					
					oCu.style.transformStyle='preserve-3d';
					oCu.style.transform='perspective(800px) scale3d(0.7,0.7,0.7) rotateY(0deg)';
					
					var oAbove=document.querySelector('.above');
					var oRight=document.querySelector('.right');
					
					oAbove.style.backgroundImage='url(img/turn/'+iNow%4+'.jpg)';
					oRight.style.backgroundImage='url(img/turn/'+(iNow+1)%4+'.jpg)';
					
					setTimeout(function(){
						iNow++;
						
						oCu.style.transition='1s all ease';
						oCu.style.transform='perspective(800px) scale3d(0.7,0.7,0.7) rotateY(-90deg)'
						
						oCu.addEventListener('transitionend',tEnd,false)
						
						function tEnd()
						{
							oCu.style.transition='none';
							oCu.style.transform='perspective(800px) scale3d(0.7,0.7,0.7) rotateY(0deg)';
							oAbove.style.backgroundImage='url(img/turn/'+iNow%4+'.jpg)';
							oRight.style.backgroundImage='url(img/turn/'+(iNow+1)%4+'.jpg)';
							oCu.removeEventListener('transitionend',tEnd,false);
							bFalse=false;
						}
				},0)
			
		};
		
		
	})();
	
});

