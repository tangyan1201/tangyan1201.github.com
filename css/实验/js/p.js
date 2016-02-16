window.onload=function(){
	var oT=document.getElementById('t1');
	var oUl=document.getElementById('ul1');
	var oBtn=document.getElementById('btn1');
	
	var iNow=-1;
	
	var oldvalue='';
	
	oT.onkeyup=function(ev){
		
		var oEvent=ev || event;
		if(oEvent.keyCode==40 || oEvent.keyCode==38){
			return;
		};
		
		jsonp({
			url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
			data:{
				wd:oT.value	
			},
			success:function(json){
				oUl.innerHTML='';
				
				var arr=json.s;
				
				if(arr.length){
					oUl.style.display='block';
				}else{
					oUl.style.display='none';
				}
				
				//DOM
				for(var i=0;i<arr.length;i++)
				{
					var oLi=document.createElement('li');
					oLi.innerHTML=arr[i];
					oUl.appendChild(oLi);
					
					(function(index){
						oLi.onmouseover=function(){
							for(var i=0;i<oUl.children.length;i++){
								oUl.children[i].className='';
							}
							this.className='on';
							
							iNow=index;
						};
						
						oLi.onmouseout=function(){
							for(var i=0;i<oUl.children.length;i++){
								oUl.children[i].className='';
							}
						};
						
						oLi.onclick=function(){
							window.open('https://www.baidu.com/s?wd='+this.innerHTML,'_self')
							oT.value='';
						};
					})(i)
					
				}
			}
		});
		oldvalue=oT.value;
	};
	
	oT.onkeydown=function(ev){
		var aLi=oUl.children;
		
		var oEvent=ev || event;
		if(oEvent.keyCode==40){
			iNow++;
			if(iNow==aLi.length)iNow=-1;
			
			for(var i=0;i<aLi.length;i++)
			{
				aLi[i].className='';
			}
			
			if(iNow==-1)
			{
				oT.value=oldvalue;
			}else{
				aLi[iNow].className='on';
				
				oT.value=aLi[iNow].innerHTML;
			}
			document.title=iNow;
		}
		
		if(oEvent.keyCode==38)
		{
			iNow--;
			
			if(iNow==-2)iNow=aLi.length-1;
			
			for(var i=0; i<aLi.length; i++){
				aLi[i].className='';
			}
			
			if(iNow==-1)
			{
				
				oT.value=oldvalue;
			}else
			{
				aLi[iNow].className='on';
				
				oT.value=aLi[iNow].innerHTML;
			}
			
			document.title=iNow;
			return false;
		}
		
	};
	
	oBtn.onclick=function(){
		window.onclick=function(){
			window.open('https://www.baidu.com/s?wd='+oT.value,'_self');
			oT.value='';
		};
	};
};
