class Studying_Blender_ResourcesList {
  constructor() {
    this.Storage = {
      Core_OnlineResource_List: [

        // Template
        [
          {
            Title: "",
            URL: 'helloworld.com',
            videoProject_Started: false,
            videoProject_Finished: false,
            videoProject_FinishedTimeData: [],
          },
        ],

        [
          {
            Title: "A1_HowToModel_GeometricallyCorrect_Gears"
            URL: 'https://www.youtube.com/watch?v=DqBOva04lcE&ab_channel=O.T.Vinta',
            videoProject_Started: false,
            videoProject_Finished: false,
            videoProject_FinishedTimeData: [],
          },
        ],


        [
          {
            Title: "B1_Modeling_a_SteamPunk_Gear",
            URL: 'https://www.youtube.com/watch?v=AYCjFs3a-Bs&ab_channel=zerobio',
            videoProject_Started: false,
            videoProject_Finished: false,
            videoProject_FinishedTimeData: [],
          },
        ],

        [
          {
            Title: "B2_Modeling_a_SimpleGear",
            URL: 'https://www.youtube.com/watch?v=VCgPgds3EoQ&ab_channel=TwentyOneGames',
            videoProject_Started: false,
            videoProject_Finished: false,
            videoProject_FinishedTimeData: [],
          },
        ],

        [
          {
            Title: "B2_Modeling_a_SimpleGear",
            URL: 'https://www.youtube.com/watch?v=VCgPgds3EoQ&ab_channel=TwentyOneGames',
            videoProject_Started: false,
            videoProject_Finished: false,
            videoProject_FinishedTimeData: [],
          },
        ],


        [
          {
            Title: "B3_Howtomake_a_gear_in_Blender2_0",
            URL: 'https://www.youtube.com/watch?v=u0HmiUTWpNU',
            videoProject_Started: false,
            videoProject_Finished: false,
            videoProject_FinishedTimeData: [],
          },
        ],


        [
          {
            Title: "B4_Modeling_and_Driving_Gears_of_Dif_Sizes",
            URL: 'https://www.youtube.com/watch?v=qrjXJnUfyGk',
            videoProject_Started: false,
            videoProject_Finished: false,
            videoProject_FinishedTimeData: [],
          },
        ],

        
      ],
    },
  },

  fxA00_printStorage = () => {
    console.log(this.Storage.Core_OnlineResource_List)
  }
}


const test01 = new Studying_Blender_ResourcesList()

test01.fxA00_printStorage();
