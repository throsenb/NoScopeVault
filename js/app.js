function select () {
	$(this).toggleClass('select spin');
	$(this).parent().siblings().children().removeClass('select spin');
}
$('.key-wrapper').click(select);



$('.prize').hide();
function unlock () {
	$(this).addClass( "spin");
	// $(this).fadeOut(1000);
	$(this).delay(1000).animate({
	    marginTop: "100px",
	    opacity: "0",
	    marginBottom: '-100px'
	  }, 100 );
	$(this).delay(1100).fadeOut();

// OPEN the TREASURE

	$('#treasure').delay(2500).animate({
	    height: "300px"}, 500, "easeOutBounce" );
	$('#top-lock').delay(2500).animate({
	    height: "50px"}, 500, "easeOutBounce" );
	$('#bottom-lock').delay(2500).animate({
	    height: "50px"}, 500, "easeOutBounce" );
	$('.prize').show();
	$('.prize').delay(3000).animate({
	    opacity: "1",
	  }, 300 );

}
$('#keyhole').click(unlock);


