const Light_Notes = {
  Admin: {
    Log: [],
    Resources: [
      {
        Helpers: {
          adminNote: [
            {
              TemplateForHelpers : true,
              FileName: 'LightHelperTemplates.js'
              DirectoryLocation: './LightHelperTemplates.js'
            }
          ]
          Helper01: 'HemisphereLightHelper',
          Helper02: 'DirectionalLightHelper',
          Helper03: 'PointLightHelper',
          Helper04: 'RectAreaLightHelper',
          Helper05: 'SpotLightHelper',
        },
      },
    ],
  }, 

  ToC: {
    Light: {
      item01: 'ClassType',
      item02: 'TypeList = {}',
      item03: 'PerformanceNotes = []',
    },
  },

  GeneralNotes: {
    Light: {
      ClassType: Object,
      TypeList: {
        Type01: {
          Name: "AmbientLight",
          Example: 'const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);',
          Description: [
            'AmbientLight applies omnidirectinoal lighting on all geometries of the scene. The first parameter is (`color`) and the second parameter is (`intensity`).',
          ],
        },

        Type02: {
          Name: "Directional Light",
          Example: 'const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3),'
          Description: [
            'The DirectionalLight will have a sun-like effect as if the suns rays were traveling in parallel. The first parameter is color and the second is intensity.'
          ],
        },

        Type03: {
          Name: "Hemisphere Light",
          Example: 'const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0.3),'
          Description: [
            'The HemisphereLight is similar to the AmbientLight but with a different color from the sky than the color coming from the ground. Faces facing the sky will be lit by one color while another color will lit faces facing the ground.',
          ],
        }

        Type04: {
          Name: "Point Light",
          Example: 'const PointLight = new THREE.PointLight(0xffffff, 0.3),'
          Description: [
            'The PointLight is almost like a lighter. The light source is infinitely small, and the light spreads uniformly in every direction. The first parameter is color and the second paramter is the intensity',
          ],
        },


        Type05: {
          Name: "RectArea Light",
          Example: 'const RectAreaLight = new THREE.RectAreaLight(0x4e00ff, 2, 1, 1),'
          Description: [
            'The RectAreaLight works like the big rectangle lights you can see on the photoshoot set. Its a mix between a directional light and a diffuse light. The first parameter is `color`, and the second is `intensity`, and third is `width` and the fourth is the `height`',
          ],
        },


        Type06: {
          Name: "Spot Light",
          Example: 'const SpotLight = new THREE.SpotLight(0x4e00ff, 2, 1, 1),'
          Description: [
            'The SpotLight works like a flashlight. It's a cone of liht sharting at a point and oriented in a direction. Heres the list of the parameters',
            ['color: The Color'],
            ['intensity : The strength'],
            ['distance : The distance at which the intensity drops to 0'],
            ['angle: How large is the beam'],
            ['penumbra : How diffused is the contour of the beam'],
            ['decay: how fast the light dims'],

          ],
        },

        // Performance Notes
        PerformanceNotes : [
          'Lights are great and can be realistic if well used. The problem is that lights can cost a lot when it comes to performance. The GPU will have to do many calculatinos like the distance from the face to the light, how much that face is facing the light, if the face is in the spot light cone, etc.',

          'Try to add as few lights as possible and try to use the lights that cost less.',

          'Minimal Cost: AmbientLight, HemisphereLight',
          'Moderate Cost: DirectionalLight, PointLight',
          'High Cost: SpotLight, RectAreaLight',
        ],

      }
    }
  },
}

module.exports = Light_Notes