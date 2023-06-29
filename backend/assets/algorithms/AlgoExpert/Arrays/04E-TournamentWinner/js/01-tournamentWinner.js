// Copyright 2022 ALgoExpert LLC. All rights reserved.
//
// Header 
const logDivider = "------------------------------"
const Title01 = "|- # Time Complexity Results:";
const algoTime = "|- Time = O(n) // n = num of competitions"
const algoSpace = "|- Space = O(k) // = num of teams"
const TimeSpaceComplexity = Title01 + "\n" + algoTime + "\n" + algoSpace + "\n" + logDivider

// Code Below:
const HOME_TEAM_WON = 1;
const tournamentWinner = (competitions, results) => {
  let currentBestTeam = '';
  const scores = {[currentBestTeam] : 0};

  for (let idx = 0; idx < competitions.length; idx++) {
    const result = results[idx];
    const [homeTeam, awayTeam] = competitions[idx];
    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}

const updateScores = (team, points, scores) => {
  if (!(team in scores)) scores[team] = 0;
  scores[team] += points;
}




// Automatic Log Info
console.log(TimeSpaceComplexity)
console.log("|- Algorithm results: ")

// Export
module.exports = tournamentWinner;