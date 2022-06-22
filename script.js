//jquery

$(function() {
    // prizemie
    $('#buttonGround').click(function() {
        $("#liftOpen1").hide();
        $("#liftClosed1").show();    
        $("#liftOpenG").show();    
        $("#liftClosedG").hide();    
        $("#liftClosed2").show();    
        $("#liftOpen2").hide();    
        $("#liftOpen3").hide();    
        $("#liftClosed3").show();    
        $("#liftOpen4").hide();    
        $("#liftClosed4").show();    
    });

    // prve poschodie
    $('#button1').click(function() {
        $("#liftOpenG").hide();
        $("#liftClosedG").show();    
        $("#liftOpen1").show();    
        $("#liftClosed1").hide();    
        $("#liftOpen2").hide();    
        $("#liftClosed2").show();    
        $("#liftClosed3").show();    
        $("#liftOpen3").hide();    
        $("#liftOpen4").hide();    
        $("#liftClosed4").show();    
    });

    // druhe poschodie,
    $('#button2').click(function() {
        $("#liftOpen1").hide();
        $("#liftClosed1").show();    
        $("#liftOpen2").show();    
        $("#liftClosed2").hide();    
        $("#liftOpenG").hide();    
        $("#liftClosedG").show();    
        $("#liftClosed3").show();    
        $("#liftOpen3").hide();    
        $("#liftOpen4").hide();    
        $("#liftClosed4").show();    
    });
    
    // tretie poschodie
    $('#button3').click(function() {
        $("#liftOpen2").hide();
        $("#liftClosed2").show();    
        $("#liftOpen3").show();    
        $("#liftClosed3").hide();    
        $("#liftOpenG").hide();    
        $("#liftClosedG").show();    
        $("#liftClosed4").show();    
        $("#liftOpen4").hide();    
    });
    
    // stvrte poschodie
    $('#button4').click(function() {
        $("#liftOpen3").hide();
        $("#liftClosed3").show();    
        $("#liftOpen4").show();    
        $("#liftClosed4").hide();    
        $("#liftClosed1").show();    
        $("#liftOpen1").hide();    
        $("#liftClosed2").show();    
        $("#liftOpen2").hide();    
    });

});

