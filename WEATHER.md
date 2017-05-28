# Weather Widget

## Overview
The app will show weather for the current hour. The app will show following details
* Current Temperature
* Max Temperature
* Min Temperature
* Current Wind Speed
* Current Wind Direction
* Pressure & Humidity
* Sunrise and Sunset time
* Current Weather

## Features
* Select City
* Auto detection of location
* Turn off individual sections
* Multiple Unit Support
* Animating (Scrolling) background Image
* Time Dependent Banner Colour
* Weather & Time Dependent Background Image

## Select City
The user can select the city from settings icon which can be accessed from top right.

## Auto Detection of location
If there is no city provided or city name provided is not valid; the app will use user location.The app will ask user browser for location if it's provided the app will use that as the location otherwise the app will use users IP address to find user location and give weather based on that.

## Turn off individual section
Each of the individual sections of the Temperature, Pressure & Humidity and Wind Speed & Wind Direction can be toggled on and off depending on the user's preference.

## Multiple Unit Support
For temperature, pressure and wind speed multiple units are supported

### Temperature Units
Temperature Supports Degree Celsius and Farenheit

### Pressure Units
Pressure supports Pascal, millibars and atmospheric pressure.

### Wind Speed Units
Wind Speed supports km/hour, miles/hour and meter/second

## Animating (Scrolling) background Image
Background banner image slowly scrolls up and down

## Time Dependent Banner Colour
Background banner Colour has 3 different colors; variants of blue, green and red.
* 1 hour before and 2 hours after sunset and sunrise will show a variant of red.
* 2 hours after sunset and 1 hour before sunrise will show a variant of blue.
* 2 hours after sunrise and 1 hour before sunrise will show a variant of green.

## Weather & Time Dependent Background Image
Background banner images based on current weather and time of the day. There are 5 weather groups and 4 time groups, so there are 20 different images as background.

### Weather Groups for Background Image
* Clear
* Cloud
* Rain
* Snow
* Others
    
### Time Groups for Background Image
* Sunrise (1 hour before and 2 hours after)
* Sunset (1 hour before and 2 hours after)
* Day (2 hours after sunrise and 1 hour before sunset)
* Night (2 hours after sunset and 1 hour before sunrise)

