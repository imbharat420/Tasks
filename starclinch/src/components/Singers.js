import React, { useEffect, useState } from "react";
import "./styles/Singers.css";
import Loading from "./Loading";
import SingerCard from "./SingerCard";
import DatePickerValue from "./DatePicker";
import CountrySelect from "./CountrySelector";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { Fab ,Collapse,IconButton, useMediaQuery} from '@mui/material';
import movies from "./movies.json";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '201d922ca8msh0eb20de7c53f690p120541jsne64d81f34302',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};


const fetchApi = async () => {
  const response = await fetch('https://imdb8.p.rapidapi.com/auto-complete?q=singer', options);
  const data = await response.json();
  return data;
};


function Singers() {
  const [data, setdata] = useState([]);
  const [flag, setflag] = useState(true);
  const [CollapseState, setCollapseState] = useState(true);
  useEffect(() => {
    // fetchApi().then(response => {
      // setdata(response.d);
      setflag(false);
    // });
  }, []);
  
  //false collapse in more than 600px  screen
  const matches = useMediaQuery('(min-width:600px)');

 

  useEffect(() => {
    const thumbnailImages = document.getElementsByClassName("thumbnail");
    if(matches){
     setCollapseState(true);
    }
  
    // Add a click event listener to each thumbnail image
    for (let i = 0; i < thumbnailImages.length; i++) {
      // console.log("enter in for loop");
      thumbnailImages[i].addEventListener("click", function () {
        // Set the main image's source to the clicked thumbnail's source
        // console.log("click");
        const mainImage =
          this.closest(".SingerCard").querySelector(".main-image");
        mainImage.src = this.src;
      });
    }

    let AllBTN = document.getElementsByClassName("selectBTN");
    for (let i = 0; i < AllBTN.length; i++) {
      AllBTN[i].addEventListener("click", function () {
        // console.log("click");
        this.closest(".selectBTN").classList.toggle("slected_activeBTN");
        let pText = this.closest(".selectBTN").querySelector('#text');
        if (pText.innerHTML == "SELECT") {
          pText.innerHTML = 'SELECTED'
        } else {
          pText.innerHTML = "SELECT"
        }
      });
    }
  }, [data]);

  // console.log("render");

  return flag ? (
    <Loading />
  ) : (
    <div className="container-singers">
       <h1 className="SingersHeading">Shortlist</h1>
      <div className="container-content">
        {/* <Fab variant="extended"> */}
        <div className="details-text MuiStepButton-touchRipple">
          <p className="mediumHeading ml-10 ">Details</p>
          <span className="show-md pointer" >
            <IconButton onClick={()=>setCollapseState(prev=>!prev)}>
            <ArrowDropDownCircleIcon />
            </IconButton>
          </span>
        </div>
        {/* </Fab> */}
     <Collapse in={CollapseState} timeout="auto" unmountOnExit>
      <div className="details_div"> 
        <div>
          <p className="mediumHeading">Event Date</p>
          <p className="smallHeading">
            <DatePickerValue />
          </p>
        </div>
        <div>
          <p className="mediumHeading">Location</p>
          <p className="smallHeading"> 
           <CountrySelect/>
         </p>
        </div>
        <div className="budget_div">
          <p className="mediumHeading">Budget</p>
          <div className="budget_tag">
            <p className="mediumHeading">₹500,000</p>
          </div>
        </div>
      </div>
       </Collapse>
     </div>

    <div className="Singers maxWidth">
     
      <center>
        <h1 className="SingersHeading1">Singers</h1>
        <p className="medium textmaxwidth">Select an artist that matches your vibe.</p>
      </center>
     <div className="singersContainer">
      <div className="singersWrapper">
        {movies?.map((ele) => {
          console.log(ele);
          return (
            <SingerCard
              key={ele.id}
              name={ele.title}
              number={ele.rank}
              imageURL={ele.image}
            />
          );
        })}
      </div>
      </div>
    </div>
    </div>
  );
}

export default Singers;
