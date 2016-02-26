/*
 *首页
 * 
 * 
 * */



window.onload=function(){
	
	
	
	//首页动画

(function(){
		var opc=document.getElementById('j-ani-opc');
		var oImg=document.getElementById('j-img');
		var oTxt=document.getElementById('j-ani-txt');
		
		move(oImg,{opacity:1,filter:'alpha(opacity:100)'},{
					duration:1500,
					complete:function(){
						move(oTxt,{opacity:1,filter:'alpha(opacity:100)'},{duration:1000})
							
					}
			
		})
		
		setTimeout(function(){
			move(opc,{opacity:0.3,filter:'alpha(opacity:30)'},{duration:2000,
				complete:function(){
					opc.style.display='none';
				}
			})
		},4500);
		
		opc.onclick=function(){
			opc.style.display='none';
		};

})();


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
		 var arr=['百度搜索','360搜索'];
		 
		 
		 
		 for(var i=0;i<aLi.length;i++)
		 {
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
			var iNow=-1;
			
			var oldvalue='';
			
			
			//输入文字的操作
			oInp.onkeyup=function(ev){
				var name=oSe.children[0].getAttribute('data-name');
				var oEvent=ev || event;
				if(oEvent.keyCode==40 || oEvent.keyCode==38){
					return;	
				}
				
				if(oEvent.keyCode==13){
					caseName(name);
				}
				
				switch(name)
				{
					case 'baidu':
						jsonpDao({
						url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
						scuLi:'https://www.baidu.com/s?wd='
						})
					break;
						
					case 'logo-360':
					jsonpDao({
					url:'https://sug.so.360.cn/suggest?callback=suggest_so&encodein=utf-8&encodeout=utf-8&word=',
					cbName:'callback',
					scuLi:'https://www.so.com/s?ie=utf-8&q='
					})
					break;
					
//					case 'zhongsou':
//					jsonpDao({
//					url:'http://www.zhongsou.com/third.cgi?w=',
//					cbName:'callback',
//					scuLi:'http://www.zhongsou.com/third.cgi?w='
//					})	
//					break;
					
					default:
					jsonpDao({
						url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
						scuLi:'https://www.baidu.com/s?wd='
					});
				}
				oldValue=oInp.value;	
			};
			
			//点击搜索的时候
			suo.onclick=function(){
				var name=oSe.children[0].getAttribute('data-name');
				caseName(name);
			}
			
			
			//输入完成对创建的li做操作
			
			oInp.onkeydown=function(ev){
				var aLi=Ul.children;
				
				var oEvent=ev || event;
				if(oEvent.keyCode==40)
				{
					iNow++;
					if(iNow==aLi.length)
					{
						iNow=-1;
					}
					for(var i=0; i<aLi.length; i++){
						aLi[i].className='';
					}
					
					if(iNow==-1)
					{
						oInp.value=oldValue;
					}
					else
					{
						oInp.value=aLi[iNow].innerHTML;
						aLi[iNow].className='on'
					}
				}
				
				if(oEvent.keyCode==38)
				{
					iNow--;
					if(iNow==-2)
					{
						iNow=aLi.length-1;
					}
					for(var i=0; i<aLi.length; i++){
						aLi[i].className='';
					}
					
					if(iNow==-1)
					{
						oInp.value=oldValue;
					}
					else
					{
						oInp.value=aLi[iNow].innerHTML;
						aLi[iNow].className='on'
					}
				}
				
			};
			
			//jsonp封装调用
			
			function jsonpDao(jsonpc)
			{
				jsonpc=jsonpc || {};
				if(!jsonpc.url)return;
				jsonp({
						url:jsonpc.url,
						data:{
							wd:oInp.value,
							encodein:'utf-8',
							encodeout:'utf-8'
						},
						cbName:jsonpc.cbName || 'cb',
						success:function(json){
							Ul.innerHTML='';
							
							var pArr=json.s;
							
							Li(pArr,jsonpc.scuLi);
//							
						}
					});
			}
			
			
			//case的封装
			function caseName(name)
			{
				switch(name)
				{
					case 'baidu':
					window.open('https://www.baidu.com/s?wd='+oInp.value,'_self');
					oInp.value='';
					Ul.style.display='none';
					break;
					
					case 'logo-360':
					window.open('https://www.so.com/s?ie=utf-8&q='+oInp.value);
					oInp.value='';
					Ul.style.display='none';
					break;
					
//					case 'zhongsou':
//					window.open('http://www.zhongsou.com/third.cgi?w='+oInp.value);
//					oInp.value='';
//					Ul.style.display='none';
//					break;
					
					default:
					window.open('https://www.baidu.com/s?wd='+oInp.value,'_self');
					oInp.value='';
					Ul.style.display='none';
				}
			}
			
			//创建li
			function Li(Arr,Url)
			{
				if(Arr.length)
				{
					Ul.style.display='block';
				}
				else
				{
					Ul.style.display='none';
				}
				
				//创建li
				for(var j=0;j<Arr.length;j++)
				{
					var oLi=document.createElement('li');
					oLi.innerHTML=Arr[j];
					Ul.appendChild(oLi);
					
					(function(index){
						oLi.onmouseover=function(){
							
							for(var i=0;i<Ul.children.length;i++)
							{
								Ul.children[i].className='';
							}
							this.className='on';
							iNow=index;
						};
						
						oLi.onmouseout=function(){
							for(var i=0;i<Ul.children.length;i++)
							{
								Ul.children[i].className='';
							}
						};
						
						oLi.onclick=function(){
							var name=oSe.children[0].getAttribute('data-name');
							switch(name)
							{
								case 'baidu':
								window.open(Url+this.innerHTML,'_self');
								oInp.value='';
								Ul.style.display='none';
								break;
								
								case 'logo-360':
								window.open(Url+this.innerHTML);
								oInp.value='';
								Ul.style.display='none';
								break;
								
//								case 'zhongsou':
//								window.open(Url+oInp.value);
//								oInp.value='';
//								Ul.style.display='none';
//								break;
								
								default:
								window.open(Url+this.innerHTML,'_self');
								oInp.value='';
								Ul.style.display='none';
							}
											
						};
						
					})(i)
				}
			}

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



















