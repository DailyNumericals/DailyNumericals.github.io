// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['q1.png', 'q2.png', 'q3.png', 'q4.png'];
var answers = ['A', 'B','C','D'];
var i = 0;
var a = answers[i];
var x;
function hide() {
	document.getElementById("demo").innerHTML = null;
}
function classrest() {
	document.getElementById('pg1').className = null;
	document.getElementById('pg2').className = null;
	document.getElementById('pg3').className = null;
	document.getElementById('pg4').className = null;
}
function igset(x) {
	hide();
	var strget = x.toString();
	classrest();
	document.getElementById('pg'+strget).className = "active";
	i = x - 1;
	return setImg();
}
function prev(){
	hide();
	classrest();
	if(i <= 0) i = images.length;	
	i--;
	var strget = (i+1).toString();
	document.getElementById('pg'+strget).className = "active";
	a = answers[i];
	return setImg();
				 
}

function next(){
	hide();
	classrest();
	if(i >= images.length-1) i = -1;
	i++;
	var strget = (i+1).toString();
	document.getElementById('pg'+strget).className = "active";
	a = answers[i];
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "../images/12/ch2/"+images[i]);
	
}

function myFunction() {
	document.getElementById("demo").innerHTML = "Correct Answer is" + " " + a;
  }
