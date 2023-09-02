# Function Cheatsheet


# QuickShortcuts
\- randomATT_Items = Search(HomeScreenSaver)


## makePDF_/_iFrameLinks
\- https://docs.google.com/spreadsheets/d/1Wbvxc0_2UIZs79aPBVMYO3XTSueMot07YaZ-DlnXNiA/edit#gid=0
\- https://www.youtube.com/watch?v=4xDzrJKXOOY&ab_channel=LofiGirl



## SFX

play_sfx_click_gen() - general beep click sound
play_sfx_hand_show() - general show click sound
play_sfx_hand_hide() - general hide click sound





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

## Main Geometries
\- [Circle] => geo_objT_CircleA1
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


## GSAP / Animation Functions

### Basic Animation Function
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