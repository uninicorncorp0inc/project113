//4. Set the function preload as an empty function:
function preload(){
    //this goes empty
}





    //5. Set the characteristics for the canvas and the video
    function setup(){
        canvas = createCanvas(500,500);
        canvas.position(300,300);
        
        video = createCapture(VIDEO);
        video.hide();
        

    //6. Declare the variable tint_color with an empty value
    tint_color = "";
    }



function draw() {

    //7. Set the parameters for the image and the color filter:
image(video,0,0,500,500);
tint(tint_color);
}

function take_snapshot(){    
  save('student_name.png');
}

function filter_tint()
{
    //8. Assign the value of tint_color according to the color the user sets on the input component: 
	tint_color = document.getElementById("color_name").value;
}

