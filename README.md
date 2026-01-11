# Matrix Calculator

A modern web-based matrix calculator built with React, TypeScript, and Vite.

## Features

This project was extended to implement a small matrix-calculation feature-set inspired by an older VB.NET desktop app. Key changes:

- **Dynamic Matrix Input**: Interactive matrix input screen with adjustable dimensions
- **Flexible Grid System**: Add or remove rows and columns dynamically (1x1 to 4x4 matrices)

- Introduced a reusable **MatrixGrid** component
- Updated the feature entry point to manage two independent matrices (A and B) and a result matrix C, with:
  - Add / Subtract / Multiply operations
  - Validation to block operations when cells are empty or dimensions are incompatible
  - Editable result grid, with Clear and Copy→A / Copy→B actions

## Current behavior & constraints

- Dimension limits follow the project types (default MAX_DIMENSION = 4).
- Operations validate dimension compatibility:
  - Add/Subtract require identical dimensions
  - Multiply requires A.columns === B.rows
- Empty cells prevent operations and show a clear error message.

## How to run

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Build for production: `npm run build`

## Next steps / suggestions

- Add unit tests for matrixUtils (recommended)
- Improve numeric parsing/validation UX (e.g., inline validation messages)
- Add persistence/export for results (CSV / JSON)

## Tech Stack

- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React**

## Author

[Jobearry](https://github.com/jobearry) © 2026
