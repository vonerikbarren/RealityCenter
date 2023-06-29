const ViewingTheScene_Shortcuts = {
  DifferentMovements: {
    Movement00: {
      MovementName: "",
      Shortcut: "",
      Notes: [],
    },

    Movement01: {
      MovementName: "Orbit",
      Shortcut: "MOUSEWHEEL - Pressed Down",
      Notes: [
        {
          Function: 'To move view around a single target',
        },
      ],
    },

    Movement02: {
      MovementName: ["Truck", "Track", "Pan (incorrect)"],
      Shortcut: "Shift + MOUSEWHEEL Button + Mouse-Movement-Left or Right",
      Notes: [
        {
          Function: 'To move view right or left',
        },
      ],
    },

    Movement03: {
      MovementName: "Pedestal",
      Shortcut: "Shift + MOUSEWHEL Button + Mouse-Movement-Up or Down",
      Notes: [
        {
          Function: 'To move view upwards or downwards',
        },
      ],
    },

    Movement04: {
      MovementName: "Dolly",
      Shortcut: "MOUSEWHEEL (Roll) ",
      Notes: [
        {
          Function: 'To zoom / scale in or out.',
        },
      ],
    },


    Movement05: {
      MovementName: "Super Dolly / Resolve Zoom Limit Movement",
      Shortcut: "Shift + Ctrl + MIDDLEMOUSE",
      Notes: [
        {
          Function: 'To zoom scale in or out and even beyond 0',
        },
      ],
    },


    Movement06: {
      MovementName: "Fly / Walk Mode",
      Shortcut: "Shift + BackTick",
      Notes: [
        {
          Function: 'Tilting and Panning (Human Head Functions)',
        }
      ],
    },


  }
}


