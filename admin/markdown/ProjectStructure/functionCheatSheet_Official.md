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
\- Technicality = [technicality()]



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



//................................
//.....OOOOOO................jjj..
//....OOOOOOOOO..Obbb........jjj..
//...OOOOOOOOOO..Obbb........jjj..
//..OOOOOOOOOOOO.Obbb........jjj..
//..OOOO....OOOO.Obbbbbbbb...jjj..
//..OOOO....OOOOOObbbbbbbbb..jjj..
//.OOOO......OOOOObbbbbbbbbb.jjj..
//.OOOO......OOOOObbbb.bbbbb.jjj..
//.OOOO......OOOOObbb...bbbb.jjj..
//..OOOO....OOOOOObbb...bbbb.jjj..
//..OOOO....OOOO.Obbbb..bbbb.jjj..
//..OOOOOOOOOOOO.Obbbbbbbbbb.jjj..
//...OOOOOOOOOO..Obbbbbbbbb..jjj..
//....OOOOOOOOO..Obbbbbbbbb..jjj..
//.....OOOOOO.........bbb....jjj..
//.........................bjjjj..
//.........................bjjjj..
//.........................bjjjj..
//................................


//..............................................
//..DDDDD.......................................
//.DDDDDDDDD....................................
//.DDDDDDDDDDD..................................
//.DDDDDDDDDDD..................................
//.DDDD...DDDDD.rrrrrr..aaaaaaa.aaww.wwww.wwww..
//.DDDD....DDDD.rrrrrr.raaaaaaa.aaww.wwww.wwww..
//.DDDD....DDDD.rrrrrrrraaaaaaaaaaww.wwww.wwww..
//.DDDD....DDDD.rrrr..rraa.aaaaaaawwwwwwwwwwww..
//.DDDD....DDDD.rrr....raaaaaaaa.awwwwwwwwwww...
//.DDDD...DDDDD.rrr...rraaaaaaaa.awwwwwwwwwww...
//.DDDD...DDDD..rrr...rraaa.aaaa.awwwwwwwwwww...
//.DDDDDDDDDDD..rrr...rraa.aaaaa.awwwwwwwwww....
//.DDDDDDDDDD...rrr...rraaaaaaaa..wwww.wwwww....
//.DDDDDDDDD....rrr...rraaaaaaaa..wwww..wwww....
//......................aaa.....................
//..............................................


//...............
//....&&&&&&.....
//...&&&&&&&&....
//...&&&&&&&&....
//...&&&&&&&&....
//...&&&&&&&.....
//....&&&&&&.....
//...&&&&&&.&&&..
//..&&&&&&&&&&&..
//..&&&&&&&&&&&..
//.&&&&..&&&&&&..
//.&&&&&&&&&&&&..
//..&&&&&&&&&&&..
//..&&&&&&&&&&&..
//....&&&&.......****
//...............


//..........................................................................
//......AAA.................iii.............................................
//.....AAAAA................iii............................tttt.............
//.....AAAAA................iii............................tttt.............
//....AAAAAAA...............iii............................tttt.............
//....AAAAAAA....nnnnnnnnn..iii..mmmmmmmmmmmmm....aaaaaaa.attttt..eeeeee....
//....AAAAAAA....nnnnnnnnn..iii..mmmmmmmmmmmmmm..aaaaaaaa.attttt.eeeeeeee...
//...AAAAAAAAA...nnnnnnnnn..iii..mmmmmmmmmmmmmm.aaaaaaaaaaatttttteeeeeeeee..
//...AAAA.AAAA...nnnn.nnnn..iii..mmmm.mmmm..mmm.aaaa.aaaaa.tttt.teee..eeee..
//...AAAAAAAAAA..nnn...nnn..iii..mmm..mmmm..mmm..aaaaaaaaa.tttt.teeeeeeeee..
//..AAAAAAAAAAA..nnn...nnn..iii..mmm..mmmm..mmm.aaaaaaaaaa.tttt.teeeeeeeee..
//..AAAAAAAAAAA..nnn...nnn..iii..mmm..mmmm..mmm.aaaaa.aaaa.tttt.teee........
//..AAAAAAAAAAAA.nnn...nnn..iii..mmm..mmmm..mmm.aaaa.aaaaa.tttt.teeeeeeeee..
//.AAAAA....AAAA.nnn...nnn..iii..mmm..mmmm..mmm.aaaaaaaaaa.tttttteeeeeeee...
//.AAAA.....AAAA.nnn...nnn..iii..mmm..mmmm..mmm.aaaaaaaaaa.ttttt.eeeeeeee...
//................................................aaa........ttt...eeee.....
//..........................................................................




