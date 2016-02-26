function json2url(json)
{
	var arr=[];
	for(var name in json)
	{
		arr.push(name+'='+json[name]);
	}
	return arr.join('&');
}


function jsonp(json){
	json=json || {};
	if(!json.url)return;
	json.data=json.data || {};
	json.cbName=json.cbName || 'cb';
	
	var fnName='jsonp'+Math.random();
	fnName=fnName.replace('.','');
	
	window[fnName]=function(data){
		json.success && json.success(data);
		
		//删除
		oHead.removeChild(oS);
	};
	
	json.data[json.cbName]=fnName;
	
	var oS=document.createElement('script');
	oS.src=json.url+'?'+json2url(json.data);
	var oHead=document.getElementsByTagName('head')[0];
	oHead.appendChild(oS);
	
};

//中搜的jsonp
function zhongsou(json)
{
	json=json || {};
	if(!json.url)return;
	json.data=json.data || [];
	
	window[fnName]=function(arr){
		
		json.success && json.success(arr);
		
		//删除
		oHead.removeChild(oS);
	};
	
	var oS=document.createElement('script');
	oS.src=json.url+'?'+json2url(json.data);
	var oHead=document.getElementsByTagName('head')[0];
	oHead.appendChild(oS);
}


