const ThePresentTense = {
   Admin: [],

   // Template
   EntryTemplate: [
      {
         // Header Data
         Header: {
            // TitleData
            RootTitle: [""],
            ParentTitle: "",
            ChildTitle: '',

            // TimeSpaceData
            LocationInTime: [["Month"], ["Day"], ["Year"]],
            PhysicalLocation: [""],
            TimeStarted: "00:00",
            TimeFinished: "00:00",
         },

         // Main Data
         Data: {
            // Lesson Template
            Lesson00: {
               Lesson: [],
               Examples: [],
               Practice: [],
            },
         },
      }
   ],

   // ###########################
   // DATA STARTS HERE
   // ###########################
   CoreData: [
      {
         DataA01: [
            // Header Data
            {
               // TitleData
               RootTitle: ["The Present Tense"],
               ParentTitle: "The Present Tense of Regular -ar, -er, and -ir Verbs",
               ChildTitle: 'Subject Pronouns',
   
               // TimeSpaceData
               LocationInTime: [["April"], ["20th"], ["2022"]],
               PhysicalLocation: ["Laboure Office"],
               TimeStarted: "11:45",
               TimeFinished: "12:06",
            },
   
            // Main Data
            {


               // Lesson 0101 Pronouns and General Rules
               Lesson0101: {
                  Lesson: [
                     ['Verbs are presented in conjugation paradigms that summarize th forms of a verb in each tense. Spanish Verbs change their form for persona anad number. Verbs are said to have three persons: The speaker, the person spoken to, and the third person, referring to neighter the speaker nor the person spoken to. Spanish, like Englishs, has two numbers: singular and plural.']
                  ],
                  Examples: [
                     
                     // Subject Pronouns in English
                     {
                        Headers: [ ["Singular"], ["Plural"]],
                        FirstPer: [ ['I'], ['We'] ],
                        SecondPer: [ ['you'], ['you all'] ],
                        ThirdPer: [ ['he/she/it'], ['they']]
                     },

                     // Subject Pronouns in Spanish
                     {
                        Headers: [ ["Singular"], ["Plural"]],
                        FirstPer: [ ['Yo'], ['nosotros / nosotras'] ],
                        SecondPer: [ ['Tu'], ['vosotros/ vosotras'] ],
                        ThirdPer: [ ['el/ella'], ['ellos / ellas ']],
                     },
                  ],

                  Practice: [],
               },
            },
         ],

         DataA02: [
            // Header Data
            {
               // TitleData
               RootTitle: ["The Present Tense"],
               ParentTitle: "The differences between English and Spanish",
               ChildTitle: 'Subject Pronouns',
   
               // TimeSpaceData
               LocationInTime: [["April"], ["20th"], ["2022"]],
               PhysicalLocation: ["Laboure Office"],
               TimeStarted: "11:45",
               TimeFinished: "12:06",
            },
   
            // Main Data
            {


               // Lesson 0101 Pronouns and General Rules
               Lesson0101: {
                  Lesson: [

                     ["Section 01"]
                     ['In English, subject pronouns are required to show who the subject of the verb is, since verbs have only two forms in the rpesent tense. In spanish, however, verb forms are complete in themselves. Subject pronouns are added for emphasis or contrast.'],

                     // Examples
                     ["El", 'navega en la red y', "ella", 'manda correos electronicos'], 
                     ['El navega en la Red y ella manda correos electronicos'],

                     ["---------------------------------------"],

                     ["Section 02 - Forms of you"],
                     ['The four forms of tu in spanish are the following'], 
                     [
                        {
                           Tu: [{ type: 'singular form'}, {function: 'main form of tu'}],
                           vosotros: [{type: 'singular'}, {function: 'plural form of tu'}],
                           usted: [{ type: 'singular'}, { function: 'used for formal relationships'}],
                           ustedes: [{ type: 'plural'}, { function: 'plural form of usted'}],
                        },

                        {
                           Title: "Examples",
                           Sentence01: {
                              Spanish: "Usted puede esperar aqui, senor",
                              English: 'You can wait here, sir.',

                           }
                        }
                     ],

                     ["---------------------------------------"],

                  ],

                  // Examples
                  Examples: [
                     
                     // Subject Pronouns in English
                     {
                        Headers: [ ["Singular"], ["Plural"]],
                        FirstPer: [ ['I'], ['We'] ],
                        SecondPer: [ ['you'], ['you all'] ],
                        ThirdPer: [ ['he/she/it'], ['they']]
                     },

                     // Subject Pronouns in Spanish
                     {
                        Headers: [ ["Singular"], ["Plural"]],
                        FirstPer: [ ['Yo'], ['nosotros / nosotras'] ],
                        SecondPer: [ ['Tu'], ['vosotros/ vosotras'] ],
                        ThirdPer: [ ['el/ella'], ['ellos / ellas ']],
                     },
                  ],

                  Practice: [],
               },
            },



         ],
      },
   ],
}