# Cart System Using JavaScript DOM

A beginner-friendly **JavaScript DOM cart system** built with HTML, CSS, and vanilla JavaScript. This project shows how product data can be created, displayed, updated, deleted, and stored in the browser using `localStorage`.

## Live Demo

GitHub Pages: [https://sayedrisat.github.io/Cart-System-JSDom/](https://sayedrisat.github.io/Cart-System-JSDom/)

## Repository

GitHub: [https://github.com/sayedrisat/Cart-System-JSDom](https://github.com/sayedrisat/Cart-System-JSDom)

## Project Overview

This project is a simple cart/product management system. A user can click the **Create Cart** button, enter product details, and generate a product card dynamically. The product list is managed with JavaScript and saved in browser storage, so the data stays available after refreshing the page.

## Features

- Create a product card with product name, price, and image URL
- Display all products dynamically in the cart section
- Edit existing product details
- Delete products from the cart
- Store product data in browser `localStorage`
- Load saved products automatically when the page opens
- Validate empty form fields before creating a product
- Popup form open and close functionality
- Product card UI with image, details, and action buttons

## JavaScript DOM Work Used

- `document.querySelector()` to select HTML elements
- `addEventListener()` for button clicks and form submission
- `preventDefault()` to stop default form reload behavior
- `innerHTML` to render product cards dynamically
- Template literals to generate card markup with product data
- `style.display` to show and hide the popup form
- `form.reset()` to clear input fields after submission
- Inline button actions for edit and delete operations

## JavaScript Logic Used

- Array of product objects to manage cart data
- `JSON.parse()` to read saved data from `localStorage`
- `JSON.stringify()` to save product data in `localStorage`
- `forEach()` to loop through products and render cards
- `find()` to get the selected product for editing
- `findIndex()` to find the product position in the array
- `splice()` to remove a product from the array
- Conditional logic to handle create mode and update mode

## How The App Works

1. The app loads saved products from `localStorage`.
2. The `Ui()` function renders every product inside the `.cardsbox` container.
3. Clicking **Create Cart** opens the popup form.
4. Submitting the form creates a product object with name, price, and image.
5. Product data is pushed into the array or updated if edit mode is active.
6. The updated array is saved again in `localStorage`.
7. Edit and delete buttons update the product list and refresh the UI.

## Tech Stack

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- LocalStorage

## Folder Structure

```text
Cart-System-JSDom/
|-- index.html
|-- style.css
|-- script.js
|-- README.md
`-- LINKEDIN_POST.md
```

## How To Run Locally

```bash
git clone https://github.com/sayedrisat/Cart-System-JSDom.git
cd Cart-System-JSDom
```

Then open `index.html` in any browser.

## Repository SEO Keywords

JavaScript Cart System, DOM Manipulation Project, JavaScript CRUD App, LocalStorage Project, Shopping Cart JavaScript, Vanilla JavaScript Project, HTML CSS JavaScript Project, Beginner Frontend Project, Product Card CRUD, Browser Storage App.

## Author

**Sayed Risat**  
GitHub: [@sayedrisat](https://github.com/sayedrisat)
