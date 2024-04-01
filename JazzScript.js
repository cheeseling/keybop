//variables
var soundID = -1;
var soundIDList = ["sound1","sound2","sound3","sound4","sound5","sound6","sound7","sound8"];
var keybindIDList = ["keybind1","keybind2","keybind3","keybind4","keybind5","keybind6","keybind7","keybind8"];
var instrumentIDList = ["instrument1","instrument2","instrument3","instrument4","instrument5","instrument6","instrument7","instrument8"];

var keybindList = ["","","","","","","",""];
var instrumentList = ["","","","","","","",""];
var audioList = ["","","","","","","",""];

//sounds
var HHAudio = new Audio("sounds/hi-hat.wav");
var SnareAudio = new Audio("sounds/snare.wav");
var BassdrumAudio = new Audio("sounds/bassdrum.wav");

function createPreset(){
    //creating preset elements
    var Preset = document.createElement("fieldset");

    var LabelKeybind = document.createElement("label");
    LabelKeybind.textContent = "Keybind: ";

    var InputKeybind = document.createElement("input");
    InputKeybind.setAttribute("id",keybindIDList[soundID]);
    InputKeybind.setAttribute("type","text");
    InputKeybind.setAttribute("maxlength","1");

    var LabelSound = document.createElement("label");
    LabelSound.textContent = "Sound: ";

    var Select = document.createElement("select");
    Select.setAttribute("id",instrumentIDList[soundID]);
    var SelectHH = document.createElement("option");
    SelectHH.setAttribute("value","Hi-Hat");
    SelectHH.textContent = "Hi-Hat";
    var SelectSnare = document.createElement("option");
    SelectSnare.setAttribute("value","Snare");
    SelectSnare.textContent = "Snare";
    var SelectBassdrum = document.createElement("option");
    SelectBassdrum.setAttribute("value","Bassdrum");
    SelectBassdrum.textContent = "Bassdrum";

    var Break = document.createElement("br");
    //assembling preset
    Preset.appendChild(LabelKeybind);
    Preset.appendChild(InputKeybind);
    Preset.appendChild(Break);
    Preset.appendChild(LabelSound);

    Select.appendChild(SelectHH);
    Select.appendChild(SelectSnare);
    Select.appendChild(SelectBassdrum);

    Preset.appendChild(Select);

    return Preset;
}

function newInstrument(){
    soundID++;
    if(soundID == 7){
        document.getElementById("buttonCreate").remove();
    }
    const preset = createPreset();
    document.getElementById(soundIDList[soundID]).appendChild(preset);
}

function save(){
    for(let i = 0; i <= soundID; i++){
        var instrumentVal = document.getElementById(instrumentIDList[i]).value;

        keybindList[i] = document.getElementById(keybindIDList[i]).value;
        instrumentList[i] = instrumentVal;
        if(instrumentVal == "Hi-Hat"){
            audioList[i] = HHAudio;
        } else if(instrumentVal == "Snare"){
            audioList[i] = SnareAudio;
        } else if(instrumentVal == "Bassdrum"){
            audioList[i] = BassdrumAudio;
        }
    }
}

window.addEventListener("keypress",(e) => {
    for(let i = 0; i < 8; i++){
        if(e.key == keybindList[i]){
            audioList[i].play();
        }
    }
});
