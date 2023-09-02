# Project Overview
## A.Purpose
\
    \- Purpose is to have the ideas already made so building them wont be so difficult.
## B.AdminControls
## C.UserControls
\
    \- userHUD
        \- [note] => "The basis for the 1st person exerpeince"
    \- userSENSE = _Spherical_Experience_Nexus_of_Spacial_Exposition_
        \- [note] => "Basically the Hud Menu 3D for most base".
### C01_PointerLockControls
\
    \- horizontalMovementCommands
        \- Location = speedStrengthParamsa
        \- KeyW = [Forward]
        \- KeyS = [Backward]
        \- KeyA = [Left]
        \- KeyD = [Right]
        |
    \- verticalMovementCommands
        \- Key3 = up @ 30px
        \- Key3 + ctrl = up @ 100px
        \- Key4 = down @ 30px
        \- Key4 + ctrl = down @ 100px
        |
    \- QuickMenuItems
        [NumberRow]
        \- Num1 => [scroller+]-scrollFocusedΔUp
        \- Num2 => [scroller-]-scrollFocusedΔDown
        \- Num3 => [positioner]-positionUserHigher
        \- Num4 => [positioner]-positionUserLower
        \- Num5 => [rotator+]-rotateUserClockwise
        \- Num6 => [rotator-]-rotateUserCounterClockwise
        \- Num7 => [scaler+]-scaleUserLarger
        \- Num8 => [scaler-]-scaleUserSmaller
        \
        [TopRow] 
        \- KeyR => [Receiver]-"Receives Δ"
        \- KeyT => [Translator]-"Translates Δ"
        \- KeyY => [Explainer]-"Explains why and the purpose of Δ"
        \- KeyI => [Inspector]-"Examines Δ in more detail"
        \- KeyI => [Illuminator]-"Power on and off of Δ"
        \- KeyO => [Orbitor]-"Manual Orbit Controls - Δlocation & Δscale"
        \
        [MidRow]
        \- KeyF => [Focuser]-Targets and Focuses the last Δ selected
        \- KeyG => [GlidingTimer]-"Flow through time" (brings Δs TimeΔ)
        \- KeyH => [Homer/Hookshot]-"Move Item from one location to another"
        \- KeyL => [Locator]-"Locate Δ" (show shortcut to locations)
        \
        [BottomRow]
        \- KeyZ => [ZSphere]-"SphereMenu or Spacial Menu"
        \- KeyX => [Xyster]-"Highlights all hightlightable objects",
        \- KeyC => [Communicator]-"ΔTool for communicating via Δ"
        \- KeyB => [Bringer]-"Bring selected Δ from Space to HUD"
        \- KeyV => [Visors]-"Huds Menu" (show all perspectives)
        \- KeyN => [Neuron]-"ΔΝ -> Shows subjective notes / thoughts"
        \- KeyM => [MomentAnalyzer]-"Move through time"
        |
    \
    \
    \- QuickMenuItems (Build)
        [NumberRow]
        \- Num1 => [scroller+]-scrollFocusedΔUp
        \- Num2 => [scroller-]-scrollFocusedΔDown
        \- Num3 => [positioner]-positionUserHigher
        \- Num4 => [positioner]-positionUserLower
        \- Num5 => [rotator+]-rotateUserClockwise
        \- Num6 => [rotator-]-rotateUserCounterClockwise
        \- Num7 => [scaler+]-scaleUserLarger
        \- Num8 => [scaler-]-scaleUserSmaller
        \
        [TopRow] 
        \- KeyR => [Receiver]-"Receives Δ"
        \- KeyT => [Translator]-"Translates Δ"
        \- KeyY => [Explainer]-"Explains why and the purpose of Δ"
        \- KeyI => [Inspector]-"Examines Δ in more detail"
        \- KeyI => [Illuminator]-"Power on and off of Δ"
        \
        [MidRow]
        \- KeyF => [Focuser]-Targets and Focuses the last Δ selected
        \- KeyG => [GlidingTimer]-"Flow through time" (brings Δs TimeΔ)
        \- KeyL => [Locator]-"Locate Δ" (show shortcut to locations)
        \
        [BottomRow]
        \- KeyZ => [ZSphere]-"SphereMenu or Spacial Menu"
        \- KeyX => [Xyster]-"Highlights all hightlightable objects",
        \- KeyC => [Communicator]-"ΔTool for communicating via Δ"
        \- KeyB => [Bringer]-"Bring selected Δ from Space to HUD"
        \- KeyV => [Visors]-"Huds Menu" (show all perspectives)
            \- groupName01 = HuddlerApp_root
                \- HuddlerMenu3D_Shape
                \- if (linear) -> {
                    build Grids based on 2d Linear structures
                    \- check SamsungPhone/SamsungNotes/RealityNotes/Designs/VisorsSketch
                }
        \- KeyN => [Neuron]-"ΔΝ -> Shows subjective notes / thoughts"
        \- KeyM => [Mover]-"Move through time"
        |
        
        
