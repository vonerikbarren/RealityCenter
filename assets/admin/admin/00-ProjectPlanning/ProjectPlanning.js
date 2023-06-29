const ProjectPlanning = {
  Admin: {
    FileStatus: {
      Date: [2, 11, 2022],
      Time: '22:51',
      Notes: [
        [[false], "Finish Before Sunday"],
        [[false], "Keep Log Current"],
        [[false], "Go down to where the class is not finished and finish."],
      ],
    },
  },

  ProjectPlan: [

    // Template
    item00: {
      itemName: "",
      itemPriority: '',
      itemGoal : {
        Goal01: '',
        Goal02: '',
      },
      itemDetails: [
        '',
      ],
    },

    // item01: Time Reality
    item00: {

      // Project_Headers
      ProjectName: "",
      ProjectPriority: '',

      // Project_GoalList
      Project_GoalList : {
        Goal00: [[false],"Create Philosophy Behind The Time Reality"],
        Goal01: [[false],"Create 3D BluePrint"],
        Goal02: [[false],"Create 2D BluePrint"],
        Goal03: [[false], "Gather all necessary assets"],
        Goal04: [[false], "Gather all necessary resources for project"],
        Goal05: [[false], "Create GoalAccomplish_RealityLoop.js", 'sibling file to this file.'],
        Goal06: [[false], "Test Loop & Project Structure and Look for bugs"],
        Goal07: [[false], "Create TimeBudget for Project"],
        Goal08: [[false], "Begin Building CodeTemplateModels (CTMs) for work."],
        Goal09: [[false], "Begin Building Application"],
        Goal10: [[false], "Periodically Check live applicaition."],
      },

      ProjectGoals_ObjectiveLevel: [

        // Goal #1 - Create Philosophy Behind the Time Reality
        {
          Goal00: "Create Philosophy Behind the Time Reality",
          ObjectivesList: [
            [[false], "Purpose of TimeReality Component", 'Short Notes here'],
            [[false], "Aspects of Time", 'Short Notes here'],
          ],
        },

        // Goal #1 - Create 3D Blueprint
        {
          Goal01: "Create 3D BluePrint. We are going to need to a 3D layout of the Reality",
          ObjectivesList: [
            [[false], "New Concepts Project on iPad", 'NameLayers first and import assets'],
            [[false], "Report Asset Test Failures", 'Pngs, text, textures, and meshes'],
          ],
        },

        // Goal #2 - Create 2D BluePrint
        {
          Goal02: "Create 2D BluePrint. We are going to need to a 32D layout of the TimeReality",
          ObjectivesList: [
            [[false], "New Concepts Project on iPad", 'NameLayers first and import assets'],
            [[false], "Report Asset Test Failures", 'Pngs, text, textures, and meshes'],
          ],
        },

        // Goal #3 - Gather all necessary assets 
        {
          Goal03: "Gather all necessary assets",
          ObjectivesList: [

            // Logic Assets
            [[false], "THREE/examples/css2D_label.html", 'Learn & Implement'],
            [[false], "THREE/examples/css3d_periodictable.html", 'Learn & Implement'],
            [[false], "THREE/examples/css3d_youtube.html", 'Learn & Implement'],

            // Design Assets
            [[false], "3D Clock Assets", 'List Items in Task Level'],
            [[false], "Cogs", 'Pngs, text, textures, and meshes'],
          ],
        },

        // Goal #4 - Gather all necessary resources for project
        {
          Goal04: "Gather all necessary resources for project",
          ObjectivesList: [
            [
              [false], 
              "How to do Crud Operations in THREE.js", 
              {
                Resource3_1: {
                  WebsiteName: "Encode DNA",
                  
                  Websitelink: 'https://www.encodedna.com/javascript/how-to-create-a-simple-crud-application-using-only-javascript.htm',

                  CodeLink: "https://www.encodedna.com/javascript/practice-ground/default.htm?pg=crud_application_using_javascript",

                  WebsiteTags: ['CRUD', 'Building a Table', 'VanillaJS'],

                  WebsitePurpose: 'To show how to build a crud table with vanilla javascript that can be updated.',

                },


                Resource3_2: {
                  WebsiteName: "",

                  WebsiteLink: 'https://developer.okta.com/blog/2018/06/28/tutorial-build-a-basic-crud-app-with-node',

                  CodeLink: "https://github.com/oktadev/okta-express-basic-crud-app-example",

                  WebsiteTags: ['CRUD', 'Node/Express', 'FullStack'],

                  WebsitePurpose: 'To show how to build a crud application with the FE and BE.'
                },

              },
            ],
          ]
        },

        {
          Goal05: "Create GoalAccomplish_RealityLoop.js",
          ObjectiveList: [
            [[false], "Build the file"],
            [[false], "Reminder: It needs to be efficient."],
            [[false], "Make the file bash-readable."],
          ],
        },

      ],




    },
  ],
}