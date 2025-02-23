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
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
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
    {'name': 'imageid.xlsx', 'path': 'imageid.xlsx'},
    {'name': 'image/01.png', 'path': 'image/01.png'},
    {'name': 'text/word011.png', 'path': 'text/word011.png'},
    {'name': 'text/word012.png', 'path': 'text/word012.png'},
    {'name': 'text/word013.png', 'path': 'text/word013.png'},
    {'name': 'image/02.png', 'path': 'image/02.png'},
    {'name': 'text/word021.png', 'path': 'text/word021.png'},
    {'name': 'text/word022.png', 'path': 'text/word022.png'},
    {'name': 'text/word023.png', 'path': 'text/word023.png'},
    {'name': 'image/03.png', 'path': 'image/03.png'},
    {'name': 'text/word031.png', 'path': 'text/word031.png'},
    {'name': 'text/word032.png', 'path': 'text/word032.png'},
    {'name': 'text/word033.png', 'path': 'text/word033.png'},
    {'name': 'image/04.png', 'path': 'image/04.png'},
    {'name': 'text/word041.png', 'path': 'text/word041.png'},
    {'name': 'text/word042.png', 'path': 'text/word042.png'},
    {'name': 'text/word043.png', 'path': 'text/word043.png'},
    {'name': 'image/05.png', 'path': 'image/05.png'},
    {'name': 'text/word051.png', 'path': 'text/word051.png'},
    {'name': 'text/word052.png', 'path': 'text/word052.png'},
    {'name': 'text/word053.png', 'path': 'text/word053.png'},
    {'name': 'image/06.png', 'path': 'image/06.png'},
    {'name': 'text/word061.png', 'path': 'text/word061.png'},
    {'name': 'text/word062.png', 'path': 'text/word062.png'},
    {'name': 'text/word063.png', 'path': 'text/word063.png'},
    {'name': 'image/07.png', 'path': 'image/07.png'},
    {'name': 'text/word071.png', 'path': 'text/word071.png'},
    {'name': 'text/word072.png', 'path': 'text/word072.png'},
    {'name': 'text/word073.png', 'path': 'text/word073.png'},
    {'name': 'image/08.png', 'path': 'image/08.png'},
    {'name': 'text/word081.png', 'path': 'text/word081.png'},
    {'name': 'text/word082.png', 'path': 'text/word082.png'},
    {'name': 'text/word083.png', 'path': 'text/word083.png'},
    {'name': 'image/09.png', 'path': 'image/09.png'},
    {'name': 'text/word091.png', 'path': 'text/word091.png'},
    {'name': 'text/word092.png', 'path': 'text/word092.png'},
    {'name': 'text/word093.png', 'path': 'text/word093.png'},
    {'name': 'image/10.png', 'path': 'image/10.png'},
    {'name': 'text/word101.png', 'path': 'text/word101.png'},
    {'name': 'text/word102.png', 'path': 'text/word102.png'},
    {'name': 'text/word103.png', 'path': 'text/word103.png'},
    {'name': 'image/11.png', 'path': 'image/11.png'},
    {'name': 'text/word111.png', 'path': 'text/word111.png'},
    {'name': 'text/word112.png', 'path': 'text/word112.png'},
    {'name': 'text/word113.png', 'path': 'text/word113.png'},
    {'name': 'image/12.png', 'path': 'image/12.png'},
    {'name': 'text/word121.png', 'path': 'text/word121.png'},
    {'name': 'text/word122.png', 'path': 'text/word122.png'},
    {'name': 'text/word123.png', 'path': 'text/word123.png'},
    {'name': 'image/13.png', 'path': 'image/13.png'},
    {'name': 'text/word131.png', 'path': 'text/word131.png'},
    {'name': 'text/word132.png', 'path': 'text/word132.png'},
    {'name': 'text/word133.png', 'path': 'text/word133.png'},
    {'name': 'image/14.png', 'path': 'image/14.png'},
    {'name': 'text/word141.png', 'path': 'text/word141.png'},
    {'name': 'text/word142.png', 'path': 'text/word142.png'},
    {'name': 'text/word143.png', 'path': 'text/word143.png'},
    {'name': 'image/15.png', 'path': 'image/15.png'},
    {'name': 'text/word151.png', 'path': 'text/word151.png'},
    {'name': 'text/word152.png', 'path': 'text/word152.png'},
    {'name': 'text/word153.png', 'path': 'text/word153.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);

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

async function experimentInit() {
  // Initialize components for Routine "tutorial"
  tutorialClock = new util.Clock();
  text_norm = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_norm',
    text: 'Pilot mode\n\nIn this experiment, an image will be shown for a certain period of time followed by 2 words at the left and right of the screen in which subject will choose whether the left or right word are an acutal word\n\npress spacebar when ready to start',
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
  // Initialize components for Routine "imagedemo"
  imagedemoClock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.7, null],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "blank2sec"
  blank2secClock = new util.Clock();
  // Initialize components for Routine "worddemo"
  worddemoClock = new util.Clock();
  image_left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_left', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), (- 0.3)], size : [0.4, null],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_right', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, (- 0.3)], size : [0.4, null],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  click_event = new core.Mouse({
    win: psychoJS.window,
  });
  click_event.mouseClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Which word describe previous image the best?',
    font: 'Noto sans',
    units: 'norm', 
    pos: [0, 0.5], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
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

