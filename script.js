//jquery

$(function() {
    // prizemie
    $('#buttonGround').click(function() {
        $("#liftOpen1, #liftClosedG, #liftOpen2, #liftOpen3, #liftOpen4").hide();
        $("#liftClosed1, #liftOpenG, #liftClosed2, #liftClosed3, #liftClosed4").show();    
        $("strong:contains('G')").css('color','black');
        $("strong:contains('1')").css('color','white');
        $("strong:contains('2')").css('color','white');
        $("strong:contains('3')").css('color','white');
        $("strong:contains('4')").css('color','white');    
        $(".groundFloor").css('color','green');   
        $(".floorOne").css('color','white');   
        $(".floorTwo").css('color','white');   
        $(".floorThree").css('color','white');   
        $(".floorFour").css('color','white');     
    });

    // prve poschodie
    $('#button1').click(function() {
        $("#liftOpenG, #liftClosed1, #liftOpen2, #liftOpen3, #liftOpen4").hide();
        $("#liftClosedG, #liftOpen1, #liftClosed2, #liftClosed3, #liftClosed4").show();      
        $("strong:contains('1')").css('color','black'); 
        $("strong:contains('G')").css('color','white'); 
        $("strong:contains('2')").css('color','white'); 
        $("strong:contains('3')").css('color','white');
        $("strong:contains('4')").css('color','white');   
        $(".floorOne").css('color','green');  
        $(".groundFloor").css('color','white');    
        $(".floorTwo").css('color','white');   
        $(".floorThree").css('color','white');   
        $(".floorFour").css('color','white');     
    });

    // druhe poschodie,
    $('#button2').click(function() {
        $("#liftOpen1, #liftClosed2, #liftOpenG, #liftOpen3, #liftOpen4").hide();
        $("#liftClosed1, #liftOpen2, #liftClosedG, #liftClosed3, #liftClosed4").show();    
        $("strong:contains('2')").css('color','black');
        $("strong:contains('1')").css('color','white'); 
        $("strong:contains('G')").css('color','white'); 
        $("strong:contains('3')").css('color','white'); 
        $("strong:contains('4')").css('color','white');   
        $(".floorTwo").css('color','green');  
        $(".groundFloor").css('color','white');   
        $(".floorOne").css('color','white');     
        $(".floorThree").css('color','white');   
        $(".floorFour").css('color','white');             
    });
    
    // tretie poschodie
    $('#button3').click(function() {
        $("#liftOpen2, #liftClosed3, #liftOpenG, #liftOpen4").hide(); //tu nieje #liftOpen1, pretoze vytah je zatvoreny uz po predchadzajucom ukone
        $("#liftClosed2, #liftOpen3, #liftClosedG, #liftClosed4").show();  
        $("strong:contains('3')").css('color','black');
        $("strong:contains('1')").css('color','white');
        $("strong:contains('2')").css('color','white'); 
        $("strong:contains('G')").css('color','white'); 
        $("strong:contains('4')").css('color','white');   
        $(".floorThree").css('color','green'); 
        $(".groundFloor").css('color','white');   
        $(".floorOne").css('color','white');   
        $(".floorTwo").css('color','white');    
        $(".floorFour").css('color','white');          
    });
    
    // stvrte poschodie
    $('#button4').click(function() {
        $("#liftOpen3, #liftClosed4, #liftOpen1, #liftOpen2").hide(); //tu nieje #liftOpenG, pretoze vytah je zatvoreny uz po predchadzajucom ukone
        $("#liftClosed3, #liftOpen4, #liftClosed, #liftClosed2, #liftClosed1").show();       
        $("strong:contains('4')").css('color','black');
        $("strong:contains('1')").css('color','white'); 
        $("strong:contains('2')").css('color','white'); 
        $("strong:contains('3')").css('color','white'); 
        $("strong:contains('G')").css('color','white'); 
        $(".floorFour").css('color','green');  
        $(".groundFloor").css('color','white');   
        $(".floorOne").css('color','white');   
        $(".floorTwo").css('color','white');   
        $(".floorThree").css('color','white');              
    });

});

