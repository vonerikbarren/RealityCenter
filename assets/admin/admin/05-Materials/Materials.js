const THREE_Materials = {

  // Material01 : THREE.BasicMeshMaterial
  material01: {
    Title: "THREE.BasicMeshMaterial",
    propertyList: {
      prop01: {
        name: 'material.map',
        details: [],
      },

      prop02: {
        name: 'material.color',
        details: [
          Examples: {
            ex01: 'material.color = new THREE.color("#ff00ff")',
          },

          Other: {
            dataHeader: "",
          },
        ],
      },

      prop03: {
        name: 'material.wireframe',
        details: [],
      },

      prop04: {
        name: 'material.transparent',
        details: [],
      },

      prop05: {
        name: 'material.opacity',
        details: [],
      },

      prop06: {
        name: 'material.alphaMap',
        details: [],
      },

      prop07: {
        name: 'material.side',
        details: {
          options: {
            option01: "THREE.BackSide",
            option02: "THREE.FrontSide",
            option03: "THREE.DoubleSide",
          },
        },
      },

      prop01: {
        name: 'material.flatshading',
        details: [
          
        ],
      },
    },
  },


  // # Normal Mesh Material || THREE.MeshNormalMaterial()
  material_02: {
    Title: "THREE.MeshNormalMaterial",
  },

  material_03: {
    Title: "THREE.MeshMatCapMaterial",
  },

  material_04: {
    Title: "THREE.MeshDepthMaterial",
  },

  // # MeshLambertMaterial || THREE.MeshLambertMaterial()
  material_05: {
    Title: "THREE.MeshLambertMaterial",
  },

  // # MeshPhongMaterial || THREE.MeshPhongMaterial()
  material_06: {
    Title: "THREE.MeshDepthMaterial",
  },

  // # MeshToonMaterial || THREE.MeshToonMaterial()
  material_07: {
    Title: "THREE.MeshToonMaterial",
  },

  // # MeshStandardMaterial || THREE.MeshStandardMaterial()
  material_08: {
    Title: "THREE.MeshStandardMaterial",
  },

  // # MeshPhysicalMaterial || THREE.MeshPhysicalMaterial()
  material_08: {
    Title: "THREE.MeshPhysicalMaterial",
    Important: {
      note01: [
        ['Standard and Physical Meshes will need textures to be mapped first, then the settings to those mappings afterwards -- examples below: '],
        {
          map01: {
            nameExampleKey: "material.map",
            nameExampleValue: 'doorColorTexture',
            note: ['note that the {type: colorTexture} is the default'],

            Settings: ['common basic mesh props can be used here']
          },

          map02: {
            nameExampleKey: "material.alphaMap",
            nameExampleValue: 'doorAlphaTexture',
          }
        }
      ]
    }
  },





}