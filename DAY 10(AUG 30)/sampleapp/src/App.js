import React from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";

function App() {
  // const condition = "This is my first react app";
  const cardDetails = [
    {
      description:
        "Stocks gained for a second day as traders awaited a raft of economic figures over the next few days for clues on the outlook for global central bank policies.",

      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iooubBP.J_eg/v0/1200x800.jpg",
      time: "8 mins",
    },
    {
      description:
        "Chevron's two major liquefied natural gas (LNG) production facilities in Australia could face daily work stoppages of up to 10 hours next week after unions on Tuesday threat…",
      urlToImage:
        "https://www.reuters.com/resizer/7xmJnXc5CR9Ui56sX-xL-dXvfcE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JHTMZGJPUZOSHFSU25S5J3HGLY.jpg",
      time: "10 mins",
    },
    {
      description:
        "After 35 years, the Nordstrom in downtown San Francisco has officially closed. The store is the latest in a series of retail closures in the city. NBC News’ ...",

      urlToImage: "https://i.ytimg.com/vi/Qp5_bobRI40/maxresdefault.jpg",
      time: "9 mins",
    },
    {
      description:
        "Europe’s biggest economy is sliding into stagnation, and a weakening political system is struggling to find an answer",

      urlToImage: "https://images.wsj.net/im-841456/social",
      time: "9 mins",
    },
    {
      description:
        "OpenAI is releasing a version of its buzzy ChatGPT tool specifically for businesses, the company announced Monday, as an AI arms race continues to ramp up throughout corporate America.",

      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230828141417-chat-gpt-062023.jpg?c=16x9&q=w_800,c_fill",
      time: "9 mins",
    },
    {
      description:
        "Powerball winning numbers for Aug. 28 drawing. Did you win the $363 jackpot?No one won the Powerball jackpot Saturday night, causing the jackpot to grow even more.\r\nThe jackpot climbed to an estimated $363 million ahead of Monday night's drawing.",

      urlToImage:
        "https://www.gannett-cdn.com/authoring/authoring-images/2023/08/13/PTCN/70584909007-microsoft-teamsimage-71.png?auto=webp&crop=1022,577,x0,y114&format=pjpg&width=1200",
      time: "19 mins",
    },
    {
      description:
        "Hawaiian Electric Company said that power lines falling in high winds seem to have caused a fire during the early morning of August 8, but power lines in West Maui had been de-energized for more than six hours by the time a second afternoon fire began in the …",

      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230829090052-hawaii-fires-power-lines.jpg?c=16x9&q=w_800,c_fill",
      time: "10 mins",
    },
    {
      description:
        "The company offered more details on why the contamination occurred and said a “full investigation” is underway.",

      urlToImage:
        "https://www.tampabay.com/resizer/O35oSOZLcV_Shl1uq6M2i7Tsv58=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/tbt/O5HUX2SFHK3D4JBBADU5STSDV4.jpg",
      time: "12 mins",
    },
    {
      description: "Payments expected to be made over a multiple-year span",

      urlToImage: "https://images.wsj.net/im-843125/social",
      time: "14 mins",
    },
  ];
  return (
    <div className="App">
      {/* {condition == "This is my first react app" && "dfghj" } example for using && operation in case of absence of else statement
      {condition == "This is my firsvvvt react app" ? "dfghj" :"This is test"}  This will using when both if and else conditions are used*/}
      <section className="jumbotron text-center">
        <Header title="Album example" />
      </section>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {cardDetails.map((data, index) => {
              return (
                <Card
                  imageUrl={data.urlToImage}
                  description={data.description}
                  time={data.time}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
