//I started with creating my list of facts for my fact generator.
var factList= [
  "African-American adults are 5.9 times as likely to be incarcerated than whites and Hispanics are 3.1 times as likely.",
  "New York City saw a 223% spike in anti-Asian hate crimes in early 2021 compared to the same time last year.",
  "In a study conducted by Rutgers University, 22% of Hispanic/Latino workers reported experiencing workplace discrimination, compared to only 6% of whites.",
  "In 2018, the average Black worker earned just 62% of what the average white worker made.",
];
//Then made some variables
var fact = document.getElementById ("fact");
var button = document.getElementById ("button");
var count = 0;
//Here I am making sure that the eventListener is only added if the DOM is loaded
if (button) {
  button.addEventListener ("click", displayFact);
}
//Lastly, I have the facts display on the website and make the facts replay once it reaches the end
function displayFact(){
fact.innerHTML = factList[count];
count++;
if (count==factList.length) {
count=0;
}
}
