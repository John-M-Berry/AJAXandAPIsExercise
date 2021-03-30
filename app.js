// AJAX and APIs Exercise
// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
// const json = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
// 1a. Change the string of JSON into JavaScript (It will be a JS object) and set the new value to a const variable called jokeJS1 (HINT: Use JSON.parse())
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`)

// 1b. Access the value for the "setup" key in the jokeJS1 object and set it to the inner text for the p1 variable/element (If done correctly the setup for the joke should display on the webpage)
p1.innerText = (jokeJS1.setup)

// 1c. Access the value for the "punchline" key in the jokeJS1 object and set it to the inner text for the p2 variable/element (If done correctly the punchline for the joke should display on the webpage)
p2.innerText = (jokeJS1.punchline)

// 2
// Use the JokesAPI for questions 2 & 3 (Link below)…
// https://github.com/15Dkatz/official_joke_api
// 2a. Use one of the "Grab a random joke!" endpoints/URL to GET a Random Joke using axios
axios.get(`https://official-joke-api.appspot.com/random_joke`)

    // 2b. Use .then to create a function that sets the value returned from the axios GET request to a const variable called jokeJS2 (NOTE: You will need to create a function with a parameter. The parameter will hold the "resolved" value returned from the axios GET request).
    // .then(jokeJS2 => {

    .then(jokeJS2 => {

        // 2c. Inside of the same function, access the value for the "setup" key in the jokeJS2 object and set it to the inner text for the p3 variable/element. Also, access the value for the "punchline" key in the jokeJS2 object and set it to the inner text for the p4 variable/element (If done correctly the setup and punchline for the joke should display on the webpage)
        p3.innerText = (jokeJS2.data.setup)
        p4.innerText = (jokeJS2.data.punchline)

    })

// 2d. Finally, use .catch to create a function that would display the "rejected" value/error returned from the axios GET request in the console (NOTE: You will need a console log for this. Also, you will need to create a function with a parameter. The parameter will hold the "rejected" value/error returned from the axios GET request).
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);

// 3
// Use the JokesAPI for questions 2 & 3 (Link below)…
// https://github.com/15Dkatz/official_joke_api
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);
// 3a. Use one of the "Grab a random joke!" endpoints/URL to GET another Random Joke using axios
async function jokeFunc() {
    try {

        // 3b. Create a function that uses async/await called jokeFunc which sets the value returned from the axios GET request to a const variable called jokeJS3
        const jokeJS3 = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
        
        // 3c. Inside of the same jokeFunc function, access the value for the "setup" key in the jokeJS3 object and set it to the inner text for the p5 variable/element. Also, access the value for the "punchline" key in the jokeJS3 object and set it to the inner text for the p6 variable/element (If done correctly the setup and punchline for the joke should display on the webpage)(NOTE: Don't forget the run the jokeFunc function)
        p5.innerText = (jokeJS3.data.setup);
        p6.innerText = (jokeJS3.data.punchline);
        // 3d. Finally, include try and catch inside the jokeFunc function. For the catch, just have the "rejected" value/error returned from the axios GET request display in the console (NOTE: You will need a console log for this. Also, you will need to create a parameter for the catch. The parameter will hold the "rejected" value/error returned from the axios GET request).
    } catch (err) {
        
        console.log(err);
    }
    
};
jokeFunc();

// 4
// Use the TVMazeAPI for question 4 (Link below)…
// https://www.tvmaze.com/api

const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

// 4a. Create the following variables with the corresponding values (const id = "38963", const season = "1", & const number = "8")

const tvMaze = `http://api.tvmaze.com/`;

// 4b. Use the "Episode by Number" endpoint/URL on the TV Maze API to create a template literal where the variables that were created are plugged into the corresponding positions. (NOTE: The root Endpoint/URL is 'http://api.tvmaze.com'. You just need to add the Episode by Number endpoint/URL onto it)
const id = "38963"
const season = "1"
const number = "8"
const showStats = `shows/${id}/episodebynumber?season=${season}&number=${number}`

const fullURL = tvMaze + showStats;

// 4c. Plug the created template literal into an axios GET request
// 4d. Create a function that uses async/await called tvMazeFunc which sets the value returned from the axios GET request to a const variable called "mando"
async function tvMazeFunc() {

    try {
        
            const mando = await axios.get(fullURL);
            console.log(fullURL);
            // 4e. Inside of the same tvMazeFunc function, access the value for the "name" key in the mando object and set it to the inner text for the p7 variable/element. If done correctly the name of the episode should display on the webpage. (NOTE: Don't forget the run the tvMazeFunc function)
        
            p7.innerText = (mando.data.name)

            // 4f. Finally, include try and catch inside the tvMazeFunc function. For the catch, just have the "rejected" value/error returned from the axios GET request display in the console (NOTE: You will need a console log for this. Also, you will need to create a parameter for the catch. The parameter will hold the "rejected" value/error returned from the axios GET request).
    } catch (err) {
       
        console.log(err);
    }

}
tvMazeFunc();

async function axiosRandomJoke1() {
    try {
        // Making the request to the server using Axios
        const joke = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
        console.log(`Axios Example 2 Was Successful`);
        console.log(joke.data);
        // Catching error for a failed request
    } catch (err) {
        console.log(`Axios Example 2 Was NOT Successful`);
        console.log(err);
    }
}
axiosRandomJoke1();



