const navslide = () => {
	const burger = document.querySelector('.burger');//the burger toggle button
	const nav = document.querySelector('.nav-links');//the ul/ container of links on nav bar
	const lines = document.querySelectorAll('.line');
	burger.addEventListener('click',()=>{
		document.getElementById('toggle').classList.toggle('nav-active');
		document.getElementById('line1').classList.toggle('line1-change');
		document.getElementById('line2').classList.toggle('line2-change');
		document.getElementById('line3').classList.toggle('line3-change');
	});
}
navslide();
