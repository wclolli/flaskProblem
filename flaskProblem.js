var submitButton = function(){
    var firstOptionChecked = document.getElementById("firstOption").checked;
    var secondOptionChecked = document.getElementById("secondOption").checked;
    var thirdOptionChecked = document.getElementById("thirdOption").checked;
    var fourthOptionChecked = document.getElementById("fourthOption").checked;
    
    var correct = "Correct! Because the plant in Flask 1 is in the sunlight, it is performing both photosythesis and cellular respiration. Since photosynthesis happens at a faster rate than cellular respiration, the level of oxygen is increasing while the level of CO2 is decreasing, which therefore causes the flask to remain blue after 24 hours. On the other hand, the plant in Flask 1 is not performing photosynthesis because it is not exposed to the sunlight. This means that the plant is only performing cellular respiration, meaning that the level of CO2 is increasing, which will cause the flask to turn yellow after 24 hours.";
    
    var hintA = "Incorrect. Remember that plants cannot perform photosynthesis in the dark.";
    var hintB = "Incorrect. Remember that photosynthesis happens at a faster rate than cellular respiration.";
    var hintD = "Incorrect. The plant in Flask 1 will perform photosynthesis faster than cellular respiration. The plant in Flask 2 cannot perform photosynthesis at all because it is in the dark. Think about what will happen to the level of CO2 for both.";

    //changes to specified color if radio button is checked
    if(thirdOptionChecked === true){
        document.getElementById("c").style.color = "green";
        document.getElementById("c").style.fontWeight = "bold";
        document.getElementById("answerC").innerHTML = correct;
        document.getElementById("answerC").style.color = "green";
        document.getElementById("flask1").src = "flaskWithSeaweedBlue.png";
        document.getElementById("flask2").src = "flaskWithSeaweedYellow.png";
        
    } else if(firstOptionChecked === true){
        document.getElementById("a").style.color = "red";
        document.getElementById("a").style.fontWeight = "bold";
        document.getElementById("answerA").innerHTML = hintA;
        document.getElementById("answerA").style.color = "red";
        
    } else if(secondOptionChecked === true){
        document.getElementById("b").style.color = "red";
        document.getElementById("b").style.fontWeight = "bold";
        document.getElementById("answerB").innerHTML = hintB;
        document.getElementById("answerB").style.color = "red";
        
    } else if(fourthOptionChecked === true) {
        document.getElementById("d").style.color = "red";
        document.getElementById("d").style.fontWeight = "bold";
        document.getElementById("answerD").innerHTML = hintD;
        document.getElementById("answerD").style.color = "red";
    }
    
    //reverts back to default color, becomes un-bolded, and deletes hints when radio button is not checked
    if(thirdOptionChecked === false){
        document.getElementById("c").style.color = "black";
        document.getElementById("c").style.fontWeight = "100";
        document.getElementById("answerC").innerHTML = "";
    }
    if(firstOptionChecked === false){
        document.getElementById("a").style.color = "black";
        document.getElementById("a").style.fontWeight = "100";
        document.getElementById("answerA").innerHTML = "";
    }
    if(secondOptionChecked === false){
        document.getElementById("b").style.color = "black";
        document.getElementById("b").style.fontWeight = "100";
        document.getElementById("answerB").innerHTML = "";
    }
    if(fourthOptionChecked === false) {
        document.getElementById("d").style.color = "black";
        document.getElementById("d").style.fontWeight = "100";
        document.getElementById("answerD").innerHTML = "";
    }
}