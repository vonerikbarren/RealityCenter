# Function Cheatsheet


# Reminder for tool / reality code transfer
- Remember to get all variables
- Remember to get all structures
- Remember to get all functions
- Remember to get all animations
- settings, etc.


# Current Log Entry Thought Processes (so we dont get lost)
\- Enter
    \- Side Panels with Digital/Technical Realities 
    \- Finish the Buttons [X]
        \- RH Side bar [x]
        \- Changing Icons to appropriate areas... [?]


# QuickShortcuts
\- randomATT_Items = Search(HomeScreenSaver)
\- [function] -> putClockInCenterOnFloor 
\- LeftHandComponent = mat_userΔ_LH_Menu_baseComponentA_Orbit01
\- RightHandComponent = mat_userΔ_RH_Menu_baseComponentA_Orbit01

\- Floor Texture = search.floorTex
\- Technicality = [technicality()]****



# SetUp_Shortcuts
\- setUp_ΔTitle
\- setUp_html_videos
\- setUp_variableBuild
\- setUp_imageRef
\- setUp_functionBuild
\- setUp_functionSounds
\- setUp_keyCommands
\- setUp_hardCode_ObjectBuild
\- setUp_datGui
\- setUp_LoopedAnimations

//........................................................................................
//....SSSSSS.....HH......H....RRRRR.......TTTTTTTTT......CCC.......UU.....UU...TTTTTTTTT..
//...SSSSSSSS...HHHH...HHHH..RRRRRRRRRR..RTTTTTTTTTT...CCCCCCCC...UUUU...UUUU.TTTTTTTTTT..
//..SSSSSSSSSS..HHHH...HHHH..RRRRRRRRRRR.RTTTTTTTTTT..CCCCCCCCCC..UUUU...UUUU.TTTTTTTTTT..
//..SSSSSSSSSS..HHHH...HHHH..RRRRRRRRRRR.RTTTTTTTTTT.CCCCCCCCCCC..UUUU...UUUU.TTTTTTTTTT..
//.SSSS...SSSSS.HHHH...HHHH..RRRR...RRRRR....TTTT....CCCC...CCCCC.UUUU...UUUU.....TTTT....
//.SSSSSS.......HHHHHHHHHHH..RRRR...RRRRR....TTTT...CCCCC....CCCC.UUUU...UUUU.....TTTT....
//..SSSSSSSSS...HHHHHHHHHHH..RRRRRRRRRRR.....TTTT...CCCC..........UUUU...UUUU.....TTTT....
//..SSSSSSSSSS..HHHHHHHHHHH..RRRRRRRRRRR.....TTTT...CCCC..........UUUU...UUUU.....TTTT....
//....SSSSSSSSS.HHHHHHHHHHH..RRRRRRRRRRR.....TTTT...CCCC..........UUUU...UUUU.....TTTT....
//.SSSS..SSSSSS.HHHH...HHHH..RRRR..RRRRR.....TTTT...CCCCC....CCCC.UUUU...UUUU.....TTTT....
//.SSSS....SSSS.HHHH...HHHH..RRRR...RRRR.....TTTT....CCCC...CCCCC.UUUU...UUUU.....TTTT....
//.SSSSSSSSSSSS.HHHH...HHHH..RRRR...RRRR.....TTTT....CCCCCCCCCCC..UUUUUUUUUUU.....TTTT....
//..SSSSSSSSSS..HHHH...HHHH..RRRR...RRRR.....TTTT.....CCCCCCCCCC..UUUUUUUUUUU.....TTTT....
//...SSSSSSSSS..HHHH...HHHH..RRRR...RRRRR....TTTT......CCCCCCCC....UUUUUUUUU......TTTT....
//....SSSSSS............................................CCCCC........UUUUU................
//........................................................................................


## makePDF_/_iFrameLinks
\- https://docs.google.com/spreadsheets/d/1Wbvxc0_2UIZs79aPBVMYO3XTSueMot07YaZ-DlnXNiA/edit#gid=0
\- https://www.youtube.com/watch?v=4xDzrJKXOOY&ab_channel=LofiGirl



## SFX

play_sfx_click_gen() - general beep click sound
play_sfx_hand_show() - general show click sound
play_sfx_hand_hide() - general hide click sound


