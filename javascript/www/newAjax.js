// JavaScript Document

//1. 创建Ajax对象
function ajax(url,fnSucc,fnFaild){
	if(window.XMLHttpRequest){
		var oAjax = new XMLHttpRequest(); //FF CHROME  IE9
	}else{
		var oAjax = new ActiveXObject("Microsoft.XMLHTTP") //IE6
	}
	
	//2. 连接服务器
	//open(方法,文件名,异步传输)
	oAjax.open('GET',url,true)
	
	//3. 发送请求
	oAjax.send();
	
	//4. 接受返回值
	oAjax.onreadystatechange = function(){
		//oAjax.readyState	//浏览器和服务器进行到哪一步了
		/*
		0 （为初始化） 还没调用OPEN()方法
		1 （载入）以调用send()方法，正在发送请求
		2 （再入完成） send()方法完成，已收到全部响应内容
		3 （解析） 正在解析响应内容
		4 （完成） 响应内容解析完成，可以在客户端调用
		*/
		if(oAjax.readyState == 4){ //读取完成
			if(oAjax.status == 200){ //读取成功  只有200代表成功
				fnSucc(oAjax.responseText);	 //response 响应文本
			}else{
				if(fnFaild){
					fnFaild(oAjax.status);	//找不到页面返回404错误
				}
			}
		}
	}
}