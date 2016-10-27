
var filters = {
  "organization-types":[{
    "type": "Government",
    "sectors": [
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
    "type": "Non-Government",
    "sectors": [
      "Non-Government Organizations",
      "Researchers/Scientists",
      "Business/Industry",
      "Multi-Stakeholders"
    ]
  },
  {
    "type": "Coast Salish Peoples",
    "sectors": [
      "Indigenous Nations"
    ]
  }],
  "sectors": [
    "Bi-National",
    "Multi-state",
    "State or Provincial",
    "Regional",
    "Federal",
    "Special Purpose District",
    "Intergovernmental",
    "Local",
    "Non-Government Organizations",
    "Researchers/Scientists",
    "Business/Industry",
    "Multi-Stakeholders",
    "Indigenous Nations"
  ]
};


var pages = {
  "water" : {
    "sub-issues" : [
      "Quality, Quantity and Restoration",
      "Freshwater Resources",
      "Marine and Nearshore Ecosystems",
      "Fisheries and Aquaculture"
    ],
    "description":"Information on water is sub-categorized to address Water Quality, Quantity, and Restoration, Freshwater Resources, Marine and Nearshore Ecosystems, and Fisheries and Aquaculture."
  },
  "air" : {
    "sub-issues" : [
      "Air Quality",
      "Climate Change"
    ],
    "description":"Issues related to air.  Information is further sub-categorized to address Air Quality and Climate Change."
  },
  "land" : {
    "sub-issues" : [
      "Development Permitting and Land Use Planning",
      "Public Lands"
    ],
    "description":"Issues related to land management. Information is further sub-categorized to address Development Permitting and Land Use Planning and Public Lands."
  },
  "pollution" : {
    "sub-issues" : [
      "Contaminated Sites",
      "Wastewater Management",
      "Toxic Substances",
      "Dredging and Ocean Dumping",
      "Energy Transport"
    ],
    "description":"Issues related to pollution prevention and cleanup. Information is further sub-categorized to address Contaminated Sites, Wastewater Management, Toxic Substances, Dredging and Ocean Dumping, and Energy Transport."
  },
  "conservation" : {
    "sub-issues" : [
      "Wildlife and Biodiversity",
      "Endangered Species/Species at Risk",
      "Salmon Recovery",
      "Public Lands",
      "Fisheries and Aquaculture"
    ],
    "description":"Information on conservation is further sub-categorized to address Public Lands, Wildlife and Biodiversity, Fisheries and Aquaculture, Endangered Species and Species at Risk, and Salmon Recovery."
  },
  "cross-cutting" : {
    "sub-issues" : [
      "Climate Change",
      "Development Permitting and Land Use Planning",
      "Energy Transport",
      "Salmon Recovery"
    ],
    "description":"Issues related to air.  Information is further sub-categorized to address Air Quality and Climate Change."
  },
  "full-report" : {
    "sub-issues" : [
      "Quality, Quantity and Restoration",
      "Freshwater Resources",
      "Marine and Nearshore Ecosystems",
      "Fisheries and Aquaculture",
      "Air Quality",
      "Climate Change",
      "Development Permitting and Land Use Planning",
      "Public Lands",
      "Contaminated Sites",
      "Wastewater Management",
      "Toxic Substances",
      "Dredging and Ocean Dumping",
      "Energy Transport",
      "Wildlife and Biodiversity",
      "Endangered Species/Species at Risk",
      "Salmon Recovery",
      "Public Lands",
      "Fisheries and Aquaculture",
      "Climate Change",
      "Development Permitting and Land Use Planning",
      "Energy Transport",
      "Salmon Recovery"
    ]
  }
};

function getSubIssueList(pageName){
  return pages[pageName]["sub-issues"];
}
function getDescription(pageName){
  return pages[pageName]["description"];
}
function getOrganizationTypes(){
  return filters["organization-types"];
}
function getSectors(){
  return filters["sectors"];
}
