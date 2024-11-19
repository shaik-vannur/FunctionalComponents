import logo from "./logo.svg";
import "./App.css";
import Player from "./Components/Player";

function App() {
  return (
    <div className="App">
      <img className="logo" src="./images/rcb/RCBLogo.jpeg"></img>
      <div className="heading">
      
        <h1>Royal Challengers Bengaluru Team</h1>
      </div>
      <Player
        name="Virat Kohli"
        team="RCB"
        role="Batting"
        country="India"
        imgURL="./images/rcb/virat.jpg"
      />
      <Player
        name="Faf Du Plessis"
        team="RCB"
        role="Batting"
        country="South Africa"
        imgURL="./images/rcb/plessis.jpeg"
      />
      <Player
        name="Siraj"
        team="RCB"
        role="Bowling"
        country="India"
        imgURL="./images/rcb/siraj.jpeg"
      />
      <Player
        name="Dinesh Karthik"
        team="RCB"
        role="WK-Batting"
        country="India"
        imgURL="./images/rcb/dinesh.jpeg"
      />
      <Player
        name="Lockie Ferguson"
        team="RCB"
        role="Bowling"
        country="New zealand"
        imgURL="./images/rcb/ferguson.jpeg"
      />
      <Player
        name="Cameron Green "
        team="RCB"
        role="All-Rounder"
        country="Australia"
        imgURL="./images/rcb/green.jpeg"
      />
      <Player
        name="Karn Sharma"
        team="RCB"
        role="Bowling"
        country="India"
        imgURL="./images/rcb/karn.jpeg"
      />
      <Player
        name="lomror"
        team="RCB"
        role="Batting"
        country="India"
        imgURL="./images/rcb/lomror.jpeg"
      />
      <Player
        name="Maxwell"
        team="RCB"
        role="all-rounder"
        country="Australia"
        imgURL="./images/rcb/maxi.jpeg"
      />
      <Player
        name="Rajat Patidar"
        team="RCB"
        role="Batting"
        country="India"
        imgURL="./images/rcb/patidar.jpeg"
      />
      <Player
        name="Yash Dayal"
        team="RCB"
        role="Bowling"
        country="India"
        imgURL="./images/rcb/yash.jpeg"
      />
    </div>
  );
}

export default App;
