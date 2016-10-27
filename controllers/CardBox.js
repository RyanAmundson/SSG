var CardBox = (function(){

  const tabs = ["PA","LA"];
  const cardsPerPage = 10;
  activeTab = 0;
  var vm = {};
  vm[0] = {
    type: "laws",
    cardCount: 0,
    pageCount: 0,
    currentPage:1,
    offset:0,
    cards: [],
    totalCards: []
  };
  vm[1] = {
    type:"actors",
    cardCount: 0,
    pageCount: 0,
    currentPage:1,
    offset:0,
    cards: [],
    totalCards: []
  };


  return {
    lawCardCount:function(){return vm[0].cardCount;},
    actorCardCount:function(){return vm[1].cardCount;},
    lawPageCount:function(){return vm[0].pageCount;},
    actorPageCount:function(){return vm[1].pageCount;},
    getActiveTab:function(){return activeTab;},
    getLawCards:function(){return vm[0].cards;},
    getActorCards:function(){return vm[1].cards;},
    findLawCard:findLawCard,
    findActorCard:findActorCard,
    search:search,
    build:build,
    update:update,
    changeTab:changeTab,
    changePage:changePage
  };


// runs once per refresh or page load
  function build(res){
    console.log("building results...");
    for(x in res){
      vm[x].cardCount = res[x].length;
      vm[x].pageCount = Math.ceil(res[x].length/cardsPerPage);
      vm[x].currentPage = 1;
      vm[x].offset = 0;
      vm[x].cards = vm[x].totalCards = buildCards(res[x], x);
    }
    return [vm[0].cards.slice(0,cardsPerPage),vm[1].cards.slice(0,cardsPerPage)];
  }
  function update(res){
    for(x in res){
      vm[x].cardCount = res[x].length;
      vm[x].pageCount = Math.ceil(res[x].length/cardsPerPage);
      vm[x].currentPage = 1;
      vm[x].offset = 0;
      vm[x].cards = res[x];
    }
    return [vm[0].cards.slice(0,cardsPerPage),vm[1].cards.slice(0,cardsPerPage)];
  }

  function changeTab(tab){
    activeTab = tab;
  }
  function changePage(pageNum){
    vm[activeTab].currentPage = pageNum;
    return vm[activeTab].cards.slice((pageNum-1)*cardsPerPage,pageNum*cardsPerPage);
  }

  function search(name) {
      var results = [];
      name = name.toUpperCase();
      results[0] = vm[0].totalCards.filter(function(entry) {
          return entry.name.toUpperCase().indexOf(name) !== -1;
      });
      results[1] = vm[1].totalCards.filter(function(entry) {
          return entry.name.toUpperCase().indexOf(name) !== -1;
      });
      return results;
  }
  function findLawCard(id){
    return vm[0].cards.filter(function(cV){
        return cV.id == id;
    });
  }
  function findActorCard(id){
    return vm[1].cards.filter(function(cV){
        return cV.id == id;
    });
  }

  function buildCards(res, type){
    var entries = [];
    if(type == 0){
      for (x in res){
        if(res[x]){
          var cur = res[x];
          entries[x] = new LawCard(cur.LawID,cur.LawName,cur.Nation,cur.TypeOfLaw,cur.Description,cur.Relevance,cur.IssueType,cur.Website);
        }
      }
    }
    if(type == 1){
      for (x in res){
        if(res[x]){
          var cur = res[x];
          entries[x] = new ActorCard(cur.ActorID,cur.ActorName,cur.Nation,cur.TypeOfActor,cur.Description,cur.Relevance,cur.IssueType,cur.Website);
        }
      }
    }
    return entries;
  }


})();
