// App Entry Point: Initializes the MVC flow when the web page is fully loaded

import { init } from './controller/bankController.js';

// Wait for the DOM contents to load before initializing our controller
document.addEventListener("DOMContentLoaded", () => {
    init();
});
