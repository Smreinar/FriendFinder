# FreindFinder
---

## Discription
In this application you can find your best friend! Thats right! All you have to do is take a simple 10 question survey. After you complete the survey then your best friend will appear!
How does it work? Well, it will take your survey's answer and stores them in the data base and brings back the most compatiable match in the data base for you. On a side note, I had a lot of fun testing this application out
with my family and i hope you do too!

Enjoy and Have Fun!

[Live App](https://friendfinder1021.herokuapp.com/)

---

## Install
Clone the git repo to your computer.

Then you will run the following command in terminal

> > `npm install`
>
> This command will download all the dependencies for you.


---

## Technologies
- HTML5
- Bootsrap
- CSS
- node.js
    - express
    - path

---

## Code Snippets
The code snippet below is a look at how my friends database is populated with and how its format name, photo and an array of scores
![friends-database-seed](https://user-images.githubusercontent.com/57015344/88010378-9b3e2580-cac9-11ea-87b4-42200397ba22.png)

On the back-end for the routes my most important route would be the /api/friends/ with this route we grab the new user and compare it with the others in the database.
In the code snippet below we start it off by grabbing the users information with req.body(name, photo and scores)
![friends-api-route-new-score](https://user-images.githubusercontent.com/57015344/88010391-a09b7000-cac9-11ea-94fb-9dd32cad44ca.png)

Then from there we compare everyone's score in the database with the new User's score and return the person that had least total difference in between the total scores.
![friends-api-route-comparing-data](https://user-images.githubusercontent.com/57015344/88010402-a5f8ba80-cac9-11ea-9d65-20b7e8c26891.png)

This function is located on the front-end to make a post to the `/api/friends/` with that new users information and once the response comes back then we use `bootstrap` modal toggle to have your best friend pop out to you!
![friends-collectInput-function](https://user-images.githubusercontent.com/57015344/88010412-ab560500-cac9-11ea-8667-166fe53d26c2.png)

This function is used as a filter to make sure all fields in the html are filled out otherwise it cannot proceed to make a request the back-end.
![friends-checkIfComplete-function](https://user-images.githubusercontent.com/57015344/88010423-b1e47c80-cac9-11ea-8870-f444707e8746.png)


---

## License
    MT

---