function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'imageid.xlsx',
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
      trialsLoopScheduler.add(imagedemoRoutineBegin(snapshot));
      trialsLoopScheduler.add(imagedemoRoutineEachFrame());
      trialsLoopScheduler.add(imagedemoRoutineEnd(snapshot));
      trialsLoopScheduler.add(blank2secRoutineBegin(snapshot));
      trialsLoopScheduler.add(blank2secRoutineEachFrame());
      trialsLoopScheduler.add(blank2secRoutineEnd(snapshot));
      trialsLoopScheduler.add(worddemoRoutineBegin(snapshot));
      trialsLoopScheduler.add(worddemoRoutineEachFrame());
      trialsLoopScheduler.add(worddemoRoutineEnd(snapshot));
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
    psychoJS.experiment.addData('blank1sec.started', globalClock.getTime());
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
    psychoJS.experiment.addData('blank1sec.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function imagedemoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'imagedemo' ---
    t = 0;
    imagedemoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('imagedemo.started', globalClock.getTime());
    image_2.setImage(image_dir);
    // keep track of which components have finished
    imagedemoComponents = [];
    imagedemoComponents.push(image_2);
    
    imagedemoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function imagedemoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'imagedemo' ---
    // get current time
    t = imagedemoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
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
    imagedemoComponents.forEach( function(thisComponent) {
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

function imagedemoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'imagedemo' ---
    imagedemoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('imagedemo.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function blank2secRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank2sec' ---
    t = 0;
    blank2secClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank2sec.started', globalClock.getTime());
    // keep track of which components have finished
    blank2secComponents = [];
    
    blank2secComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function blank2secRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank2sec' ---
    // get current time
    t = blank2secClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > 2) {
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
    blank2secComponents.forEach( function(thisComponent) {
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

function blank2secRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank2sec' ---
    blank2secComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('blank2sec.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function worddemoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'worddemo' ---
    t = 0;
    worddemoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('worddemo.started', globalClock.getTime());
    // Run 'Begin Routine' code from code
    import * as random from 'random';
    MCQ = [correct_dir, wrong_dir, pseudo_dir];
    leftword = Math.random.choice(MCQ);
    if ((leftword === correct_dir)) {
        rightword = Math.random.choice([wrong_dir, pseudo_dir]);
    } else {
        rightword = correct_dir;
    }
    
    image_left.setImage(leftword);
    image_right.setImage(rightword);
    // setup some python lists for storing info about the click_event
    // current position of the mouse:
    click_event.x = [];
    click_event.y = [];
    click_event.leftButton = [];
    click_event.midButton = [];
    click_event.rightButton = [];
    click_event.time = [];
    click_event.clicked_image = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    worddemoComponents = [];
    worddemoComponents.push(image_left);
    worddemoComponents.push(image_right);
    worddemoComponents.push(click_event);
    worddemoComponents.push(text_2);
    
    worddemoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function worddemoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'worddemo' ---
    // get current time
    t = worddemoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_left* updates
    if (t >= 0.0 && image_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_left.tStart = t;  // (not accounting for frame time here)
      image_left.frameNStart = frameN;  // exact frame index
      
      image_left.setAutoDraw(true);
    }
    
    
    // *image_right* updates
    if (t >= 0.0 && image_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_right.tStart = t;  // (not accounting for frame time here)
      image_right.frameNStart = frameN;  // exact frame index
      
      image_right.setAutoDraw(true);
    }
    
    // *click_event* updates
    if (t >= 0.0 && click_event.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_event.tStart = t;  // (not accounting for frame time here)
      click_event.frameNStart = frameN;  // exact frame index
      
      click_event.status = PsychoJS.Status.STARTED;
      click_event.mouseClock.reset();
      prevButtonState = click_event.getPressed();  // if button is down already this ISN'T a new click
      }
    if (click_event.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = click_event.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_left, image_right]) {
            if (obj.contains(click_event)) {
              gotValidClick = true;
              click_event.clicked_image.push(obj.image)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = click_event.getPos();
            click_event.x.push(_mouseXYs[0]);
            click_event.y.push(_mouseXYs[1]);
            click_event.leftButton.push(_mouseButtons[0]);
            click_event.midButton.push(_mouseButtons[1]);
            click_event.rightButton.push(_mouseButtons[2]);
            click_event.time.push(click_event.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
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
    worddemoComponents.forEach( function(thisComponent) {
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

function worddemoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'worddemo' ---
    worddemoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('worddemo.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (click_event.x) {  psychoJS.experiment.addData('click_event.x', click_event.x[0])};
    if (click_event.y) {  psychoJS.experiment.addData('click_event.y', click_event.y[0])};
    if (click_event.leftButton) {  psychoJS.experiment.addData('click_event.leftButton', click_event.leftButton[0])};
    if (click_event.midButton) {  psychoJS.experiment.addData('click_event.midButton', click_event.midButton[0])};
    if (click_event.rightButton) {  psychoJS.experiment.addData('click_event.rightButton', click_event.rightButton[0])};
    if (click_event.time) {  psychoJS.experiment.addData('click_event.time', click_event.time[0])};
    if (click_event.clicked_image) {  psychoJS.experiment.addData('click_event.clicked_image', click_event.clicked_image[0])};
    
    // the Routine "worddemo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

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
