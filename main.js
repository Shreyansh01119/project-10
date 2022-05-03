function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}
function take_snap(){
    save('mustache.png');
}
function draw(){
    image(video,0,0,500,500);
}
function modelloaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);   
    }
}
