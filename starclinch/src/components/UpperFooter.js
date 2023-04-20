import React from "react";
import "./styles/UpperFooter.css";

function UperFooter() {
  return (
    <div className="UperFooter">
      <div>
        <p className="large" style={{fontWeight:600}}>6000+ Users trust StarClinch.</p>
        <p className="small" style={{fontWeight:400,color:'#C8A870'}}>Booking Terms & Conditions</p>
      </div>
      <div>
        <p className="large" style={{fontWeight:600}}>BOOKING TERMS & CONDITIONS FOR CLIENT</p>
        <p className="medium">Advance Fee and Payment Terms</p>
      </div>
      {/* <div className="maxWidthforpoiter pointer">
            <p className="boldPointer">All acts are subject to availability</p>
            <p className="boldPointer">GST @18% will be applicable</p>
            <p className="boldPointer">We take an advance of 50% to confirm a show</p>
            <p className="boldPointer">Quotation is valid for 14 days and subject to change</p>
            <p className="boldPointer">The balance amount needs to be paid 7 days before the show</p>
            <p className="boldPointer">TBL (Travel, Boarding & Lodging) will be arranged by the organizer</p>
            <p className="boldPointer">Tech-Rider (sound, stage & lighting) will be arranged by the organizer</p>
            <p className="boldPointer">EMI is applicable for payments made by Credit Cards only</p>
      </div> */}
    </div>
  );
}  

export default UperFooter;
 