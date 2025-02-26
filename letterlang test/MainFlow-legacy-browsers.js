/***************** 
 * Mainflow *
 *****************/


// store info about the experiment session:
let expName = 'MainFlow';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'contain',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(tutorialRoutineBegin());
flowScheduler.add(tutorialRoutineEachFrame());
flowScheduler.add(tutorialRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);






flowScheduler.add(endingRoutineBegin());
flowScheduler.add(endingRoutineEachFrame());
flowScheduler.add(endingRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'letterorder_en.xlsx', 'path': 'letterorder_en.xlsx'},
    {'name': 'letter/letten061.png', 'path': 'letter/letten061.png'},
    {'name': 'letter/lettkh155.png', 'path': 'letter/lettkh155.png'},
    {'name': 'letter/lettth142.png', 'path': 'letter/lettth142.png'},
    {'name': 'letter/letten181.png', 'path': 'letter/letten181.png'},
    {'name': 'letter/letten051.png', 'path': 'letter/letten051.png'},
    {'name': 'letter/lettkh035.png', 'path': 'letter/lettkh035.png'},
    {'name': 'letter/lettgr061.png', 'path': 'letter/lettgr061.png'},
    {'name': 'letter/letten062.png', 'path': 'letter/letten062.png'},
    {'name': 'letter/lettgr065.png', 'path': 'letter/lettgr065.png'},
    {'name': 'letter/letten112.png', 'path': 'letter/letten112.png'},
    {'name': 'letter/lettkh083.png', 'path': 'letter/lettkh083.png'},
    {'name': 'letter/letten041.png', 'path': 'letter/letten041.png'},
    {'name': 'letter/lettth022.png', 'path': 'letter/lettth022.png'},
    {'name': 'letter/lettgr066.png', 'path': 'letter/lettgr066.png'},
    {'name': 'letter/lettth132.png', 'path': 'letter/lettth132.png'},
    {'name': 'letter/letten091.png', 'path': 'letter/letten091.png'},
    {'name': 'letter/lettkh157.png', 'path': 'letter/lettkh157.png'},
    {'name': 'letter/lettgr063.png', 'path': 'letter/lettgr063.png'},
    {'name': 'letter/lettth152.png', 'path': 'letter/lettth152.png'},
    {'name': 'letter/letten142.png', 'path': 'letter/letten142.png'},
    {'name': 'letter/letten021.png', 'path': 'letter/letten021.png'},
    {'name': 'letter/lettgr021.png', 'path': 'letter/lettgr021.png'},
    {'name': 'letter/letten153.png', 'path': 'letter/letten153.png'},
    {'name': 'letter/lettkh159.png', 'path': 'letter/lettkh159.png'},
    {'name': 'letter/lettgr012.png', 'path': 'letter/lettgr012.png'},
    {'name': 'letter/letten011.png', 'path': 'letter/letten011.png'},
    {'name': 'letter/letten131.png', 'path': 'letter/letten131.png'},
    {'name': 'letter/letten071.png', 'path': 'letter/letten071.png'},
    {'name': 'letter/lettkh055.png', 'path': 'letter/lettkh055.png'},
    {'name': 'letter/letten121.png', 'path': 'letter/letten121.png'},
    {'name': 'letter/lettth101.png', 'path': 'letter/lettth101.png'},
    {'name': 'letter/lettkh091.png', 'path': 'letter/lettkh091.png'},
    {'name': 'letter/letten101.png', 'path': 'letter/letten101.png'},
    {'name': 'letter/lettth011.png', 'path': 'letter/lettth011.png'},
    {'name': 'letter/lettkh013.png', 'path': 'letter/lettkh013.png'},
    {'name': 'letter/letten152.png', 'path': 'letter/letten152.png'},
    {'name': 'letter/lettgr152.png', 'path': 'letter/lettgr152.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var tutorialClock;
var text_norm;
var key_instruct;
var blank1secClock;
var letter1Clock;
var image_first;
var letter2Clock;
var image_second;
var letterselectClock;
var asking;
var text_2;
var key_resp;
var text_4;
var endingClock;
var text_3;
var ending_key;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "tutorial"
  tutorialClock = new util.Clock();
  text_norm = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_norm',
    text: "*For the observer\n\nIn this experiment, two letter will be shown with an interval of one second, then, the participant will choose which letter is an English or Thai letter.\npress 'z' if it's a first letter, press 'x' if it's a second letter\n\npress spacebar to start a trial\n",
    font: 'Noto Sans',
    units: 'norm', 
    pos: [0, 0], height: 0.08,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from text_align
  // Code component set to Both
  text_norm.setAlignHoriz('left')
  key_instruct = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blank1sec"
  blank1secClock = new util.Clock();
  // Initialize components for Routine "letter1"
  letter1Clock = new util.Clock();
  image_first = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_first', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), 0], size : [null, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "letter2"
  letter2Clock = new util.Clock();
  image_second = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_second', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), 0], size : [null, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "letterselect"
  letterselectClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  asking = "nothing";
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Noto sans',
    units: 'norm', 
    pos: [(- 0.5), 0.5], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'z = first letter\nx = second letter',
    font: 'Noto Sans',
    units: 'norm', 
    pos: [(- 0.5), (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "ending"
  endingClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'End of the experiment\n\npress spacebar to exit',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  ending_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_instruct_allKeys;
var tutorialComponents;
function tutorialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'tutorial' ---
    t = 0;
    tutorialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('tutorial.started', globalClock.getTime());
    key_instruct.keys = undefined;
    key_instruct.rt = undefined;
    _key_instruct_allKeys = [];
    // keep track of which components have finished
    tutorialComponents = [];
    tutorialComponents.push(text_norm);
    tutorialComponents.push(key_instruct);
    
    tutorialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function tutorialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'tutorial' ---
    // get current time
    t = tutorialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_norm* updates
    if (t >= 0.0 && text_norm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_norm.tStart = t;  // (not accounting for frame time here)
      text_norm.frameNStart = frameN;  // exact frame index
      
      text_norm.setAutoDraw(true);
    }
    
    
    // *key_instruct* updates
    if (t >= 0.0 && key_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instruct.tStart = t;  // (not accounting for frame time here)
      key_instruct.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instruct.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instruct.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instruct.clearEvents(); });
    }
    
    if (key_instruct.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instruct.getKeys({keyList: ['space'], waitRelease: false});
      _key_instruct_allKeys = _key_instruct_allKeys.concat(theseKeys);
      if (_key_instruct_allKeys.length > 0) {
        key_instruct.keys = _key_instruct_allKeys[0].name;  // just the first key pressed
        key_instruct.rt = _key_instruct_allKeys[0].rt;
        key_instruct.duration = _key_instruct_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    tutorialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tutorialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'tutorial' ---
    tutorialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('tutorial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instruct.corr, level);
    }
    psychoJS.experiment.addData('key_instruct.keys', key_instruct.keys);
    if (typeof key_instruct.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instruct.rt', key_instruct.rt);
        psychoJS.experiment.addData('key_instruct.duration', key_instruct.duration);
        routineTimer.reset();
        }
    
    key_instruct.stop();
    // the Routine "tutorial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'letterorder_en.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(blank1secRoutineBegin(snapshot));
      trialsLoopScheduler.add(blank1secRoutineEachFrame());
      trialsLoopScheduler.add(blank1secRoutineEnd(snapshot));
      trialsLoopScheduler.add(letter1RoutineBegin(snapshot));
      trialsLoopScheduler.add(letter1RoutineEachFrame());
      trialsLoopScheduler.add(letter1RoutineEnd(snapshot));
      trialsLoopScheduler.add(blank1secRoutineBegin(snapshot));
      trialsLoopScheduler.add(blank1secRoutineEachFrame());
      trialsLoopScheduler.add(blank1secRoutineEnd(snapshot));
      trialsLoopScheduler.add(letter2RoutineBegin(snapshot));
      trialsLoopScheduler.add(letter2RoutineEachFrame());
      trialsLoopScheduler.add(letter2RoutineEnd(snapshot));
      trialsLoopScheduler.add(letterselectRoutineBegin(snapshot));
      trialsLoopScheduler.add(letterselectRoutineEachFrame());
      trialsLoopScheduler.add(letterselectRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var blank1secComponents;
function blank1secRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank1sec' ---
    t = 0;
    blank1secClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    blank1secComponents = [];
    
    blank1secComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blank1secRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank1sec' ---
    // get current time
    t = blank1secClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > 1) {
        continueRoutine = false
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blank1secComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank1secRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank1sec' ---
    blank1secComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var letter1Components;
function letter1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'letter1' ---
    t = 0;
    letter1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    image_first.setImage(firstdir);
    // keep track of which components have finished
    letter1Components = [];
    letter1Components.push(image_first);
    
    letter1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function letter1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'letter1' ---
    // get current time
    t = letter1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_first* updates
    if (t >= 0.0 && image_first.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_first.tStart = t;  // (not accounting for frame time here)
      image_first.frameNStart = frameN;  // exact frame index
      
      image_first.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_first.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_first.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    letter1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function letter1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'letter1' ---
    letter1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var letter2Components;
function letter2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'letter2' ---
    t = 0;
    letter2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('letter2.started', globalClock.getTime());
    image_second.setImage(seconddir);
    // keep track of which components have finished
    letter2Components = [];
    letter2Components.push(image_second);
    
    letter2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function letter2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'letter2' ---
    // get current time
    t = letter2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_second* updates
    if (t >= 0.0 && image_second.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_second.tStart = t;  // (not accounting for frame time here)
      image_second.frameNStart = frameN;  // exact frame index
      
      image_second.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_second.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_second.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    letter2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function letter2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'letter2' ---
    letter2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('letter2.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var letterselectComponents;
function letterselectRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'letterselect' ---
    t = 0;
    letterselectClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('letterselect.started', globalClock.getTime());
    // Run 'Begin Routine' code from code
    asking = "nothing";
    if ((lang === 1)) {
        asking = "Which letter is Thai?";
    } else {
        asking = "Which letter is English?";
    }
    
    text_2.setText(asking);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    letterselectComponents = [];
    letterselectComponents.push(text_2);
    letterselectComponents.push(key_resp);
    letterselectComponents.push(text_4);
    
    letterselectComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function letterselectRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'letterselect' ---
    // get current time
    t = letterselectClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['z', 'x'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    letterselectComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function letterselectRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'letterselect' ---
    letterselectComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('letterselect.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "letterselect" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _ending_key_allKeys;
var endingComponents;
function endingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ending' ---
    t = 0;
    endingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ending.started', globalClock.getTime());
    ending_key.keys = undefined;
    ending_key.rt = undefined;
    _ending_key_allKeys = [];
    // keep track of which components have finished
    endingComponents = [];
    endingComponents.push(text_3);
    endingComponents.push(ending_key);
    
    endingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ending' ---
    // get current time
    t = endingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *ending_key* updates
    if (t >= 0.0 && ending_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ending_key.tStart = t;  // (not accounting for frame time here)
      ending_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ending_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ending_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ending_key.clearEvents(); });
    }
    
    if (ending_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = ending_key.getKeys({keyList: ['space'], waitRelease: false});
      _ending_key_allKeys = _ending_key_allKeys.concat(theseKeys);
      if (_ending_key_allKeys.length > 0) {
        ending_key.keys = _ending_key_allKeys[_ending_key_allKeys.length - 1].name;  // just the last key pressed
        ending_key.rt = _ending_key_allKeys[_ending_key_allKeys.length - 1].rt;
        ending_key.duration = _ending_key_allKeys[_ending_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ending' ---
    endingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ending.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(ending_key.corr, level);
    }
    psychoJS.experiment.addData('ending_key.keys', ending_key.keys);
    if (typeof ending_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ending_key.rt', ending_key.rt);
        psychoJS.experiment.addData('ending_key.duration', ending_key.duration);
        routineTimer.reset();
        }
    
    ending_key.stop();
    // the Routine "ending" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
