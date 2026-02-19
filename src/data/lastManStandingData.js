export const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeSe2d11R1D9cL4oi-VzWrhdUt_8n7yBai-l6-PpRMQbdNkyw/viewform?usp=header";

export const ALADDIN_PAYMENT_URL = "https://www.aladdin.ie/p/5552535895015424";

export const rounds = [
  { title: "Round 1", dates: "Jan 24th / 25th", fixtures: ["Dublin v Donegal", "Galway v Mayo", "Kerry v Roscommon", "Monaghan v Armagh", "Meath v Derry", "Tyrone v Kildare", "Cork v Cavan", "Offaly v Louth"] },
  { title: "Round 2", dates: "Jan 31st / Feb 1st", fixtures: ["Armagh v Galway", "Donegal v Kerry", "Mayo v Dublin", "Roscommon v Monaghan", "Kildare v Offaly", "Derry v Tyrone", "Louth v Cork", "Cavan v Meath"] },
  { title: "Round 3", dates: "Feb 14th / 15th", fixtures: ["Kerry v Galway", "Dublin v Monaghan", "Donegal v Mayo", "Roscommon v Armagh", "Meath v Louth", "Kildare v Derry", "Offaly v Cork", "Tyrone v Cavan"] },
  { title: "Round 4", dates: "Feb 21st / 22nd", fixtures: ["Dublin v Kerry", "Galway v Roscommon", "Monaghan v Mayo", "Armagh v Donegal", "Derry v Offaly", "Cork v Meath", "Louth v Tyrone", "Cavan v Kildare"] },
  { title: "Round 5", dates: "Feb 28th / Mar 1st", fixtures: ["Kerry v Monaghan", "Mayo v Armagh", "Donegal v Galway", "Roscommon v Dublin", "Cavan v Louth", "Tyrone v Offaly", "Kildare v Meath", "Derry v Cork"] },
  { title: "Round 6", dates: "Mar 14th / 15th", fixtures: ["Kerry v Mayo", "Dublin v Armagh", "Roscommon v Donegal", "Monaghan v Galway", "Cork v Kildare", "Meath v Tyrone", "Louth v Derry", "Offaly v Cavan"] },
  { title: "Round 7", dates: "Mar 22nd", fixtures: ["Armagh v Kerry", "Galway v Dublin", "Mayo v Roscommon", "Monaghan v Donegal", "Derry v Cavan", "Kildare v Louth", "Offaly v Meath", "Tyrone v Cork"] },
];

export const ruleItems = [
  "Each week, pick one team playing that week to win. If your team wins, you go through.",
  "If your selected team loses or draws, you are out.",
  "You cannot pick the same team more than once.",
  "If your selected match is postponed, you go through to the next round.",
  "If multiple participants remain at the end, the highest accumulated 'scored for' total wins.",
  "If scores are level, there will be joint winners.",
];
