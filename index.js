

let resources = [
	"home/abstract_01.png",
	"home/abstract_02.png",
	"home/arrow_01.png",
	"home/charater_superman_01.png",
	"home/charater_superman_02.png",
	"home/home_bg.jpg",
	"home/star_01.png",
	"home/tesseract_logo.png",
	"stage_01/arrow_01.png",
	"stage_01/arrow_02.png",
	"stage_01/arrow_03.png",
	"stage_01/arrow_04.png",
	"stage_01/arrow_05.png",
	"stage_01/arrow_06.png",
	"stage_01/arrow_07.png",
	"stage_01/callout_01.png",
	"stage_01/character_01.png",
	"stage_01/character_02.png",
	"stage_01/character_03.png",
	"stage_01/container_01.png",
	"stage_01/head_01.png",
	"stage_01/power_wheel.png",
	"stage_01/super_man_01.png",
	"stage_01/super_man_02.png",
	"stage_01/super_man_03.png",
	"stage_01/super_man_04.png",
	"stage_02/arrow_01.png",
	"stage_02/arrow_02.png",
	"stage_02/badge.png",
	"stage_02/character_01.png",
	"stage_02/character_02.png",
	"stage_02/cup.png",
	"stage_02/joystick.png",
	"stage_02/laucher.png",
	"stage_02/line_01.png",
	"stage_02/shield.png",
	"stage_02/stage_02_bg.jpg",
	"stage_02/superman_01.png",
	"stage_02/superman_02.png",
	"stage_02/superman_03.png",
	"stage_03/arrow_01.png",
	"stage_03/arrow_02.png",
	"stage_03/arrow_03.png",
	"stage_03/dishatenna.png",
	"stage_03/laucnher.png",
	"stage_03/rocket.png",
	"stage_03/satelitte.png",
	"stage_03/spaceman_01.png",
	"stage_03/spaceman_02.png",
	"stage_03/spaceman_03.png",
	"stage_03/spaceman_04.png",
	"stage_03/spaceman_05.png",
	"stage_03/stage_03_bg.jpg",
	"stage_03/superman_01.png",
	"stage_03/superman_02.png",
	"stage_03/text_frame.png",
	"stage_03/text_frame_01.png",
	"stage_04/arrow_01.png",
	"stage_04/arrow_02.png",
	"stage_04/character_01.png",
	"stage_04/character_02.png",
	"stage_04/character_03.png",
	"stage_04/stage_04_bg.jpg",
	"stage_04/superman.png",	
	"stage_05/arrow_01.png",
	"stage_05/communication.png",
	"stage_05/icon_01.png",
	"stage_05/leadership.png",
	"stage_05/negotiation.png",
	"stage_05/stage_05_bg.jpg",
	"stage_05/stress.png",
	"stage_05/suparman_01.png",
	"stage_05/suparman_02.png",
	"stage_05/text_bg.png",
]



import './src/scss/app.scss';

const preloader = require('preloader');

var loader = preloader({
  xhrImages: false
});
loader.on('progress',function(progress) {
  console.log(progress);
});
loader.on('complete',function() {
	document.querySelector('.loading').style.display = 'none';
	document.querySelector('.container').style.display = 'block';
});

for(let img of resources){
	console.log(img)
	loader.add("assets/images/" + img);
}

loader.load();