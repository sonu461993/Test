document.body.addEventListener('wheel', moveVertically);

function moveVertically(e){
    this.scrollLeft += (e.deltaY);
    console.log(e.deltaY);
    
}