# images
Grid01 - BasicHud03b




## Any Geometry
``` js

let anyGeometryName, mesh_anyGeometryName

anyGeometryName = new THREE.Group()
anyGeometryName.position.set(0, 0, 0)
anyGeometryName.rotation.set(0, 0, 0)
anyGeometryName.scale.set(1, 1, 1)


const mat_anyGeometryName = new THREE.MeshBasicMaterial({ map: SceneWallpaper_01, side: THREE.DoubleSide });
mesh_anyGeometryName = new THREE.Mesh(geo_anyGeometryName, mat_anyGeometryName);
mat_anyGeometryName.transparent = false;
mat_anyGeometryName.alphaMap = SceneWallpaper_01;
mesh_anyGeometryName.position.set(0, 0, 0);
// mesh_anyGeometryName.position.set(-15000, 0, 0);
mesh_anyGeometryName.scale.set(1, 1, 1);
mesh_anyGeometryName.rotation.set(0, 0, 0)
// mesh_anyGeometryName.rotateX( - Math.PI / 2 );

// anyGeometryName.lookAt(camera)

anyGeometryName.add(mesh_anyGeometryName)

```

//.................................................................................
//......GGGGG......EEEEEEEEE.....OOOOOO......MMM.....MMM....EEEEEEEEE..TTTTTTTTT...
//....GGGGGGGGG...EEEEEEEEEEE...OOOOOOOOO...MMMMM...MMMMM..EEEEEEEEEEEETTTTTTTTTT..
//...GGGGGGGGGG...EEEEEEEEEEE..OOOOOOOOOO...MMMMM...MMMMM..EEEEEEEEEEEETTTTTTTTTT..
//..GGGGGGGGGGGG..EEEEEEEEEEE.OOOOOOOOOOOO..MMMMMM..MMMMM..EEEEEEEEEEEETTTTTTTTTT..
//..GGGG....GGGG..EEEE........OOOO....OOOO..MMMMMM.MMMMMM..EEEE...........TTTT.....
//.GGGGG....GGGG..EEEEEEEEEE..OOOO....OOOOO.MMMMMM.MMMMMM..EEEEEEEEEE.....TTTT.....
//.GGGG...GGGGGG..EEEEEEEEEE.EOOO......OOOO.MMMMMM.MMMMMM..EEEEEEEEEE.....TTTT.....
//.GGGG...GGGGGG..EEEEEEEEEE.EOOO......OOOO.MMMMMM.MMMMMM..EEEEEEEEEE.....TTTT.....
//.GGGG...GGGGGG..EEEEEEEEEE.EOOO......OOOO.MMMMMMMMMMMMM..EEEEEEEEEE.....TTTT.....
//.GGGGG..GGGGGG..EEEE........OOOO....OOOOO.MMM.MMMMMMMMM..EEEE...........TTTT.....
//..GGGG....GGGG..EEEE........OOOO....OOOO..MMM.MMMMM.MMM..EEEE...........TTTT.....
//..GGGGGGGGGGGG..EEEEEEEEEEE.OOOOOOOOOOOO..MMM.MMMMM.MMM..EEEEEEEEEEE....TTTT.....
//...GGGGGGGGGGG..EEEEEEEEEEE..OOOOOOOOOO...MMM.MMMMM.MMM..EEEEEEEEEEE....TTTT.....
//....GGGGGGGGGG..EEEEEEEEEEE...OOOOOOOOO...MMM.MMMMM.MMM..EEEEEEEEEEE....TTTT.....
//.....GGGG......................OOOOOO............................................
//.................................................................................

## Main Geometries
\- [Circle] => geo_objT_CircleA1 = [ThetaLength = 6.283185307179586]
\- [Plane] => geo_objT_PlaneA1
\- [Ring] => geo_objT_RingA0
\- [Sphere] => geo_objT_SphereA0
\- [Box] => geo_objT_BoxA0
\- [Cone] => geo_objT_ConeA0
\- [Pyramid] => geo_objT_PyramidA0
\- [Diamond] => geo_objT_DiamondA0
\- [Torus] => geo_objT_TorusA0
\- [CylinderClosed] => geo_objT_CylinderClosedA0
\- [CylinderOpen] => geo_objT_CylinderOpenedA0
\- [3DHexagon] => **geo_objT_IcosahedronA0
\- [3DFlatHexagon] => geo_objT_DodecahedronA0
\- []



