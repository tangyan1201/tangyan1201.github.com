function ready(fn)
	{
		if(document.addEventListener)//在addEventListener中只兼容2015年之前高版本浏览器
		{
			document.addEventListener('DOMContentLoaded',fn,false);//DOMContentLoaded必须绑定才可以用
		}
		else
		{
			document.onreadystatechange=function(){//兼容低版本 IE浏览器都可以，高版本的谷歌，火狐都兼容（2015年之后版本）//现在浏览器都能用
				if(document.readyState == 'complete')//低版本IE有两个状态，加载交换中，和加载完成，要判断加载完成才执行;
				{
					fn();
				}
			}
		}
	}	
				