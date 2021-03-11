Webcam.set({
    width:350,
    height:350,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snap(){
    Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML = "<img id='captured_img' src='" + data_uri + "'>";
    });
}
console.log("ml5 version" , ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/F-7aNZ6zK/model.json" , modelLoaded);

function modelLoaded(){
    console.log("Model has been loaded");
}

function check(){
 img = document.getElementById("captured_img");
 classifier.classify(img, got_result);
}
function got_result(error , results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}