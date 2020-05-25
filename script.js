let slider = document.getElementById('slideranges');

console.log(slider);

slider.addEventListener("input",function(){
	var x = slider.value;
	var color = 'Linear-gradient(90deg, #D14488, #F581C2 ' + x + '%, #C6C6C6 ' + x + '%)';
	slider.style.background = color;
})