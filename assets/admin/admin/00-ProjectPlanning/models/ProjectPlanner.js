class ProjectPlanner {
  constructor (inputUsername, inputPassword
  ) {
    this.inputUsername = inputUsername
    this.inputPassword = inputPassword
  
  
    this.Admin = [
      {
        username: [],
        password: [],
        usernameStatus: false,
        passwordStatus: false,
        creationLogBook: [],
      },
    ]
  
  }

  fxA00_printAdminStats = () => {
    console.log(this.Admin)
  }



}

const vonerikbarren = 'vonerikbarren'
const password123 = 'password123'

const newTestPlanner = new ProjectPlanner(vonerikbarren, password123)


newTestPlanner.fxA00_printAdminStats()


// class Fish {
//   constructor(type) {
//     this.type = type
//   }

//   fishTest = () => console.log(this.type)
// }

// const clownfish = new Fish('clownfish');

// clownfish.fishTest();