//..........................................................
//..TTTTTTTTT.......TTTTTTTTT...I....LL.........EEEEEEEEE...
//.TTTTTTTTTTT.....-TTTTTTTTTT.III..LLLL.......EEEEEEEEEEE..
//.TTTTTTTTTTT.....-TTTTTTTTTT.III..LLLL.......EEEEEEEEEEE..
//.TTTTTTTTTTT.....-TTTTTTTTTT.III..LLLL.......EEEEEEEEEEE..
//.....TTTT............TTTT....III..LLLL.......EEEE.........
//.....TTTT............TTTT....III..LLLL.......EEEEEEEEEE...
//.....TTTT............TTTT....III..LLLL.......EEEEEEEEEE...
//.....TTTT..T-----....TTTT....III..LLLL.......EEEEEEEEEE...
//.....TTTT..T-----....TTTT....III..LLLL.......EEEEEEEEEE...
//.....TTTT..T-----....TTTT....III..LLLL.......EEEE.........
//.....TTTT..T-----....TTTT....III..LLLL.......EEEE.........
//.....TTTT............TTTT....III..LLLLLLLLLL.EEEEEEEEEEE..
//.....TTTT............TTTT....III..LLLLLLLLLL.EEEEEEEEEEE..
//.....TTTT............TTTT....III..LLLLLLLLLL.EEEEEEEEEEE..
//..........................................................

## TechTile
``` js

TechTile_Icon_Toggle = new THREE.Group()
TechTile_Icon_Toggle.position.set(-76, 80, 2)
TechTile_Icon_Toggle.rotation.set(0, 0, 0)	
TechTile_Icon_Toggle.scale.set(0.75, 0.75, 0.75)
UpdatedTechTileV3.add(TechTile_Icon_Toggle)



TechTile_Icon_Toggle.add(
    
    new TechIcon(
        0, 0, 0,
        0, 0, 0,
        0.55, 0.55, 0.55,
        'DefaultTechIconId', 'DefaultTechIconClassName',
        'DefaultHeaderInfoId', 'DefaultHeaderInfoClassName',
        'DefaultImgId', 'DefaultImgClassName',
        'DefaultTechIconInfoPanelId', 'DefaultTechIconInfoPanelClassName',
        "./assets/icons/00-Official/UI/Isometric/tools/target1.svg", "",
        TestTechTile01_Toggle, 
        "ShowΔ",
        "Toggle from here or main menu top left"
    ) 

)


```

//..................................................................................
//..HH......H......OOOOOO.....VV......VV..........OOOOOO......OBBBB............JJ...
//.HHHH...HHHH....OOOOOOOOO..OVVV....VVVV........OOOOOOOOO...OOBBBBBBBB.......JJJJ..
//.HHHH...HHHH...OOOOOOOOOO..OVVV....VVVV.......OOOOOOOOOO...OOBBBBBBBBB......JJJJ..
//.HHHH...HHHH..OOOOOOOOOOOO.OVVVV...VVVV......-OOOOOOOOOOO..OOBBBBBBBBB......JJJJ..
//.HHHH...HHHH..OOOO....OOOO..VVVV..VVVV.......-OOO....OOOO..OOBB...BBBB......JJJJ..
//.HHHHHHHHHHH..OOOO....OOOOO.VVVV..VVVV.......-OOO....OOOOO.OOBB..BBBBB......JJJJ..
//.HHHHHHHHHHH.HOOO......OOOO.VVVVV.VVVV......--OO......OOOO.OOBBBBBBBBB......JJJJ..
//.HHHHHHHHHHH.HOOO......OOOO..VVVVVVVV.VVV-----OO......OOOO.OOBBBBBBBBB......JJJJ..
//.HHHHHHHHHHH.HOOO......OOOO..VVVVVVVV.VVV-----OO......OOOO.OOBBBBBBBBB.BBJ..JJJJ..
//.HHHH...HHHH..OOOO....OOOOO...VVVVVVV.VVV---.-OOO....OOOOO.OOBB....BBBBBBJJ.JJJJ..
//.HHHH...HHHH..OOOO....OOOO....VVVVVV..VVV---.-OOO....OOOO..OOBB...BBBBBBBJJ.JJJJ..
//.HHHH...HHHH..OOOOOOOOOOOO....VVVVVV.........-OOOOOOOOOOO..OOBBBBBBBBB.BBJJJJJJJ..
//.HHHH...HHHH...OOOOOOOOOO......VVVVV..........OOOOOOOOOO...OOBBBBBBBBB.BBJJJJJJJ..
//.HHHH...HHHH....OOOOOOOOO......VVVV............OOOOOOOOO...OOBBBBBBBB...BJJJJJJ...
//.................OOOOOO.........................OOOOOO...................JJJJJ....
//..................................................................................

