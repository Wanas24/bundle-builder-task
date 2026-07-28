# Getting Started

## Prerequisites

Make sure you have the following installed:

- Node.js (v18 or later recommended)
- npm

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

## Run the development server

Start the application:

```bash
npm run dev
```

If you're using Vite:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

## Build for production

To create a production build:

```bash
npm run build
```

## Preview the production build

After building, run:

```bash
npm run preview
```

Then open:

```
http://localhost:4173
```

## Project Structure

```
src/
├── assets/
├── components/
├── context/
├── data/
├── utils/
├── App.jsx
└── main.jsx
```

## Notes

- No environment variables are required.
- All product data is stored locally inside the project.
- Saved bundle data is stored in the browser using Local Storage.




# Notes

## Decisions

- Used **React Context** for state management since the project is relatively small and doesn't require Redux or another state management library.
- Product data is stored locally in static data files to keep the application simple and focused on the UI/UX requirements.
- Implemented reusable components (e.g. `QuantityStepper`, `ReviewItem`, `ProductCard`) to minimize duplication.
- Required products (such as the free hub) are configured directly inside the related product data using a `requiredProducts` array, making the solution scalable for future products.
-

## Tradeoffs

- Bundle data is persisted using **Local Storage** only after the user clicks **"Save my system for later"**, matching the expected behavior.
- Checkout is simulated with an alert since no backend or payment integration was part of the requirements.
- Product data is mocked locally instead of being fetched from an API.

## Additional Notes

- Made a few minor layout adjustments to the product cards to better align with the provided Figma design while preserving the intended functionality and user experience.
- These adjustments were purely presentational and did not affect the application logic or required features.