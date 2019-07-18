# Bamazon

### Description

Bamazon is a CLI app and exercise in NodeJS and SQL to retrieve data from a table in a SQL database and update that data in the table when a "purchase" is made. 

### Organization

The app is organized with the node package variables listed at the top, and then the connections to the SQL database. From the function to display the table of items in the CLI,  and the initial welcome message.

The next portion is a long set of chained inquirer prompts and functions to gather user input, and update the table based on that input. This includes a check if the quantity selected is over the amount of an item in stock. 

The connection closes when the user is prompted to confirm whether they would like to continue shopping or not. If they answer 'N' for No, it will close. If they answer 'Y' for yes, then then connection will remain open and the table will display again with amounts updated.

### Future Enhancements

Future enhancements for this include adding 'Manager/Supervisor' functionality to the app, where departments can be added to the table, new stock can be added, prices can be changed. Another 'nice to have' would be to add some color or style to the CLI as well (since it is fairly boring).

### Using Bamazon

Below are instructions on how to use the app. To avoid errors, make sure that you have installed the correct node packages to the folder in order to run the app by running `npm install PACKAGE` in the terminal. 

1. Create a clone of the Bamazon repository on your computer.
1. In your preferred code editor, navigate to the repository folder and open the "bamazonCustomer.js" file.
1. In the terminal, navigate to the repository folder on your machine. If you use VS code for code editor, you can just right-click and select 'Open in Terminal'.
1. Enter 'node bamazonCustomer' to initiate the CLI app.
    1. The welcome message, table of items, and first prompt will appear. 
1. After the first prompt, enter the Item ID of the item you would like to purchase. 
1. The next prompt will ask you how many you would like to buy. Enter the number you would like to buy.
    1. If your desired quantity is higher than what is in stock, you will be notified that there is insufficient quantity. You will then be prompted to confirm if you would like to continue shopping. Select 'Y' to continue, and 'N' to end.
    1. If your desired quantity is appropriate, you will receive a thank-you message with the total cost for you purchase. You will also be prompted to confirm if you would like to continue shopping. If you select 'Y' the updated table will reappear and you may select more items. If you select 'N' the connection will end. 

### Media

Below is a video link of the app in action.
* Video: https://drive.google.com/file/d/1cT2iO5RvlcMpN6Gsx6FK55bdkxJKaIyn/view

### Deployed Link

This app is not associated with an html page. In order to use the app, you need to copy the repository to you computer.
* Repository Link: 

### Technologies Used
* Javascript
* MySQL
* NodeJS
* Inquirer
* CLI-Table

