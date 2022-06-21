//jquery

$(function() {
    // prizemie
    $('#buttonGround').click(function() {
        $("#liftOpen1").hide();
    });
    $('#buttonGround').click(function() {
        $("#liftClosed1").show();    
    });
    $('#buttonGround').click(function() {
        $("#liftOpenG").show();    
    });
    $('#buttonGround').click(function() {
        $("#liftClosedG").hide();    
    });
    $('#buttonGround').click(function() {
        $("#liftClosed2").show();    
    });
    $('#buttonGround').click(function() {
        $("#liftOpen2").hide();    
    });
    $('#buttonGround').click(function() {
        $("#liftOpen3").hide();    
    });
    $('#buttonGround').click(function() {
        $("#liftClosed3").show();    
    });
    $('#buttonGround').click(function() {
        $("#liftOpen4").hide();    
    });
    $('#buttonGround').click(function() {
        $("#liftClosed4").show();    
    });

    // cesta na prve poschodie, nastup do vytahu, zatvoria sa dvere, otvoria sa na prvom poschodi
    $('#button1').click(function() {
        $("#liftOpenG").hide();
    });
    $('#button1').click(function() {
        $("#liftClosedG").show();    
    });
    $('#button1').click(function() {
        $("#liftOpen1").show();    
    });
    $('#button1').click(function() {
        $("#liftClosed1").hide();    
    });
    $('#button1').click(function() {
        $("#liftOpen2").hide();    
    });
    $('#button1').click(function() {
        $("#liftClosed2").show();    
    });
    $('#button1').click(function() {
        $("#liftClosed3").show();    
    });
    $('#button1').click(function() {
        $("#liftOpen3").hide();    
    });
    $('#button1').click(function() {
        $("#liftOpen4").hide();    
    });
    $('#button1').click(function() {
        $("#liftClosed4").show();    
    });

    // druhe poschodie,
    $('#button2').click(function() {
        $("#liftOpen1").hide();
    });
    $('#button2').click(function() {
        $("#liftClosed1").show();    
    });
    $('#button2').click(function() {
        $("#liftOpen2").show();    
    });
    $('#button2').click(function() {
        $("#liftClosed2").hide();    
    });
    $('#button2').click(function() {
        $("#liftOpenG").hide();    
    });
    $('#button2').click(function() {
        $("#liftClosedG").show();    
    });
    $('#button2').click(function() {
        $("#liftClosed3").show();    
    });
    $('#button2').click(function() {
        $("#liftOpen3").hide();    
    });
    $('#button2').click(function() {
        $("#liftOpen4").hide();    
    });
    $('#button2').click(function() {
        $("#liftClosed4").show();    
    });
    
    // tretie poschodie
    $('#button3').click(function() {
        $("#liftOpen2").hide();
    });
    $('#button3').click(function() {
        $("#liftClosed2").show();    
    });
    $('#button3').click(function() {
        $("#liftOpen3").show();    
    });
    $('#button3').click(function() {
        $("#liftClosed3").hide();    
    });
    $('#button3').click(function() {
        $("#liftOpenG").hide();    
    });
    $('#button3').click(function() {
        $("#liftClosedG").show();    
    });
    $('#button3').click(function() {
        $("#liftClosed4").show();    
    });
    $('#button3').click(function() {
        $("#liftOpen4").hide();    
    });
    
    // stvrte poschodie
    $('#button4').click(function() {
        $("#liftOpen3").hide();
    });
    $('#button4').click(function() {
        $("#liftClosed3").show();    
    });
    $('#button4').click(function() {
        $("#liftOpen4").show();    
    });
    $('#button4').click(function() {
        $("#liftClosed4").hide();    
    });
    $('#button4').click(function() {
        $("#liftClosed1").show();    
    });
    $('#button4').click(function() {
        $("#liftOpen1").hide();    
    });
    $('#button4').click(function() {
        $("#liftClosed2").show();    
    });
    $('#button4').click(function() {
        $("#liftOpen2").hide();    
    });

});


/* 

$('#someTabLink').click(function() {
    $('#someImage').show();
});

$('#someOtherTabLink').click(function() {
    $('#someImage').hide();
}); 

*/