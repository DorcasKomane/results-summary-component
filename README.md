# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](https://i.ibb.co/rsmXKZK/results-summary-component-desktop.png)

### Links

- Solution URL: [https://github.com/DorcasKomane/results-summary-component](https://github.com/DorcasKomane/results-summary-component)
- Live Site URL: [https://frontendmentor-results-component.netlify.app/](https://frontendmentor-results-component.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- JavaScript

### What I learned
- Using CSS Grid to implement a mobile-first approach.
- Structuring content in a way that would make it easy to style sections independent of the containing divs.
- Centering a div using position: absolute;

```css
.center {
  display: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

- Working with a JSON file to retrieve data and display it dynamically on the page, following a specific structure.
- Using fetch() to retrieve data from a JSON file.
- Using Async / Await concept with fetch().
- Creating and styling HTML elements using JavaScript.
- How to loop through an array of objects and display the corresponding data in different divs. Also applying different color and background to each object
  
```js
for(let i = 0; i < data.length; i++){
        const summaryItemDiv = document.createElement('div');
        summaryItemDiv.classList.add('summary-item');
        summaryItemDiv.style.background = `${data[i].background}`;
        rightContainer.appendChild(summaryItemDiv);
}
```

### Continued development

- More practice working with JSON files to retrieve data and display in the browser.
- Working with data that needs to be displayed dynamically.
- Recreating a given design in the browser.
- Async / Await concept

  
### Useful resources

- [2 Column Layouts (Responsinve Flexbox & CSS Grid) by Matthew James Taylor](https://matthewjamestaylor.com/2-column-layouts) - This helped me use the grid in a mobile-first approach.

## Author

- Website - [Dorcas Komane](https://dorcas-portfolio-site.netlify.app/)
- Frontend Mentor - [@DorcasKomane](https://www.frontendmentor.io/profile/DorcasKomane)
- Twitter - [@DorcasInTech](https://www.twitter.com/DorcasInTech)
