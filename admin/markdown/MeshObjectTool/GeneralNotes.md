# Mesh Object Tool 
# General Notes
# Objective
    \- Capture: [
        VisualCapture.MeshObject.Name[]
        VisualCapture.MeshObject.PropertyComboList[]
        VisualCapture.MeshObject.PropertyComboListItem()
    ]

    CaptureMeshObject() => {
        Scene: [
            {
                
                Scene.Fog: {
                    THREE.Fog(): true,
                    scene.fog.color: "hexValue / #000000"
                },

                THREE.Material: 
            }
        ]
        Light: [
            {
                AmbientLight: true,
                DirectionalLight: Boolean,
                HemisphereLight: Boolean,
                PointLight: Boolean,
                
            }
        ],

        TextureTypes: [
            {
                TextureLoader(): 
                CubeTextureLoader():

            }
        ]

        Material: [
            {
                transparent: boolean,
                opacity: range("0-1"),
                depthTest: boolean,
                depthWrite: boolean,
                alphaTest: range("0-1"),
                alphaHash: boolean,
                visible: boolean,
                side: [
                    {
                        opt01: THREE.Frontside,
                        opt02: THREE.Backside,
                        opt03: THREE.DoubleSide,
                    },
                ]

            }
        ],

        THREE.MeshStandardMaterial: [
            {
                color: hexValue(),
                emissive: hexValue(),
                roughness: range("0-1"),
                metalness: range("0-1"),
                flatshading: boolean,
                wireframe: boolean,
                vertexColors: boolean,
                envMaps: textureLoader(selectObjectMap),
                map: textureLoader(selectObjectMap),
                roughnessMap: textureLoader(selectObjectMap),
                alphaMap: textureLoader(selectObjectMap),

            }   
        ],

        THREE.Physical
    }