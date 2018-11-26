



var wins = 0;
var losses = 0;
var randomNumber

var selectedCharacterIndex = -1;
var attackCharacterIndex = -1;

var values = [
    { name: 'Reptile', healthPoints: 120, ap: 8,  attackPoints: 8,  counterAttack: 10, image: 'assets/images/reptilebox.jpeg', image2: 'assets/images/reptile.jpg', image3: 'assets/images/reptile.jpg' },
    { name: 'Kano',  healthPoints: 100, ap: 10, attackPoints: 10, counterAttack: 15, image: 'assets/images/kanobox.jpeg', image2: 'assets/images/kano.jpeg' , image3: 'assets/images/kanoflip.jpg' },
    { name: 'Scorpion',  healthPoints: 150, ap: 5,  attackPoints: 5,  counterAttack: 20, image: 'assets/images/scorpionbox.jpeg', image2: 'assets/images/mezco.jpg' , image3: 'assets/images/mezco.jpg' },
    { name: 'Sub Zero',  healthPoints: 180, ap: 3,  attackPoints: 3,  counterAttack: 30, image: 'assets/images/subzerobox.jpeg' , image2: 'assets/images/subzero.jpg' , image3: 'assets/images/subzero.jpg' },
];

// get random number for the place holder 
$(document).ready(function () {

    for(var i = 0; i < values.length; i++) {
        var startWarsCharacter = values[i];
        $("#all_characters").append(`<div id="character_${i}" index="${i}" > ${startWarsCharacter.name}<br/><img src="${startWarsCharacter.image}" width="200px" height = "150px"/><br/>${startWarsCharacter.healthPoints} </div>`);
        $(`#character_${i}`).on("click", function () {
            var index = parseInt($(this).attr('index'));
            
            if (selectedCharacterIndex === -1) { 
                selectedCharacterIndex = index;
                var yourCharacter = values[selectedCharacterIndex];
                $("#your_character").append(`<div id="stagechar_${i}index="${i}" >${yourCharacter.name}<br/><div id="your_points">${yourCharacter.healthPoints}</div><img src="${yourCharacter.image2}" width="250px" height= "450px"/></div>`);
            
                $(`#character_${selectedCharacterIndex}`).hide();
            } else if (attackCharacterIndex === -1){
                attackCharacterIndex = index;
                var yourCharacter = values[attackCharacterIndex];
                $("#attack_character").append(`<div>${yourCharacter.name}<br/><div id="attacker_points">${yourCharacter.healthPoints}</div><img src="${yourCharacter.image3}" width="250px" height= "450px" /></div>`);
              
                
                $(`#character_${attackCharacterIndex}`).hide();
            }

        });
    
    }

    $("#attack_button").on("click", function() {
        if (selectedCharacterIndex < 0 || attackCharacterIndex < 0) {
            alert('Selected???');
        }

        var yourCharacter = values[selectedCharacterIndex];
        var attackCharacter = values[attackCharacterIndex];

        if (yourCharacter.healthPoints <= 0) {
            alert("you lost");
            return;
        }

        yourCharacter.attackPoints = yourCharacter.attackPoints + yourCharacter.ap;
        yourCharacter.healthPoints = yourCharacter.healthPoints - attackCharacter.counterAttack;
   
        $("#your_points").text(yourCharacter.healthPoints);

        attackCharacter.healthPoints = attackCharacter.healthPoints - yourCharacter.attackPoints;

        $("#attacker_points").text(attackCharacter.healthPoints);

        if (attackCharacter.healthPoints < 0) {
            attackCharacterIndex = -1;
            $("#attack_character").html('');
        }

        console.log(values);

    });


    // on click get totals of each crystal using random numbers

});

















