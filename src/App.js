import React from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
            <Carousel autoPlay width={"25em"}>
                <div>
                    <img src={window.location.origin + '/images/image1.jpg'} alt="" />
                    <p className="legend">Image 1</p>
                </div>
                <div>
                    <img src={window.location.origin + '/images/image2.jpg'} alt="" />
                    <p className="legend">Image 2</p>
                </div>
                <div>
                    <img src={window.location.origin + '/images/image3.jpg'} alt="" />
                    <p className="legend">Image 3</p>
                </div>
                <div>
                    <img src={window.location.origin + '/images/image4.jpg'} alt="" />
                    <p className="legend">Image 4</p>
                </div>
                <div>
                    <img src={window.location.origin + '/images/image5.jpg'} alt="" />
                    <p className="legend">Image 5</p>
                </div>
                <div>
                    <img src={window.location.origin + '/images/image6.jpg'} alt="" />
                    <p className="legend">Image 6</p>
                </div>              
            </Carousel> 
      </header>
    </div>
  );
}

export default App;
