Webcam.set({
    width:310,
    height:300,
    image_format:"png",
    png_quality:90,
constraints:{
    faceingMode:"environment"
}
})
camera=document.getElementById("camera")
Webcam.attach(camera)

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'>"
    })
}

console.log("ml5 version ",ml5.version)

classifier=ml5.imageClassifier("MobileNet", model_loded)

function model_loded(){
    console.log("model loded")
}

function identify_img(){
    img=document.getElementById("capture_image")
    classifier.classify(img , gotResult)
}

function gotResult(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        document.getElementById("object_name").innerHTML=result[0].label
    }
}