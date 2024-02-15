function increasebtn() {
    var noBtn = document.getElementById("no");
    var yesBtn = document.getElementById("yes"); 
    var currpadd = parseFloat(window.getComputedStyle(noBtn).padding)
    var newpadd = currpadd * 1.1;
    noBtn.style.padding= newpadd +"px";   
}

// var currWidth = myDiv.clientWidth;
// myDiv.style.width = currWidth + 100 + "px";

// function increasebtn() {
//     var noBtn = document.getElementById("no");
//     var currpadd = parseFloat(window.getComputedStyle(noBtn).padding);
//     var newpadd = currpadd * 1.1; // Increase padding by 10%
//     noBtn.style.padding = newpadd + "px"; // Set the new padding with "px" unit
// }

function adjustPadding() {
    var noBtn = document.getElementById("no");
    var yesBtn = document.getElementById("yes");
    
    // Get the current padding value for the "no" button
    var noPadding = parseFloat(window.getComputedStyle(noBtn).padding);
    
    // Decrease the padding value of the "no" button by 10%
    var newNoPadding = noPadding * 0.9;
    
    // Update the "no" button's style with the new padding value
    noBtn.style.padding = newNoPadding + "px";
    
    // Get the current padding value for the "yes" button
    var yesPadding = parseFloat(window.getComputedStyle(yesBtn).padding);
    
    // Increase the padding value of the "yes" button by 20%
    var newYesPadding = yesPadding * 1.2;
    
    // Update the "yes" button's style with the new padding value
    yesBtn.style.padding = newYesPadding + "px";
}
function displayImage() {
    var container = document.getElementById("center");
    container.innerHTML = "<img src='Img/valentine.jpg' alt='Your Image' style='display: block; margin: 0 auto; width: 100vh;'>";
}