``` js

// ## UI-ItemA = [StartMenu] = TimeOut or Esc = ({ status: 'not ready'})

// ## UI-ItemB = [VisorMenu] = KeyV = ({ status: 'not ready'})

// ## UI-ItemC = [TransmissionMenu] = KeyC = ({ status: 'not ready'})

// ## UI-ItemD = [MomentTraveler] = KeyM = ({ status: 'not ready'})

// ## UI-ItemE = [Z-Sphere] = KeyZ = ({ status: 'not ready'})

// ## UI-ItemF = [Backpack] = KeyB = ({ status: 'not ready'})

// ## UI-ItemG = [Finder] = KeyF = ({ status: 'not ready'})

// ## UI-ItemG = [Inspector] = KeyI = ({ status: 'not ready'})

// ## UI-ItemH = [Illuminator] = Ctrl + KeyI = ({ status: 'not ready'})

// ## UI-ItemI = [Explainer] = KeyE = ({ status: 'not ready'})

// ## UI-ItemJ = [Hookshot/Homer] = KeyH = ({ status: 'not ready'})

// ## UI-ItemK = [Receiver] = KeyR = ({ status: 'not ready'})

// ## UI-ItemL = [Locator] = KeyL = ({ status: 'not ready'})

// ## UI-ItemM = [MomentAnalyzer] = KeyM = ({ status: 'not ready'})

// ## UI-ItemN = [MyMind] = KeyN = ({ status: 'not ready'})


```
        
        
        


### C02_TransformControls
## D.HUD





## E.ENV
\- Objects_In_Environment
    \- All targets need to have specific Δs tied to them by default. 
        \- To select the item (idk think Blender?)
        \- To target the item (think Ztarget from Zelda)
        \- TransformControls
            \- position
            \- rotation
            \- scale
        \- 



## F.ΔSetup
\- TechTile ( FunctionsForBuild ) -> {
    ΔID: 
    RealityID: 
    Bases:
    Layers: 
    DimsensionIDs: 
    Perspectives:
    Objects:
    Times:
    Properties: 
    Problem:
    Solutions:
    EventTimeline:
    PlacementTimeline:
    PerspectiveTimeline:
}

\- TechTile -> ScopingIn/ScopingOut
    \- techTileExtensionMinus2
    \- techTileExtensionMinus1
    \- techTileExtensionMinus1Base
    \- techTileBase
    \- techTileExtensionLayerBaseP1
    \- techTileExtensionP1
    \- techTileExtensionPlus2

\- ActOnΔs ( Functions ) -> [_Buttons_]
    \- [Off] / [Running] / [On]
    \- [Grab] / [Hold] / [LetGo]
    \- [Enter] / [Stay] / [Depart]
\
    \- [Perspective] / [Time] / [Date]
    \- [State] / [AsycEvents] / [Events]
    \- [objects] / [functions] / [properties]
\
    \- [Timeline] / [PlaceLine] / [Awarnesses] 
    \- [Truths] / [Falses] / [Unknowns]
    \- [+Perpsectives] / [-Perspectives] / [?Perspectives]




## Main Reality Applications


### App = Time Δ (ΔΤΔ)
\- Random Notes
    \- The core component is called a Reality Time Stream or Time Stream for short. This will be an object most likely cylindrical that will hold the components or the objects of time to be examined. This is important for traversing actions to see the output in terms of the program itself. 
    \- Structure
        \- Sphere = my space
        \- Cylinder01 = Focused Time
            \- attach objects that the user can interact with, but also move forward behind the user. (First version)
            \- as the app evolves, I can have the user exit that stream and access other streams or even combine streams of time to give other perspectives on that time.
        \- Cylinger+ = other time streams
\
\


### App = Expression Δ (ΔΛΔ)
\- RandomNotes
    \- The core component of this using signLanguage to communicate direction / command of components within the application. This is something completely different with the TimeΔ as an application however they work best when used together. In fact all apps can be combined or at least they should be by the time the prototype is done. 
    \- If Possible, add stable diffusion VFX for the RFX (R = Reality)





### App = Mind Δ (ΔNΔ)
\- RandomNotes
    \- This app consists of three (so far components) The 'left hand' if you will, the 'right hand', and the infinite keyboard.
\- mainComponents
    \- Infin8te Left Hand
    \- Infin8te Right Hand
    \- Infin8te Keyboard
\- mainComponets (details)
    \- 