## HoverObject()

``` js
CenterVirtualDesk_Tray01 = new THREE.Group()
CenterVirtualDesk_Tray01.position.set(0, -144, 0)
CenterVirtualDesk_Tray01.rotation.set(1.2, 0, 0)
CenterVirtualDesk_Tray01.scale.set(1.5, 1.4, 1.2 )
CenterVirtualDesk_root.add(CenterVirtualDesk_Tray01)

CenterVirtualDesk_Tray01.add(
    new hoverObject(
        'img',
        0, 2, 30,
        0, 0, 0,
        0.1, 0.1, 0.1,
        "Testing234", "TestingClass234",
        "./assets/img/03-HudUI/RegPanels/ClearPanelHorizontal.svg", "",
        "TheHeaderTest", "TheHeaderClassNameTest", "HeaderNameTest", "Um... Hello World",
    )
)


```


//................................................
//..PPPPP.......DDDDD.............................
//.PPPPPPPPPP..PDDDDDDDD....DFFFFFFFFF............
//.PPPPPPPPPP..PDDDDDDDDDD..DFFFFFFFFF............
//.PPPPPPPPPPP.PDDDDDDDDDD..DFFFFFFFFF............
//.PPPP...PPPP.PDDD...DDDDD.DFFF..................
//.PPPP...PPPP.PDDD....DDDD.DFFF..................
//.PPPPPPPPPPP.PDDD....DDDD.DFFFFFFFF.............
//.PPPPPPPPPPP.PDDD....DDDD.DFFFFFFFF.............
//.PPPPPPPPPP..PDDD....DDDD.DFFFFFFFF.............
//.PPPPPPPPP...PDDD...DDDDD.DFFF..................
//.PPPP........PDDD...DDDD..DFFF..................
//.PPPP........PDDDDDDDDDD..DFFF..................
//.PPPP........PDDDDDDDDD...DFFF..................
//.PPPP........PDDDDDDDD....DFFF..................
//................................................
//...................................FF_________..
//...................................FF_________..
//................................................


## Embed Function

``` js

HomeScreenSaver = new THREE.Group()
HomeScreenSaver.position.set(-87, 45, 274) // ||
HomeScreenSaver.scale.set(0.108, 0.1, 0.1)
scene.add(HomeScreenSaver)
camera.add(HomeScreenSaver)

HomeScreenSaver.add(

    new makePDF_Viewer(
        0, 0, 0,
        0, 0, 0,
        1, 1, 1,
        "hoverClockA1",
        "https://matrix.logic-wire.de/",
        "1920px", "1200"
    )

)


```

//......................................................
//......GGGGG.......SSSSSS........AAA.......PPPPP.......
//....GGGGGGGGG....SSSSSSSS......AAAAA.....PPPPPPPPPP...
//...GGGGGGGGGG...SSSSSSSSSS.....AAAAA.....PPPPPPPPPP...
//..GGGGGGGGGGGG..SSSSSSSSSS....AAAAAAA....PPPPPPPPPPP..
//..GGGG....GGGG.GSSS...SSSSS...AAAAAAA....PPPP...PPPP..
//.GGGGG....GGGG.GSSSSS.........AAAAAAA....PPPP...PPPP..
//.GGGG...GGGGGG..SSSSSSSSS....AAAAAAAAA...PPPPPPPPPPP..
//.GGGG...GGGGGG..SSSSSSSSSS...AAAA.AAAA...PPPPPPPPPPP..
//.GGGG...GGGGGG....SSSSSSSSS..AAAAAAAAAA..PPPPPPPPPP...
//.GGGGG..GGGGGG.GSSS..SSSSSS.AAAAAAAAAAA..PPPPPPPPP....
//..GGGG....GGGG.GSSS....SSSS.AAAAAAAAAAA..PPPP.........
//..GGGGGGGGGGGG.GSSSSSSSSSSS.AAAAAAAAAAAA.PPPP.........
//...GGGGGGGGGGG..SSSSSSSSSS.SAAAA....AAAA.PPPP.........
//....GGGGGGGGGG...SSSSSSSSS.SAAA.....AAAA.PPPP.........
//.....GGGG.........SSSSSS..............................
//......................................................
## GSAP / Animation Functions




