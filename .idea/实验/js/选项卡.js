//选项卡实验
window.onload=function(){
	//选项卡
	(function(){
		var oB=document.getElementById('ifocus_btn');
		var aBtn=oB.getElementsByTagName('li');
		var oP=document.getElementById('ifocus_piclist')
		var aLi=document.getElementsByTagName('li');
		var aT=document.getElementById('ifocus_tx').getElementsByTagName('li');
		var oUl=oP.getElementsByTagName('ul')[0];
		var oUl_t=document.getElementById('ifocus_tx').getElementsByTagName('ul')[0];
		
		var timer=null;
		
		//移入移出 
		var oW=aLi[0].offsetHeight;
		var ow=oUl_t.children[0].offsetHeight;
		var n=0;
		oUl.innerHTML+=oUl.innerHTML
		
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
							
							
					},1000)
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
				
				
		},1000)
		
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
	
	
};
















