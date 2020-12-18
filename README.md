# 05 Third-Party APIs: Work Day Scheduler

## The Calendar Details:

This is a simple calendar application that allows a user to save events for each hour of the day, and will run in the browser featuring dynamically updated HTML and CSS powered by jQuery.





## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```


## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```


## Application Deployment

The following animation demonstrates the application functionality:

![day planner demo](api screenshot goes here)


This application uses Moment.js to pull date and time information and apply it to the calendar boxes based on the time of day. It will highlight the current time in day, with the previous times grayed out and the future time in yellow.

It also utilizes a save button function, wherein you can type plans and information into the text boxes with the correspondent time, and it will save the information to local storage using JSON so info can be retrieved upon reloading the browser.




## Review

Included in the submission and Readme are the following:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
