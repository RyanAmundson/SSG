

<?php

include('pages/header.html');
// include('index.html');
//


switch($_GET['frame']){
  case "water":
  case "land":
  case "air":
  case "pollution":
  case "conservation":
  case "crosscutting":
  case "full-report":
    $pageName = "template";
    $frame = $_GET['frame'];
  break;
  // case "admin":
    // $pageName = "admin";
    // $frame = "all";
    // break;
  default:
    $pageName = "start";
    $frame = "start";
  break;
}
  $frameTag = "<iframe name='".$frame."' class='frame' id='".$frame."' frameBorder='0' width='1033px' height='7000px' scrolling='no' style='overflow:hidden' src='pages/".$pageName.".html'></iframe>";
  echo $frameTag;
?>
<!--Scripts  -->
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<script src="assets/scripts/pdfmake.min.js"></script>
<script src="assets/scripts/vfs_fonts.js"></script>
<script src="controllers/start.js"></script>
<script src="assets/scripts/FileSaver.min.js"></script>
<!--Stylesheets  -->
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<link href="assets/styles/salish-sea-style1.css" rel="stylesheet">
<link href="assets/font-awesome-4.6.1/css/font-awesome.min.css" rel="stylesheet">



<div id="DLCart">
  <button id="minimizeCart" class="btn btn-default" align="middle"><b>Download Cart  </b><i class="fa fa-angle-double-up fa-1x" id="angleup" aria-hidden="true"></i><i id="angledown" class="fa fa-angle-double-down fa-1x" aria-hidden="true"></i></button>
  <button id="ClearCart" class="btn btn-default" >Clear</button>
  <button id="DLButton" class="btn btn-success" >Download</button>
  <div id="cartDiv" hidden>
    <ul id="DLCartList">
      <h3>Add items to Download</h3>
    </ul>
  </div>
</div>


<script src="assets/scripts/js.cookie.js"></script>
<script src="assets/scripts/jquery.simplemodal.1.4.4.min.js"></script>



<?php
  include('pages/footer.html');
?>
