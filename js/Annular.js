//3D图片环

window.onload=function(){
	(function(){
		var oUl=document.getElementById('ul');
		var N=11;
		
		for (var i=0;i<N;i++) {
			var oLi=document.createElement('li');
			oLi.style.background='url(img/Annular/'+(i+1)+'.jpg) no-repeat';
			oUl.appendChild(oLi);
			
			//出来
			oLi.style.transition='1s all ease '+200*(N-i)+'ms';
			
			(function(oLi,index){
				setTimeout(function(){
					oLi.style.transform='rotateY('+360/N*index+'deg) translateZ(350px)';
				},0);
			})(oLi,i);
			
			function clearMove(){
				for(var i=0;i<aLi.length;i++)
				{
					aLi[i].style.transition='none';
				}
			}
			
			function startMove(){
				for(var i=0;i<aLi.length;i++)
				{
					aLi[i].style.transition='1s all ease';
				}
			}
			
			//键盘事件
			 var  x=0;
			var aLi=oUl.children;
			aLi[0].addEventListener('transitionend',function(){
				clearMove();
				startMove();
				change(x);
			},false);
			
			document.onkeydown=function(ev){
				switch(ev.keyCode)
				{
					case 37:
						x-=360/N;
						change(x);
//						document.title=x
						break;
						case 39:
							x+=360/N;
//							document.title=x
							change(x);
							break;
				}
			};
			
			
			//拖拽事件
			var lastX=0;
			var iSpeed=0;
			var timer=null;
			document.onmousedown=function(ev){
				clearMove();
				clearInterval(timer);
				var disX=ev.clientX-x;
				
				document.onmousemove=function(ev){
					x=ev.clientX-disX;
//					document.title=x
					change(x);
					iSpeed=x-lastX;
					lastX=x;
					
				};
				document.onmouseup=function(){
					document.onmousemove=null;
					document.onmouseup=null;
					
					timer=setInterval(function(){
						iSpeed*=0.95;
						x+=iSpeed;
						change(x);
					},30)
				};
				return false;
			};
			
			
			function change(x){
				for(var i=0;i<aLi.length;i++)
				{
					aLi[i].style.transform='rotateY('+(360/N*i+x)+'deg) translateZ(350px)';
					
					var d=Math.abs((360/N*i+x)%360);
					
					d>180 && (d=360-d);
					
					d=180-d;
					
					var scale=d/180;
					
					scale<0.3 && (scale=0.3);
					
					aLi[i].style.opacity=scale;
				}
			}
			
		}
		
	})();
};
























