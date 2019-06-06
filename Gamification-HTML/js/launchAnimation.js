
 document.body.onload = tweenStart;

let stars = document.querySelectorAll('.stars span')
function tweenStart(){
let t1 = new TimelineMax({delay: 9});
stars.forEach((star) => {
		t1.add(TweenLite.to(star, 1, {scale: 1}));
})

}  

let t2 = new TimelineMax({delay: 13});
t2.add(TweenLite.to('.arrow_1', 1, {scale: 1, transformOrigin: "left", rotation: 360}));


let t3 = new TimelineMax({delay: 15});
t3.add(TweenLite.to('.flying_superman', 5, {x: "1520px"}))