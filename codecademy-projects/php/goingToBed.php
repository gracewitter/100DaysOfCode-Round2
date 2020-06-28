<?php

class StringUtilities {
    public static function secondCase($name){
        if (!$name) {
            return "";
        } else {
            $name = strtolower($name);
            if (!(strlen($name) >= 2)){
                return $name;
            } else {
                $name[1] = strtoupper($name[1]);
                return $name;
            }
        }
    }
}

class Pajamas {
    private $owner, $fit, $color;

    function __construct(
        $owner = "unclaimed", 
        $fit = "fine", 
        $color = "white"
        ){
        $this->owner = StringUtilities::secondCase($owner);
        $this->fit = $fit;
        $this->color = $color;

    }

    public function describe(){
        return "$this->owner's $this->color pajamas fit $this->fit.";
    }

    public function setFit($fit){
        $this->fit = $fit;
    }
}

class ButtonablePajamas extends Pajamas {
    private $button_state = "unbuttoned";

    public function describe(){
        return parent::describe() . " They also have buttons which are currently $this->button_state.";
    }

    public function toggleButtons(){
        if ($this->button_state === "unbuttoned"){
            $this->button_state = "buttoned";
        } else {
            $this->button_state = "unbuttoned";
        }
    }
}

$moose_PJs = new ButtonablePajamas("moose");
echo $moose_PJs->describe();
$moose_PJs->toggleButtons();
echo $moose_PJs->describe();