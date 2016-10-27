var HttpRequest = (function(){
  var topic = THIS_FRAME;
  var lawResults;
  var actorResults;

  var buildURL = function (filters,offset,type) {
    var queryString = topic+"=topic";
    for(var x = 0; x < filters.length;x++){
      var name = filters[x].name;
      var id = filters[x].id;
      queryString += "&"+id+"="+name;
    }
    queryString += "&offset="+offset;
    var URL = "../server/"+type+".php?"+queryString
    console.log(URL);
    return URL;
  };

  var sendRequest = function(URL){
    return $.get(URL);
  };

  return {
    "getLaws" : function (filters, offset) {
      return sendRequest(buildURL(filters,offset,"laws"));
    },
    "getActors" : function (filters, offset) {
      return sendRequest(buildURL(filters,offset,"actors"));
    }

  };
})();
