
# Lotto Winning Checker - Blueprint

## Overview

This document outlines the plan for creating a visually appealing and interactive Lotto Winning Checker web application. The application will allow users to enter their lottery numbers and check them against a set of randomly generated winning numbers.

## Project Outline

### Style and Design
*   **Layout:** A clean, centered layout that is mobile-responsive.
*   **Color Palette:** A vibrant and energetic color scheme will be used.
*   **Typography:** Expressive and readable fonts will be chosen to create a clear visual hierarchy.
*   **Visual Effects:**
    *   **Texture:** A subtle noise texture will be applied to the background.
    *   **Shadows:** Multi-layered drop shadows will be used to create a sense of depth for the main container and interactive elements.
    *   **Glow Effect:** Interactive elements like the button will have a shadow and color combination that creates a "glow" effect.
*   **Iconography:** Icons might be used to enhance understanding if needed.

### Features
*   **User Input:** Allow users to input their 6 lottery numbers.
*   **Winning Number Generation:** Generate 6 unique random winning numbers between 1 and 45.
*   **Comparison:** Compare the user's numbers with the winning numbers.
*   **Result Display:** Display the winning numbers, the number of matches, and a message indicating the result.
*   **Highlighting:** Highlight the matching numbers in the user's input.

## Current Task: Convert to Winning Checker

1.  **HTML (`index.html`):**
    *   Change the title and heading to "Lotto Winning Checker".
    *   Add 6 input fields for the user to enter their numbers.
    *   Change the button text to "Check Winning Numbers".
    *   Add elements to display the winning numbers and the result.
2.  **CSS (`style.css`):**
    *   Add styling for the input fields.
    *   Style the results area.
    *   Create a class to highlight matched numbers.
3.  **JavaScript (`main.js`):**
    *   Implement logic to get user input.
    *   Generate winning numbers.
    *   Compare the number sets.
    *   Update the DOM to show the winning numbers, the user's numbers with matches highlighted, and the final result message.
