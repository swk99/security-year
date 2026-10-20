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
