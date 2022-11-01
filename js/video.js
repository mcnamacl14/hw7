var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.autoplay = false 
	video.loop = false
	console.log("autoplay is set to " + video.autoplay)
	console.log("loop is set to" + video.autoplay) // Would this be video.loop ??

});

video = document.querySelector('.video')
figure = document.querySelector('figure')
// PAUSE OR PLAY

document.querySelector('#play').addEventListener("click", function(){
	console.log("Play Video")
	video.play()
	// ADD VOLUME IS / UPDATE THE VOLUME INFORMATION 
})

document.querySelector('#pause').addEventListener("click", function(){
	console.log("Pause Video")
	video.pause()
})

// // SPEED
let speed = 1
document.querySelector('#slower').addEventListener("click", function(){
	console.log("Slow Video")
	speed = speed - (.1 * speed)
	video.playbackRate = speed
	console.log("speed is " + speed)
	// Not within 5 digits 
})

document.querySelector('#faster').addEventListener("click", function(){
	console.log("Speed Video")
	speed = (.1 * speed) + speed
	video.playbackRate = speed
	console.log("speed is " +speed)
	// also not within 5 digits 
})


// // SKIP AHEAD
document.querySelector('#skip').addEventListener("click", function(){
	console.log("Skip 10 seconds")
	video.currentTime = video.currentTime + 10
	console.log("current time " + video.currentTime)
})
document.querySelector('.video').addEventListener('ended',function() {
	video.currentTime = 0
	video.load()
	video.pause()
})


// MUTE


document.querySelector('#mute').addEventListener("click", function(){
	console.log("Mute/Unmute Video")
	if (video.muted === true) {
		video.muted = false
		this.innerHTML = "Mute"
	} 
	else {
		video.muted = true
		this.innerHTML = "Unmute"
	}
})

// // OLD VS NEW

document.querySelector('#vintage').addEventListener("click", function(){
	console.log("Vintage")
	figure.classList.add('oldSchool');
})

document.querySelector('#orig').addEventListener("click", function(){
	console.log("Original")
	figure.classList.remove("oldSchool")
})

// // SLIDER 

document.querySelector('#slider').addEventListener("click", function(){
	video.volume = this.value/100
	console.log("the current value is ", video.volume)
	document.querySelector('#volume').textContent = video.volume * 100 + "%"

})