``` js

document.addEventListener("keydown", function(event) {
    if (event.key === "j") {
        // camera.position.y += 10000

        camera.lookAt(UserContainer_root)

        // Spacial_Movement_Function_Basic01()

        // ================================================
        // # Timeline01
        // ================================================
        let tl01 = gsap.timeline(
            {
                repeat: 2,
                repeatDelay: 1,
                delay:  0.01
            }
        )


        // ================================================
        // # Timeline02
        // ================================================

        let tl02 = gsap.timeline(
            {
                repeat: 2,
                repeatDelay: 1,
            }
        )


        // let crystalOrb_pos = new THREE.Vector3(100, 0, -100);
        // let crystalOrb_rot = new THREE.Vector3(0, 1.575, 0);
        // let crystalOrb_sca = new THREE.Vector3(5, 5, 5);
        // let crystalOrb_durationData = 10;
        // let crystalOrb_delayData = 0;
        // let crystalOrb_easeData = "none";
        // let crystalOrb_opacityData = 0.1;

        // let crystalOrb_AnimationData = {
        //     pos: crystalOrb_pos,
        //     rot: crystalOrb_rot,
        //     sca: crystalOrb_sca,
        //     dur: crystalOrb_durationData,
        //     del: crystalOrb_delayData,
        //     eas: crystalOrb_easeData,
        //     opa: crystalOrb_opacityData
        // };

        let crystalOrb_AnimationData = {
            tlx: tl01,
            obj: Scene_CrystalOrb,
            pos: new THREE.Vector3(100, 0, -100),
            rot: new THREE.Vector3(0, 1.575, 0),
            sca: new THREE.Vector3(5, 5, 5),
            dur: 10,
            del: 0,
            eas: "none",
            opa: 0.1
        };

        let UserΔ_AnimationData = {
            tlx: tl02,
            obj: Scene_CrystalOrb,
            pos: new THREE.Vector3(100, 0, -100),
            rot: new THREE.Vector3(0, 1.575, 0),
            sca: new THREE.Vector3(5, 5, 5),
            dur: 10,
            del: 0,
            eas: "none",
            opa: 0.1
        }

        Spacial_Movement_Function_Basic01(
            crystalOrb_AnimationData.tlx,
            crystalOrb_AnimationData.obj,
            crystalOrb_AnimationData.pos,
            crystalOrb_AnimationData.rot,
            crystalOrb_AnimationData.sca,
            crystalOrb_AnimationData.dur,
            crystalOrb_AnimationData.del,
            crystalOrb_AnimationData.eas,
            crystalOrb_AnimationData.opa
        );



        // Spacial_Movement_Function_Basic01(tl01, Scene_CrystalOrb, crystalOrb_pos, crystalOrb_rot, crystalOrb_sca, crystalOrb_durationData, crystalOrb_delayData, crystalOrb_easeData, crystalOrb_opacityData);





        
        
        console.log('button pressed')
    }
})


```


``` js



ΔTemplate_object_00 = new THREE.Group()
ΔTemplate_object_00.position.set(0, 0, 0)
ΔTemplate_object_00.rotation.set(0, 0, 0)
ΔTemplate_object_00.scale.set(2, 2, 2)
ΔaOmniX_root.add(ΔTemplate_object_00)

        const mat_ΔTemplate_object_00 = new THREE.MeshPhysicalMaterial(
            { 
                // material
                map: whitePureRoom, 
                side: THREE.DoubleSide,
                opacity: 0,
                depthTest: false,
                depthWrite: false,
                alphaTest: 0,
                alphaHash: false,
                visible: false,
            });

        mesh_ΔTemplate_object_00 = new THREE.Mesh(geo_objT_SphereA0, mat_ΔTemplate_object_00);

        mat_ΔTemplate_object_00.transparent = false;
        mat_ΔTemplate_object_00.alphaMap = SceneWallpaper_02;
        mat_ΔTemplate_object_00.

        mesh_ΔTemplate_object_00.position.set(0, 0, 0);
        mesh_ΔTemplate_object_00.scale.set(1, 1, 1);
        mesh_ΔTemplate_object_00.rotation.set(0, 0, 0)

        // mesh_ΔTemplate_object_00.position.set(-15000, 0, 0);
        // mesh_ΔTemplate_object_00.rotateX( - Math.PI / 2 );
        // ΔTemplate_object_00.lookAt(camera)
        
        ΔTemplate_object_00.add(mesh_ΔTemplate_object_00)

        let scale_ΔTemplate_object_00 = () => {

            console.log("scale_ΔTemplate_object_00 created")
            gsap.to(scale_ΔTemplate_object_00.scale, {
                repeat: -1,
                duration: 0.25,
                ease: "none",
                delay: 0,
                x: 1.5,
                y: 1.5,
                z: 1.5,
    
            })

            gsap.to(scale_ΔTemplate_object_00.scale, {
                repeat: -1,
                duration: 0.25,
                ease: "none",
                delay: 0.55,
                x: 0.1,
                y: 0.1,
                z: 0.1,
    
            })
        }


```




