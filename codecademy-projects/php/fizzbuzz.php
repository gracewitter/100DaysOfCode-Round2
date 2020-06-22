<?php
// $i = 1;
// while ($i <= 5){
//   if (!($i % 15)){
//     echo "FizzBuzz\n";
//   } elseif (!($i % 3)){
//     echo "Fizz\n";
//   } elseif (!($i % 5)){
//     echo "Buzz\n";
//   } else {
//   echo $i."\n";
//   }
//   $i++;

// }

$output = [];

for ($i = 1; $i <= 100; $i++ ){
  if (!($i % 15)){
    array_push($output, "FizzBuzz\n");
  } elseif (!($i % 3)){
    array_push($output, "Fizz\n");
  } elseif (!($i % 5)){
    array_push($output, "Buzz\n");
  } else {
    array_push($output, $i."\n");
  }
}

// foreach($output as $value){
//   echo $value;
// }

foreach($output as $value){
  if ($value === "Fizz\n"){
    continue;
  } elseif ($value === "FizzBuzz\n"){
    break;
  }
  echo $value;
}
