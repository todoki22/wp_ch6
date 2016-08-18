document.write( "<pre>" );

for( var i = 0; i < 30; i++ ){
	for( var j = 0; j < 30-i; j++) {
		document.write( "*" );
	}
	document.write( "\n" );
}
document.write( "</pre>" );