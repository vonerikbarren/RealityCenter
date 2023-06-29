# Japanese Text Book Genki Chapter 0 

Here we are attempting to create data objects and serve them into Oliver for testing knowledge as well as testing of the Oliver AI application as well. This will be kind of challenging but the goal is to pass the object into the prompts response for validation. From there we can create a quiz and or an exam. I think we should just stick to the .md files for notes and organize our thoughts first before entering the data into an object to use for Oliver prompt testing.


# Vocab Test

The first thing we are going to test is just a basic vocabulary test into Oliver. we will create the data object here then C&P into VocabTest.js, from there we will import it into LearnAndEarn.js and just play around with it until we get it working. Put Status Report into a markdown file closer to the index location of LearnAndEarn.js.

``` js

const Countries = {
  USA: "アメリカ合衆国",
  Britain: ["英国","いぎりす","Igirisu"],
  Australia: ["オーストラリア", "Ōsutoraria"],
  Korea: ["韓国","かんこく", "Kankoku"],
  Sweden: ["スウェーデン", "Suu~ēden"],
  China: ["中国語", "ちゆうごくご","Chūgokugo"]
}



```