# Hike-U

## Description

Your ultimate hike planning app. Plan routes on Mapbox, choose dates, and view weather forecasts seamlessly. Create and manage packing lists based on your gear equipment list. Capture your adventures with journal entries, including photos and memories. Simplify your hiking experience with Hike-U.

<img src="/README/homePage.png" alt="Screenshot" width="300"><img src="/README/equipPage.png" alt="Screenshot" width="300">

<img src="/README/journalPage.png" alt="Screenshot" width="300"><img src="/README/startAdventure.png" alt="Screenshot" width="300">

<img src="/README/authPage.png" alt="Screenshot" width="300">

## Table of Contents

- [Project Title](#project-title)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Features](#features)
  - [Teck Stack](#tech-stack)
  - [Installation](#installation)
  - [Contributing](#contributing)
  - [License](#license)

## Usage

1. Register or log in to your account.
2. Start hiking adventure by typing start and end point on map, check forecaste weather then create your hiking route.
3. Create your hiking equipment kit by adding new items or choosing from existing list.
4. Write your memory journal entries after hiking. You can update, delete, search, sorting or filter journals based on month/year on the page.

## Features

- **Personalised account**: Users will have to create an account and log in to create and see their content.
- **Mapping the route**: Users can type is start and end locations for the hike, which will be displayed on the map. They can manually drag the route to adjust it, as desired/needed. After picking the locations, the weather application will display the six day forecast, which can assist the user with planning.
- **Detailed hike planning**: The app will let the user select the hike dates and include a title and a description of the planned hike. Furthermore, they can plan multiple stops on the way and save those in a separate list.
- **Equipment planning**: Users can add the hiking equipment they own to a separate page. They can assign different categories to each item, which will allow the user to filter their equipment based on specific needs (e.g. overnight, rainy day). When planning a hike, users can add individual items from the overall list to create a packing list.
- **Record the memories**: After the hike, the users can create a journal entry to record their experiences and memories. Besides the hike title and dates, the users can also record the difficulty of the trail as well as upload photos and describe their hike with as much detail as desired. These posts will be archived and the users can revisit their experiences. The page also includes a search, edit, delete, sorting function to aide with finding the entries.

## Tech stack

- React
- Node.js
- Express
- MongoDB
- Mongoose
- JavaScript
- HTML
- CSS
- Bootstrap
- Mapbox API
- OpenWeather Weather API
- Cloudinary

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/hike-u.git
   ```

2. The application is currently not deployed. After cloning the repository make sure you install dependencies:

```
npm install
npm run build
```

3. Create .env file to import MongoDB URL,Mapbox API key, Cloudinary API Key

4. Then start the back-end and front-end server:

```
npx nodemon server.js
npm start
```

## Next steps

- [ ] Add newsletter feature
- [ ] Link hike stops to mapbox api
- [ ] Add hike plan on journal page
- [ ] Improve CSS on journal detail page
