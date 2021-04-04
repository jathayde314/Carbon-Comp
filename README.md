# Combat Carbon Repository

Here is the link to our devpost: <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO">link</a>. You can find further information there. 

To test our app on the web, you can test it <a href = "https://boiling-beach-74341.herokuapp.com/">here</a>. If you want to use it locally, you should have node.js installed. Then, you can clone the repo and run
```
npm install
node server.js
```
in your directory to get the app running on port 3000 of your local host.

## Inspiration
Climate Change has been a very important environmental issue for several decades, and one of the main contributors to global warming has been carbon dioxide emissions from transportation. Airplanes and other aviation vehicles contribute to billions of tonnes of CO2 alone. We believe that everyone should try to reduce their carbon footprint by seeking alternative means of transport, such as biking, walking, or even carpooling. Therefore, we created a web app called Combat Carbon, an online competition that incentivizes people to try more climate friendly transportation.

## What it does
Combat Carbon requires users to login through Facebook, and they are encouraged to add their friends and compete with each other through points. Points are awarded to those who walk, bike, or carpool, and deducted from those who drive alone or fly. Users can view a global leaderboard and personal leaderboards in their friends lists. Users track their daily transportation activities through forms and can also set goals for themselves, and points are calculated based on their minutes spent/time of activity.

## How we built it
We built Combat Carbon’s Heroku website primarily with Javascript (node.js), CSS (Bootstrap), SQL, and HTML. We implemented a large SQL database using cockroachDB that stores everyone’s form responses and used it to build leaderboards.

## Challenges we ran into
We originally had much more ambitious plans in the beginning, trying to write our website with react Native and Expo, but we discovered that those were far too difficult to learn and implement within a 24-hour span, so we switched to pure Javascript. We also had to overcome learning hurdles at the beginning, such as merge conflicts in Git and learning SQL syntax, but it was worth it for the final product.

## Accomplishments that we're proud of
We implemented a Facebook SDK into our platform so that users can more easily add friends on our website. We also built a functioning, updating SQL-based leaderboard for the website’s most passionate climate lovers. Lastly, we really love our Front-end development website design.

## What we learned
We learned a ton of new advanced industry skills during this Hackathon, such as SQL and cockroachDB. Some of us learned Javascript/HTML/CSS syntax for our first time and became familiar with basic Git and nodeJS principles. We also learned how to effectively collaborate with each other in tough times like this pandemic and had a lot of fun.

## What's next for Combat Carbon
We want to add other green activities, such as food consumption and electricity usage. In addition, we want to add greater functionality such as allowing friends to make posts about their green activities, and allowing friends to have “shared” activities if they participate in something together. Finally, we hope to implement a mobile version of our platform. 

