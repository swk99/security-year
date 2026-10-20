# SECURITY / 12

Korean-language DevSecOps strategy game written in TypeScript. Manage security from January through December, invest a limited budget, and learn from each decision.

## Features
- Twelve scenario-based monthly turns
- Persistent controls with three maturity levels
- Budget carryover and annual score totals
- Learning explanations and comparison with each month's optimal selection
- Browser-local autosave and responsive layout

## Run locally
Requires Node.js 24. No npm dependencies are needed.

```sh
npm test
npm run build
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080.

## GitHub Pages
In Settings → Pages, select GitHub Actions as the build source. The workflow tests, builds, and deploys dist on every push to main.

## Learning material
Concepts are adapted from DevOps Shack's 500 DevSecOps Interview Q&A. The original PDF is not redistributed. In-game Q references point to the source. Scenarios, costs, and scores are illustrative, not real-world effectiveness estimates.

Progress is stored in localStorage on the current browser and origin. A new domain does not inherit previous saves.


## Koalina’s Security Club

- 12 monthly stories with Koalina, an original SVG koala teammate.
- 48 bilingual missions: single choice, multiple selection, sequencing and true/false.
- Four weekly missions per month, explanations after every submission, and a review journal.
- First submissions award 20 XP for correct answers or 5 learning XP otherwise; answers are locked to prevent duplicate rewards. Maximum 960 XP, separate from strategy scores.
- Future chapters unlock as the strategy campaign advances. Quizzes are optional and do not alter the original simulation budget or scores.
- Quiz records use `security12-koalina-v1`; existing strategy progress is preserved. Restart clears both.
- `npm test` checks the strategy engine and all 48 missions, rewards, reset, and bilingual state retention.