//..................................................................
//..LL..............................................................
//.LLLL........................................................ddd..
//.LLLL........................................................ddd..
//.LLLL........................................................ddd..
//.LLLL........ooooooo....ooooooo..opppppppp....eeeeee....dddddddd..
//.LLLL.......ooooooooo..ooooooooo.oppppppppp..eeeeeeee..ddddddddd..
//.LLLL......Loooooooooooooooooooooopppppppppppeeeeeeeeeeddddddddd..
//.LLLL......Looo...oooooooo...ooooopppp.ppppppeee..eeeeeddd..dddd..
//.LLLL......Looo...oooooooo...oooooppp...pppppeeeeeeeeeeddd...ddd..
//.LLLL......Looo...oooooooo...oooooppp...pppppeeeeeeeeeeddd...ddd..
//.LLLL......Looo...oooooooo...oooooppp...pppppeee......eddd..dddd..
//.LLLLLLLLLLLoooooooooooooooooooooopppppppppppeeeeeeeeeeddddddddd..
//.LLLLLLLLLL.ooooooooo..ooooooooo.oppppppppp.peeeeeeee..ddddddddd..
//.LLLLLLLLLL..ooooooo....ooooooo..oppppppppp..eeeeeeee..ddddddddd..
//..............ooooo......ooooo...oppp.ppp......eeee......ddd......
//.................................oppp.............................
//.................................oppp.............................
//.................................oppp.............................
//..................................................................


//................................
//.....OOOOOO................jjj..
//....OOOOOOOOO..Obbb........jjj..
//...OOOOOOOOOO..Obbb........jjj..
//..OOOOOOOOOOOO.Obbb........jjj..
//..OOOO....OOOO.Obbbbbbbb...jjj..
//..OOOO....OOOOOObbbbbbbbb..jjj..
//.OOOO......OOOOObbbbbbbbbb.jjj..
//.OOOO......OOOOObbbb.bbbbb.jjj..
//.OOOO......OOOOObbb...bbbb.jjj..
//..OOOO....OOOOOObbb...bbbb.jjj..
//..OOOO....OOOO.Obbbb..bbbb.jjj..
//..OOOOOOOOOOOO.Obbbbbbbbbb.jjj..
//...OOOOOOOOOO..Obbbbbbbbb..jjj..
//....OOOOOOOOO..Obbbbbbbbb..jjj..
//.....OOOOOO.........bbb....jjj..
//.........................bjjjj..
//.........................bjjjj..
//.........................bjjjj..
//................................


