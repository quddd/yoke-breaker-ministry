import React from "react";
import Authorpic from "./author.jpg";
import { Image } from "react-bootstrap";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="aboutpage">
          <div>
            <h1>What does this book mean to me?</h1>
            <p style={{ marginRight: "10vw" }}>
              Many people go about daily performing their day to day tasks in a
              never-ending cycle of defeats without seeing the end. Writing THE
              POWER OF THE YOKES is not a sign of the end of my struggles or a
              new beginning. A ring has no beginning or and end. A ring has
              endless positions. My life is a ring in God’s hands. There are an
              endless amount of moments. This is just a moment in the valley of
              coll water and green pastures where God is replenishing my soul.
              While I am experiencing this moment, I will not be ignorant of the
              fact that God is preparing for a long steep climb. THE POWER OF
              THE YOKES is not a mountain top experience. This accomplishment
              opened my eyes to the reality that while it is ambitious to set
              your goals to reach the mountain top, it is better being a piece
              of clay in the potter's hand while you are in the valley. When you
              are at the mountain top of life, it can be a very lonely dangerous
              place to be. Being on mountain top zaps your energy and you are
              constantly in danger of a fatal fall. The valley is where God
              replenishes your soul and gives you the strength for the journey.
              The valley is the place where God breaks you, shape you, and mold
              you. A piece of clay has no knowledge of what the potter will
              create out of it! While God was taking me on this journey I
              eventually come to realize that either I hate or enjoy the
              process! THE POWER OF THE YOKES allows me to be yoke to God and in
              so doing He was able to accomplish the impossible in my life. He
              made of my life a vessel unto honor.
            </p>
          </div>
          <div>
            <Image src={Authorpic} alt=" Carlton Foster" rounded />
            <h3> Pastor Carlton Foster</h3>
          </div>
        </div>
        <div className="about-accomplish">
          <h3>What do I hope this book will Accomplish?</h3>
          <p>
            My desire for everyone who reads THE POWER OF THE YOKES is to leave
            no stones un-turn. Leave nothing to chance. See your true potential.
            My desire is for everyone to realize that their lives have a purpose
            God is writing their story. You will be yoke to something. Make that
            something to be God. Break free from the negativity of man’s words.
            You are who God says you are. Be sensitive to the voices that you
            are hearing. When you lose your sensitivity, you will listen to the
            wrong voice. You are not racing against the clock to find your
            purpose, leading you to fulfill your destiny. Your life struggles do
            not define you. What defines you is what you do with the moment that
            God presents to you. This is your moment; seize it! You are not like
            anyone else. That is why you need to break free from the yoke. Your
            yoke is not servitude. It is only a symbol of servitude. THE POWER
            OF THE YOKES will help you to identify potential yokes or yokes in
            your life. You have the power to break free from the yoke. It was
            always inside of you. This will be the moment when you realize that
            it was always inside of you to achieve greatness.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
