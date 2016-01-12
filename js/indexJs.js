/*
 *首页
 * 
 * 
 * */



window.onload=function(){
	
	
	
	//首页动画

//(function(){
//		var opc=document.getElementById('j-ani-opc');
//		var oImg=document.getElementById('j-img');
//		var oTxt=document.getElementById('j-ani-txt');
//		
//		move(oImg,{opacity:1,filter:'alpha(opacity:100)'},{
//					duration:1500,
//					complete:function(){
//						move(oTxt,{opacity:1,filter:'alpha(opacity:100)'},{duration:1000})
//							
//					}
//			
//		})
//		
//		setTimeout(function(){
//			move(opc,{opacity:0.3,filter:'alpha(opacity:30)'},{duration:2000,
//				complete:function(){
//					opc.style.display='none';
//				}
//			})
//		},4500);
//		
//		opc.onclick=function(){
//			opc.style.display='none';
//		};
//
//})();


	/*
	 *选项卡 
	 * 
	 * */
	(function(){
		var oB=document.getElementById('ifocus_btn');
		var aBtn=oB.getElementsByTagName('li');
		var oP=document.getElementById('ifocus_piclist')
		var oLi=oP.getElementsByTagName('li')[0];
		var aT=document.getElementById('ifocus_tx').getElementsByTagName('li');
		var oUl=oP.getElementsByTagName('ul')[0];
		var oUl_t=document.getElementById('ifocus_tx').getElementsByTagName('ul')[0];
		
		var timer=null;
		
		//移入移出 
		var oW=oLi.offsetHeight;
		var ow=oUl_t.children[0].offsetHeight;
		var n=0;
		
		for(var i=0;i<aBtn.length;i++)
		{
			(function(index){
				
				aBtn[i].onmouseover=function(){
					clearInterval(timer);
					
					for(var i=0;i<aBtn.length;i++)
					{
						aBtn[i].className='normal';
					}
					aBtn[index].className='current';
					move(oUl,{top:-index*oW},{duration:500})
//					console.log(-index*oW+'px')
//					oUl.style.top=-index*oW+'px';
					oUl_t.style.top=-index*ow+'px';
					
					n=index;
					bFlag=true;
				};
				
				aBtn[i].onmouseout=function(){
					
					timer=setInterval(function(){
						if(bFlag)
						{
							show()
						
							n++;
							if(n==4)
							{
								bFlag=false;
							}
						}else{
							n--;
							show();
							if(n==0)
							{
								bFlag=true;
							}
						}
					},2500)
				};
				
			})(i)
		}
		
		
		
		var bFlag=true;
		
		//循环播放
		timer=setInterval(function(){
			if(bFlag)
			{
				show()
			
				n++;
				if(n==4)
				{
					bFlag=false;
				}
			}else{
				n--;
				show();
				if(n==0)
				{
					bFlag=true;
				}
			}
				
				
		},2500);
		
		function show(){
			for(var i=0;i<aBtn.length;i++)
				{
					aBtn[i].className='normal';
				}
				aBtn[n].className='current';
				move(oUl,{top:-n*oW},{duration:500})
//				console.log(-n*oW+'px')
				oUl_t.style.top=-n*ow+'px';
		}
		
	})();


	
	/**
	 * 效果墙
	 * */
	
	(function(){
		var oPc=document.getElementById('opc-box');
		var ul_box=document.getElementById('ul-box');
		var aLi=getByClass(oPc,'opc-li');
		var oPc_tit=document.getElementById('opc-tit');
//		var big=document.getElementById('big-opc');
		
		
		
		oPc.onmouseover=function(){
			oPc_tit.style.display='none';
//			big.style.display='none';
		};
		
		oPc.onmouseout=function(){
			oPc_tit.style.display='block';
//			big.style.display='block';
		};
		
		
		for(var i=0;i<aLi.length;i++)
		{
			var oSpan=null;
			var oDiv=null;
			
			aLi[i].onmouseover=function(){
				 oSpan=this.children[0];
				 oDiv=this.children[2];
				 
					for(var i=0;i<aLi.length;i++)
					{
						oSpan.style.display='block';
						oDiv.style.display='none';
					}
					oSpan.style.display='none';
					this.timer=setTimeout(function(){
						oDiv.style.display='block';
					},300)
					
					oPc_tit.style.display='none';
//					big.style.disAplay='none';
				
			};
		
			aLi[i].onmouseout=function(){
				clearTimeout(this.timer)
					oSpan.style.display='block';
					oDiv.style.display='none';
			};
			
		}
	})()
	
	
	
	function getByClass(oParent,sClass){
    if(oParent.getElementsByClassName){
        return oParent.getElementsByClassName(sClass);
    }else{
        var arr=[];
        var reg=new RegExp('\\b'+sClass+'\\b');
        var aEle=oParent.getElementsByTagName('*');
        for(var i=0; i<aEle.length; i++){
            if(reg.test(aEle[i].className)){
                arr.push(aEle[i]);
            }
        }
        return arr;
    }
}
};



















