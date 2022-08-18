import React from "react";
import 'antd/dist/antd.css';
import Leandro from "../images/Leandro.png";
import Justin from "../images/Justin.png";
import Scott from "../images/Scott.png";
import Cole from "../images/Cole.png";
import Mike from "../images/Mike.png";


const About = () => {
  return (
    <div className="aboutus-container">
      <div className="about-story">
        <h3 className="about-header">Our Story</h3>
        <p className="about-paragraph">Our mission with this store is to create a place where people can create custom art and share. This will ultimately allow people to interact with each other and upload what they think other people might like with the potential of commissioning some pieces. The primary function though is to be a social media like platform where artists from around the globe can share their art pieces and have meaningful discussions. In the blog section of our website artists will have the ability to upload their pictures like and comment on other peoples pieces and receive feedback from other artists.
</p>
      </div>
      <div className="first-div">
        <div className="first-left"> <h4>Leandro</h4><blockquote>"My name is Leandro and I am a highly passionate and enthusiastic individual with the attitude and eagerness to always learn something new. Be it new and contemporary technologies or getting my feet wet in new projects both academic and personal. I love helping other people bring their imagination to life and materialize a product beyond their expectations. When I am not coding, you can find me working out at the gym, trying new local restaurants, participating in the Jewish community, or simply going on a beautiful sunset hike here in the beautiful Sonoran desert of Arizona with my best four-legged buddy, Gus."</blockquote></div>
        <div className="first-right"><img className="img" src={Leandro} alt="leandro" /></div>
      </div>
      <div className="second-div">
        <div className="second-left"><img className="img" src={Justin} alt="Justin" /></div>
        <div className="second-right"><h4>Justin</h4><blockquote>"Hello, I'm Justin an aspiring full-stack web developer. I can help refactor code, web design, and utilize javascript to better enhance your products. Focusing on client-centered approaches, I utilize my skills to better the requests of your employers. My goal is to make lives better, increase user interaction with your products, and facilitate ideas into obtainable acheivements."</blockquote></div>
      </div>
      <div className="third-div">
        <div className="third-left"><h4>Scott</h4><blockquote>"Scott is a student of software development, with experience managing global teams and multi-million-dollar campaigns. His background in brand strategy, visual design, and account management inform his mindful but competitive approach. Scott is fueled by his passion for understanding the nuances of cross-cultural advertising. He considers herself a ‘forever student,’ eager to both build on his academic foundations in psychology and computer science and stay in tune with the latest digital marketing strategies through continued coursework."</blockquote></div>
        <div className="third-right"><img className="img" src={Scott} alt="Scott" /></div>
      </div>
      <div className="fourth-div">
        <div className="fourth-left"><img className="img" src={Cole} alt="Cole" /></div>
        <div className="fourth-right"><h4>Cole</h4><blockquote>"Hi my name is Cole, thank you for coming to my site. I graduated highschool in 2019 and I worked for Costco for nearly three years.
        During my time at Costco I learned that I wanted to seek a profession that envolved computers in some way. I spend alot of time on the computer and I want to further my career regarding this field. I have always had a passion for technology and I would like to further my education with it."</blockquote></div>
      </div>
      <div className="fifth-div">
        <div className="fifth-left"><h4>Mike</h4><blockquote>"I have always had a passion for technology and creating things! Throughout the course, I have gained many skills that will set me apart from the rest. I have a talent for attention to detail. My creativity is a cut above the rest. I am extremely patient as well. But the most important skill I have is my attitude. I will always put in 100% and will stay positive all the way through."</blockquote></div>
        <div className="fifth-right"><img className="img" src={Mike} alt="Mike" /></div>
      </div>
    </div>
  )
}

export default About
