const geo_Torus01 = new THREE.TorusGeometry(15000, 15500, 16, 32, Math.PI * 2 )
const mat_Torus01 = new THREE.MeshBasicMaterial({ map: testImg02, side: THREE.DoubleSide });
mesh_Torus01 = new THREE.Mesh(geo_Torus01, mat_Torus01);
mat_Torus01.transparent = false;
mat_Torus01.alphaMap = testImg02;
mesh_Torus01.position.set(0, 40000, 0); // 9000 = floor w/o cut
mesh_Torus01.rotateX( - Math.PI / 2 );
// mesh_Torus01.scale.y = 90
scene.add(mesh_Torus01);
objects.push(mesh_Torus01)


const TorusConfigs = {
  Intro: [
    "Torus Configurations",
    'The code above is to the Torus which will be a main component of our Time Reality. We will probably be combining a sphere with a torus to show our perceptual time vs objective time.'

    'That being said, we want to save some configurations so that when we are really working on it, we have these saved for testing.'
  ],

  TubeConfigs: {
    note: [
      'tube configs are for the second parameter of the THREE.TorusGeometryObject',
    ],

    config01: {
      Title: "Time Reality Prototype 01",
      tube: 1550,
      note: 'left an almost perfect diamond for the reality in the middle.'
    },

    config02: {
      Title: "Donut",
      tube: [5000, 'to', 10000],
      note: [ 
        'with radius of template, these will be donuts so center will not converge',
      ],
    },

    config03: {
      Title: "Weird Work Space",
      tube: [40000],
      note: [
        'This configuration will leave ghost panels on the cardinal directions of the Torus (there is a larger cube). This can be a legit workspace so I am documenting that here. We have an inner room and an outer room. The outer room can be a normal time reality of things. '
      ],
    },

    config04: {
      Title: "Tron Final Boss Room.",
      tube: [3000],
      note: [
        'It simply looks like the room where we fought tron at. If we wanted to do it, we could recreate that whole room with the meshes the were using at the time XD',
      ],
    },
  },
}