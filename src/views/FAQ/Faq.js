import React from 'react'
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import './Faq.css'
import win from "../../assets/images/my-images/grp.jpg"
import rik from "../../assets/images/my-images/clubs.jpg"

const Reward = () => {
    return (<div>
        <Header/>
                 <div className="container">
                     <img className="clubs" src={rik}/>
                         <button class="btn"><a href="#">Join Now</a></button>
                 </div>

                 <div className="container">
                   <div className="main">
                     <div className="hero-txt">
                      <h4 className="txt">Why would I Join The OMG Wine Club</h4>
                      <p className="prg">To be guaranteed wholesale pricing on our select bottles of wine</p>
                      <h4 className="txt">Is there a penalty if I want to cancel my membership?</h4>
                      <p>You can cancel your membership anytime with NO PENALTY</p>
                      <h4 className="txt">Are there any benefits to referring friends?</h4>
                      <p>Every time you refer a friend that becomes an OMG Wine Club Member, you will have a month of your membership fee waived</p>
                      <h4 className="txt">What if I want to order a bottle of wine with my food, but I do not want to become an OMG Wine Club Member?</h4>
                      <p>You can absolutely order a bottle of wine without becoming a member, but you will be charged full retail price for each bottle you purchase.
                      (full retail price will be double the wine club price)</p>
                      <h4 className="txt">Does OMG Provide Wine for Events at Wine Club Pricing?</h4>
                      <p> OMG Event Clients will be grandfathered into annual memberships, and will be able to take advantage of wholesale pricing for 12 months after the event when they order off the OMG Food Menu</p>
                      </div>
                        <div className="ig">
                           <img className="grp" style={{ width:'550px', height:'450px'}} src={win}/>
                        </div>
                    </div>
                 </div>

                 <div className="lst">
                    <div className="container">
                      <p className="end">Copyright<a href="#">OMG Wine Club</a>© 2022. All rights reserved.</p>
                    </div>
                 </div>

              <Footer/>
            </div>
             )
             }
        export default Reward