// Question 1
// Install Node.js, TypeScript and VS Code on your computer.
// done

/* Question 2
Personal Message: Store a person’s name in a variable, and print a message to that person. 
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/
// let P_Name : string = "Akhter KLhan"
// console.log(`Hello ${P_Name}, would you like to learn some Python today?`)

// Question 3
// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
// let pname : string = "Akhter Khan"
// console.log(pname.toLowerCase()) //Lowercase
// console.log(pname.toUpperCase()) //Uppercase
// console.log(pname.charAt(0).toUpperCase()+ pname.slice(1).toLowerCase()) //Toggle case

/*Question 4
Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/

// console.log("Our last Prophet Hazrat Muhammad (peace be upon him) once said, “A good man treats women with honour.”")

/* Question 5
Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable 
called famous_person. Then compose your message and store it in a new variable called message. 
Print your message.*/

// let famous_person : string = "Propher Hazrat Muhammad (pease be upon him)"
// let message : string = "“A good man treats women with honour.”"
// console.log(`Our Last ${famous_person} once said, ${message}`)

/*Question 6
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning 
and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
Print the name once, so the whitespace around the name is displayed. 
Then print the name after striping the white spaces.*/

// let person_name : string = "\t\n Akhter Khan \t\n"
// console.log(person_name)
// console.log(person_name.trim())

/*Question 7
Number Eight: Write addition, subtraction, multiplication, and division operations 
that each result in the number 8. Be sure to enclose your operations in print statements to see the results.*/
// console.log(6 + 2)
// console.log(10 - 2)
// console.log(4 * 2)
// console.log(16 / 2)

/*Question 8
You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on each line.*/
// Reply for the 8 question
// Refer to the answer for question 7, as it serves the same purpose

/*Question 9
Favorite Number: Store your favorite number in a variable. Then, using that variable, 
create a message that reveals your favorite number. Print that message.*/

// let fav_num : number = 7
// console.log(`Your favourite number is : ${fav_num}`)

/*Question 10
Adding Comments: Choose two of the programs you’ve written,
and add at least one comment to each. If you don’t have anything specific to write because your programs
are too simple at this point, just add your name and the current date at the top of each program file. 
Then write one sentence describing what the program does.*/

// Program 1.
// let pname : string = "Akhter Khan"
// console.log(pname.toLowerCase()) //Converts the string in Lowercase
// console.log(pname.toUpperCase()) //Converts the string Uppercase
// console.log(pname.charAt(0).toUpperCase()+ pname.slice(1).toLowerCase()) //Converts the string in Toggle case

// Program 2.
// let fav_num : number = 7 //declaring a varible 
// console.log(`Your favourite number is : ${fav_num}`) //Printing with string literals style

/* Question 11
Names: Store the names of a few of your friends in a array called names. 
Print each person’s name by accessing each element in the list, one at a time.*/

// let names : string [] = ["Shamshad", "Ahmed", "Atif", "Qamar", "Imran"]
// for (let i = 0 ; i < names.length ; i++){ //its a for loop
//     console.log(names[i])
// }

/* Question 12
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be personalized 
with the person’s name.*/

// let names2 : string[] = ["Shamshad", "Ahmed", "Atif", "Qamar", "Imran"]
// for (let name of names2){
// console.log(`Hello ${name}, would you like to learn some Typescript today ?`)
// }

/* Question 13
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
and make a list that stores several examples. Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.” */

//First Method
// let transportation : string [] = ["Corolla Car ", "Honda Bike", "School Bus", "Land Cruiser"]
// for (let name of transportation) {
//     console.log(`I would like to own a ${name}`)
// }

//Second Method
// let transports: string[] = ["Corolla Car ", "Honda Bike", "School Bus", "Land Cruiser"];

// transports.forEach(transport => {
//     console.log(`I would like to own a ${transport}.`);
// });


/*Question 14
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner.*/

// //First Method
// let guest_list : string [] = ["Shamshad", "Ahmed", "Taus"]
// for (let name of guest_list){
//     console.log(`My dear friend ${name}, would you like to join me for dinner?`)
// }

// //Second Method
// let guests: string[] = ["Shamshad", "Ahmed", "Taus"];

