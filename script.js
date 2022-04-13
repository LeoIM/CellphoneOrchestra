const globalTempo = 140;

//a series of timeoutIDs, in case we need to cancel an action
var timeouts = [];
//same as above, but intervalIDs
var intervals = [];

var clipSet;

var isAudioActivated = false;
var players = [];

function Metronome(bpm){
    this.tempo = bpm;
    //assumes we are in 4/4
    this.beatLength = (60/this.tempo)*1000;
    this.barLength = this.beatLength*4;
    
    this.getTimeUntilBeatLine = function(){
        var d = new Date();
        return (d.getTime()%this.beatLength);
    };

    this.getTimeUntilBarLine = function(){
        var d = new Date();
        return (d.getTime()%this.barLength);
    };
    
    this.executeAtBeatLine = function(f){
        timeouts.push(setTimeout(f, this.getTimeUntilBeatLine()));
    };

    this.executeAtBarLine = function(f){
        timeouts.push(setTimeout(f, this.getTimeUntilBarLine()));
    };
}

const globalMetronome = new Metronome(globalTempo);

function init(){
    
    //start beat meter at top of screen
    globalMetronome.executeAtBeatLine(function() {
        document.getElementById("beatMeter").style.animationPlayState = "running";
    });

    //randomly select a set of samples
    clipSet = clipSets[(Math.floor(Math.random()*clipSets.length))];

    //create the drumpads
    var drumpadRows = Math.ceil(Math.sqrt(clipSet.length+1));
    var drumpadColumns = Math.ceil((clipSet.length+1)/drumpadRows);

    createpad(drumpadRows, drumpadColumns);
}

function createpad(drumpadRows, drumpadColumns) {
    
    console.log("creating pads with " + drumpadRows + " rows and " + drumpadColumns + " columns.");
    
    var currRow;
    var currCell;
    var stopbtn;

    var isPlaying = false;

    var row,col,cell = 0;

                /*  TODO: fill these cells with content! 
            
                There should be a cell for each audio sample in the clipSet,
                which onClick() should call 
                globalMetronome.executeAtBarLine(playLoop(___)) for the 
                associated clip. Within the cell, there should be a text element
                displaying the name value associated with the audio clip (not
                the filepath of the mp3, but the "name" field of the object
                within clipSet). There should also be a cell after these which
                will stop audio when clicked. I set up a number of CSS classes,
                ".clipClickable", ".clipPlaying", and ".stopButton", these
                should be assigned to cells as appropriate.
                
            */
    
    for (row = 0; row < drumpadRows; row++) {
        currRow = drumpad.insertRow();
        for (col = 0; col < drumpadColumns; col++) {
            if (cell == clipSet.length) {
                    stopbtn = currRow.insertCell();
                    stopbtn.innerHTML = '<font size= 20px>' + "PAUSE" + '</font>';
                    stopbtn.value = "STOP";
                    stopbtn.style.cssText +=';background-color:#644;'
                    stopbtn.activate = function () {
                        if (players.length == 1) {
                            var target = players.pop();
                            target.player.stop();
                            target.style.cssText +=';background-color: #556;'

                        }
                    }
                    drumpad.rows[row].cells[col].onmousedown = stopbtn.activate;
                    drumpad.rows[row].cells[col].ontouchstart = stopbtn.activate;

            }
            else if (cell > clipSet.length){
                currCell = currRow.insertCell();
                currCell.style.cssText +=';background-color: #445;';
            }
            else {
                currCell = currRow.insertCell();
                currCell.innerHTML = '<font size= 20px>'+ clipSet[cell].name + '</font>';
                currCell.value = clipSet[cell].url;
                currCell.style.cssText +=';background-color: #556;';
                currCell.player = "none";
                currCell.activate = function () {
                        if (!isAudioActivated) {
                            initAudio()
                        }

                        if (players.length == 1) {
                            var target = players.pop();
                            target.player.stop();
                            target.style.cssText +=';background-color: #556;'

                        }
                        players.push(this);
                        globalMetronome.executeAtBarLine(this.player.cue());
                        this.style.cssText +=';background-color: #779;';
                    
                };
                
                drumpad.rows[row].cells[col].onmousedown = currCell.activate;
                drumpad.rows[row].cells[col].ontouchstart = currCell.activate;

            }
            cell++;  
        }

    }


}

function initAudio(){
    const table = document.getElementById('drumpad');
    for (var r = 0; r < table.rows.length; r++) {
        for (var c = 0; c < table.rows[r].cells.length; c++) {
            if (table.rows[r].cells[c].player == "none") {
                table.rows[r].cells[c].player = new Gapless5({
                    tracks:table.rows[r].cells[c].value,
                    loop:true,
                    singleMode:true,
                    exclusive:true
                });
            }
        }
    }
    isAudioActivated = true;
}

    /* TODO: implement this! there are a bunch of ways to play audio in
    javascript, and even more edge cases that could throw things out of sync
    with each other, so this is a careful task.
    */

    // need some fix

function pauseAudio(target, isPlaying) {
    myClip.pause()
    myClip.style.cssText +=';background-color: #556;'
    myClip.currentTime = 0;
    isPlaying = false;
    const table = document.getElementById('drumpad');
    for (var r = 0; r < table.rows.length; r++) {
        for (var c = 0; c < table.rows[r].cells.length; c++) {
            if (table.rows[r].cells[c].value == target) {
                table.rows[r].cells[c].style.cssText +=';background-color: #556;'
                table.rows[r].cells[c].isPlaying = false
            }
        }
    }

}

function clearTimedEvents(){
    for (x in timeouts){
        clearTimeout(timeouts[x]);
    }
    for (y in timeouts){
        clearInterval(intervals[y]);
    }
}

//prevents scrolling the page in order to be more "app-like"
window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);

function preventMotion(event)
{
    window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
}