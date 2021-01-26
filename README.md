# CELBITS Website Development — Recruitment Task
**Built by @psrth, 20th January 2021**  

[![Netlify Status](https://api.netlify.com/api/v1/badges/3298bc28-6897-4163-ac89-c782a8d8fd66/deploy-status)](https://app.netlify.com/sites/celbits-pilani-psrth/deploys)  

## Running the project locally
This website is built entirely from scratch with custom CSS using **React JS**, using the `styled-components` and `react-scroll` libraries for more customisable UI. This website is deployed using Netlify here: [CELBITS Pilani — @psrth](https://celbits-pilani-psrth.netlify.app/)  

Alternatively, to run this project on your machine locally, follow these steps:  

### clone this repository
find an empty directory on your machine, and `git clone https://github.com/psrth/celbits-website.git`  

### install dependencies
`npm i` or `npm install` (if you use yarn we can't be friends)  

### deploy on localhost
`npm start` to open the project on a localhost deployment server  


## Process

### UI/UX Design
I started by designing this website in Adobe XD. My goal was to revamp the UI/UX of the website.  While I didn't notice any major UX issues except for a slight lack of CTA's, I decided to try and redesign the website within  modern liquid and colourful design guidelines. 

The version I designed was fairly similar to the what the final website looks like, and here's the link to preview the Adobe XD prototype: [click here](https://xd.adobe.com/view/1db74a03-597f-4eeb-a4fd-99751014d458-48e4/?fullscreen).

### Frontend Development
It's all custom CSS, which is why each component has it's own directory for building the component and styling it. 

A few major points:
1. the website is fully responsive on all devices
2. most components will be reusable now
3. important components have their own `data.js`, meaning that scaling this project/hooking it up to an API will be a breeze.

## License
Please email me or message me *before* reusing any of this codebase.  
**PARTH SHARMA (@psrth), January 2021**
