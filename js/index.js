
function setWhiteTheme(){
localStorage.setItem("theme","light");
const root = document.getElementById("SwitchButtons")
root.className="light";
}

function setDarkTheme(){
localStorage.setItem("theme","dark");
const root =document.getElementById("SwitchButtons");
root.className="dark";
}
function getvalue(){
const theme = localStorage.getItem("theme");
const root= document.getElementById("SwitchButtons");
root.className=theme;
}
const setCookie =() =>{
  document.cookie = "user : Amanbek; expires = Wed, 15 Jun 2022 17:59:00 GMT"
}



$('document').ready(function(){
    // hide the story from view
    $("#story").hide();
  
    // ---- event handler ---- //
    $("#btn-click").click(function(e) {
  
      e.preventDefault()
  
      // grab the values from the input boxes, then append them to the DOM
      $(".person").empty().append($("input.person").val());
      $(".adjective").empty().append($("input.adjective").val());
      $(".noun").empty().append($("input.noun").val());
      $(".verb").empty().append($("input.verb").val());
  
      // show the story
      $("#story").show();
  
      // empty the form's values
      $(':input').val('');
  
      // hide the questions
      $("#questions").hide();
  
    });
  
    // ---- event handler ---- //
    $("#play-btn").click(function(e) {
      $("#questions").show();
      $("#story").hide(); 
    });

    //tom thumb
    $("#size").hide();
    $("#btn-click2").click(function(e){
      e.preventDefault()

    let w = $(".imgwidth").val();
    let h = $(".imgheight").val();
    let n = $(".NumberofColors").val();

    let size = (w*h*n)/8/1000;
    
    $(".NumberofColors").empty().append(size);

      $("#size").show();
      $(':input').val('');

    })
    

})
  