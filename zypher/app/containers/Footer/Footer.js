import React from 'react'
import Wrapper from './wrapper';
import {Link} from 'react-router-dom';
import  Li from './Li';

const Footer = () =>{
return(
<Wrapper>
    
<div className="footer">
  <div className="contain">
  <div className="col">
    <h1>Zypher</h1>
    <ul>
      <Li><Link to="/about"  style={{textDecoration:'none'}}>About </Link></Li>
      <Li><Link to="/team"  style={{textDecoration:'none'}}>Team </Link></Li>
      <Li><Link to="partners"  style={{textDecoration:'none'}}>Partners </Link></Li>
     
    </ul>
  </div>
  <div className="col">
    <h1>INFORMATION</h1>
    <ul>
    <Li><Link to="/terms" style={{textDecoration:'none'}}>Rental Terms & Condition</Link></Li>
     
    </ul>
  </div>
  <div className="col">
    <h1>POLICIES</h1>
    <ul>
    <Li><Link to="/refund"  style={{textDecoration:'none'}}>Return & Refund</Link></Li>
    <Li><Link to="/privacy"  style={{textDecoration:'none'}}>Privacy Policy </Link></Li>
    </ul>
  </div>
  <div className="col-zypher">
    <h1>Zypher</h1>
    <ul>
      <li>Zypher brings your Favorite Books to your doorstep or Home. Why books, because we know the feel of Books. Either be it Novels or for your Exam Prepartion, Reading books digitally is hard and it never matches the smell and touch of physical books. Place Order for any books you like and it'll be on your way. Browse from over 2K + handpicked books by our bookish Team, who never stop finding their next read.
      
  </li>
    </ul>
  </div>
 
  <div className="col social">
    <h1>Social</h1>
    <ul>
      <li><i className="fab fa-facebook-f"  style={{fontSize: '20px',color:'#4267b2',padding:'0px 4px'}}/></li>
      <li><i className="fab fa-linkedin-in"  style={{fontSize: '20px',color:'#4875B4',padding:'4px'}}></i></li>
      <li><i className="fab fa-github-square" style={{fontSize: '20px',color:'(#3E2C00',padding:'4px'}}></i></li>
    </ul>
  </div>
<div className="clearfix"></div>
</div>
</div>

</Wrapper>



);
}
export default Footer; 
