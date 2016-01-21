//turn

ready(function(){
	var i=0;
	var oBox=document.querySelector('.box');
	oBox.style.backgroundImage='url(img/turn/0.jpg)';
	//3D颗粒翻转
	(function(){
		
		var oGrain=document.getElementById('grain');

		var a=i;
		//点击
			var iNow=0;
            var bReady=true;
            oGrain.onclick=function(){
            	oBox.style.backgroundImage='none';
            	
            	if(a==0)
		    	{
		    		oBox.innerHTML='none';
		    		var R=4;
					var C=7;
					
					for(var r=0;r<R;r++)
					{
						for(var c=0;c<C;c++)
						{
							var oSpan=document.createElement('span');
							oSpan.style.width=oBox.offsetWidth/C+'px';
							oSpan.style.height=oBox.offsetHeight/R+'px';
							oBox.appendChild(oSpan);
							
							oSpan.style.left=c*oSpan.offsetWidth+'px';
				            oSpan.style.top=r*oSpan.offsetHeight+'px';
							
							//给span加面
							oSpan.innerHTML='<em class="front"></em><em class="back"></em>';
				            oSpan.children[0].style.backgroundPosition=-c*oSpan.offsetWidth+'px '+-r*oSpan.offsetHeight+'px';
				            oSpan.children[1].style.backgroundPosition=-c*oSpan.offsetWidth+'px '+-r*oSpan.offsetHeight+'px';
				
				            oSpan.dataset.r=r;
				            oSpan.dataset.c=c;
						}
					}
					a=2;
		    	}
            	
                if(bReady==false){
                    return;
                }
                bReady=false;

                var aSpan=oBox.children;

                iNow++;

                for(var i=0; i<aSpan.length; i++){
                    var delayTime=(parseInt(aSpan[i].dataset.r)+parseInt(aSpan[i].dataset.c))*200;

                    aSpan[i].style.transition='.4s all ease '+delayTime+'ms';

                    aSpan[i].style.transform='perspective(800px) rotateY(180deg)';
                }

                //最后一个运动结束
                aSpan[aSpan.length-1].addEventListener('transitionend',function(){
                    //瞬间回去
                    for(var i=0; i<aSpan.length; i++){
                        aSpan[i].style.transition='none';
                        aSpan[i].style.transform='perspective(800px) rotateY(0deg)';

                        //换图
	                     aSpan[i].children[0].style.backgroundImage='url(img/turn/'+iNow%4+'.jpg)';
                        aSpan[i].children[1].style.backgroundImage='url(img/turn/'+(iNow+1)%4+'.jpg)';
                    }
                    bReady=true;
                },false)
            };
            
	})();
	
	
	
	//翻页
	(function(){
		
		var Flip=document.getElementById('flip');
		var b=i+1;
        var iNow=0;
        var bReady=true;
        Flip.onclick=function(){
        	
        	//创建 子集
	    	if(b==1)
			{
				oBox.innerHTML='none';
				oBox.style.backgroundImage='url(img/turn/0.jpg)';
				oBox.innerHTML='<div class="page"><div class="front2"></div><div class="back2"></div></div><div class="page2"></div>'
				b=3;
				return;
			}
			
			else{
				if(bReady==false)return;
		        bReady=false;
			}
				var oPage=document.querySelector('.page');
			    var oPage2=document.querySelector('.page2');
			    var oFront=document.querySelector('.front2');
			    var oBack=document.querySelector('.back2');
		        
            iNow++;

            oPage.style.transition='1s all ease';
            oPage.style.transform='perspective(800px) rotateY(-180deg)';

            function tEnd(){
                //瞬间
                oPage.style.transition='none';
                oPage.style.transform='perspective(800px) rotateY(0deg)';

                //换图
                oBox.style.backgroundImage='url(img/turn/'+iNow%4+'.jpg)';
                oFront.style.backgroundImage='url(img/turn/'+iNow%4+'.jpg)';

                oBack.style.backgroundImage='url(img/turn/'+(iNow+1)%4+'.jpg)';
                oPage2.style.backgroundImage='url(img/turn/'+(iNow+1)%4+'.jpg)';
                bReady=true;
                oPage.removeEventListener('transitionend',tEnd,false);
            }
            oPage.addEventListener('transitionend',tEnd,false);
        };
	})();
});





















