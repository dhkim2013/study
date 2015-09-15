function a(s,e){
	var i,j;
	for (i=s;i<e;i++){
		document.writeln(i+”단”);
		for(j=i;j<9;j++){
			document.writeln(i,”*”,j,”=“,i*j);
		}
	}
}
a(2,9);