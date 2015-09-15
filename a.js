function a(s,e){
	var i,j;
	document.writeln();
	for (i=s;i<e;i++){
		document.writeln(i+"단");
		for(j=1;j<10;j++){
			document.writeln(i,"*",j,"=",i*j);
		}
		document.writeln();
	}
}
a(2,9);