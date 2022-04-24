let text = document.querySelector("#text_content")
let output = document.querySelector(".flex_right")
let run_btn = document.querySelector("#run")
let mainTop = document.querySelector(".main_top")
let mainBottom = document.querySelector(".main_bottom")

// start of page code with template letral
mainTop.innerText += `
<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>task</title>
</head> 
<body>
`;

// add event for any click 
run_btn.addEventListener('click', (e) =>{
    //this for prevent page from reload and west the data
    e.preventDefault();
    output.innerHTML =  text.value
})

// end of page code with template letral
mainBottom.innerText += `
<script src="./index.js"></script>
</body>
</html>
`;