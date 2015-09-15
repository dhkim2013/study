function C(name){
	this.name=name;
}
C.prototype.Talk=function(){
	document.writeln("나는 ",this.name,"이야~~");
}
document.writeln();
var c=new C("원숭이");
c.Talk();