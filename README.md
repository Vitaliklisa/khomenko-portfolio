# Vitalii Khomenko — Portfolio

The Next.js portfolio for [khomenko.de](https://khomenko.de), featuring
projects hosted at:

- [Date Dawn](https://datedawn.khomenko.de)
- [TWRXA](https://twrxa.khomenko.de)
- [BiteBrigade](https://bitebrigade.khomenko.de/)

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

The portfolio build does not require the optional chatbot/database credentials.

## Deploy

Import the repository into Vercel with the Next.js framework preset, then add
`khomenko.de` under the project’s Domains settings. Vercel will show the DNS
records required for the domain. Firebase is not needed to host this portfolio.
