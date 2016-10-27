//==============================================================================
//Globals
//==============================================================================
var THIS_FRAME = window.frameElement.id;
//==============================================================================
//OnReady
//==============================================================================
$(document).ready(function() {

  //==============================================================================
  //Frame selection from start.php
  //==============================================================================

  $(".img-div, #water, #Land, .section-link").click(function(){parent.window.location = "../index.php?frame="+this.id;});
  $("#homebtn").click(function(){parent.window.location = "../index.php";});
  $(document).on("click", ".DLCheckbox", function(){parent.$(parent.document).trigger("event", this);});


  /*Listeners*/
  $(document).on("click","#lawpagination li, #actorpagination li", changePage);
  $(document).on("click keyup", "#searchButton, #searchBar", search);
  $(document).on('click', "#LawsAgreementsTab, #PolicyActorTab", changeTab);
  $(document).on("click", ".more", showMore);
  $(document).on('click', '#filters li', animateFilters);
  //==============================================================================
  //update
  //==============================================================================
  function update(results){
    console.log('updating...');
    var laws = results[0];
    var actors = results[1];
    $("#LAbadge").html(laws.length);
    $("#PAbadge").html(actors.length);
    results = CardBox.update([laws,actors]);
    for(x in results){
      results[x] = results[x].reduce(function(prevVal,card){
        return prevVal.concat(card.template());
      }, "");
      $('#LawsAgreementsData').html(results[0]);
      $('#PolicyActorData').html(results[1]);
      updatePagination(CardBox.lawPageCount(),"law");
      updatePagination(CardBox.actorPageCount(),"actor");
    }


  }
  function build(results){

    console.log('building...');
    var laws = results[0];
    var actors = results[1];
    $("#LAbadge").html(laws.length);
    $("#PAbadge").html(actors.length);
    results = CardBox.build([laws,actors]);
    for(x in results){
      results[x] = results[x].reduce(function(prevVal,card){
        return prevVal.concat(card.template());
      }, "");
      $('#LawsAgreementsData').html(results[0]);
      $('#PolicyActorData').html(results[1]);
      updatePagination(CardBox.lawPageCount(),"law");
      updatePagination(CardBox.actorPageCount(),"actor");
    }


  }


  function changePage(event){
    var results = CardBox.changePage(parseInt(event.target.innerHTML));
    results = results.reduce(function(prevVal,card){
      return prevVal.concat(card.template());
    }, "");
    CardBox.getActiveTab() == 0 ? $('#LawsAgreementsData').html(results) : $('#PolicyActorData').html(results);
  }

  function updatePagination(pages,section){
    var i = 0;
    var str = "";
    while(i < pages){
      var val = i+1;
      str += "<li value='"+val+"'><a href='#'>"+val+"</a></li>";
      i++;
    }
    $("#"+section+"pagination").html(str);
  }

  function search() {
    results = CardBox.search($("#searchBar").val());
    update(results);
  }

  //
  // function viewSearch(view,search, callback){
  //   searchView = [];
  //   for(i in view){
  //     var current = JSON.stringify(view[i]);
  //     var re = new RegExp(search, 'gi');
  //
  //     var q = current.match(re);
  //     if(q != null && (q.length) > 0){
  //
  //       searchView.push(view[i]);
  //     }
  //   }
  //   callback(searchView);
  // }
  //
  // function linearProbe(arr, index){
  //   if(arr[index] === 'null'){
  //     return index;
  //   }else if(index == 0){
  //     //shift all forward 1
  //   }else{
  //     linearProbe(arr,index-1);
  //   }
  // }
  //==============================================================================
  //laws and actors tabs
  //==============================================================================
  function changeTab(event){
    if(event.target.id != "LawsAgreementsTab"){
      CardBox.changeTab(1);
      $("#currentTab").html("Policy Actors");
      $("#PolicyActorSection").show();
      animatePolicyCards();

    }else{
      CardBox.changeTab(0);
      $("#currentTab").html("Laws and Agreements");
      $("#LawsAgreementsSection").show();
      animateLawCards();
    }
  }

  function animateLawCards(){
    //slide PA cards off
    $(".PolicyActorCard").each(function(index) {
      $(this).stop(true,true).delay(100*index).hide('slide',{direction:'right'},200);
    });
    //slide LA cards on
    $(".LawAgreementCard").each(function(index) {
      $(this).stop(true,true).delay(100*index).show('slide',{direction:'left'},200);
    });

    $("#LawsAgreementsSection").insertBefore($("#PolicyActorSection"));
    $("#PolicyActorSection").hide();
  }

  function animatePolicyCards(){

    $("#pagination").switchClass("Laws","Actors");
    $(".LawAgreementCard").each(function(index) {
      $(this).delay(100*index).hide('slide',{direction:'right'},200);
    });
    $(".PolicyActorCard").each(function(index) {
      $(this).delay(100*index).show('slide',{direction:'left'},200);
    });
    $("#PolicyActorSection").insertBefore($("#LawsAgreementsSection"));
    $("#LawsAgreementsSection").hide();

  }

  //==============================================================================
  //More button Modal
  //==============================================================================

  function showMore(){

    var more = this.value;
    if(CardBox.getActiveTab() === 0){
      var card = CardBox.findLawCard(more)[0];
      $("#modal").html(card.modalTemplate());
      var viewableOffset = $(parent.window).scrollTop();
      $("#myModal").css('top',viewableOffset);
      $("#triggerModal").click();
    }else if(CardBox.getActiveTab() === 1){
      var card = CardBox.findActorCard(more)[0];
      $("#modal").html(card.modalTemplate());
      var viewableOffset = $(parent.window).scrollTop();
      $("#myModal").css('top',viewableOffset);
      $("#triggerModal").click();
    }
  }

  function load_modal(){
    $('#myModal1').modal('show');
  }

  window.moreLawModal = function(data){
    //var id= data.ID;

    $("#modalHeader").html(data.LawName);
    $("#tol").html(data.TypeOfLaw);
    $("#nation").html(data.Nation);
    $("#issue").html(data.IssueType);
    $("#desc").html(data.Description);
    $("#relev").html(data.Relevance);

    $("#web").html(data.Website);
    $("#web").attr('href',data.Website);

    $("#triggerModal").click();
  }
  window.moreActorModal = function(data){
    //var id= data.ID;

    $("#modalHeader").html(data.ActorName);
    $("#tol").html(data.TypeOfActor);
    $("#nation").html(data.Nation);
    $("#issue").html(data.IssueType);
    $("#desc").html(data.Description);
    $("#relev").html(data.Relevance);

    $("#web").html(data.Website);
    $("#web").attr('href',data.Website);

    $("#triggerModal").click();
  }
  //==============================================================================
  //animation events
  //==============================================================================
  function animateFilters(){
    $("#dbItemsLaws").stop(true,true).effect("highlight", {}, 2000);
    $("#dbItemsActors").stop(true,true).effect("highlight", {}, 2000);
    $("#PAbadge").stop(true,true).effect("highlight", {}, 2000);
    $("#LAbadge").stop(true,true).effect("highlight", {}, 2000);
  }




  //==============================================================================
  //Initialization
  //==============================================================================






  function init(){
    THIS_FRAME = window.frameElement.id;
    var data = {
      "Sub-Issues": getSubIssueList(THIS_FRAME),
      "OrganizationTypes": getOrganizationTypes(),
      "sectors": getSectors()
    };
    FilterBox.init(data);
    // $('#subissues').html(FilterBox.getSubIssues().join(' '));
    // $('#level-list').html(FilterBox.getOrganizationTypes().join(' '));
    // $('#sectors').html(FilterBox.getSectors().join(' '));
    //set up breadcrumbs
    var currentCrumb = '<a id="crumb" class="dropdown-toggle" data-toggle="dropdown" href="#" style="background-image:url(../assets/images/'+THIS_FRAME+'.jpg)">'+THIS_FRAME.toUpperCase() +'</a>';// '+'<i class="fa fa-caret-down"></i>
    $("#currentCrumb").html(currentCrumb);
    //get initial data

    Promise.all([HttpRequest.getLaws([],0),HttpRequest.getActors([],0)]).then(function(results){
      var laws = JSON.parse(results[0]);
      var actors = JSON.parse(results[1]);
      build([laws,actors]);


    });
    //display PA right off
    $("#LawsAgreementsTab").trigger("click");
  }


  //init function for page
  init();
  //----
  $(function() {
    $("dlbuttonsingle").tooltip();
  });


});