// guests.forEach(guest => {
//     console.log(`My dear friend ${guest}, would you like to join me for dinner?`);
// });
/*Question 15
Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program 
stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the 
new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/

// let cantAttend = "Shamshad";
// console.log(`${cantAttend} can't make it to dinner.`);

// // Replaced the guest
// let newGuest = "Syed Qamar Shah";
// guests[guests.indexOf(cantAttend)] = newGuest;

// // Sent new invitations 
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner?`);
// });

/* Question 16
More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program 
informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

// let Guests: string[] = ["Shamshad", "Ahmed", "Taus"];
// console.log("Great news! I have found a bigger dinning table!");

// // Adding more guests
// guests.unshift("Imran Baig");
// guests.splice(guests.length / 2, 0, "Atif");
// guests.push("Kamran Chohan");

// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner?`);
// });

/* Question 17
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that 
you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time
you pop a name from your list, print a message to that person letting them know you’re 
sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/

// console.log("Unfortunately, I can only invite two people for dinner.");

// while (guests.length > 2) {
//     let removedGuest = guests.pop();
//     console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
// }

// guests.forEach(guest => {
//     console.log(`Dear ${guest}, you're still invited to dinner.`);
// });

// guests.splice(0, guests.length);
// console.log(guests); // Shows an empty list

/*Question 18
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
// let imp_places : string [] = ["Khanai Qaba", "Masjid E Nabvi","Rozai Imam Hussain","Burj Khalifa","Statue of Liberty"]
// console.log("Original Order", imp_places)
// console.log("Alphabetical Order",[...imp_places].sort())
// console.log("Original Order", imp_places)
// console.log("Reversed Order",[...imp_places].sort().reverse())
// console.log("Original Order", imp_places)
// imp_places.reverse();
// console.log("Reversed Order", imp_places)
// imp_places.reverse();
// console.log("Original Order", imp_places)
// imp_places.sort()
// console.log("Alphabetical Order", imp_places)
// imp_places.reverse()
// console.log("Reversed Order", imp_places)

/*Question 19
Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner.
*/
// let guests : string [] = ["Shamshad","Ahmed","Qamar Shah","Taus Khan","Shahid Khan"];
// console.log(`i am inviting ${guests.length} people to dinner`)

/*Question 20
Think of something you could store in a array. For example, 
you could make a list of mountains, rivers, countries, cities, languages,
or anything else you’d like. Write a program that creates a list containing these items.
*/
// let languages : string [] = ["Arabic","Urdu","Chinese","Japanese","English"]
// console.log('Languages I would love to speak : ', languages)

/*Question 21
They think of something you could store in a TypeScript Object.
Write a program that creates Objects containing these items.
*/
// let car : {name : string, manufacturer : string , model : number} = {
//     name : "Corolla",
//     manufacturer : "Honda",
//     model : 2010
// }
// console.log(`Car Info : The ${car.name} made by ${car.manufacturer} launched in ${car.model}`)

/* Question 22
Intentional Error: If you haven’t received an array index error in one of your programs yet,
try to make one happen. Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program.
*/
// let index_error : string [] = ["Akhter Khan","Anwer Khan","Babar Khan"]
// console.log(index_error[4]) // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
// index_error[2] = "Azam Khan"; // Correcting the error by accessing a valid index.
// console.log(index_error[2])

