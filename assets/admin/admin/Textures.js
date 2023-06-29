const TextureCheatSheet = {
  Types: {

    TypesAdmin: {
      Resources: {

        // Good to know Information
        GoodToKnow: {
          item01: {
            title: "PBR",
            Note: [
            ['The textures below were developed based on PBR principles. PBR stands for Physically Based Rendering. It regroups many techniques that tend to follow real-life directions to get realistic results.'],
            
            ['While there are many other techniques, PBR is becoming the standard for realistic renders, and many software, engines, and libraries are using it.'],

            {
              Δ01_HowToLoadTextures: Boolean,
              Δ02_HowToUseTextures: Boolean,
              Δ03_WhatTransformationsWeCanApply: Boolean,
              Δ04_HowToOptimizeTextures: Boolean,
            },


            ],
          },
        },

        // General Links
        GeneralLinks: {

          ResourceLibraryLinks: {
            Link01: {
              title: "Poliigon.com",
              url_Link: 'https://www.poliigon.com/',
            },

            Link02: {
              title: "3D Textures dot me",
              url_Link: 'https://3dtextures.me/',
            },
          },

          Link01: {
            urlLink: 'https://marmoset.co/posts/basic-theory-of-physically-based-rendering/',
          },

          Link02: {
            urlLink: 'https://marmoset.co/posts/physically-based-rendering-and-you-can-too/',
          },


        }


        // TABLE OF CONTENTS (CLOSED)
        TOC_Closed: {
          itemA: "TexturesIntro",
          itemB: "Types of Textures",
          itemC: "PBR",
          itemD: "ΔNfx01_HowToLoadTextures",
          itemE: "UV unwrapping",
          itemF: "Transforming the Texture",
          itemG: "Filtering and Mipmapping",
          itemH: "Texture Format & Optimisation",
          itemI: "Where to Find textures",
        },

        // TABLE OF CONTENTS (OPEN)
        TOC_Open: {
          itemA: "TexturesIntro",
          itemB: "Types of Textures",
          itemC: "PBR",
          itemD: {
            title: "ΔNfx01_HowToLoadTextures",
            subitem01: 'Getting the URL of the image',
            subitem02: 'Loading the image',
            subitem03: 'Using TextureLoader',
            subitem04: 'Using the Loading Manager',
          },
          itemE: "ΔNfx02_UV unwrapping",
          itemF: "ΔNfx03_Transforming the Texture",
          itemG: "ΔNfx04_Filtering and Mipmapping",
          itemH: "ΔNfx05_Texture Format & Optimisation",
          itemI: "ΔNfx06_Where to Find textures",
        },
      },
    },


    //ItemB: { Types of Textures}
    TypesOfTextures: {

      // Albedo or Color Texture
      Type01: {
        Name: "Albedo / Color",
        Description: [
          ['The albedo texture is the most simple one. It will only take the pixels of the texure and apply them to the geometry'],
        ],
      },
  
      // Alpha Texture
      Type02: {
        Name: "Alpha",
        Description: [
          ['The alpha texture is a grayscale image where white will be visible and black wont.'],
        ],
      },
  
      // Height Texture
      Type03: {
        Name: "Height",
        Description: [
          ['The height texture is a grayscale image that will move the vertices to create some relief. Youll need to add subdivision if you want to see it.'],
        ],
      },
  
  
      // Normal Texture
      Type04: {
        Name: "Normal",
        Description: [
          ['The normal texture will add small details. It wont move the vertices, but it will lure the light into thinking that the face is orientated differently. Normal textures are very usefull to add details with good performance because you dont need to subdivide the geometry.'],
        ],
      },
  
      // Ambient Occlusion Texture
      Type05: {
        Name: "Ambient occlusion",
        Description: [
          ['The ambient occlusion texture is a grayscale image that will fake shadow in the surfaces crevices. While its not physcially accurate, it certainl,y helps to create contrast.'],
        ],
      },
  
      // Metalness Texture
      Type06: {
        Name: "Metalness",
        Description: [
          ['The metalness textureis a grayscale image that will specify which part is metalilc(white) and non-metallic (black). This information will help to create reflection.'],
        ],
      },
  
      // Roughness Texture
      Type07: {
        Name: "Roughness",
        Description: [
          ['The roughness is a grayscale image that comes with metalness, and that will specify which part is rough (white) and which part is smooth (black). This information will help to dissipate the light. A carpet is very rugged, and you wont see the light reflection on it, while the waters surface is very smooth, and you can see the light reflecting on it. '],
        ],
      },
    },




  }


  // 
}