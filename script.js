const globalTempo = 140;

//a series of timeoutIDs, in case we need to cancel an action
var timeouts = [];
//same as above, but intervalIDs
var intervals = [];

var clipSet;

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
    clipSet = clipSets[Math.floor(Math.random()*clipSets.length)];
    
    //create the drumpad
    (clipSet.length+1)
    
}

function clearTimedEvents(){
    for (x in timeouts){
        clearTimeout(timeouts[x]);
    }
    for (y in timeouts){
        clearInterval(intervals[y]);
    }
}

function play(){
    drumAudio = new Audio('drumTest.mp3');
    if (typeof drumAudio.loop == 'boolean')
    {
        drumAudio.loop = true;
    }
    else
    {
        drumAudio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    drumAudio.play();
    //setInterval(function, milliseconds)
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