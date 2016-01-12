window.onload=function(){
	
	 function setStyle3(obj,name,value){
        var str=name.charAt(0).toUpperCase()+name.substring(1);


        obj.style['Webkit'+str]=value;
        obj.style['Moz'+str]=value;
        obj.style['O'+str]=value;
        obj.style['ms'+str]=value;
        obj.style[name]=value;
    }
	
	
	
	(function(){
		var oLe=document.getElementById('le');
		var oRi=document.getElementById('ri');
		var aLi=document.querySelectorAll('.effect li');
		var oBtn=document.querySelectorAll('.nav .btn');
		
		
		
		var aClass=[];
		
		var bClick=false;
		
		for(var i=0;i<aLi.length;i++)
		{
			aClass[i]=aLi[i].className;
		}
		
		function tob()
		{
			for(var i=0;i<aLi.length;i++)
			{
				aLi[i].className=aClass[i];
			}
			
			var oCur=document.querySelector('.cur');
			
			function tEnd(){
				bClick=false;
				oCur.removeEventListener('transitionend',tEnd,false);
			}
			oCur.addEventListener('transitionend',tEnd,false);
		}
		
		oLe.onclick=function(){
			if(bClick==true)return;
			bClick=true;
			aClass.unshift(aClass.pop())
			tob();
			
		};
		
		oRi.onclick=function(){
			if(bClick==true)return;
			bClick=true;
			aClass.push(aClass.shift());
			tob();
		};
		
	})();
};