/*Question 23
Conditional Tests: Write a series of conditional tests.
Print a statement describing each test and your prediction for the results of each test.
Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
//5 tests evalute to true
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True") //True
// console.log(car == 'subaru')
// console.log("Is car == 'toyota'? I predict False") //False
// console.log(car == 'toyota')

// let company = "Dawlance"
// console.log("Is company == 'Dawlance'? I predict True") //True
// console.log(company == 'Dawlance')
// console.log("Is company == 'Orient'? I predict False") //False
// console.log(company == 'Orient')

// let movie = "DDLJ"
// console.log("Is movie == 'DDLJ'? I predict True") //True
// console.log(movie == 'DDLJ')
// console.log("Is movie == 'My name is Khan'? I predict False") //False
// console.log(movie == 'My name is Khan')

// let course = "Governor Initiative"
// console.log("Is course == 'Governor Initiave'? I predict True") //True
// console.log(course == 'Governor Initiative')
// console.log("Is course == 'Presidential Initiative'? I predict False")//False
// console.log(course == 'Presidential Initiative')

// let visa = "USA"
// console.log("Is visa == 'USA'? I predict True") //True
// console.log(visa == 'USA')
// console.log("Is visa == 'INDIA'? I predict False")//False
// console.log(visa == 'INDIA')

/*Question 24
More Conditional Tests: 
You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
// Equality with strings
// console.log("Testing equality with strings:");
// console.log("akhter" == "akhter"); // True
// // console.log("akhter" == "Akhter"); // False

// //Using the lowercase function 
// console.log("Testing with lowercase:")
// console.log('AKHTER'.toLowerCase() == 'akhter')

// // Numerical tests
// console.log("Numerical tests:");
// console.log(100 > 50); // True
// console.log(20 < 19); // False

// // Tests using "and" and "or" operators
// console.log("Tests with 'and' and 'or':");
// console.log(true && false); // False
// console.log(true || false); // True

// // Test whether an item is in a array
// let seasons = ["summer", "autum", "winter"];
// console.log("Is 'summer' in seasons?");
// console.log(seasons.includes("summer")); // True

// // Test whether an item is not in a array
// console.log("Is 'spring' not in seasons?");
// console.log(!seasons.includes("spring")); // True

/* Question 25
Alien Colors #1: Imagine an alien was just shot down in a game.
Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green.
If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails.
(The version that fails will have no output.)*/

// let alien_color = 'green'
// if (alien_color == 'green'){
//     console.log('Congratulations you have earned 5 points')
// }
// alien_color = "red";
// if (alien_color == "green") {
//     // There is no output because the condition is false
// }
/*Question 26
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/
// let alien_color2 = 'green'
// if (alien_color2 == 'green'){
//     console.log('Congratulation! you just earned 5 points for shooting the alien')
// } else {
//     console.log('You have just earned 10 points')
// }
//version that runs else block
// alien_color = "yellow";
// if (alien_color == "green") {
//     console.log("You just earned 5 points for shooting the alien!");
// } else {
//     console.log("You just earned 10 points.");
// }
/*Question 27
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
//green alien version
// let alien_color = "green";
// if (alien_color == "green") {
//     console.log("You earned 5 points.");
// } else if (alien_color == "yellow") {
//     console.log("You earned 10 points.");
// } else if (alien_color == "red") {
//     console.log("You earned 15 points.");
// }
// //yellow alien version
// alien_color = "yellow";
// if (alien_color == "green") {
//     console.log("You earned 5 points.");
// } else if (alien_color == "yellow") {
//     console.log("You earned 10 points.");
// } else if (alien_color == "red") {
//     console.log("You earned 15 points.");
// }
// // red alien version
// alien_color = "red";
// if (alien_color == "green") {
//     console.log("You earned 5 points.");
// } else if (alien_color == "yellow") {
//     console.log("You earned 10 points.");
// } else if (alien_color == "red") {
//     console.log("You earned 15 points.");
// }

/*Question 28
Stages of Life: Write an if-else chain that determines a person’s stage of life. 
Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.*/
// let age: number = 1.75;
// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age < 4) {
//     console.log("The person is a toddler.");
// } else if (age < 13) {
//     console.log("The person is a kid.");
// } else if (age < 20) {
//     console.log("The person is a teenager.");
// } else if (age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }

/*Question 29
Favorite Fruit: Make a array of your favorite fruits, 
and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

// let favorite_fruits: string[] = ["apples", "bananas", "cherries"];
// if (favorite_fruits.includes("bananas")) {
//     console.log("You really like bananas!");
// }
// if (favorite_fruits.includes("apples")) {
//     console.log("You really like apples!");
// } 
// if (favorite_fruits.includes("cherries")) {
// console.log("You really like cherries")
// }

/* Question 30
Hello Admin: Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user after they log in to a website.
Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, 
such as Hello admin, would you like to see a status report?
*/
// let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];
// usernames.forEach(username => {
//     if (username === "admin") {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// });

/*Question 31
No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.*/
// let usernames: string[] = [];
// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     // Greet users
// }
// Removing all usernames ensures the message "We need to find some users!" is printed.

