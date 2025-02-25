# JSONPlaceholder Posts App

A responsive web application built with React and Bootstrap that fetches and displays data from the JSONPlaceholder API. This project features search/filter functionality, pagination, and performance optimizations.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [License](#license)

## Features

- **Data Fetching:** Retrieves posts data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
- **Responsive UI:** Uses Bootstrap’s grid system for a mobile-friendly layout.
- **Search/Filter:** Allows users to filter posts by title.
- **Pagination:** Implements pagination to manage large datasets.
- **Performance Enhancements:** Includes debouncing for the search input and memoization for filtered data.
- **Accessibility:** Incorporates ARIA labels and semantic HTML for better accessibility.

## Technologies

- **React** – Front-end library for building the user interface.
- **Axios** – For making API requests.
- **Bootstrap** – For styling and responsiveness.
- **Lodash.debounce** – For debouncing search input.

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher)
