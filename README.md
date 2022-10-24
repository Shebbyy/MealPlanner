[![node 16.13.2](https://img.shields.io/badge/node-16.13.2-339933?logo=node.js)](https://nodejs.org/de/download/)
[![@ionic/cli 6.20.3](https://img.shields.io/badge/@ionic/cli-6.20.3-4a8bfc?logo=ionic)](https://ionicframework.com/docs/cli/)
[![@angular/cli 14.0.0](https://img.shields.io/badge/@angular/cli-14.0.0-e23237?logo=angular)](https://angular.io/cli)

[![@ionic/angular 6.1.9](https://img.shields.io/badge/@ionic/angular-6.1.9-4a8bfc?logo=ionic)](https://ionicframework.com/)
[![@angular/core 14.0.0](https://img.shields.io/badge/@angular/core-14.0.0-e23237?logo=ionic)](https://angular.io/)

### Startup
#### Start per Terminal
To launch it as a common web application simply run the npm start command
```cmd
$ npm run start
```
#### Starting with the Ionic Mobile Emulator
To emulate the design of the app on a phone screen, ionic supports a package called Ionic-Labs. This eases up the design of the mobile app on a desktop tremendously
```cmd
$ npm run startLab
```

## ProjectSetup
### 1. Install NodeJS
[Download](https://nodejs.org/de/download/) and install NodeJS, version 16 or higher

### 2. Install Ionic
To use the Ionic commands in the CLI it is necessary to install the package globally
```cmd
$ npm install -g ionic@latest
```

### 3. Projekt Dependencies
#### Install via Terminal
Go into the terminal and run this command to install all the required packages
```cmd
$ npm install
```

### 4. Add individual information
#### Add your API Keys
Spoonacular requires you to sign up in the [api page](https://spoonacular.com/food-api/console#Dashboard) and use your own generated API-Key for the requests, beware for free users theres a limit of 150 "Request Points" per day.

The API Key has to be entered in the constants.ts file
