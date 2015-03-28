var color = $('select').css('background-color'); 
var keyselect = false;
var treasureOpen = false;
var keycolor = $(this).find('.key').attr('src');

$('#reset').toggle();
$('.prize').toggle();
$('#tooltip').fadeOut();



function select () {
	$(this).addClass('select');
	$(this).parent().siblings().children().removeClass('select spin');
	// color = $(this).css('background-color');
	$('#keyhole').addClass('select spin');
	var colorname =  this.id;
	$('#keyhole').removeClass().addClass(colorname).addClass( colorname + '-pulse');
	$('#prizeName').html(colorname);
	// $('#treasure').removeClass().addClass(colorname);
	keyselect = true;	
	$('#tooltip').fadeOut();
	$('.keyhole-block').attr('src', 'img/keyhole-' + colorname + '.png');
	$(this).find('.key').attr('src', 'img/white-key.png');

	// Validate if the key is already selected
	if (keycolor == 'img/white-key.png') {
		console.log('Key is white')
	};

	// $(this).siblings().find('#blue').find('.key').attr('src', 'img/blue-key.png');
	$(this).parent().siblings().find('#blue').find('.key').attr('src', 'img/blue-key.png');
	$(this).parent().siblings().find('#pink').find('.key').attr('src', 'img/pink-key.png');
	$(this).parent().siblings().find('#yellow').find('.key').attr('src', 'img/yellow-key.png');
	$(this).parent().siblings().find('#green').find('.key').attr('src', 'img/green-key.png');
}


function unlock () {
	// Animate the Keyhole
		$('#keyhole').addClass( "spin");
		$('#keyhole').delay(1000).animate({
		    marginTop: "100px",
		    opacity: "0",
		    marginBottom: '-100px'
		  }, 100 );

	// Open the Tresure
		treasureOpen = true;
		$('#treasure').delay(2500).animate({
		    height: "300px"}, 500, "easeOutBounce" );
		$('#top-lock').delay(2500).animate({
		    height: "50px",
		    backgroundPositionY: "-100px"
			}, 500, "easeOutBounce" );
		$('#bottom-lock').delay(2500).animate({
		    height: "50px",
		    backgroundPositionY: "100px"
			}, 500, "easeOutBounce" );


	// Show prizes and reset button
		$('.prize').delay(3000).queue(function(){$(this).toggle()});
		$('#reset').delay(4000).queue(function(){$(this).toggle()});

	//Reset key selection: 	
		$('.key-wrapper').removeClass('select');

}

function lock () {
	// Return keyhole
		$('#keyhole').removeClass();
		$('#keyhole').delay(1000).animate({
		    marginTop: "-50px",
		    opacity: "1",
		    marginBottom: '0px'
		  }, 100 );

	// Close Treasure
		treasureOpen = false;
		$('#treasure').delay().animate({
		    height: "0px"}, 500, "easeOutBounce" );
		$('#top-lock').delay().animate({
		    height: "200px",
		    backgroundPositionY: "0px"
			}, 500, "easeOutBounce" );
		$('#bottom-lock').delay().animate({
		    height: "200px",
		    backgroundPositionY: "0px"
			}, 500, "easeOutBounce" );

	//Hide the Prize and reset button
		$('.prize').toggle();
		$('#reset').toggle();

		keyselect = false;
}




function isKeySelected () {
	if(keyselect == true) {
		$('#keyhole').click(unlock);
	}
	else {
		$('#tooltip').fadeIn(200);
	}
};

function hidetooltip () {
	$('#tooltip').fadeOut(200);
}


function isTreasureOpen () {
	if(treasureOpen == true) {
		$('.key-wrapper').click(console.log('hi'));
	}
	if(treasureOpen == false) {
		$('.key-wrapper').click(select);
	}

	else {
		return
		alert('The treasure is closed')
	}
};

$('#keyhole').mouseenter(isKeySelected).mouseleave(hidetooltip);
$('.key-wrapper').mouseenter(isTreasureOpen);
$('#reset').click(lock);







