/*
 *首页
 * 
 * 
 * */



window.onload=function(){
	
	/*
	 *分块运动
	 * */
	(function(){
		//轮播图
	var oUl=document.getElementById('j-he-ul');
	var oHedaer=document.getElementById('j-hedaer')
	var oLi=oUl.getElementsByTagName('div')[0];
	var sName=["img/0.jpg","img/1.jpg","img/2.jpg","img/3.jpg"]
	
	var oDiv=document.getElementById('pro-div');
	
	//创建span
	var row=1;
	var col=50;
	var H=560;
	var W=1600;
	var height=H/row;
	var width=W/col;
	var aSpan=[];
	
	var client=document.documentElement.width;
	
	
	if(client==W)
	{
		oUl.style.marginLeft=0;
	}
	else if(client<W)
	{
		var mL=Math.floor((W-client)/2);
		oUl.style.marginLeft=-mL+'px';
	}
	else if(client>W)
	{
		var mL=Math.floor((client-W)/2);
		oUl.style.marginLeft=mL+'px';
	}
	
	
	for(var r=0;r<row;r++)
	{
		for(var c=0;c<col;c++)
		{
			var oSpan=document.createElement('span')
			oSpan.style.height=height+'px';
			oSpan.style.width=width+'px';
			
			var top=r*height;
			var left=c*width;
			oSpan.style.left=left+'px';
			oSpan.style.top=top+'px';
			
			oSpan.style.backgroundPosition=-left+'px -'+top+'px';
			
			oLi.appendChild(oSpan);
			aSpan.push(oSpan);
		}
	};
	
	var oImg=document.getElementById('j-he-img');
	var oDown=document.getElementById('j-down');
	
	var now=0;
	var bFlag=false;
	
	
	
	oDiv.timer=setInterval(function(){
			now++
			show();
		},2500);
	
	//浏览器获取焦点
	window.onfocus=function(){
		oDiv.timer=setInterval(function(){
			now++;
			show();
		},2500);
	};
	
	//浏览器失去焦点
	window.onblur=function(){
		clearInterval(oDiv.timer);
	};
	
	
	//鼠标停在图片是上
	oHedaer.onmouseover=function(){
		clearInterval(oDiv.timer);
		oDown.style.display='block';
		oUp.style.display='block'
		
		
	};
	
	//鼠标离开图片
	oHedaer.onmouseout=function(){
		oDown.style.display='none';
		oUp.style.display='none'
		oDiv.timer=setInterval(function(){
			now++;
			show();
		},2500);
	}
	
	
	//下一张
	oDown.onclick=function(){
		if (bFlag)
			{
				return;
			}

			bFlag=true;
		now++;
		show();
		
	};
	
	//s上一张
	var oUp=document.getElementById('j-up');
	oUp.onclick=function(){
		if (bFlag)
			{
				return;
			}

			bFlag=true;
		
		now--;
		show();
	};
	
	function show()
	{
		
		
		
			
			//now++;
		
		if(now<=-1)
		{
			var url='url('+sName[(-now)%sName.length]+')';
		}
		else
		{
			var url='url('+sName[now%sName.length]+')';
		}
		for(var i=0;i<aSpan.length;i++)
		{
			aSpan[i].style.opacity=0;
			aSpan[i].style.filter=':alpha(opacity:0)' ;
			aSpan[i].style.backgroundImage=url;
			
		}
		
		var n=0;
		
		var timer=setInterval(function(){
			
			
			
			(function(index){
				move(aSpan[n],{opacity:1,filter:'alpha(opacity:100)'},{
					duration:30,
					complete:function(){
						
						if(index==aSpan.length-1)
						{
							bFlag=false;
							
							if(now<=-1)
							{
								oImg.src=sName[(-now)%sName.length];
							}
							else
							{
								oImg.src=sName[now%sName.length];
							}
							
						}
					}
					
					

					
				})
			})(n);
			n++
			if(n==aSpan.length)
			{
				clearInterval(timer)
			}
						
		},30);
		
	}
	
	//轮播图完成
		
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



















