import React from "react";
import "./HomeStyles.css";
import footballStadium from "../images/football-stadium.jpg";
import footballKidPlayer from "../images/footballKidPlayer.jpg";
import womenFootball from "../images/womenFootball.jpg";


function Home() {
  return (
    <div>
      <h1>About FIFA</h1>
      <div className="card-right">
        <div className="card-pic-right">
          <img src={footballStadium} alt="football stadium" />
        </div>
        <div className="text-style-right">
          {/* <h3>About FIFA</h3> */}
          <p>
            <h1>What we do</h1>
            FIFA exists to govern football and to develop the game around the world. Since 2016, the organisation has been fast evolving into a body that can more effectively serve our game for the benefit of the entire world.
            The new FIFA is modernising football to be global, accessible and inclusive in all aspects. Not just on one or two continents, but everywhere. Under our vision to make football truly global, we will help develop football everywhere so that there are at least 50 national teams and 50 clubs from all continents that can compete at a top competitive level.
          </p>
        </div>
      </div>

      <div className="card-left">
        <div className="card-pic-left">
          <img className="left-img" src={footballKidPlayer} alt="A kid with football " />
        </div>
        <div className="text-style-left">
          <h1>Talent Development</h1>
          <p>
            A ground-breaking study by FIFA has delivered the message that every talented player deserves a chance to be identified and developed.
          </p>
        </div>
      </div>


      <div className="card-right">
        <div className="card-pic-right">
          <img className="right-img" src={womenFootball} alt="women in football" />
        </div>
        <div className="text-style-right">
          <p>
            <h1>Accelerate The Growth Of Women's Football</h1>
            Women’s football is the single biggest growth opportunity in football today and it remains a top priority for FIFA. 
            Although the game has grown exponentially at all levels, the passion and rising popularity of the sport offers vast untapped potential. FIFA is investing in dedicated funding, human resources and innovative, tailor made development programmes, to bring women’s football into the mainstream, where it belongs.
          </p>
        </div>
      </div>  

      <div>
       
        <div className="text-bottom-style">
          <p className="space-style">
            <h1>Latest FIFA News</h1>
            FIFA is working on a wide range of topics from improving the women's game and developing football around the world to ensuring better football governance structures.
          </p>
        </div>
        
      </div> 

    </div>
  );
}

export default Home;