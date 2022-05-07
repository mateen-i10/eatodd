import React from "react"
import facebook from "../../assets/images/icons/social/facebook.png"
import twitter from "../../assets/images/icons/social/twitter.png"
import instagram from "../../assets/images/icons/social/instagram.png"

export default function Footer() {
    return (
       <div className="py-1" style={{backgroundColor:"black"}}>
           <div className="container-fluid px-5 text-light">
               <div className="row text-xs-center">
                   <h2 className="col-sm-6 col-lg-3 text-light">Contact Support</h2>
                   <h2 className="col-sm-6 col-lg-3 text-light">Careers</h2>
                   <h2 className="col-sm-6 col-lg-3 text-light">Goods & Gift Cards</h2>
                   <h2 className="col-sm-6 col-lg-3 text-light">Fund Raising</h2>
               </div>
               <div className="row mt-3">
                   <div className="col-lg-6 mb-2 ">
                       <h4 className="text-light">About</h4>
                       <div className="row">
                           <div className="row box">
                               <div className="col-lg-4 p-lg-1 pt-sm-1">Our values</div>
                               <div className="col-lg-4 p-lg-1 pt-sm-1">News and Events</div>
                               <div className="col-lg-4 p-lg-1 pt-sm-1">Investors</div>
                           </div>
                           <div className="row">
                               <div className="col-lg-4 p-lg-1 pt-sm-1">Health and safety</div>
                               <div className="col-lg-4 p-lg-1 pt-sm-1">Cultivate Foundation</div>
                               <div className="col-lg-4 p-lg-1 pt-sm-1">Pizzeria Locale</div>
                           </div>
                           <div className="row">
                               <div className="col-lg-4 p-lg-1 pt-sm-1">All Locations</div>
                               <div className="col-lg-4 p-lg-1 pt-sm-1">Sustainability</div>
                               <div className="col-lg-4 p-lg-1 pt-sm-1">Do Not Sell My Products</div>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-3 mt-xs-3 mb-2">
                       <h4 className="text-light">Connect With Us</h4>
                       <div className="row gap-1">
                           <div className="col-sm-3 col-3"><img src={facebook} alt="facebook"/></div>
                           <div className="col-sm-3 col-3"><img src={instagram} alt="instagram"/></div>
                           <div className="col-sm-3 col-3"><img src={twitter} alt="twitter"/></div>
                       </div>
                   </div>
                   <div className=" col-lg-3">
                       <h4 className="text-light">Download Our App</h4>
                       <div className="row">
                           <div className="d-flex justify-content-between border mb-1 mx-1 " style={{width:"210px"}}>
                               <div className="bg-light  text-black">Play</div>
                               <div className="small">Download on <span className="d-block h3 text-light" >Play Store</span></div>
                           </div>
                           <div className="d-flex justify-content-between border mb-1 mx-1" style={{width:"210px"}}>
                               <div className="bg-light  text-black">App</div>
                               <div className="small">Get it on <span className="d-block h3 text-light" >Google Play</span></div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="row " style={{marginBottom:"10px"}}>
                   <div className="col-xs-4 col-lg-4">
                       <div className="d-flex w-sm-25 ">
                           <div className="bg-light text-black rounded-circle p-1">US</div>
                           <p className="mt-1 mx-1 ">United States</p>
                       </div>
                       <div className="small mt-1">© 2022 EatOMG Mexican Grill</div>
                   </div>
                   <div className="row col-xs-4 col-lg-8 d-flex info">
                       <p className="col-sm-6 col-lg-3 small p-1">California Transparancy in Supply Chain Act</p>
                       <p className="col-sm-6 col-lg-3 small p-1">Terms Of Use</p>
                       <p className="col-sm-6 col-lg-3 small p-1">Accessibility Statement</p>
                       <p className="col-sm-6 col-lg-3 small p-1">Privacy Policy</p>
                   </div>
               </div>
           </div>
       </div>

    )
}