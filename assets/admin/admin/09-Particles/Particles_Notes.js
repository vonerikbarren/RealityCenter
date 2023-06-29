const Particles_Notes = {
  // # Admin
  Admin: {},

  // Table of Contents
  ToC: {},

  // Learning Notes
  LearningNotes: [

    {
      Title: "#1-Introduction",
      notes: [
            
        'Particles are very popular and can be used to achieve various effects such as stars, smoke, rain, dust, fire, and many other things.',

        'The good thing with particles is that you can have hundreds of them on screen with a reasonable frame rate. The downside is that each particel is composed of a plane (two triangles) always facing the camera', 

        'Creating particles is as simple as making a Mesh. We need a BufferGeometry, a material that can handle particles (PointsMaterial), and instead of producing a Mesh we need to create a Points.',
      ],
    },

    {
      Title: "# 2-Setup",
      Notes: [
        [
          "SectionA1 - PointsMaterial",
          'We need a special type of mateiral called PointsMaterial. This material can already do a lot, but we will discover how to create our own particles material to go even further in a future lesson.',
  
          'The PointsMaterial has multiple properties specific to particles like the `.size` to control all particles size and the `.sizeAttenuation` to specificy if distant particles should be smaller than close particles',

          "SectionA2 - Points",
          'Finally, we can create the final particles the  same way we create a Mesh, but this time by using the Points class. Dont forget to add it to the scene.'
        ],

        [
          "Section B1 - Custom Geometry",
          'To create a custom gemetry, we can start from a BufferGeometry, and add a `position`.',

          'Replace the SphereGeometry with custom geometry and add the `position` attribute like we did before.'


          "Section B2 - Color, Map, and AlphaMap",
          'We can change the color of all particles with the `color` property ont he PointsMaterial. Dont forget that you need to usethe `Color` class of THREE if your changing this property after instancing the material.',


          "Section B3 - Using AlphaTest",
          'The `alphaTest`, is a value between 0 and 1 that enables the WebGL to know when not to render the pixel according to that pixels transparency. By default, the value is 0 meaning that the pixel will be rendered anyway. If we use a small value such as 0.001, the pixel wont be rendered if the alpha is 0',

          "Section B4 - Using the DepthTest",
          'When drawing, the WebGL tests if whats being drawn is closer than whats already drawn. That is called depth testing and can be deactivated. Do an alpha test or a depthTest not both!',

          "Section B5 - Using depthWrite",
          'As we said, the WebGL is testing if whats being drawn is closer than whats already drawn. The depth of whats being drawn is stored in what we call a depth buffer. Instead of not testing if the aprticle is closer than whats in this depth buffer, we can tell the WebGL not to write particles in that depth buffer. Comment out the depthTest when doing this. ',

          "Section B6 - Blending",
          'Currently, the WebGL draws the pixels one on top of the other.',

          'By changing the blending property, we can tell the WebGL not only to draw the pixel, but also to add the color of that pixel to the color of the pixel already drawn. That will have a saturation effect that can look amazing.'

          'To test that, simply change the blending property tot he THREE.AdditiveBlending(Keep the depthWrite property).',

          "Section B7 - Different Colors",
          'We can have a different color for each particle. We need to first add a new attribute named `color` as we did for the position. A color is composed of RGB values.'
        ],        
      ],
    },

    {
      Title: "# 2-Animation",
      Notes: [
        "By using the points as an object",
        'Because the `Points` class inherits from the OBject3D class, I can move, rotate, and scale the points as I wish.',

        'Rotate the particles in the `tick` function:'


        "By changing the attributes"
        'Another solution would be to update each vertex position separately. This way, vertices can have different trajectories. We are going to animate the particles as if they were floating on waves but first, lets see how we can update the vertices.',

        "Step2: ",
        'To update each vertex, we have to update the right part in the `position` attribute because all the vertices are stored in this one dimension array where hte first 3 values correspond to the x, y, z coordinates of the first vertex, then the next 3 values correspond to the x,y,z of the second vertex etc.',

        'We only want the vertices to move up and down, meaning that we are going to update the y axis only. Because the `position` attribute is a one dimension array, we have to go through it 3 by 3 and only update the second value which is the y coordinate.',

        '...aftercode',
        'Here, we chose to have a simple for loop that goes from 0 to count and we create an i3 variable inside that goes 3 by 3 simply by multiplying i by 3.',

        "Step3: Animate all vertices on the same frequency ",
        'The easiest way to simulate waves movement is to use a simple sinus. First, we are going to update all vertices to go up and down on the same frequency.',

        'Unfortunately nothing is moving, The problem is that THREE.js has to be notified that the geometry changed. To do that, we have to set the `needsUpdate` = true on the `position` attribute once we are done updating the vertices: '


        "Step4: Animation + Apply the offset to the sinus.",
        'Next is to apply an offset to the sinus between the particles so that we get that wave shape.',

        'To do that, we can use the x coordinate, And to get this value we can use the same technique that we used for the y coordinate but instead of i3 + 1, its just i3'
      ],

    },

  ],

  // General Notes
  GeneralNotes: [],
}