const Blender_KeyboardShortcuts = {
  Numpad: {

    ID_Class: 'NPC = NumpadCode',
    // Template
    ShortcutID: 'NPC00',
    ShorcutName: "NumPad#",
    KeyboardInput: "NUMPAD_#",
    Function: '',
    Notes: [

    ],

    // Switch Between Perspective View vs Orthographic View
    ShortcutID: 'NPC05',
    ShorcutName: "NumPad#5",
    KeyboardInput: "NUMPAD_#5",
    Function: 'Switch Between Perspective View vs Orthographic View',
    Notes: [

    ],


    // Axis X, Y, and Z
    ShortcutID: ['NPC01', 'NPC03', 'NPC07'],
    ShorcutName: ["NumPad#1", "Numpad#3", "NumPad#7"],
    KeyboardInput: ["NumPad#1", "Numpad#3", "NumPad#7"],
    Function: 'x, y, z - axis view points,
    Notes: [

    ],

    // Camera View Point / Perspective
    ShortcutID: 'NPC00',
    ShorcutName: "NumPad#0",
    KeyboardInput: "NUMPAD_#0",
    Function: 'Camera View Point / Perspective',
    Notes: [

    ],


    // To focus the camera on an object
    ShortcutID: 'NPC0(.)',
    ShorcutName: "NumPad#(.)",
    KeyboardInput: "Select with Left Mouse, then NUMPAD_#(.)",
    Function: '',
    Notes: [

    ],
  },

  Selecting: {

    ID_Class: 'SEL = Selection',


    // Template
    ShortcutID: 'SEL00',
    ShorcutName: "SEL_",
    UserInput: "SEL_",
    Function: '',
    Notes: [],

    // Selecting
    ShortcutID: 'SEL01',
    ShorcutName: "SEL_Item",
    UserInput: "SEL + Left Mouse",
    AdditionalInputs: {
      SelectMultiple: ["SEL_Multiple", 'Shift + Left Click'],
      SelectAll: ["SEL_ALL", 'Key="A"'],
      SelectWithRectangle: ["SEL_Rect", 'Key="B"'],
    },
    Function: '',
    Notes: [],
  },


  ModeChange: {


    ID_Class: 'MODE = Mode',

    // Template
    ShortcutID: 'CRSI00',
    ShorcutName: "CRSI_",
    UserInput: "",
    Function: '',
    Notes: [],

    // Mode Menu
    ShortcutID: 'MODE_00',
    ShorcutName: "MODE_MENU",
    UserInput: "Ctrl + Tab",
    Function: 'Shows the Mode Menu',
    Notes: [

      // To change which mode I am in. 
      {
        ModeTypes: {
          Mode04: 'ObjectMode',
          Mode02: 'Sculpt Mode',
          Mode06: 'Edit Mode',
          Mode07: 'WeightPaint',
          Mode08: 'Vertex Paint',
          Mode09: 'TexturePaint',
        },
      }
  
    ],

    // Edit Mode
    ShortcutID: 'MODE_01',
    ShorcutName: "MODE_EDIT",
    UserInput: "TAB",
    Function: 'Puts user into edit mode',
    AdditionalInputs: {
      Input01: ["1", "Vertices Highlight"],
      Input02: ["2", "Edges Highlight"],
      Input03: ["3", "Faces Highlight"],
    }
    Notes: [],


    // Shading
    ShortcutID: 'MODE_01',
    ShorcutName: "MODE_SHADE",
    UserInput: "Z",
    Function: 'Opens up Shade Mode Menu',
    Notes: [],
  },


  ObjectMode_Shortcuts: {
    ID_Class: 'CRSI = CreationSimulation',

    // Template
    ShortcutID: 'CRSI00',
    ShorcutName: "CRSI_",
    UserInput: "",
    Function: '',
    Notes: [],


    // Adding an object 
    ShortcutID: 'CRSI_01',
    ShorcutName: "CRSI_Create",
    UserInput: "Shift + A",
    Function: 'Opens up a menu to drop more objects.',
    Notes: [],

    // Deleting an object 
    ShortcutID: 'CRSI_02',
    ShorcutName: "CRSI_Delete",
    UserInput: "X",
    Function: 'Prompt for deletion of selection',
    Notes: [],

    // Hiding a single object
    ShortcutID: 'CRSI_03',
    ShorcutName: "CRSI_HidingSingleObject",
    UserInput: "H",
    Function: 'Hiding a single object',
    Notes: [],

    // Hiding all objects
    ShortcutID: 'CRSI_04',
    ShorcutName: "CRSI_HidingMultipleObjects",
    UserInput: "Shift + H",
    Function: 'Hiding all objects',
    Notes: [],


    // # Transforming objects
    // { Position, Rotation, and Scale }

    // Position Change
    ShortcutID: 'CRSI_05',
    ShorcutName: "CRSI_Position",
    UserInput: "G",
    Function: 'Makes user able to move object',
    Notes: [],

    // Rotation Change
    ShortcutID: 'CRSI_06',
    ShorcutName: "CRSI_Rotation",
    UserInput: "R",
    Function: 'Makes user able to rotate object',
    Notes: [],

    // Scale Change
    ShortcutID: 'CRSI_07',
    ShorcutName: "CRSI_Scale",
    UserInput: "S",
    Function: 'Makes user able to scale object',
    Notes: [],

  },

  Properties : {
    GrayProperties : [
      "Deal with the renderers and the environment",
    ]

    ColoredProperties: [
      "These relate to the active object, and they can differ depending on the type of active object because we don't have the same properties for a cube as for a light."
    ],

    ColoredProperties_Overview: [
      {
        Name: ["Object Properties"]
        Appearance: "Orange Box"
        Purpose: 'Lets the user change with accuracy properties such as transformations',
      },

      {
        Name: ["Modifier Properties"]
        Appearance: "Blue Wrench",
        Purpose: 'Lets you add what we call modifiers. These are non-descructive modifications, You can subdivide, bend, grow, shrink, etc. and turn them off as you please',
      },

      {
        Name: ["Material Properties"],
        Appearance: "Red Sphere - HazardIcon",
        Purpose: 'Lets the user play with materials',
        MoreInfo: [
          'By default you have access to one material named `Material and it should be applied to the default cube if you didnt delete it.`',

          'You can remove the material with the `-` button and combine them with the `+` button, but we usually use only one material per mesh.',

          'If there is no material on the mesh, we can choose an existing one, or we can create a new one with the `New` button',

          'We can have different types of sufaces for one material. The default one is called `Principled BSDF` adn this type of surface uses the PBR principles as the MeshStandardMaterial does in THREE.js. This means that we should get a very similar result if we export htis kind of material to a THREE.js Scene.',
        ],
      },
    ],
  },


  OtherShortcuts : {

    ID_Class: 'OTHR = Other',
    
    // Tempalte
    ShortcutID: 'OTHR_00',
    ShorcutName: "OTHR_",
    UserInput: "",
    Function: '',
    Notes: [],

    Shortcut01: {
      ShortcutID: 'OTHR_01',
      ShorcutName: "OTHR_Search",
      UserInput: "F3",
      Function: 'Opens the in Blender Search if I need to know a shortcut etc.',
      Notes: [],
    },
  },




}