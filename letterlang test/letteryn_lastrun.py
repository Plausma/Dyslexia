﻿#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.2.4),
    on March 14, 2025, at 19:21
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2024.2.4'
expName = 'MainFlow'  # from the Builder filename that created this script
# information about this experiment
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = [1536, 864]
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\PH\\Documents\\GitHub\\Dyslexia\\letterlang test\\letteryn_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('warning')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=False, allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='contain',
            blendMode='avg', useFBO=True,
            units=None,
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'contain'
        win.units = None
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Measuring frame rate of screen, maybe?')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    # show a visual indicator if we're in piloting mode
    if PILOTING and prefs.piloting['showPilotingIndicator']:
        win.showPilotingIndicator()
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    # Setup iohub experiment
    ioConfig['Experiment'] = dict(filename=thisExp.dataFileName)
    
    # Start ioHub server
    ioServer = io.launchHubServer(window=win, **ioConfig)
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='iohub'
        )
    if deviceManager.getDevice('key_instruct') is None:
        # initialise key_instruct
        key_instruct = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_instruct',
        )
    if deviceManager.getDevice('key_resp') is None:
        # initialise key_resp
        key_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp',
        )
    if deviceManager.getDevice('ending_key') is None:
        # initialise ending_key
        ending_key = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='ending_key',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='ioHub',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ioHub'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "tutorial" ---
    text_norm = visual.TextStim(win=win, name='text_norm',
        text="*For the observer\n\nIn this experiment, a letter will be shown with an interval of one second, then, the participant will choose whether is an  English or Thai letter.\npress 'z' if it's a yes, press 'x' if it's a no\n\npress spacebar to start a trial\n",
        font='Noto Sans',
        units='norm', pos=(0, 0), draggable=False, height=0.08, wrapWidth=1.8, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    # Run 'Begin Experiment' code from text_align
    
    text_norm.alignText= 'center'
    key_instruct = keyboard.Keyboard(deviceName='key_instruct')
    
    # --- Initialize components for Routine "letter1" ---
    # Run 'Begin Experiment' code from code_3
    asking = "nothing"
    image_first = visual.ImageStim(
        win=win,
        name='image_first', units='norm', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, 0), draggable=False, size=(None,1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    in2 = visual.TextStim(win=win, name='in2',
        text='',
        font='Noto sans',
        units='norm', pos=(-0.5, 0.7), draggable=False, height=0.08, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    cross_2 = visual.TextStim(win=win, name='cross_2',
        text='+',
        font='Open Sans',
        units='norm', pos=(0, 0), draggable=False, height=0.15, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    
    # --- Initialize components for Routine "letterselect" ---
    # Run 'Begin Experiment' code from code
    asking = "nothing"
    instruct = visual.TextStim(win=win, name='instruct',
        text='',
        font='Noto sans',
        units='norm', pos=(-0.5, 0.7), draggable=False, height=0.08, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    cross_4 = visual.TextStim(win=win, name='cross_4',
        text='+',
        font='Open Sans',
        units='norm', pos=(0, 0), draggable=False, height=0.15, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    key_resp = keyboard.Keyboard(deviceName='key_resp')
    
    # --- Initialize components for Routine "blanknext" ---
    # Run 'Begin Experiment' code from code_5
    asking = "nothing"
    instruct_2 = visual.TextStim(win=win, name='instruct_2',
        text='',
        font='Noto sans',
        units='norm', pos=(-0.5, 0.7), draggable=False, height=0.08, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    cross_5 = visual.TextStim(win=win, name='cross_5',
        text='+',
        font='Open Sans',
        units='norm', pos=(0, 0), draggable=False, height=0.15, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    
    # --- Initialize components for Routine "ending" ---
    text_3 = visual.TextStim(win=win, name='text_3',
        text='End of the experiment\n\npress spacebar to exit',
        font='Open Sans',
        pos=(0, 0), draggable=False, height=0.08, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    ending_key = keyboard.Keyboard(deviceName='ending_key')
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "tutorial" ---
    # create an object to store info about Routine tutorial
    tutorial = data.Routine(
        name='tutorial',
        components=[text_norm, key_instruct],
    )
    tutorial.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_instruct
    key_instruct.keys = []
    key_instruct.rt = []
    _key_instruct_allKeys = []
    # store start times for tutorial
    tutorial.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    tutorial.tStart = globalClock.getTime(format='float')
    tutorial.status = STARTED
    thisExp.addData('tutorial.started', tutorial.tStart)
    tutorial.maxDuration = None
    # keep track of which components have finished
    tutorialComponents = tutorial.components
    for thisComponent in tutorial.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "tutorial" ---
    tutorial.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_norm* updates
        
        # if text_norm is starting this frame...
        if text_norm.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_norm.frameNStart = frameN  # exact frame index
            text_norm.tStart = t  # local t and not account for scr refresh
            text_norm.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_norm, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_norm.status = STARTED
            text_norm.setAutoDraw(True)
        
        # if text_norm is active this frame...
        if text_norm.status == STARTED:
            # update params
            pass
        
        # *key_instruct* updates
        waitOnFlip = False
        
        # if key_instruct is starting this frame...
        if key_instruct.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_instruct.frameNStart = frameN  # exact frame index
            key_instruct.tStart = t  # local t and not account for scr refresh
            key_instruct.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_instruct, 'tStartRefresh')  # time at next scr refresh
            # update status
            key_instruct.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_instruct.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_instruct.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_instruct.status == STARTED and not waitOnFlip:
            theseKeys = key_instruct.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_instruct_allKeys.extend(theseKeys)
            if len(_key_instruct_allKeys):
                key_instruct.keys = _key_instruct_allKeys[0].name  # just the first key pressed
                key_instruct.rt = _key_instruct_allKeys[0].rt
                key_instruct.duration = _key_instruct_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            tutorial.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in tutorial.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "tutorial" ---
    for thisComponent in tutorial.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for tutorial
    tutorial.tStop = globalClock.getTime(format='float')
    tutorial.tStopRefresh = tThisFlipGlobal
    thisExp.addData('tutorial.stopped', tutorial.tStop)
    # check responses
    if key_instruct.keys in ['', [], None]:  # No response was made
        key_instruct.keys = None
    thisExp.addData('key_instruct.keys',key_instruct.keys)
    if key_instruct.keys != None:  # we had a response
        thisExp.addData('key_instruct.rt', key_instruct.rt)
        thisExp.addData('key_instruct.duration', key_instruct.duration)
    thisExp.nextEntry()
    # the Routine "tutorial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler2(
        name='trials',
        nReps=1.0, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('letterorder_en.xlsx'), 
        seed=None, 
    )
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            globals()[paramName] = thisTrial[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisTrial in trials:
        currentLoop = trials
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                globals()[paramName] = thisTrial[paramName]
        
        # --- Prepare to start Routine "letter1" ---
        # create an object to store info about Routine letter1
        letter1 = data.Routine(
            name='letter1',
            components=[image_first, in2, cross_2],
        )
        letter1.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_3
        asking = "nothing"
        if lang == 1:
            asking = "Which letter is Thai?"
        else:
            asking = "Which letter is English?"
        image_first.setImage(firstdir)
        in2.setText(asking + "\nz = yes, x = no")
        # store start times for letter1
        letter1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        letter1.tStart = globalClock.getTime(format='float')
        letter1.status = STARTED
        letter1.maxDuration = None
        # keep track of which components have finished
        letter1Components = letter1.components
        for thisComponent in letter1.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "letter1" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        letter1.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 1.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_first* updates
            
            # if image_first is starting this frame...
            if image_first.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_first.frameNStart = frameN  # exact frame index
                image_first.tStart = t  # local t and not account for scr refresh
                image_first.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_first, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_first.started')
                # update status
                image_first.status = STARTED
                image_first.setAutoDraw(True)
            
            # if image_first is active this frame...
            if image_first.status == STARTED:
                # update params
                pass
            
            # if image_first is stopping this frame...
            if image_first.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_first.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    image_first.tStop = t  # not accounting for scr refresh
                    image_first.tStopRefresh = tThisFlipGlobal  # on global time
                    image_first.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_first.stopped')
                    # update status
                    image_first.status = FINISHED
                    image_first.setAutoDraw(False)
            
            # *in2* updates
            
            # if in2 is starting this frame...
            if in2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                in2.frameNStart = frameN  # exact frame index
                in2.tStart = t  # local t and not account for scr refresh
                in2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(in2, 'tStartRefresh')  # time at next scr refresh
                # update status
                in2.status = STARTED
                in2.setAutoDraw(True)
            
            # if in2 is active this frame...
            if in2.status == STARTED:
                # update params
                pass
            
            # if in2 is stopping this frame...
            if in2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > in2.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    in2.tStop = t  # not accounting for scr refresh
                    in2.tStopRefresh = tThisFlipGlobal  # on global time
                    in2.frameNStop = frameN  # exact frame index
                    # update status
                    in2.status = FINISHED
                    in2.setAutoDraw(False)
            
            # *cross_2* updates
            
            # if cross_2 is starting this frame...
            if cross_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cross_2.frameNStart = frameN  # exact frame index
                cross_2.tStart = t  # local t and not account for scr refresh
                cross_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cross_2, 'tStartRefresh')  # time at next scr refresh
                # update status
                cross_2.status = STARTED
                cross_2.setAutoDraw(True)
            
            # if cross_2 is active this frame...
            if cross_2.status == STARTED:
                # update params
                pass
            
            # if cross_2 is stopping this frame...
            if cross_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > cross_2.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    cross_2.tStop = t  # not accounting for scr refresh
                    cross_2.tStopRefresh = tThisFlipGlobal  # on global time
                    cross_2.frameNStop = frameN  # exact frame index
                    # update status
                    cross_2.status = FINISHED
                    cross_2.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                letter1.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in letter1.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "letter1" ---
        for thisComponent in letter1.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for letter1
        letter1.tStop = globalClock.getTime(format='float')
        letter1.tStopRefresh = tThisFlipGlobal
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if letter1.maxDurationReached:
            routineTimer.addTime(-letter1.maxDuration)
        elif letter1.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.000000)
        
        # --- Prepare to start Routine "letterselect" ---
        # create an object to store info about Routine letterselect
        letterselect = data.Routine(
            name='letterselect',
            components=[instruct, cross_4, key_resp],
        )
        letterselect.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code
        asking = "nothing"
        if lang == 1:
            asking = "Which letter is Thai?"
        else:
            asking = "Which letter is English?"
        instruct.setText(asking + "\nz = yes, x = no")
        # create starting attributes for key_resp
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        # store start times for letterselect
        letterselect.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        letterselect.tStart = globalClock.getTime(format='float')
        letterselect.status = STARTED
        thisExp.addData('letterselect.started', letterselect.tStart)
        letterselect.maxDuration = None
        # keep track of which components have finished
        letterselectComponents = letterselect.components
        for thisComponent in letterselect.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "letterselect" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        letterselect.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *instruct* updates
            
            # if instruct is starting this frame...
            if instruct.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                instruct.frameNStart = frameN  # exact frame index
                instruct.tStart = t  # local t and not account for scr refresh
                instruct.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(instruct, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'instruct.started')
                # update status
                instruct.status = STARTED
                instruct.setAutoDraw(True)
            
            # if instruct is active this frame...
            if instruct.status == STARTED:
                # update params
                pass
            
            # *cross_4* updates
            
            # if cross_4 is starting this frame...
            if cross_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cross_4.frameNStart = frameN  # exact frame index
                cross_4.tStart = t  # local t and not account for scr refresh
                cross_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cross_4, 'tStartRefresh')  # time at next scr refresh
                # update status
                cross_4.status = STARTED
                cross_4.setAutoDraw(True)
            
            # if cross_4 is active this frame...
            if cross_4.status == STARTED:
                # update params
                pass
            
            # *key_resp* updates
            waitOnFlip = False
            
            # if key_resp is starting this frame...
            if key_resp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                key_resp.frameNStart = frameN  # exact frame index
                key_resp.tStart = t  # local t and not account for scr refresh
                key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp.started')
                # update status
                key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp.status == STARTED and not waitOnFlip:
                theseKeys = key_resp.getKeys(keyList=['z','x'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_allKeys.extend(theseKeys)
                if len(_key_resp_allKeys):
                    key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                    key_resp.rt = _key_resp_allKeys[-1].rt
                    key_resp.duration = _key_resp_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                letterselect.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in letterselect.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "letterselect" ---
        for thisComponent in letterselect.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for letterselect
        letterselect.tStop = globalClock.getTime(format='float')
        letterselect.tStopRefresh = tThisFlipGlobal
        thisExp.addData('letterselect.stopped', letterselect.tStop)
        # check responses
        if key_resp.keys in ['', [], None]:  # No response was made
            key_resp.keys = None
        trials.addData('key_resp.keys',key_resp.keys)
        if key_resp.keys != None:  # we had a response
            trials.addData('key_resp.rt', key_resp.rt)
            trials.addData('key_resp.duration', key_resp.duration)
        # the Routine "letterselect" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "blanknext" ---
        # create an object to store info about Routine blanknext
        blanknext = data.Routine(
            name='blanknext',
            components=[instruct_2, cross_5],
        )
        blanknext.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_5
        asking = "nothing"
        if lang == 1:
            asking = "Which letter is Thai?"
        else:
            asking = "Which letter is English?"
        instruct_2.setText(asking + "\nz = yes, x = no")
        # store start times for blanknext
        blanknext.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        blanknext.tStart = globalClock.getTime(format='float')
        blanknext.status = STARTED
        thisExp.addData('blanknext.started', blanknext.tStart)
        blanknext.maxDuration = 0.2
        # keep track of which components have finished
        blanknextComponents = blanknext.components
        for thisComponent in blanknext.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "blanknext" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        blanknext.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.2:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # is it time to end the Routine? (based on local clock)
            if tThisFlip > blanknext.maxDuration-frameTolerance:
                blanknext.maxDurationReached = True
                continueRoutine = False
            
            # *instruct_2* updates
            
            # if instruct_2 is starting this frame...
            if instruct_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                instruct_2.frameNStart = frameN  # exact frame index
                instruct_2.tStart = t  # local t and not account for scr refresh
                instruct_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(instruct_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'instruct_2.started')
                # update status
                instruct_2.status = STARTED
                instruct_2.setAutoDraw(True)
            
            # if instruct_2 is active this frame...
            if instruct_2.status == STARTED:
                # update params
                pass
            
            # if instruct_2 is stopping this frame...
            if instruct_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > instruct_2.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    instruct_2.tStop = t  # not accounting for scr refresh
                    instruct_2.tStopRefresh = tThisFlipGlobal  # on global time
                    instruct_2.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'instruct_2.stopped')
                    # update status
                    instruct_2.status = FINISHED
                    instruct_2.setAutoDraw(False)
            
            # *cross_5* updates
            
            # if cross_5 is starting this frame...
            if cross_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cross_5.frameNStart = frameN  # exact frame index
                cross_5.tStart = t  # local t and not account for scr refresh
                cross_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cross_5, 'tStartRefresh')  # time at next scr refresh
                # update status
                cross_5.status = STARTED
                cross_5.setAutoDraw(True)
            
            # if cross_5 is active this frame...
            if cross_5.status == STARTED:
                # update params
                pass
            
            # if cross_5 is stopping this frame...
            if cross_5.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > cross_5.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    cross_5.tStop = t  # not accounting for scr refresh
                    cross_5.tStopRefresh = tThisFlipGlobal  # on global time
                    cross_5.frameNStop = frameN  # exact frame index
                    # update status
                    cross_5.status = FINISHED
                    cross_5.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                blanknext.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in blanknext.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "blanknext" ---
        for thisComponent in blanknext.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for blanknext
        blanknext.tStop = globalClock.getTime(format='float')
        blanknext.tStopRefresh = tThisFlipGlobal
        thisExp.addData('blanknext.stopped', blanknext.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if blanknext.maxDurationReached:
            routineTimer.addTime(-blanknext.maxDuration)
        elif blanknext.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.200000)
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'trials'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "ending" ---
    # create an object to store info about Routine ending
    ending = data.Routine(
        name='ending',
        components=[text_3, ending_key],
    )
    ending.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for ending_key
    ending_key.keys = []
    ending_key.rt = []
    _ending_key_allKeys = []
    # store start times for ending
    ending.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    ending.tStart = globalClock.getTime(format='float')
    ending.status = STARTED
    thisExp.addData('ending.started', ending.tStart)
    ending.maxDuration = None
    # keep track of which components have finished
    endingComponents = ending.components
    for thisComponent in ending.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "ending" ---
    ending.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_3* updates
        
        # if text_3 is starting this frame...
        if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_3.started')
            # update status
            text_3.status = STARTED
            text_3.setAutoDraw(True)
        
        # if text_3 is active this frame...
        if text_3.status == STARTED:
            # update params
            pass
        
        # *ending_key* updates
        waitOnFlip = False
        
        # if ending_key is starting this frame...
        if ending_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            ending_key.frameNStart = frameN  # exact frame index
            ending_key.tStart = t  # local t and not account for scr refresh
            ending_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(ending_key, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'ending_key.started')
            # update status
            ending_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(ending_key.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(ending_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if ending_key.status == STARTED and not waitOnFlip:
            theseKeys = ending_key.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _ending_key_allKeys.extend(theseKeys)
            if len(_ending_key_allKeys):
                ending_key.keys = _ending_key_allKeys[-1].name  # just the last key pressed
                ending_key.rt = _ending_key_allKeys[-1].rt
                ending_key.duration = _ending_key_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            ending.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ending.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ending" ---
    for thisComponent in ending.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for ending
    ending.tStop = globalClock.getTime(format='float')
    ending.tStopRefresh = tThisFlipGlobal
    thisExp.addData('ending.stopped', ending.tStop)
    # check responses
    if ending_key.keys in ['', [], None]:  # No response was made
        ending_key.keys = None
    thisExp.addData('ending_key.keys',ending_key.keys)
    if ending_key.keys != None:  # we had a response
        thisExp.addData('ending_key.rt', ending_key.rt)
        thisExp.addData('ending_key.duration', ending_key.duration)
    thisExp.nextEntry()
    # the Routine "ending" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
