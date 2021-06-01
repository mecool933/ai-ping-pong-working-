function preload()
{

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	
	posenet = ml5.poseNet(video,modelLoaded);
	posenet.on('pose',gotPoses);
}
function modelLoaded()
{
	console.log("model Loaded");
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results);
	 noseX = results[0].pose.nose.x;
	 noseY = results[0].pose.nose.y;
	
	}
	
}