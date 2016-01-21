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
	 *搜索框
	 * */
	;(function(){
		var suosuo=document.getElementById('sousuo');
		var oInp=document.getElementById('inp');
		var oSpan=document.getElementById('span1');
		var suo=document.getElementById('suo');
		
//		控制搜索框文字焦点
		 oSpan.onclick=function(){
		 	this.style.display='none';
		 	oInp.focus();
		 };
		 
		 oInp.onfocus=function(){
		 	oSpan.style.display='none';
		 }
		 
		 oInp.onblur=function(){
		 	if(oInp.value.length==0)
		 	{
		 		oSpan.style.display='block'
		 	}
		 	
		 };
		 
//		 控制logo的显示与隐藏，切换
		 var oSe=document.getElementById('se');
		 
		 var oSH=oSe.children[0].offsetHeight;
		 var oNum=oSe.children.length;
		 var aLi=oSe.children;
		 var bFlag=true;
		 var aSC=oSpan.children;
		 var arr=['百度搜索','360搜索','中搜搜索','淘宝网'];
		 
		 
		 
		 for(var i=0;i<aLi.length;i++)
		 {
//		 	(function(index){
//		 		var oldI=index;
		 		aLi[i].index=i;
			 	aLi[i].onclick=function(ev){
			 		var  _this=this
			 		var oEvent=ev || event;
			 		if(bFlag){
			 			for(var i=0;i<aLi.length;i++){
			 				
			 				aLi[i].style.display='block';
			 			};
			 			bFlag=false
			 		}
			 		else{
//			 			var oldI=index;
			 			oSe.removeChild(this);
			 			oSe.insertBefore(this,oSe.children[0]);
			 			for(var i=0;i<aLi.length;i++){
			 				aLi[i].style.top=i*oSH+'px';
			 				aLi[i].style.display='none'
			 			}
						oSpan.innerHTML='';
//						控制文字的切换
			 			oSpan.innerHTML=arr[this.index];
			 			this.style.display='block';
			 			bFlag=true;
			 		}
			 		
			 		oEvent.cancelBubble=true;
			 	};
			 	
//			 	logo的颜色改变
			 	aLi[i].onmouseover=function(){
			 		for(var i=0;i<aLi.length;i++){
			 			aLi[i].style.backgroundColor='#fff';
			 		}
			 		this.style.backgroundColor='#ccc';
			 	};
			 	
			 	aLi[i].onmouseout=function(){
			 		this.style.backgroundColor='#fff';
			 	};
			 	
//		 	})(i);
		 }
		 
//		 	点击空白处logo隐藏
		 	document.onclick=function(){
				for(var i=0;i<aLi.length;i++)
				{
					aLi[i].style.display='none';
				}
				aLi[0].style.display='block';
				bFlag=true;
		 	};


			//jsonp
			 var Ul=document.getElementById('pull');
	//		 var uLi=Ul.children;
			oInp.onkeyup=function(){
				var pArr=[]
				for(var i=0;i<aLi.length;i++)
				{
				var name=aLi[i].getAttribute('data-name');
					pArr.push(name)
				}
				 
				
			};
		 
	})();


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



















