window.onload=function(){
	
	//轮播图
	var oUl=document.getElementById('j-he-ul');
	var oHedaer=document.getElementById('j-hedaer')
	var oLi=oUl.getElementsByTagName('div')[0];
	var sName=["img/img分块/0.jpg","img/img分块/1.jpg","img/img分块/2.jpg","img/img分块/3.jpg"]
	
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
	
	
	
	var mouseTimer=setInterval(function(){
			now++
			show();
		},2500);
	
	//浏览器获取焦点
	window.onfocus=function(){
		setInterval(function(){
			now++
			show();
		},2500);
	};
	
	//浏览器失去焦点
	window.onblur=function(){
		clearInterval(mouseTimer);
	};
	
	
	//鼠标停在图片是上
	oHedaer.onmouseover=function(){
		oDown.style.display='block';
		oUp.style.display='block'
		
		clearInterval(mouseTimer);
	};
	
	//鼠标离开图片
	oHedaer.onmouseout=function(){
		oDown.style.display='none';
		oUp.style.display='none'
		
		mouseTimer=setInterval(function(){
			now++
			show();
		},2500);
	}
	
	
	//下一张
	oDown.onclick=function(){
		if(bFlag)
		
		{
			return
		}
		bFlag=true;
		
		now++;
		show();
		
	};
	
	//s上一张
	var oUp=document.getElementById('j-up');
	oUp.onclick=function(){
		if(bFlag)
		
		{
			return
		}
		bFlag=true;
		
		now--;
		show();
	};
	
	function show()
	{
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
							if(now<=-1)
							{
								oImg.src=sName[(-now)%sName.length];
							}
							else
							{
								oImg.src=sName[now%sName.length];
							}
							
							bFlag=false;
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
	
	//登陆效果
	
	
};
