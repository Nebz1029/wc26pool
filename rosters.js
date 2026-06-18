// rosters.js — PLACEHOLDER DRAFT ASSIGNMENTS
// Replace with real draft results tonight.
// 48 countries distributed across 12 pool teams (4 each).
// Countries are assigned in rough snake-draft value order for placeholder purposes.

const ROSTERS = {
  "Team Chuck":      ["Brazil", "Netherlands", "England", "Algeria"],
  "Team Phil":       ["France", "Portugal", "Norway", "New Zealand"],
  "Team Tomas":      ["Spain", "Germany", "Colombia", "Panama"],
  "Team Jonah":      ["Argentina", "Belgium", "Senegal", "Haiti"],
  "Team Zack":       ["USA", "Croatia", "Japan", "Ecuador"],
  "Team Michael":    ["Mexico", "Uruguay", "Sweden", "Uzbekistan"],
  "Team Nebeyu":     ["Morocco", "Switzerland", "Ivory Coast", "Jordan"],
  "Team Trice":      ["Canada", "Austria", "Ghana", "Curaçao"],
  "Team Cepehr":     ["South Korea", "Australia", "DR Congo", "Iraq"],
  "Team Jama":       ["Portugal", "Tunisia", "Scotland", "South Africa"],
  "Team Hutch":      ["Netherlands", "Saudi Arabia", "Czechia", "Qatar"],
  "Team MangoDuggie":["Bosnia and Herzegovina", "Egypt", "Iran", "Paraguay"],
};

// Fix duplicate Portugal/Netherlands above for real placeholders:
// Using a clean 48-team snake distribution:
const ALL_48 = [
  // Group A
  "Mexico","South Africa","South Korea","Czechia",
  // Group B
  "Canada","Bosnia and Herzegovina","Qatar","Switzerland",
  // Group C
  "Brazil","Morocco","Haiti","Scotland",
  // Group D
  "USA","Paraguay","Australia","Turkey",
  // Group E
  "Germany","Curacao","Ivory Coast","Ecuador",
  // Group F
  "Netherlands","Japan","Sweden","Tunisia",
  // Group G
  "Belgium","Egypt","Iran","New Zealand",
  // Group H
  "Spain","Cape Verde","Saudi Arabia","Uruguay",
  // Group I
  "France","Senegal","Iraq","Norway",
  // Group J
  "Argentina","Algeria","Austria","Jordan",
  // Group K
  "Portugal","DR Congo","Uzbekistan","Colombia",
  // Group L
  "England","Croatia","Ghana","Panama",
];

// Snake draft order: picks 1-48 assigned to pool teams
// Round 1 (1-12): Chuck Phil Tomas Jonah Zack Michael Nebeyu Trice Cepehr Jama Hutch MangoDuggie
// Round 2 (13-24): MangoDuggie Hutch Jama Cepehr Trice Nebeyu Michael Zack Jonah Tomas Phil Chuck
// Round 3 (25-36): Chuck Phil Tomas Jonah Zack Michael Nebeyu Trice Cepehr Jama Hutch MangoDuggie
// Round 4 (37-48): MangoDuggie Hutch Jama Cepehr Trice Nebeyu Michael Zack Jonah Tomas Phil Chuck

const TEAM_NAMES = [
  "Team Chuck","Team Phil","Team Tomas","Team Jonah","Team Zack","Team Michael",
  "Team Nebeyu","Team Trice","Team Cepehr","Team Jama","Team Hutch","Team MangoDuggie"
];

function buildSnakeDraft(teams, countries) {
  const rosters = {};
  teams.forEach(t => rosters[t] = []);
  const order = [];
  for (let round = 0; round < 4; round++) {
    if (round % 2 === 0) order.push(...teams);
    else order.push(...[...teams].reverse());
  }
  order.forEach((team, i) => rosters[team].push(countries[i]));
  return rosters;
}

const DRAFT_ROSTERS = buildSnakeDraft(TEAM_NAMES, ALL_48);

// ISO 2-letter codes for flag emojis
const FLAG_CODES = {
  "Mexico":"MX","South Africa":"ZA","South Korea":"KR","Czechia":"CZ",
  "Canada":"CA","Bosnia and Herzegovina":"BA","Qatar":"QA","Switzerland":"CH",
  "Brazil":"BR","Morocco":"MA","Haiti":"HT","Scotland":"GB-SCT",
  "USA":"US","Paraguay":"PY","Australia":"AU","Turkey":"TR",
  "Germany":"DE","Curacao":"CW","Ivory Coast":"CI","Ecuador":"EC",
  "Netherlands":"NL","Japan":"JP","Sweden":"SE","Tunisia":"TN",
  "Belgium":"BE","Egypt":"EG","Iran":"IR","New Zealand":"NZ",
  "Spain":"ES","Cape Verde":"CV","Saudi Arabia":"SA","Uruguay":"UY",
  "France":"FR","Senegal":"SN","Iraq":"IQ","Norway":"NO",
  "Argentina":"AR","Algeria":"DZ","Austria":"AT","Jordan":"JO",
  "Portugal":"PT","DR Congo":"CD","Uzbekistan":"UZ","Colombia":"CO",
  "England":"GB-ENG","Croatia":"HR","Ghana":"GH","Panama":"PA",
};

if (typeof module !== "undefined") {
  module.exports = { DRAFT_ROSTERS, ALL_48, TEAM_NAMES, FLAG_CODES };
}
