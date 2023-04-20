import React from "react";
import "./styles/SingerCard.css";

function SingerCard({name,number,imageURL}) {
  return (
    <div className="SingerCard">
      <div className="image_div">
        <img className="main-image"
          src={imageURL}
          alt=""
        />
      </div>
      <div className="content_div">
        <div className="name_postdiv">
          <h1 className="large" style={{fontSize:"1.3rem"}}>{name} </h1>
          <p className="small">Singer</p>
        </div>
        <p className="medium_text" style={{marginBottom:'0.5rem'}}>Location</p>
        <div style={{ display: "flex", justifyContent: "space-between",alignItems :"center",marginBottom:'0.7rem' }}>
          <p className="medium_text">Event Booking</p>
          <p className="small" style={{fontStyle:'italic' ,fontWeight:600,paddingRight:'7px'}}>{number}</p>
        </div>

        <div className="image_url_div">
            <div><img className="thumbnail" src={imageURL} alt="" /></div>
            <div><img className="thumbnail" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&resize=640:*" alt="" /></div>
            <div><img className="thumbnail" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/piscescelebs-1582312966.png?crop=0.293xw:0.587xh;0.0256xw,0.0737xh&resize=1200:*" alt="" /></div>
            <div><img className="thumbnail" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&resize=640:*" alt="" /></div>
        </div>

      </div>
        <div className="selectBTN">
            <p id="text" className="large">SELECT</p>
        </div>
    </div>
  );
}

export default SingerCard;
