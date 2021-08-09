# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* it triggers the handleAddOne function
* the dipatch function is called with the addOne function
* the addOne function returns an object with a type value of add one
* the addOne function returns an object with a type value of add one
* the reducer function is called and finds the matching type value 
* the reducer function returns version fo state where the total has been increased by one 
* that updates the state and thus the screen

* TotalDisplay shows the total plus 1.
