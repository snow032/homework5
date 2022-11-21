// Add js here.
video = document.getElementById('videoplayer');
video.autoplay = false;
video.loop = false;
video.load();

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();})

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
})
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.5;
  if (video.playbackRate <= 0.5){
    alert("Video is at slowest speed!");}
})
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 1;
  if (video.playbackRate >= 2){
    alert("Video is at  fastest speed!");}
})

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15
	if (video.ended){
		video.currentTime = 0
	}
});

document.querySelector("#mute").addEventListener("click", function() {
  if(mute == true){
		video.muted = false;
		mute = false;
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("Video Unmuted")
	}
	else{
		video.muted = true;
		mute = true;
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("Video Muted")
	}
});

document.querySelector("#slider").addEventListener("click",function() {
let slidervalue = document.querySelector("#slider").value;
video.volume = slidervalue / 100
const aa = document.querySelector("#volume").innerHTML = slidervalue + "%";
console.log("Volume is " + aa);
})
