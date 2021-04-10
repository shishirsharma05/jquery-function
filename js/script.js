// animation
$(document).ready(function(){
  $(".button1").click(function(){
    $("div").animate({left: '250px'});
  });

  // slider
   $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });

  // hide
  $(".button2").click(function(){
    $("p").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });

  // show value
   $(".button3").click(function(){
    alert($("#jq").attr("href"));
  });

   // Remove
   $(".button4").click(function(){
    $("#div1").remove();
  });

   // animation
   $("#start").click(function(){
    $("div").animate({height: 300}, 1500);
    $("div").animate({width: 300}, 1500);
    $("div").animate({height: 100}, 1500);
    $("div").animate({width: 100}, 1500);
  });
  $("#stop").click(function(){
    $("div").clearQueue();
  });

  // demination
  $(".button6").click(function(){
    var txt = "";
    txt += "Width of div: " + $("#div1").width() + "</br>";
    txt += "Height of div: " + $("#div1").height();
    $("#div2").html(txt);
  });

  // paramiters
  $(".button7").click(function(){
    $("#div4").fadeIn();
    $("#div5").fadeIn("slow");
    $("#div6").fadeIn(3000);
  });

  // table
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

// anchor text
  $( "input, a" ).tooltip();
});