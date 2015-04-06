var color = $('select').css('background-color'); 
var keyselect = false;
var treasureOpen = false;
var keycolor = $(this).find('.key').attr('src');


$('#reset').toggle();
$('.prize').toggle();
$('#tooltip').fadeOut();




function select () {
	$(this).addClass('select');
	$(this).parent().siblings().children().removeClass('select ');
	// color = $(this).css('background-color');
	$('#keyhole-wrapper').addClass('select spin');
	var colorname =  this.id;
	$('#keyhole-wrapper').removeClass().addClass( colorname + '-pulse');
	$('#keyhole').removeClass().addClass('center-block').addClass(colorname + '-border');

	$('#prizeName').html(colorname);
	// $('#treasure').removeClass().addClass(colorname);
	keyselect = true;	
	$('#tooltip').fadeOut();
	$('.keyhole-block').attr('src', 'img/old_keyhole/keyhole-' + colorname + '.png');
	$(this).find('.key').attr('src', 'img/white-key.png');

	// Validate if the key is already selected
	if (keycolor == 'img/white-key.png') {
		console.log('Key is white')
	};

	// $("html, body").animate({ scrollTop: $(document).height() }, 3000);


	// $(this).siblings().find('#blue').find('.key').attr('src', 'img/blue-key.png');
	$(this).parent().siblings().find('#blue').find('.key').delay(100).attr('src', 'img/blue-key.png');
	$(this).parent().siblings().find('#pink').find('.key').delay(100).attr('src', 'img/pink-key.png');
	$(this).parent().siblings().find('#yellow').find('.key').delay(100).attr('src', 'img/yellow-key.png');
	$(this).parent().siblings().find('#green').find('.key').delay(100).attr('src', 'img/green-key.png');
}


function unlock () {
	// Animate the Keyhole
		$('#keyhole-wrapper').addClass( "spin");
	   	setTimeout(function(){
			$('#keyhole').addClass('spin-full');
		}, 8000 );

		$('#keyhole-wrapper').delay(10000).animate({
		    marginTop: "100px",
		    opacity: "0",
		    marginBottom: '-200px'
		  }, 300 );


		$('#keyhole').delay(10000).animate({
		    marginTop: "100px",
		    opacity: "0",
		    marginBottom: '-200px'
		  }, 300 );

	// Open the Tresure
		treasureOpen = true;

		setTimeout(function(){ 
			$('#top-lock').addClass('openTop');
			$('#bottom-lock').addClass('openBottom');
			$('#treasure').addClass('openTreasure');
		}, 12000);


		


	// Show prizes and reset button
		$('.prize').delay(12500).queue(function(){$(this).toggle()});
		$('#reset').delay(12000).queue(function(){$(this).toggle()});



}

function lock () {
	// Return keyhole

		$('#keyhole-wrapper').animate({
		    marginTop: "-100px",
		    opacity: "1",
		    marginBottom: '-200px'
		  }, 500 );


		$('#keyhole').animate({
		    marginTop: "50px",
		    opacity: "1",
		    marginBottom: '0px'
		  }, 500 );



	// Close Treasure
		treasureOpen = false;
		$('#top-lock').removeClass('openTop');
		$('#bottom-lock').removeClass('openBottom');
		$('#treasure').removeClass('openTreasure');

	//Hide the Prize and reset button
		$('.prize').toggle();
		$('#reset').toggle();
		keyselect = false;
	
	//Reset key selection: 	
		$('.key-wrapper').removeClass('select');

	//Reset key color back
		$('#blue').find('.key').attr('src', 'img/blue-key.png');
		$('#pink').find('.key').attr('src', 'img/pink-key.png');
		$('#yellow').find('.key').attr('src', 'img/yellow-key.png');
		$('#green').find('.key').attr('src', 'img/green-key.png');

	// Reset keyhole color
		$('.keyhole-block').attr('src', 'img/old_keyhole/keyhole.png');
		
}




function isKeySelected () {
	if(keyselect == true) {
		$('#keyhole-wrapper').click(unlock);
		$('#keyhole').click(unlock);
	}
	else {
		$('#tooltip').fadeIn(0);
	}
};

function hidetooltip () {
	$('#tooltip').fadeOut(0);
}


function isTreasureOpen () {
	if(treasureOpen == true) {
		$('.key-wrapper').click(console.log('Treasure is Open'));
	}
	if(treasureOpen == false) {
		$('.key-wrapper').click(select);
	}

	else {
		return
		alert('The treasure is closed')
	}
};

$('#keyhole-wrapper').mouseenter(isKeySelected).mouseleave(hidetooltip);
$('#keyhole').mouseenter(isKeySelected).mouseleave(hidetooltip);

$('.key-wrapper').mouseenter(isTreasureOpen);
$('#reset').click(lock);







