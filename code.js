function abc() {
    var images= ["family.jpeg","family2.jpeg","family3.jpeg"];
    var picname= ["Manasa ", "Roshni", "Praveen"];
    currentpic = document.getElementById('familypic');
    alert(currentpic);
    if (currentpic.src.match("family.jpeg")){
        currentpic.src= images[1];
        document.getElementById('name').innerHTML= picname[1];
    }
    else {
        if (currentpic.src.match("family2.jpeg")) {
            currentpic.src= images[2];
            document.getElementById('name').innerHTML= picname[2];
        }
        else {
            currentpic.src= images[0];
            document.getElementById('name').innerHTML= picname[0];
        }
    }
    
}
