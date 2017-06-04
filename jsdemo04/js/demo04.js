var numList=document.getElementById('num_wrap');
var left_in=document.getElementById('left_in');
var right_in=document.getElementById('right_in');
var left_out=document.getElementById('left_out');
var right_out=document.getElementById('right_out');
var data=document.getElementById('input');
function leftIn(){
	if(data.value==''){
		alert('请输入一个数');
	}else if(!isNaN(data.value)){
		var li=document.createElement('li');
		li.innerHTML=data.value;
		numList.insertBefore(li,numList.firstChild);
		data.value='';
	}else{
		alert('输入格式不正确');
	}
}
function rightIn(){
	if(data.value==''){
		alert('输入一个数');
	}else if(!isNaN(data.value)){
		var li=document.createElement('li');
		li.innerHTML=data.value;
		numList.insertBefore(li,null);
		data.value='';
	}else{
		alert('格式不正确');
	}
}
function leftOut(){
	numList.removeChild(numList.firstChild);
}
function rightOut(){
	numList.removeChild(numList.lastChild);
}
left_in.onclick=function(){
	leftIn();
}
right_in.onclick=function(){
	rightIn();
}
left_out.onclick=function(){
	leftOut();
}
right_out.onclick=function(){
	rightOut();
}
