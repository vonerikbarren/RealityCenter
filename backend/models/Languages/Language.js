class Language {
   constructor(type, purpose) {
      this.type = type
      this.purpose = []
      this.storage = [
         {
            LanguageType: [],
         },

         {
            LanguageAdmin: [],
         },

         {
            LanguageDatabase: [],
         }
      ]
   }

   // Basic Print Functions

   fxA00_printType = () => {
      console.log(this.type)
   }

   fxA01_printPurpose = () => {
      console.log(this.purpose)
   }

   fxA02_printStorage = () => {
      console.log(this.storage)
   }


   // Init Functions
   fxB01_LanugageTypeInit = (LangType, Parent, Child) => {
      LangType = new LangType(Parent, Child)

   }
}


class LanguageType {
   constructor(SectionParent, SectionChild) {
      this.SectionParent = SectionParent
      this.SectionChild = SectionChild
   }
}


class LanguageAdmin {
   constructor(username, password) {
      this.username = username
      this.password = password
   }
}


class LanguageDatabase {
   constructor(databaseName, databaseOverview) {
      this.databaseName = databaseName
      this.databaseOverview = databaseOverview
      this.database = []
   }

   fxA00_printDatabase = () => {
      console.log(this.database)
   }

   fxA01_addToDatabase = (LanguageType, Data) => {

      let data = {
         LanguageTitle: String,
         LanguageOverview: String,
         LanguageData: Object
      }

      if (LanguageType === 'ancient') {
         this.storage.push(data)
      } else if (LanguageType === 'stem') {
         this.storage.push(data)
      } else if (LanguageType === 'nationality') {
         this.storage.push(data)
      } else {
         console.log(Error)
      }

      return data
   }
}