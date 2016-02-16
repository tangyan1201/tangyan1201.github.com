function addCookie(name,value,iDay){
	if(iDay){
		var oDate=new Date();
		oDate.setDate(oDate.getDate()+iDay);
		
		document.cookie=name+'='+value+';path=/;expires='+oDate;
	}else{
		document.cookie=name+'='+value+';path=/'	
	}
}
function getCookie(name){
	var arr=document.cookie.split('; ');
	
	//[a=1,b=2,name=abc]
	for(var i=0; i<arr.length; i++){
		var arr2=arr[i].split('=');
		//arr2[0]  a b name
		//arr2[1]  1 2 abc
		if(name==arr2[0]){
			return arr2[1];
		}
	}
	return '';		
}
function removeCookie(name){
	addCookie(name,'adsfasdf',-100);	
}