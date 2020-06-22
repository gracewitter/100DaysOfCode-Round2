<?php
$drinks = [
  "latte" => 1,
  "chai" => 2,
  "frapp" => 3,
  "water" => 0,
];
$pastries = [
  "muffin", "doughnut", "cake", "pie"
];
?>
<h1>Welcome to the Repetitive Cafe</h1>

<h3>Drinks!</h3>
<ul>
<?php foreach ($drinks as $drink=>$price):?>
<li><?="$drink: £$price"?></li>
<?php endforeach; ?>
</ul>
<h3>Pastries! ($2 each)</h3>
<ul>
<?php for ($i=0; $i<count($pastries) ; $i++):?>
<li><?=$pastries[$i]?></li>
<?php endfor;?>
</ul>
