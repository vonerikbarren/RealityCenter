// 経験 = Keiken = Experience
// 最大の経験 = Saidai no keiken = Max Experience
// 増加する = Zōka suru = increase

// 少し勉強する = Sukoshi benkyō suru = study a little
// たくさん勉強する = Takusan benkyō suru = study a lot
// 一晩中勉強する = Hitobanjū benkyō suru = studying all night

// 少し勉強します = Sukoshi benkyō shimasu 
// = I am going to study for a little bit.

//私は1時間勉強するつもりです
// = Watashi wa 1-jikan benkyō suru tsumoridesu
// = I am going to study for an hour.

// 今夜は一晩中勉強します
// = Kon'ya wa hitobanjū benkyō shimasu.
// = I am going to study all night tonight.

// 記録的な経験 = Kiroku-tekina keiken = record experience



class 人 {
  constructor(経験, 最大の経験 = 300) {
    this.経験 = 0;
    this.最大の経験 = 最大の経験;
  }

  少し勉強する(増加する = 15) {
    console.log("少し勉強します");
    this.経験 = Math.min(this.経験 + 増加する, this.最大の経験);
    this.記録的な経験();
  }

  たくさん勉強する(増加する = 30) {
    console.log('私は1時間勉強するつもりです');
    this.経験 = Math.min(this.経験 + 増加する, this.最大の経験);
    this.記録的な経験();
  }

  一晩中勉強する(増加する = 75) {
    console.log('今夜は一晩中勉強します');
    this.経験 = Math.min(this.経験 + 増加する, this.最大の経験);
    this.記録的な経験();
  }

  記録的な経験() {
    console.log(`私の現在の経験は ${this.経験} です`);
  }


}


var 学生 = new 人();

学生.記録的な経験();
学生.少し勉強する();
学生.たくさん勉強する();
学生.一晩中勉強する();