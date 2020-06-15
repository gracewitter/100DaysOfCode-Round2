<?php
function generateStory($singular_noun, $verb, $color, $distance_unit)
{
  $story = "\nThe $singular_noun is lovely, $color, and deep.\n
But I have promises to keep,\n
And $distance_unit to go before I $verb,\n
And $distance_unit to go before I $verb.\n";

return $story;
}

echo generateStory("fish", "swim", "blue", "kilometers");
echo generateStory("biscuit", "dunk", "mustard yellow", "inches");
echo generateStory("hair", "cut", "silver", "fathoms");
