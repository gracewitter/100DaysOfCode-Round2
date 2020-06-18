<?php
  // Change player location
function changeLocation(){	
  // Write your code here:
  
  global $location;

  echo "Where do you want to go?\n";

  $response = strtolower(readline(">"));
  
  if ($location === "kitchen" && $response === "bathroom") {
      echo "You go to: bathroom.\n";
      $location = "bathroom"; 
  } else if ($location === "kitchen" && $response === "woods") {
    echo "You follow the winding path, shivering as you make your way deep into the Terror Woods.\n";
    $location = "woods"; 
  } else if ($location === "bathroom" && $response === "kitchen") {
    echo "You go to: kitchen.\n";
    $location = "kitchen"; 
  } else if ($location === "woods" && $response === "kitchen") {
    echo "You go to: kitchen.\n";
    $location = "kitchen"; 
  } else if ($response === "woods" || $response === "kitchen" || $response === "bathroom") {
    echo "You can't go directly to there from your current location. Try going somewhere else first.\n";
  } else {
      echo "That doesn't make sense. Are you confused? Try 'look around'.\n.";
  }
  
}