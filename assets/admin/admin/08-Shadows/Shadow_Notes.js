const Shadow_Notes = {
  AdminNotes: {},
  ToC: {},
  NotesOnShadows: {
    Introduction: [
      '# Introduction',
      '|- The back of the objects are indeed in the dark, and this is called the core shadow/ What we are missing is the drop shadow, where objects create shadows on the other objects.',

      '|- Shadows have always been a challenge for real-time 3D rendering, and developers must find tricks to display realistic shadows at a reasonable frame rate.',

      'There are many ways of implementing them, and THREE.js has a built-in solution. But be aware, this solution is conventient but costly. It is far from perfect.',

    ],

    HowItWorks: [
      'When you do one render, THREE will first do a render for each light supposed to cast shadows. Those renders will simulate what the light sees as if it was a camera. During these light renders, MeshDepthMaterial replaces all meshes materials.',
    ],

    ImportantNotes: {
      Note01: [
        'Only the following types of lights support shadows:',
        {
          Light01: 'PointLight',
          Light02: 'DirectionalLight',
          Light03: 'SpotLight',
        },
      ],
    },


    // ShadowMap Optimizations
    
  }
}