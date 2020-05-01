$().ready(function(){
    $.getJSON( "https://ewt.tailpath.com/stats.php", function( data ) {
    console.log(data);
    $("#text2").html(data["text"]);
  });
});