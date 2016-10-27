
$( document ).on('ready',function() {
  var DLCart = [];

  $(document).on("event", function(event,card) {
    var more = card.value;
    $.get("server/"+card.getAttribute("data-label")+".php?more="+more, function(data,status){
      var x = $.inArray(data, DLCart);
      if(x == -1){
        $(card).stop(true, true).effect( "transfer", { to: $('#minimizeCart') }, 800, function() {
                  addToDLCart(data);
                  $("#minimizeCart").stop(true,true).effect("highlight", {color: 'green'}, 1000);

        });
      }
    });
  });


  if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    initializeDLCart();
  } else {
    console.log("Sorry! No Web Storage support..");
  }

  function initializeDLCart(){
    if(localStorage.getItem("DLCart")){
      DLCart = JSON.parse(localStorage.getItem("DLCart"));
      var fill = "<br>";
      for(var i in DLCart){
        var item = JSON.parse(DLCart[i]).LawName || JSON.parse(DLCart[i]).ActorName;
        fill += "<li class='btn btn-info' id='"+i+"'>"+item+"<button class='btn' id='deleteItem' value='"+i+"'>X</button></li>";
      }
      $("#DLCartList").html(fill);
    }
  }

  function ClearCart(){
    localStorage.removeItem("DLCart");
    DLCart = [];
    $("#DLCartList").html("");
  }

  $("#ClearCart").click(function(){
    ClearCart();
  });


  function addToDLCart(data){
    DLCart.push(data);
    if(DLCart){
      localStorage.setItem("DLCart",JSON.stringify(DLCart));
      var fill = "<br>";
      for(var i in DLCart){
        var item = JSON.parse(DLCart[i]).LawName || JSON.parse(DLCart[i]).ActorName;
        fill += "<li class='btn btn-info' id='"+i+"'>"+item+"<button class='btn' id='deleteItem' value='"+i+"'>X</button></li>";
      }
      $("#DLCartList").html(fill);
    }
  }

  function removeFromDLCart(index){
    DLCart.splice(index,1);
    localStorage.setItem("DLCart",JSON.stringify(DLCart));
    var fill = "<br>";
    for(var i in DLCart){
      var item = JSON.parse(DLCart[i]).LawName || JSON.parse(DLCart[i]).ActorName;
      fill += "<li class='btn btn-info' id='"+i+"'>"+item+"<button class='btn' id='deleteItem' value='"+i+"'>X</button></li>";
    }
    $("#DLCartList").html(fill);
  }

  $(document).on('click','#deleteItem', function(){
    removeFromDLCart(this.value);
  });

  $("#DLButton").on("click",function(){

    var docDefinition = { content: [],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'left',
			    margin: [0,20,0,60]
        },
        subheader: {
          italic: true,
          alignment: 'left',
          fontSize: 12
        }
      }
    };
    for(var q=0; q < DLCart.length; q++){

      var current = JSON.parse(DLCart[q]);
      var title = {stack: [
          current.LawName || current.ActorName,
          {text: current.TypeOfLaw || current.TypeOfActor+'      '+current.Nation, style: 'subheader'}
        ],
        style:'header'
      };
      var relevance = {text: current.Relevance, style: ''};
      var website = {text: current.Website, style: '', margin:[0,20,0,80]};
      var separator = { text: ''};



      docDefinition.content.push(title);
      docDefinition.content.push(relevance);
      docDefinition.content.push(website);
    }






    pdfMake.createPdf(docDefinition).open();

  });

  $("#minimizeCart").click(function(){

    $("#cartDiv").slideToggle();
    $("#angledown").toggle();
    $("#angleup").toggle();

  });

  $("#DLCartList li").click(function(){
  });

  $("#homebtn").click(function(){
    parent.window.location = "../index.php";
  });

});
