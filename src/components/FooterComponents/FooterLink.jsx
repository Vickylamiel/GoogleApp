import React from 'react';
import "../../assets/styles/footerLink.css";
import Carbon from "../../assets/images/carbon image.png";


export default function FooterLink() {
  return (
    <div className='footer_link'>
      <div className="right_footer_link">
        <a href="#">About</a>
        <a href="#">Advertising</a>
        <a href="#">Business</a>
        <a href="#">How Search Works</a>
      </div>
      <div className="carbon_text">
      <a href="#"><img src={Carbon} alt="carbon" /> Carbon neutral since 2007</a>
      </div>
      <div className="left_footer_link">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Settings</a>
      </div>
    </div>
  )
}
