# Dev Diary

## Overview
This file contains some information on why I use certain technologies and how I solved some of the problems I faced.

## Why Typescript?
Typescript is basically ES6 and some ES7 with Type safety. Basically, almost all of the ES7 features which are not in stage-0 or stage-1 would be available in Typescript. The type safety does really work like a charm as it prevents a lot of run time errors. Apart from that, it allows me to use factory pattern very efficiently. I will talk about it later.

## Why Typestyle?
[Typestyle](http://typestyle.io/#/) does a very similar thing to CSS what typescript does JavaScript. I was a big fan of SCSS but recently I started using typestyle extensively as I feel it's a better approach. It's a type-safety wrapper on top of a CSS that is written in JSON format. It has a very similar structure as SCSS. This allows multiple advantages. Some of them are

### Type Safety
You can't make simple mistakes like `colour` instead of `color` typestyle will show error.

### Generated Class Names
Since Typestyle generates class names you don't have to worry about name conflicts. It allows `$debugname` to prefix the class with certain keywords so that it's easier to debug.

### Support chaining and merging
Something like `{color: 'red'}, {backgroudColor: 'red'}` can be merged into single class. This allows a lot of code reusability and maintainability.

### Media Queries
One really nice thing is that media queries lie with the class rather than at root. This helps to maintain media queries easily unlike someone edits the root class and forgets to edit media queries which make in broken UI later. Since both of them are together editing happens together.


## Font Awesome and Weather Icons
I am a big fan of [FontAwesome](http://fontawesome.io/icons/) but for this project, I needed more icons than what font awesome was supporting. I found out [WeatherIcons](http://weathericons.io/) project which solves exactly what I need. Even though the project is dead atm it solved my purpose.

## UX Design
I was inspired from [this](http://antoniodinardo.com/TEST/weather_card/) design. Even though it's a nice idea, it's practically impossible as it would need an image for every city the person selects. I tweaked the idea of the background image, from location to weather and time. So we have background image based on what weather group and what time group it belongs to. Apart from this background feels really static so I had added a pan animation. This allows a feel of flow and apart from that resizing the pane would not create a completely useless background image.

## Architecture
A redux application has 4 sections. React UI, Actions, Reducers and a store. I have used the factory pattern to simplify Actions and Reducers.

### Actions
Basically, there are 2 kinds of actions, Asynchronous action, and normal synchronous action. Every async action has 3 parts. Action Started, Action Success or Action Failure. Factory pattern allows to call an API with ACTION_TYPE started followed by ACTION_TYPE success or failure on every action. This is a generic pattern so I have a created this a factory which will generate this actions for given ACTION_TYPE and API function.

#### Action Type and Status
There are generally 2 approaches for creating ASYNC action object. Either everything in type `{type: 'ACTION_STARTED'}` or `{type: 'ACTION', status: 'STARTED'}`. I chose later as it would give a beautiful benefit that I can create a single reducer to show if the app is doing something or not to the end user.
Note: This is not implemented

### Stores and Async and Active Stores
For every async action will generate 3 different states. Started, Failure or Success with Data. This basically helped to create a structure `{working: boolean, failure: boolean, store: data}`. This is generic for every part of the store which is generated from the async action. You would see this throughout the application. Apart from this Active Stores are which is part of the store which sometimes shown on screen. Basically, any active store will have `{open: boolean}`. You can have AsyncActiveStore.

### Reducers
Now the Async store part is clear we can create a generic reducer that will take state ( the type of Async Store) and action and act upon status changes: STARTED, SUCCESS, FAILURE. For STARTED, the state is working is toggled on. On success working is toggled off and response belongs to state.store. Failure will toggle working off and toggle on failure. So there is a simple factory which does all these.

#### NOTE on Reducers and Action Success
Action Success will give the response which will have to put in state.store. state.store can be an array or object. If it's an object it can be directly replaced. If it's an array CRUD operations can happen. There would be 3 for the array (Create and Read/Load would add an entry to the array) operations and 1 non-array operations. I have only created non-array one atm, would have to think through before creating array one.


### Typescript and Factory Pattern 
Typescript's Type-safety really allows to use factory pattern really extensively as if the structure of the objects are not in correct format factory will fail. This is usually a test case testing or runtime testing. But typescript allows have that type safety upfront even before writing any test cases or running the code. Without Typescript, I would have to write all test cases to be 100% sure this is my structure I am expecting.