/*Question 32
Checking Usernames: Do the following to create a program 
that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users.
  Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used.
  If it has, print a message that the person will need to enter a new username.
  If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

// let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
// let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

// new_users.forEach(newUser => {
//     if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
//         console.log(`${newUser} will need to enter a new username.`);
//     } else {
//         console.log(`${newUser} is available.`);
//     }
// });

/*Question 33
Ordinal Numbers:
Ordinal numbers indicate their position in a array, such as 1st or 2nd.
Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
  Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/
//   let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach(number => {
//     let suffix = "th";
//     if (number === 1) {
//         suffix = "st";
//     } else if (number === 2) {
//         suffix = "nd";
//     } else if (number === 3) {
//         suffix = "rd";
//     }
//     console.log(`${number}${suffix}`);
// });

/*Question 34 
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
Add a line at the end of your program, outside the for loop, that states how much you like pizza.
The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
such as I really love pizza!
*/
// let pizza_flavour : string [] = ["Afghani Tikka", "Pepperoni", "Bar B Q"]

// pizza_flavour.forEach(pizza => {
//     console.log(`I like ${pizza} pizza`)
// })
// console.log('I really love pizza!')

/*Question 35
Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet!*/

// let animals : string [] = ["Dog", "Cat", "Rabbit"]
// animals.forEach(animals =>{
//     console.log(`A ${animals} would make a great pet`)
// })
// console.log('Any of these animals would make a great pet!')

/*Question 36
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/
// function make_shirt(size: string, message: string) {
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// }

// make_shirt("medium", "Code is Life");

// /*Question 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// */
// function make_shirt2(size: string = "large", message : string = "I love TypeScript"){
//   console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`)
// }
// make_shirt2()
// make_shirt2("medium")
// make_shirt2("small","Dive into coding")

/*Question 38
Cities: Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the default country.*/

// function describe_city(city:string, country:string ="Pakistan"){
//   console.log(`${city} is in ${country}.`)
// }

// describe_city("Karachi")
// describe_city("Islamabad")
// describe_city("Chicago","USA")

/*Question 39
City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.*/
// function city_country(city : string, country : string){
// return `${city}, ${country}`;
// }
// console.log(city_country("Lahore","Pakistan"))
// console.log(city_country("Tokyo","Japan"))
// console.log(city_country("Kabul","Afghanistan"))

/*Question 40
Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album
information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.*/

// function make_album(artist: string, title: string, tracks?: number) {
//   let album = { artist, title, tracks };
//   if (tracks) {
//       album['tracks'] = tracks;
//   }
//   return album;
// }

// console.log(make_album("Artist One", "The First Album"));
// console.log(make_album("Artist Two", "The Second Album"));
// console.log(make_album("Artist Three", "The Third Album", 12));

/*Question 41
Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/
// let magician: string[] = ["Alice", "David", "Chris"];
// function show_magicians(magicians : string []){
//   magicians.forEach( magicians => {
// console.log(magician)
//   });
// }
// show_magicians(magician)

/*Question 42
Great Magicians: Start with a copy of your program from Exercise 41. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.*/

// function make_great(magicians: string[]) {
//   for (let i = 0; i < magicians.length; i++) {
//       magicians[i] = magicians[i] + " the Great";
//   }
// }

// make_great(magicians); // Modifies the original array
// show_magicians(magicians); // Shows modified names

/*Question 43
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged, return the new array and store it in a separate array.
 Call show_magicians() with each array to show that you have one array of the original names,
 and one array with the Great added to each magician’s name.*/
 
//  let magicians: string[] = ["Alice", "David", "Chris"];

//  function make_great(magicians: string[]): string[] {
//      let greatMagicians:string [] = [];
//      magicians.forEach(magician => {
//          greatMagicians.push(`${magician} the Great`);
//      });
//      return greatMagicians;
//  }
 
//  let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
//  console.log("Original magicians:");
//  show_magicians(magicians); // Shows original names
//  console.log("Great magicians:");0
//  show_magicians(greatMagicians); // Shows modified names


 /*Question 44
 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides
 and it should print a summary of the sandwich that is being ordered. Call the function three times,
 using a different number of arguments each time.*/

// function make_sandwich(...items: string[]) {
//   console.log(`Making a sandwich with: ${items.join(', ')}.`);
// }

// make_sandwich("ham", "cheese");
// make_sandwich("turkey", "lettuce", "tomato");
// make_sandwich("avocado", "sprouts", "mustard", "mayo");

/*Question 45
Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments
Call the function with the required information and two other name-value pairs,
such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/

// function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
//   let car = { manufacturer, model };
//   options.forEach(([key, value]) => car[key] = value);
//   return car;
// }

// console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
// console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));