### Basic Animation Function
// ------------------------------------------------------------
``` js

gsap.to(camera.position, {
    duration: 5,
    delay: 0,
    x: 5,
    // y: 0,
})

gsap.to(camera.position, {
    duration: 5,
    delay: 5,
    x: -5,
    // y: 0,
})

gsap.to(camera.position, {
    duration: 5,
    delay: 10,
    z: -5,
    x: 0,
    // y: 0,
})

gsap.to(camera.position, {
    duration: 5,
    delay: 15,
    z: 5,
    x: 0,
    // y: 0,
})


```


### Timeline -> gsap.timeline
// ------------------------------------------------------------

``` js

let tl = gsap.timeline({
    delay: 0,
    paused: false,
    repeat: -1,
    repeatDelay: 0,
    repeatRefresh: false,
    yoyo: false,
    defaults: {
        duration: 1,
        ease: "none".
    },
    smoothChildTiming: true,
    autoRemoveChildren: false,
    onComplete: myFunc()
})


tl.to(camera.position, {
    duration: 5,
    delay: 15,
    z: 5,
    x: 0,
    // y: 0,
})


tl.to(camera.position, {
    duration: 5,
    delay: 15,
    z: 5,
    x: 0,
    // y: 0,
})





```



### Timeline -> gsap.timeline
// -----------------------------------------------------------------

``` js

function scene1() {
  let tl = gsap.timeline();
  tl.to(...).to(...); // build scene 1
  return tl;
}

function scene2() {
  let tl = gsap.timeline();
  tl.to(...).to(...); // build scene 2
  return tl;
}

let master = gsap.timeline()
  .add(scene1())
  .add(scene2(), "-=0.5") // overlap slightly





```


//......................................................
//......CCC.......MMM.....MMM....DDDDD..................
//....CCCCCCCC...MMMMM...MMMMM..DDDDDDDDD...............
//...CCCCCCCCCC..MMMMM...MMMMM..DDDDDDDDDDD.............
//..CCCCCCCCCCC..MMMMMM..MMMMM..DDDDDDDDDDD.............
//..CCCC...CCCCC.MMMMMM.MMMMMM..DDDD...DDDDD....+++.....
//.CCCCC....CCCC.MMMMMM.MMMMMM..DDDD....DDDD....+++.....
//.CCCC..........MMMMMM.MMMMMM..DDDD....DDDD....+++.....
//.CCCC..........MMMMMM.MMMMMM..DDDD....DDDD++++++++++..
//.CCCC..........MMMMMMMMMMMMM..DDDD....DDDD++++++++++..
//.CCCCC....CCCC.MMM.MMMMMMMMM..DDDD...DDDDD++++++++++..
//..CCCC...CCCCC.MMM.MMMMM.MMM..DDDD...DDDD.++++++++++..
//..CCCCCCCCCCC..MMM.MMMMM.MMM..DDDDDDDDDDD.....+++.....
//...CCCCCCCCCC..MMM.MMMMM.MMM..DDDDDDDDDD......+++.....
//....CCCCCCCC...MMM.MMMMM.MMM..DDDDDDDDD.......+++.....
//.....CCCCC............................................
//......................................................

# Document Level KeyEventListener Function
```js
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "d") {
        

        gsap.to(camera.position, {
            duration: .25,
            delay: 0,
            x: `+= ${newSpeedStrengthParams.right}`,

        })
    }
})


```