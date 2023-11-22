import React from "react";
import burgers from "./img/burgers.jpeg"
import resturaunt from "./img/resturaunt.jpeg"

const Home = () => {
    return(
        <div>
            <h1>Home Page</h1>
            <div className="upperInfo">
                <img id="homeImgLeft" src={burgers} alt="Some of our delicious Burgers"></img>
                <div className="homeText">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu eleifend mauris. Praesent varius arcu in ultrices euismod. Nam tempor at tortor id feugiat. Ut vulputate vulputate neque in sollicitudin. Fusce maximus libero ligula, vitae viverra massa egestas sed. Maecenas tempor enim non nunc vestibulum eleifend. Aenean id felis in turpis pellentesque aliquam.</p>
                    <p>Ut quis mi bibendum, fermentum dui vitae, bibendum augue. Nulla placerat egestas mattis. Duis pharetra placerat dolor ut ultricies. Praesent vulputate urna et nibh consectetur, eu ullamcorper lectus dictum. Maecenas gravida dictum nulla sed mattis. Maecenas et sodales lacus. Sed ornare leo ac elit aliquam, at vulputate ex pretium. Duis quis aliquet sem, non interdum orci. Mauris sit amet semper neque. Nulla laoreet tristique ex a rhoncus. Nullam sit amet dolor justo. Vivamus vitae ipsum quis quam ullamcorper iaculis. Maecenas eu bibendum sapien. Donec lacinia dui pretium tempus vehicula.</p>

                </div>
            </div>
            <div className="lowerInfo">
                <div className="homeText">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu eleifend mauris. Praesent varius arcu in ultrices euismod. Nam tempor at tortor id feugiat. Ut vulputate vulputate neque in sollicitudin. Fusce maximus libero ligula, vitae viverra massa egestas sed. Maecenas tempor enim non nunc vestibulum eleifend. Aenean id felis in turpis pellentesque aliquam.</p>
                    <p>Ut quis mi bibendum, fermentum dui vitae, bibendum augue. Nulla placerat egestas mattis. Duis pharetra placerat dolor ut ultricies. Praesent vulputate urna et nibh consectetur, eu ullamcorper lectus dictum. Maecenas gravida dictum nulla sed mattis. Maecenas et sodales lacus. Sed ornare leo ac elit aliquam, at vulputate ex pretium. Duis quis aliquet sem, non interdum orci. Mauris sit amet semper neque. Nulla laoreet tristique ex a rhoncus. Nullam sit amet dolor justo. Vivamus vitae ipsum quis quam ullamcorper iaculis. Maecenas eu bibendum sapien. Donec lacinia dui pretium tempus vehicula.</p>
                </div>
                <img id="homeImgRight" src={resturaunt} alt="Some of our delicious Burgers"></img>

            </div>
            
        </div>
    )
}

export default Home