var myImage=document.querySelector('img');

myImage.onclick=function(){
	var mySrc=myImage.getAttribute('src');
	if(mySrc==='images/boy.png'){
		myImage.setAttribute('src','images/girl.png');
	}else{
		myImage.setAttribute('src','images/boy.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName=prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML='Mozilla is cool,'+myName;
}

if(!localStorage.getItem('name')){
		setUserName();
	}else{
		var storeName=localStorage.getItem('name');
		myHeading.innerHTML='Mozilla is cool,'+storeName;
	}

myButton.onclick=function(){
	setUserName();
}