const button = document.getElementsByClassName('button');
const indvButton = [
    document.getElementById('s1-b1'), //0 - goes to scenario 2
    document.getElementById('s1-b2'), //1 - goes to scenario 3
    document.getElementById('s2-b1'), //2 - goes to scenario 4
    document.getElementById('s2-b2'), //3 - goes to scenario 5
    document.getElementById('s3-b1'), //4 - goes to scenario 6
    document.getElementById('s3-b2'), //5 - goes to scenario 7
    document.getElementById('s4-b1'), //6 - ARRAYS FROM HERE ON OUT
    document.getElementById('s4-b2'), //7
    document.getElementById('s5-b1'), //8
    document.getElementById('s5-b2'), //9
    document.getElementById('s6-b1'), //10
    document.getElementById('s6-b2'), //11
    document.getElementById('s7-b1'), //12
    document.getElementById('s7-b2'), //13
    
];


indvButton[0].onclick = function() {
    document.getElementById('scenario-1').style.display = 'none';
    
    document.getElementById('scenario-2').style.display = 'block';
}

indvButton[1].onclick = function() {
    document.getElementById('scenario-1').style.display = 'none';
    
    document.getElementById('scenario-3').style.display = 'block';
}

indvButton[2].onclick = function() {
    document.getElementById('scenario-2').style.display = 'none';
    
    document.getElementById('scenario-4').style.display = 'block';
}

indvButton[3].onclick = function() {
    document.getElementById('scenario-2').style.display = 'none';
    
    document.getElementById('scenario-5').style.display = 'block';
}

indvButton[4].onclick = function() {
    document.getElementById('scenario-3').style.display = 'none';
    
    document.getElementById('scenario-6').style.display = 'block';
}

indvButton[5].onclick = function() {
    document.getElementById('scenario-3').style.display = 'none';
    
    document.getElementById('scenario-7').style.display = 'block';
}

indvButton[6].onclick = function() {
    document.getElementById('scenario-4').style.display = 'none';
    
    document.getElementById('scenario-8').style.display = 'block';
    document.getElementById('final-img').innerHTML = '<img src=" images/forestCampground.jpg">';
    document.getElementById('final-outcome').innerHTML = "You find a campground and get directions to get back home.";
    
}

indvButton[7].onclick = function() {
    document.getElementById('scenario-4').style.display = 'none';
    
    document.getElementById('scenario-8').style.display = 'block';
    document.getElementById('final-img').innerHTML = '<img src=" images/forestPath.jpg">';
    document.getElementById('final-outcome').innerHTML = "You go back to where you started. try again."
}

indvButton[8].onclick = function() {
    document.getElementById('scenario-5').style.display = 'none';
    
    document.getElementById('scenario-8').style.display = 'block';
    document.getElementById('final-img').innerHTML = '<img src=" images/forestfloor.jpg">';
    document.getElementById('final-outcome').innerHTML = "You hurt your foot and can't keep walking. Wait until help finds you."
}

indvButton[9].onclick = function() {
    document.getElementById('scenario-5').style.display = 'none';
    
    document.getElementById('scenario-8').style.display = 'block';
    document.getElementById('final-img').innerHTML = '<img src=" images/forestRV.jpg">';
    document.getElementById('final-outcome').innerHTML = "While following the shoe downstream, you find campers fishing. They give you a ride back to the city."
}

indvButton[10].onclick = function() {
    document.getElementById('scenario-6').style.display = 'none';
    
    document.getElementById('scenario-8').style.display = 'block';
    document.getElementById('final-img').innerHTML = '<img src=" images/forestsunrise.jpg">';
    document.getElementById('final-outcome').innerHTML = "You stay safe and dry until morning. Time to try to find a way home again."
}

indvButton[11].onclick = function() {
    document.getElementById('scenario-6').style.display = 'none';
    
    document.getElementById('scenario-8').style.display = 'block';
    document.getElementById('final-img').innerHTML = '<img src=" images/forestAnimal.jpg">';
    document.getElementById('final-outcome').innerHTML = "Hungry animals keep passing by through the night to get to the water. You're too tired keep going the next day. Wait for help."
}

indvButton[12].onclick = function() {
    document.getElementById('scenario-7').style.display = 'none';
    
    document.getElementById('scenario-8').style.display = 'block';
    document.getElementById('final-img').innerHTML = '<img src=" images/forestberries.jpg">';
    document.getElementById('final-outcome').innerHTML = "The berries are poisonous and get you sick. wait until help finds you."
}

indvButton[13].onclick = function() {
    document.getElementById('scenario-7').style.display = 'none';
    
    document.getElementById('scenario-8').style.display = 'block';
    document.getElementById('final-img').innerHTML = '<img src=" images/forestMorning.jpg">';
    document.getElementById('final-outcome').innerHTML = "When you awake the next day you spot a town in the distance. Walk towards it."
}