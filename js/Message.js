window.onload=function(){
	var oT=document.getElementById('t1');	
	var oBtn=document.getElementById('btn1');
	var oBox=document.getElementById('reply_box');
	var oPageBox=document.getElementById('page_box');
	
	var URL='http://tangyan1201.github.io/PHP/weibo.php';
	
	var nowPage=1;
	
	oBtn.onclick=function(){
		ajax({
			url:URL,
			data:{
				act:'add',
				content:oT.value	
			},
			success:function(str){
				var json=eval('('+str+')');
				if(json.error){
					alert('添加一条失败了');
				}else{
					var oDiv=createMsg(json.time, oT.value,0,0,json.id);
					if(oBox.children.length){
						oBox.insertBefore(oDiv,oBox.children[0]);
					}else{
						oBox.appendChild(oDiv);	
					}
					
					oT.value='';
					
					//保证一页有6条数据
					if(oBox.children.length>6){
						oBox.removeChild(oBox.children[6]);
					}
					
					//重新获取页码
					getPageCount();
				}
			}	
		});	
	};
	
	function createMsg(time,content,acc,ref,id){
		var oDate=new Date();
		oDate.setTime(time*1000);
		
		var sDate=oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+oDate.getDate()+' '+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
		
		//创建元素
		var oDiv=document.createElement('div');	
		oDiv.className='reply';
		oDiv.innerHTML='<p class="replyContent">'+content+'</p>'
			+'<p class="operation">'
			+'<span class="replyTime">'+sDate+'</span>'
			+'<span class="handle">'
			+'<a href="javascript:;" class="top">'+acc+'</a>'
			+'<a href="javascript:;" class="down_icon">'+ref+'</a>'
			+'<a href="javascript:;" class="cut">删除</a>'
			+'</span>'
			+'</p>';
		var aA=oDiv.getElementsByTagName('a');
		//处理删除
		aA[2].onclick=function(){
			var t=confirm('您确认删除么');
			if(t){
				ajax({
					url:URL,
					data:{
						act:'del',
						id:id
					},
					success:function(str){
						var json=eval('('+str+')');
						if(json.error){
							alert('删除失败了');
						}else{
							oBox.removeChild(oDiv);
							
							//重新获取数据
							getPageData(nowPage);
							//重新获取页码
							getPageCount();
						}
					}	
				});	
			}
		};
		
		//处理顶
		aA[0].onclick=function(){
			if(getCookie('acc'+id)){
				alert('不好意思，一天只能顶一次');
			}else{
				var _this=this;
				ajax({
					url:URL,
					data:{
						act:'acc',
						id:id	
					},
					success:function(str){
						var json=eval('('+str+')');
						if(json.error){
							alert('顶失败了，加油');
						}else{
							_this.innerHTML=parseInt(_this.innerHTML)+1;	
							//parseInt(_this.innerHTML)+=1;
						}
						
						//种cookie
						addCookie('acc'+id,12,1);
					}	
				});		
			}
		};
			
		return oDiv;	
	}
	
	
	//获取某一页数据
	getPageData(1);
	function getPageData(n){
		ajax({
			url:URL,
			data:{
				act:'get',
				page:n	
			},
			success:function(str){
				oBox.innerHTML='';
				
				var arr=eval('('+str+')');
				
				for(var i=0; i<arr.length; i++){
					var oDiv=createMsg(arr[i].time, arr[i].content, arr[i].acc, arr[i].ref, arr[i].id);
					oBox.appendChild(oDiv);
				}
			}	
		});	
	}
	
	//获取总页数
	getPageCount()
	function getPageCount(){
		ajax({
			url:URL,
			data:{
				act:'get_page_count'	
			},
			success:function(str){
				oPageBox.innerHTML='';
				
				var json=eval('('+str+')');
				
				var n=json.count;
				
				for(var i=0; i<n; i++){
					var oA=document.createElement('a');
					oA.innerHTML=i+1;
					oA.href='javascript:;';
					oPageBox.appendChild(oA);
					
					if(i==0){
						oA.className='active';	
					}
					
					//点击a标签
					oA.onclick=function(){
						nowPage=this.innerHTML;
						getPageData(this.innerHTML);
						
						for(var i=0; i<oPageBox.children.length; i++){
							oPageBox.children[i].className='';
							
						}
						this.className='active';
					};
				}
				
				//当前nowPage也显示
				for(var i=0; i<oPageBox.children.length; i++){
					oPageBox.children[i].className='';
				}
				oPageBox.children[nowPage-1].className='active';
			}	
		});	
	}
};