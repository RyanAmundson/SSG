// var FilterBox = (function(){
//
//     var categories = ['Sub-Issues','Organization Type', 'Sectors'];
//     var selectedSubIssues = [];
//     var selectedOrganizationTypes = [];
//     var selectedSectors = [];
//     var subIssues = [];
//     var organizationTypes = [];
//     var sectors = [];
//     var struct = {};
//
//     var FB = {
//       /*variables*/
//       /*functions*/
//       init:init,
//       /**/
//       getSubIssues:function(){return subIssues;},
//       getOrganizationTypes:function(){return organizationTypes;},
//       getSectors:function(){return sectors;},
//       /**/
//       setSubIssues:function(subIssues){subIssues = subIssues;},
//       setOrganizationTypes:function(organizationTypes){organizationTypes = organizationTypes;},
//       setSectors:function(sectors){sectors = sectors;},
//       /**/
//       clearAll:clearAll,
//       clearCategory:clearCategory,
//       toListElement:toListElement
//       /**/
//
//     };
//     /*functions*/
//     function init(data){
//       console.log(data);
//       struct = data;
//       clearAll();
//
//       subIssues = data['Sub-Issues'];
//       for(x in data['OrganizationTypes']){organizationTypes.push(data['OrganizationTypes'][x]['type']);}
//       sectors = data['sectors'];
//
//       subIssues = toList(subIssues);
//       organizationTypes = toList(organizationTypes);
//       sectors = toList(sectors);
//     }
//
//
//
//     function clearAll(){
//       selectedSubIssues, selectedOrganizationTypes, selectedSectors = [];
//     }
//
//
//     function clearCategory(catName){
//       var list = getListFromName(catName);
//       list = [];
//     }
//
//
//     function toggleSelected(item, catName){
//       var list = getListFromName(catName);
//       $.inArray(item, list) ? list.splice(0,1) : list.push(item);
//       return item;
//     }
//
//     function toList(elems){
//       return elems.map(function(elem){return FilterBox.toListElement(elem,elem,['inactive']);});
//     }
//
//     function toListElement(elem, id, classes, options){
//       console.log(elem);
//       return "<li><a id='"+id+"' class='"+classes.join(" ").replace(/\,/,' ')+"'>"+elem+"</a></li>";
//       // return "<li ><a id='"+elem.replace(/ /g,"_").replace(/,/g,"").replace(/_and_/g,"_")+"' name='"+name+"' class='"+classes.replace(" ","_")+"'>"+elem+"</a></li>";
//     }
//
//
//     /*helpers*/
//     function getListFromName(catName){
//       var list;
//       switch(catName){
//         case 'Sub-Issues':
//           list = selectedSubIssues;
//           break;
//         case 'Organization Types':
//           list = selectedOrganizationTypes;
//           break;
//         case 'Sectors':
//           list = selectedSectors;
//           break;
//         default:
//           list = [];
//       }
//       return list;
//     }
//     return FB;
//
// })();



// ==============================================================================
// FilterBox module
// ==============================================================================
var FilterBox = (function(){
  var selected = [];
  var activeSectors = [];
  var subIssues = [];
  filters = [
    {
      "name": "Government",
      "values": [
        "Bi-National",
        "Multi-state",
        "State or Provincial",
        "Regional",
        "Federal",
        "Special Purpose District",
        "Intergovernmental",
        "Local"
      ]
    },
    {
      "name": "Non-Government",
      "values": [
        "Non-Government Organizations",
        "Researchers/Scientists",
        "Business/Industry",
        "Multi-Stakeholders"
      ]
    },
    {
      "name": "Coast Salish Peoples",
      "values": [
        "Indigenous Nations"
      ]
    }
  ];

  //private functions
  var contains = function(a, obj) {
    for (var i = 0; i < a.length; i++) {
      if (a[i] === obj) {
        return true;
      }
    }
    return false;
  };
  var displaySelected = function(){
    $("#selectedFilters").html(convertToHtmlListItemWithClose($(".filter-active").map(function() {return $(this).text();}).get(),"selected","test"));
  };
  var toggleFilter = function(filter) {
    $(filter).toggleClass("filter-active",100,"easeOutSine",function(){
      displaySelected();

      Promise.all([HttpRequest.getLaws($(".filter-active"),0),  HttpRequest.getActors($(".filter-active"),0)]).then(function(results){
        var laws = JSON.parse(results[0]);
        var actors = JSON.parse(results[1]);
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
      });
    });
  };
  var toggleSectors = function(organization) {
    $("#placeholder").hide();
    var sectors = $("."+organization.replace(" ","_"));
    sectors.toggle();
    if (sectors.is( ":hidden" )){//remove active if toggling off
      sectors.removeClass("filter-active",100,"easeOutSine",function(){
        displaySelected();
      });
    }else{
      selected = selected.concat(sectors);
      displaySelected();
    }

  };
  var getOrganizationNames = function(){
    return filters.map(function(elem) { return elem.name; });
  };
  var convertToHtmlListItem = function(items,classes,name){
    return items.map(function(elem) {
      return "<li ><a id='"+elem.replace(/ /g,"_").replace(/,/g,"").replace(/_and_/g,"_")+"' name='"+name+"' class='"+classes.replace(" ","_")+"'>"+elem+"</a></li>";
    });
  };
  var convertToHtmlListItemWithClose = function(items,classes,name){
    return items.map(function(elem) {
      return "<li id='"+elem+"' name='"+name+"' class='"+classes.replace(" ","_")+"'>"+elem+"<a data-filter='"+elem+"' class='close'> &times; </a></li>";
    });
  };
  var populateFilterList = function(list){
    var subs = [];
    for( x in list){
      subs.push("<li><a name='sub' id='"+list[x].replace(/ /g,"_").replace(/,/g,"").replace(/_and_/g,"_")+"'>"+list[x]+"</a></li>")
    }
    $("#subissues").html(subs);


  };
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

  var init = function(){
    selected = [];
    //Add the organizations
    $('#page-description').html(getDescription(THIS_FRAME));
    populateFilterList(getSubIssueList(THIS_FRAME));
    $("#level-list").html(convertToHtmlListItem(getOrganizationNames(),"levels","level"));
    for(obj in filters){
      $("#sectors").append(convertToHtmlListItem(filters[obj].values,filters[obj].name,"sector"));
      $("#sectors a").hide();
    }
    //add events
    $(".filter-list a").on("click",function(){ toggleFilter(this);});
    $("#level-list a").on("click", function(){ toggleSectors(this.id);});
    $(document).on("click","#selectedFilters a", function(){
      $("#"+$(this).data("filter").replace(/ /g,"_").replace(/,/g,"").replace(/_and_/g,"_")).trigger("click");
      $(this).parent().remove();
    });

  };
  //public facing functions
  return {
    "init" : init,
    "getSelected" : function() {return $(".filter-active");}
  };
})();
