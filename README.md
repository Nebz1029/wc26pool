# WC 2026 Draft Pool Site

## Setup

1. **Drag this entire folder as a ZIP into Netlify** (or connect your repo)

2. **Set environment variable in Netlify:**
   - `API_FOOTBALL_KEY` = your API-Football key
   - Get a free key at: https://dashboard.api-football.com/register
   - The free tier includes 100 requests/day — enough for auto-refresh

3. **Update draft rosters** in `index.html` around line 45:
   Replace `ALL_48` snake draft order OR update `DRAFT_ROSTERS` object directly with real picks.
   Each team gets exactly 4 countries.

## Tabs
- **Scores** — Live matches, previous results, upcoming fixtures. Matchday 1 shown but NOT scored.
- **Standings** — 12 pool teams ranked by points. Click to expand country breakdown.
- **Power Rankings** — All 48 nations ranked by pool points with movement arrows + heat bars.
- **Golden Boot** — Top goalscorers with goals/assists.

## Scoring System
| Event | Points |
|---|---|
| Goal scored | +1.5 |
| Goal conceded | -0.75 |
| Clean sheet | +2 |
| Win | +3 |
| Draw | +1 |
| Hat trick | +5 |
| Red card | -1 |
| 1st in group | +6 |
| 2nd in group | +4 |
| 3rd (advances) | +2 |
| Round of 16 | +6 |
| Quarterfinal | +9 |
| Semifinal | +9 |
| 3rd Place Win / Reach Final | +12 |
| Win World Cup | +20 (flat bonus) |

**Tiebreaker:** Most combined goals scored by pool player's countries.
**Pool scoring starts:** After all 48 teams play Matchday 1 (June 19, 2026).

## API Note
Group finish bonuses (1st/2nd/3rd) and knockout round bonuses (R16/QF/SF/Final/Champion)
are added automatically by the scoring engine once standings are determined.
The site reads these from the API standings endpoint.
