# ColoRandom

### Abstract:
We created an application that allows a user to generate random color palettes. The colors generated by the program are generated via a hex code, and are both saved into the data model, and displayed on the webpage. If a user wants to save a specific color from a palette, they can simply click the lock icon to lock that color, preventing the user from changing that color in their palette. 

Users can press the 'Save Palette' button to save a palette, saving it in the data model and displaying it on the right side of the screen. If the user wishes to delete a saved palette, they simply click the delete icon next to each palette.  If the user wishes to edit a saved palette, they click on the saved palette they want to edit and it will appear on the main display. They can then lock and unlock colors as desired to create a new palette from the existing saved palette.

### Installation Instructions:
Clone the repository to your local machine. The user can then interact with the applicaiton by opening the index.html file.

### Preview of App:

[View Demo Here](https://www.loom.com/share/c5c1e6ba3e134e58ac59cae615b9e721?sid=5b5d6ee4-455e-4a30-b9c6-49b8b1cacf57) 

### Context:
This is the group project from Week 4 of Mod1 @ Turing. We spent around 20 hours working together on this project. We had about five days to complete the project!

### Contributors:
* Matthew Shindel: https://github.com/MatthewShindel
* Dana Zack: https://github.com/danazack10
* Jamie Francisco: https://github.com/jamiefrancisco

### Learning Goals:
* Write semantic HTML and efficient CSS to form a usable UI
* Write clean, DRY JavaScript and leverage functions, creating and using an effective data model
* Manipulate the page after it has loaded: adding, removing, and updating elements on the DOM
* Refine our collaboration skills

### Wins + Challenges:
* Win 1: Learning how to utilize and access the dataset property of HTML elements in order to create a custom data attribute to target specific elements.
* Win 2: Completing the entire project as a unit, with co-authored commits.
* Challenge: Running into a problem with pushing an array into an array. We noticed that when using the push() method, we weren't actually pushing the contents of the array but merely a reference to the array. We fixed this problem by using the slice() method, which created a new array that contained the same elements, stored the value into a new variable, and then pushed that new variable into the original array.
