
//首页动画

(function(){
	window.onload=function(){
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
			move(opc,{opacity:0.3,filter:'alpha(opacity:30)'},{duration:1500,
				complete:function(){
					opc.style.display='none';
				}
			})
		},4000)
		
		opc.onclick=function(){
			opc.style.display='none';
		};
	};
})()
