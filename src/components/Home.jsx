import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home" >
        <main>
          <h1>Ankur</h1>
          <p>solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your only solution to the tech problems you face everyday. we
            are leading company whose aim is to increase the problem solving
            ability to children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>who are you? </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet
            porro, tenetur mollitia perferendis laborum aliquam adipisci dolores
            dolor voluptate excepturi, vero minima? Maiores in, aperiam delectus
            repudiandae molestias doloremque. Officia, ab asperiores voluptatum
            ad optio cum recusandae doloribus tempore!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.0s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.1s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.2s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
