
//turn1

ready(function(){
	var oBox=document.querySelector('.box');
	oBox.style.backgroundImage='url(img/turn/0.jpg)'; 
	var json={
			grain:(function(){
					
					var oGrain=document.getElementById('grain')
					oBox.style.backgroundImage='url(img/turn/0.jpg)'
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
					
					
					//点击
						var iNow=0;
			            var bReady=true;
			            oGrain.onclick=function(){
			            	oBox.style.backgroundImage='none';
			            	
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
            
	})(),
	
	
	};
});

