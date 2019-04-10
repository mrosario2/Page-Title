$("button").click(function() {
    var size = $(".size").val();
    var color = $(".color").val();
if(size <= 72 && color=== "Red" ){
$(".message").text("IronMan");
}
else if(size <= 72 && color=== "Blue" ){
$(".message").text("Batman");
}
else if(size > 72 && color==="Red" ){
$(".message").text("Superman");
}
else if(size > 72 && color==="Blue" ){
$(".message").text("Joker");
}
});