``` js

gearCore = new THREE.Group()
gearCore.rotation.set(1.575, 0, 0)
gearCore.position.set(0, 75, 150)
gearCore.scale.set(1, 1, 1)
scene.add(gearCore)


// Create the gear geometry
const gearGeometry = new THREE.CylinderGeometry(10, 10, 5.5, 128, 10, true, 0, Math.PI * 2);
const gearMaterial = new THREE.MeshPhysicalMaterial(
    { 
        side: THREE.DoubleSide,
        map: whitePureRoom, 
        color: 0xffffff, 
        metalness: 0.9, 
        roughness: 0, 
        ior: 2.333,
        fog: true,
        sheenColor: 0xffffff,
        reflectivity: 1,
        iridescence: 1,
        iridescenceIOR: 1.3,
        depthWrite: true,
        depthTest: true,

    }
);
const gear = new THREE.Mesh(gearGeometry, gearMaterial);
// gear.rotation.x = 1.575; // Rotate the center cylinder by 1.575 radians on the x-axis
scene.add(gear);
gear.position.set(0, 0, 0)
gear.scale.set(1, 0.5, 1)


gearCore.add(gear)


const Teeth = new THREE.Group()
Teeth.rotation.set(1.575, 0, 0)
gearCore.add(Teeth)

// Create the teeth
const teethGeometry = new THREE.BoxGeometry(2, 0.5, 7);
const teethMaterial = new THREE.MeshPhysicalMaterial(
    { 
        side: THREE.DoubleSide,
        map: whitePureRoom, 
        color: 0xffffff, 
        metalness: 0.8, 
        roughness: 0,
        ior: 2.333,
        fog: true,
        sheenColor: 0xffffff,
        reflectivity: 1,
        iridescence: 1,
        iridescenceIOR: 1.3,
        depthWrite: true,
        depthTest: true,
    }
);

for (let i = 0; i < 32; i++) {
    const tooth = new THREE.Mesh(teethGeometry, teethMaterial);
    const angle = (i / 32) * Math.PI * 2;
    tooth.position.set(Math.cos(angle) * 11, Math.sin(angle) * 11, 0);
    tooth.rotation.z = angle;
    tooth.scale.set(1, 0.5, 0.5)
    Teeth.add(tooth);
}

const Bolts = new THREE.Group()
Bolts.rotation.set(1.575, 0, 0)
Bolts.scale.set(1.6, 1.6, 1.6)
gearCore.add(Bolts)

// Add some decorative elements for a steampunk look
const boltGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32, 1, false);
const boltMaterial = new THREE.MeshPhysicalMaterial({ color: 0x333333, metalness: 0.9, roughness: 0.3 });



// boltMaterial.color = "ffffff"
// boltMaterial.emissive = "222020"
boltMaterial.roughness = 0
boltMaterial.mealness = 0.988
boltMaterial.ior = 2.333
boltMaterial.reflectivity = 1
boltMaterial.iridescence = 1
boltMaterial.iridescenceIOR = 1.3
boltMaterial.fog = true

for (let i = 0; i < 8; i++) {
    const bolt = new THREE.Mesh(boltGeometry, boltMaterial);
    const angle = (i / 8) * Math.PI * 2;
    bolt.position.set(Math.cos(angle) * 7, Math.sin(angle) * 7, 0);
    bolt.rotation.z = angle;
    Bolts.add(bolt);
}

// Add lighting
const ambientLight = new THREE.AmbientLight(0x404040);
ambientLight.position.set(0, 50, 150)
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(0, 50, 150)
scene.add(pointLight);



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


## Multiple HoverObjects()

``` js

function createTray(url, position = { x: 0, y: -144, z: 0 }, rotation = { x: 1.2, y: 0, z: 0 }, scale = { x: 1.5, y: 1.4, z: 1.2 }) {
    const tray = new THREE.Group();
    tray.position.set(position.x, position.y, position.z);
    tray.rotation.set(rotation.x, rotation.y, rotation.z);
    tray.scale.set(scale.x, scale.y, scale.z);

    tray.add(
        new hoverObject(
            'img',
            0, 2, 30,
            0, 0, 0,
            0.1, 0.1, 0.1,
            "Testing234", "TestingClass234",
            url, "",
            "TheHeaderTest", "TheHeaderClassNameTest", "HeaderNameTest", "Um... Hello World"
        )
    );

    return tray;
}

function addMultipleTrays(root, urls) {
    urls.forEach(url => {
        const tray = createTray(url);
        root.add(tray);
    });
}

// Example usage:
const CenterVirtualDesk_root = new THREE.Group(); // Assuming this is your root group
const urls = [
    "./assets/img/03-HudUI/RegPanels/ClearPanelHorizontal.svg",
    "./assets/img/03-HudUI/RegPanels/AnotherImage.svg",
    // Add more URLs as needed
];

addMultipleTrays(CenterVirtualDesk_root, urls);




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


# GSAP Timeline
// ------------------------------------------------------------

``` js 

// Create a timeline
let tl01 = gsap.timeline({
    delay: 0.5,
    paused: true, // default is false
    repeat: 2, // number of repeats (-1 for infinite)
    repeatDelay: 1, // seconds between repeats
    repeatRefresh: true, // invalidates on each repeat
    yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
    defaults: {
        // children inherit these defaults
        duration: 1,
        ease: 'none'
    },
    smoothChildTiming: true,
    autoRemoveChildren: true,
    onComplete: () => {
        console.log("finished")
    },
    // other callbacks:
    // onStart, onUpdate, onRepeat, onReverseComplete
});


tl.to(camera.position, {
    duration: 5,
    delay: 0,
    x: 5,
    // y: 0,
})


```

// ------------------------------------------------------------



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