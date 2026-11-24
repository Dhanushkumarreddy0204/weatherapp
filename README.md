# 🌦️ SkyCast Weather App

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Weather API](https://img.shields.io/badge/Weather-WeatherAPI.com-4A90E2)
![License](https://img.shields.io/badge/license-TBD-lightgrey)
![Made with Love](https://img.shields.io/badge/made%20with-React%20%26%20☀️-ff69b4)

> A bright, playful weather experience that helps you check local conditions, explore forecast details, and enjoy weather-inspired ambience.

<p align="center">
  <img src="./public/favicon.ico" alt="SkyCast weather app icon" width="96">
</p>

---

## ✨ What You Can Do

- **Find weather anywhere** — Search by city, region, postcode, or coordinates.
- **Use your location** — The app automatically requests your current location on startup.
- **See key conditions** — Temperature, feels-like temperature, humidity, cloud cover, and daily minimum/maximum values.
- **Plan ahead** — View the current weather and a 3-day forecast.
- **Switch units** — Move between Celsius and Fahrenheit with one click.
- **Choose a language** — Available UI choices include English, Spanish, French, and Indonesian.
- **Change the mood** — Toggle dark mode and weather-themed background sounds.
- **Enjoy dynamic backgrounds** — The interface adapts its atmosphere and colors to the weather.

---

## 🖼️ Preview

Add screenshots of the app to this section when they are available:

```text
public/
  screenshot-home.png
  screenshot-dark-mode.png
  screenshot-forecast.png
```

```md
<img src="./public/screenshot-home.png" alt="SkyCast home screen" width="800">
```

---

## 🧰 Tech Stack

| Technology | Purpose |
| --- | --- |
| React 18 | Building the user interface |
| React Scripts | Development and production tooling |
| Axios | WeatherAPI HTTP requests |
| i18next | Internationalization |
| Moment.js | Date and time formatting |
| React Icons | Interface icons |
| React Player | Weather ambience audio |

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have:

- [Node.js](https://nodejs.org/) 14 or later
- npm
- A free [WeatherAPI.com](https://www.weatherapi.com/) API key

### 2. Clone the Project

```bash
git clone <your-repository-url>
cd weatherapp
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Add Your API Key

Create a `.env.local` file in the project root:

```env
REACT_APP_WEATHER_API_KEY=your_weatherapi_key_here
```

Keep API keys private. Never commit `.env.local` or add secrets to source control.

### 5. Start the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> Allow browser location access for automatic local weather detection.

---

## 📜 Useful Commands

| Command | What It Does |
| --- | --- |
| `npm start` | Runs the app in development mode |
| `npm test` | Starts the interactive test runner |
| `npm run build` | Creates an optimized production build |
| `npm run eject` | Ejects Create React App configuration — irreversible |

---

## 🌍 Supported Languages

The app includes translation resources for English, Spanish, French, and Indonesian.

Additional translation files are available in `src/languages/` for Tamil and Hindi. Developers can add these languages to the selector in `src/App.js`.

---

## 🔐 Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `REACT_APP_WEATHER_API_KEY` | Yes | API key used to query WeatherAPI.com |

For a deployed build, add the environment variable in the hosting provider's dashboard before running `npm run build`.

---

## 🗂️ Project Structure

```text
weatherapp/
├── public/                 # Static public assets
├── src/
│   ├── asset/              # Images and illustrations
│   ├── components/         # Weather UI components
│   ├── css/                # Component styles
│   ├── helpers/            # Unit conversion helpers
│   ├── languages/          # i18next setup and translations
│   ├── services/
│   │   └── weatherApi.js   # WeatherAPI integration
│   ├── App.js              # Main application
│   └── index.js            # React entry point
├── .env.local              # Local API key (create this file)
└── package.json
```

---

## 🧪 Testing

Run the test suite with:

```bash
npm test
```

Test coverage can be expanded to cover search handling, API responses, unit conversion, language switching, and weather state rendering.

---

## ☁️ Building for Production

```bash
npm run build
```

The optimized build is written to the `build/` folder and can be deployed to a static hosting provider such as Netlify, Vercel, GitHub Pages, or similar platforms.

---

## 🐛 Troubleshooting

### “Missing REACT_APP_WEATHER_API_KEY”

Confirm that:

- `.env.local` exists in the project root.
- The key is written as `REACT_APP_WEATHER_API_KEY=...`.
- The development server was restarted after the file was created.

### “Location Not Found”

Try searching for a nearby city or enter a postcode or latitude/longitude pair.

### Location is not detected automatically

Check browser permission settings and allow location access for `localhost`.

### The app will not start

Remove installed dependencies and reinstall them:

```bash
rm -rf node_modules
npm install
npm start
```

On Windows PowerShell, use:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
npm start
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a focused feature branch.
3. Make and test your changes.
4. Open a pull request with a clear description.

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting changes.

---

## 📄 License

A license has not been specified yet. Please add a license file if you want others to use, modify, or distribute this project.

---

<p align="center">
  <strong>Built for curious skies and clear forecasts. ☀️🌧️🌈</strong>
</p>
