function LawCard(id,name,nation,type,description,relevance,issue, website){
  this.id = id;
  this.name = name;
  this.nation = nation;
  this.type = type;
  this.description = description;
  this.relevance = relevance;
  this.issue = issue;
  this.website = website;
  this.template = template;
  this.modalTemplate = modalTemplate;

  return this;


  function template(){
    return '<div class="container-fluid LawAgreementCard" id="LawCard'+this.id+'" style="border:solid 1px black;min-height:120px; margin:10px;" >'+
    '<div class="row">'+
    '<div class="col-md-3">'+
    '<b>'+this.name+'</b>'+
    '</div>'+
    '<div class="col-md-3">'+
    '<b>'+this.nation+'</b>'+
    '</div>'+
    '<div class="col-md-3">'+
    '<b>'+this.type+'</b>'+
    '</div>'+
    '<div class="col-md-2">'+
    '</div>'+
    '</div>'+
    '<hr>'+
    '<div class="row">'+
    '<div class="col-md-9">'+
    this.description+
    '</div>'+
    '</div>'+
    '<br>'+
    '<br>'+
    '<br>'+
    '<div class="row">'+
    '<div class="col-md-2">'+
    '<button class="btn btn-lg invisible" style="margin:3px;" >placeholder</button>'+
    '</div>'+
    '<div class="col-md-offset-10">'+
    '<div class="btn-group btn-group-lg pull-right" style="margin:3px;">'+
    '<button id="dlbuttonsingle" data-card="" data-label="laws" title="Add this item to the Download Cart below" class="DLCheckbox btn btn-warning" type="submit" value="'+this.id+'" style="border: 1px solid black"><i class="fa fa-cloud-download" ></i></button>'+
    '<button id="morebutton" type="button" class="btn btn-success more" value="'+this.id+'" name="button" style="border: 1px solid black">more...</button>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>';
  }

  function modalTemplate(){
    return '<div id="myModal" class="modal fade" role="dialog" style="position:fixed;top:500px">'+
    '<div class="modal-dialog modal-lg">'+
    '<div class="vertical-alignment-helper">'+
    '<div class="modal-dialog vertical-align-center">'+
    '<div class="modal-content">'+
    '<div class="modal-header">'+
    '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
    '<h4 id="modalHeader" class="modal-title">'+this.name+'</h4>'+
    '</div>'+
    '<div class="modal-body">'+
    '<div class="container-fluid">'+
    '<div class="row">'+
    '<b>'+
    '<div id="tol" class="col-md-4">'+
    this.type+
    '</div>'+
    '<div id="nation" class="col-md-4">'+
    this.nation+
    '</div>'+
    '<div id="issue" class="col-md-4">'+
    this.issue+
    '</div>'+
    '</b>'+
    '</div>'+
    '<br>'+
    '<br>'+
    '<div class="row">'+
    '<div id="desc" class="col-md-12">'+
    this.description+
    '</div>'+
    '</div>'+
    '<br>'+
    '<br>'+
    '<div class="row">'+
    '<div id="relev" class="col-md-12">'+
    this.relevance+
    '</div>'+
    '</div>'+
    '<br>'+
    '<br>'+
    '<div class="row">'+
    '<div class="col-md-12">'+
    '<a href="'+this.website+'" target="_blank" id="web">Visit Website</a>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="modal-footer">'+
    '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>';
  }

}



function ActorCard(id,name,nation,type,description,relevance,issue, website){
  this.id = id;
  this.name = name;
  this.nation = nation;
  this.type = type;
  this.description = description;
  this.relevance = relevance;
  this.issue = issue;
  this.website = website;
  this.template = template;
  this.modalTemplate = modalTemplate;

  return this;


  function template(){
    return '<div class="container-fluid PolicyActorCard" id="ActorCard'+this.id+'" style="border:solid 1px black;min-height:120px; margin:10px;" >'+
    '<div class="row">'+
    '<div class="col-md-3">'+
    '<b>'+this.name+'</b>'+
    '</div>'+
    '<div class="col-md-3">'+
    '<b>'+this.nation+'</b>'+
    '</div>'+
    '<div class="col-md-3">'+
    '<b>'+this.type+'</b>'+
    '</div>'+
    '<div class="col-md-2">'+
    '</div>'+
    '</div>'+
    '<hr>'+
    '<div class="row">'+
    '<div class="col-md-9">'+
    this.description+
    '</div>'+
    '</div>'+
    '<br>'+
    '<br>'+
    '<br>'+
    '<div class="row">'+
    '<div class="col-md-2">'+
    '<button class="btn btn-lg invisible" style="margin:3px;" >placeholder</button>'+
    '</div>'+
    '<div class="col-md-offset-10">'+
    '<div class="btn-group btn-group-lg pull-right" style="margin:3px;">'+
    '<button id="dlbuttonsingle" data-card="" data-label="actors" title="Add this item to the Download Cart below" class="DLCheckbox btn btn-warning" type="submit" value="'+this.id+'" style="border: 1px solid black"><i class="fa fa-cloud-download" ></i></button>'+
    '<button id="morebutton" type="button" class="btn btn-success more" value="'+this.id+'" name="button" style="border: 1px solid black">more...</button>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>';
  }

  function modalTemplate(){
    return '<div id="myModal" class="modal fade" role="dialog" style="position:fixed;top:500px">'+
    '<div class="modal-dialog modal-lg">'+
    '<div class="vertical-alignment-helper">'+
    '<div class="modal-dialog vertical-align-center">'+
    '<div class="modal-content">'+
    '<div class="modal-header">'+
    '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
    '<h4 id="modalHeader" class="modal-title">Law Name</h4>'+
    '</div>'+
    '<div class="modal-body">'+
    '<div class="container-fluid">'+
    '<div class="row">'+
    '<b>'+
    '<div id="tol" class="col-md-4">'+
    this.type+
    '</div>'+
    '<div id="nation" class="col-md-4">'+
    this.nation+
    '</div>'+
    '<div id="issue" class="col-md-4">'+
    this.issue+
    '</div>'+
    '</b>'+
    '</div>'+
    '<br>'+
    '<br>'+
    '<div class="row">'+
    '<div id="desc" class="col-md-12">'+
    this.description+
    '</div>'+
    '</div>'+
    '<br>'+
    '<br>'+
    '<div class="row">'+
    '<div id="relev" class="col-md-12">'+
    this.relevance+
    '</div>'+
    '</div>'+
    '<br>'+
    '<br>'+
    '<div class="row">'+
    '<div class="col-md-12">'+
    '<a href="'+this.website+'" id="web">Visit Website</a>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="modal-footer">'+
    '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>';
  }

}
