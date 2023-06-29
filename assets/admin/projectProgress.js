const projectProgress = {

   Admin: {
      "This file was created so that I can just leave notes to myself as I build. This is something that can definitely help us as we go down our developer road. Write here as time passeth."

      PortfolioDesired_FinishDate: ["Tue", '03-28-22'],
      PortfolioActual_FinishDate: ["", ''],
   },


   // Templates
   logTemplate: {

      Entry00: {
         Header: {
            Level: ["Goal", 'Objective', 'task'],
            Title: "",
            EntryDate: '',
            TimeExpectedStart: '',
            TimeExpectedFinish: '',
            TimeActualStart: '',
            TimeActualFinish: '',
            NumOfCommits: Number,
         },
   
         Data: {
            Chapter00: [
               "",
               '',

               // Chapter Commits
               {
                  CommitNum: Number,
                  CommitID: 'commit_date',
                  CommitMessage: '',
               },

            ],
         },
      },

   },



   // LogBook

   PortfolioLogBook: {

      // Open Entry
      // ##########################################################################
      Entry01A: {
         Header: {
            Level: ["Goal", 'Objective', 'task'],
            Title: "Church Office Opening Progress Log",
            EntryDate: '08-18-22',

            // Opening Expected time
            TimeExpectedStart: '',
            TimeExpectedFinish: '',
            NumOfCommits: Number,
         },
   
         Data: {
            Chapter00: [
               "",
               '',

               // Chapter Commits
               {
                  CommitNum: Number,
                  CommitID: 'commit_date',
                  CommitMessage: '',
               },

            ],
         },
      },


      // Closing Entry
      Entry01Z: {
         Header: {
            Level: ["Goal", 'Objective', 'task'],
            Title: "Church Office Opening Progress Log",
            EntryDate: '08-18-22',

            TimeActualStart: '',
            TimeActualFinish: '',
            NumOfCommits: Number,
         },
   
         Data: {
            Chapter00: [
               "",
               '',

               // Chapter Commits
               {
                  CommitNum: Number,
                  CommitID: 'commit_date',
                  CommitMessage: '',
               },

            ],
         },
      },
      // ##########################################################################
   }


}