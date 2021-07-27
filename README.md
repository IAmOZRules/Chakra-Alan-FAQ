# Chakra-Alan-FAQ

[![Netlify Status](https://api.netlify.com/api/v1/badges/65476322-7e86-4e83-ab93-844acbed0cc6/deploy-status)](https://app.netlify.com/sites/chakra-alan-faq/deploys)

A basic FAQ bot built to test React's [ChakraUI](https://chakra-ui.com/) Library and [Alan.AI](alan.app).

### Find a hosted version of this app [HERE](https://chakra-alan-faq.netlify.app/).

## How to use this app:
- Click on the Voice Assistant button, and read aloud any FAQ question.
- Say "Toggle color mode" to automatically toggle the theme.

## Running this app on your machine:
1. Make sure you have [Node.js](https://nodejs.org/en/) installed!
2. Run ```npm i``` to install all dependencies.
3. Generate your API Token from [alan.app](alan.app).
4. Create an empty project, and inside the project, create two scripts ```faq_bot``` and ```color_mode```.
5. Copy paste the contents of [alan_faq.txt](https://github.com/IAmOZRules/Chakra-Alan-FAQ/blob/main/color_mode.txt) in the ```faq_bot```, and [color_mode.txt](https://github.com/IAmOZRules/Chakra-Alan-FAQ/blob/main/alan_faq.txt) in the ```color_mode``` scripts.
6. Create a ```.env``` file, and inside the file, put the Alan API Token in the format ```REACT_APP_API_TOKEN=<your-api-token-here>```
7. Run ```npm start``` or ```yarn start``` to run the app.
