# Genggam Makna Client

[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black?logo=next.js&logoColor=white)](https://nextjs.org/) [![Next UI](https://img.shields.io/badge/Next%20UI-2.4.8-blue?logo=react&logoColor=white)](https://nextui.org/) [![Aceternity UI](https://img.shields.io/badge/Aceternity-UI-purple)](https://github.com/Aceternity/ui) [![License](https://img.shields.io/badge/license-MIT-green)](LICENSE) [![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#)


**Genggam Makna** is an AI-powered platform that translates SIBI (Indonesian Sign Language) hand signs into the alphabet. This repository contains the frontend client built with **Next.js 14**, **Next UI**, and **Aceternity UI**.

## Table of Contents

- [Genggam Makna Client](#genggam-makna-client)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
    - [Steps to Contribute](#steps-to-contribute)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)
  - [Contact](#contact)

---

## Features

- SIBI hand sign language transaltion into alphabet.
- User-friendly interface powered by **Next UI** and **Aceternity UI**.
- Optimized performance with **Next.js 14** App Router.
- Modular and scalable code structure.

---

## Technologies Used

- [Next.js 14](https://nextjs.org/): React framework for server-side rendering and static web applications.
- [Next UI](https://nextui.org/): Modern and accessible UI components for React.
- [Aceternity UI](https://github.com/Aceternity/ui): A custom UI library for design consistency and component modularity.

---

## Getting Started

### Prerequisites

- **Node.js** (v18.x or later recommended)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ramadiaz/genggam-makna-client.git
   cd genggam-makna-client
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## Project Structure

```plaintext
genggam-makna-client/
📦src
 ┣ 📂app
 ┃ ┣ 📂about
 ┃ ┃ ┗ 📜page.jsx
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┗ 📜page.jsx
 ┃ ┃ ┗ 📂register
 ┃ ┃ ┃ ┗ 📜page.jsx
 ┃ ┣ 📂predict
 ┃ ┃ ┗ 📜page.jsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.jsx
 ┃ ┣ 📜page.jsx
 ┃ ┗ 📜providers.jsx
 ┣ 📂components
 ┃ ┣ 📂HeroBeamsBackground
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂HeroGradientBackground
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂HeroGrid
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂HeroVortex
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂LogInContainer
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂Navbar
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂SignUpContainer
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┗ 📂ui
 ┃ ┃ ┣ 📜background-beams.jsx
 ┃ ┃ ┣ 📜background-gradient-animation.jsx
 ┃ ┃ ┣ 📜file-upload.jsx
 ┃ ┃ ┣ 📜hero-highlight.jsx
 ┃ ┃ ┣ 📜hover-border-gradient.jsx
 ┃ ┃ ┣ 📜input.jsx
 ┃ ┃ ┣ 📜label.jsx
 ┃ ┃ ┣ 📜layout-grid.jsx
 ┃ ┃ ┣ 📜moving-border.jsx
 ┃ ┃ ┣ 📜multi-step-loader.jsx
 ┃ ┃ ┣ 📜tabs.jsx
 ┃ ┃ ┗ 📜vortex.jsx
 ┣ 📂lib
 ┃ ┗ 📜utils.jsx
 ┗ 📂utilities
 ┃ ┣ 📜environment.js
 ┃ ┣ 📜fetchWithAuth.js
 ┃ ┗ 📜getUserData.js
```

---

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Acknowledgments

- Special thanks to the developers of **Next.js**, **Next UI**, and **Aceternity UI** for their amazing tools.
- Inspired by the vision of bridging communication gaps with technology.

---

## Contact

For further questions or contributions, please contact:
- **Name**: Rama Diaz
- **Website**: [xann.my.id](https://xann.my.id)
- **Email**: ramadiaz221@gmail.com