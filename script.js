let newsOpen=false;

function showNews(a)
{
	if(newsOpen)
	{
		newsClose();
	}
	
	const blockClass='.block'+a;
	const newsblockClass='.newsblock'+a;
	const block=document.querySelector(blockClass);
	const newsblock=document.querySelector(newsblockClass);
	
	setTimeout(() => {
        block.style.backgroundColor = "#B6F5F5";
        newsblock.classList.add('active');
	setTimeout(() =>{
		setOpacityForNews(0.3);
		newsOpen=true;
		
		setTimeout(()=>{
			document.addEventListener('click', newsClose);
		}, 100);
	},200);
}

function newsClose(){
	const newsblock=document.querySelectorAll('.newsblock');
	setOpacityForNews(1);
	
	for(let i=0; i<newsblock.lengh; i++)
	{
		newsblock[i].classList.remove('active');
	}
	
	document.removeEventListener('click', newsClose);
	newsblock=false;
}
function setOpacityForNonPopups(opacity) {
    const allElements = document.querySelectorAll('body > *:not(.popup)');
    allElements.forEach((element) => {
        element.style.opacity = opacity;
    });
}
