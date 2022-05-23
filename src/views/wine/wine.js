import React from 'react'
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import './wine.css'
import wn1 from "../../assets/images/my-images/wine1.jpg"
import styll from "../../assets/images/my-images/styl1.png"
import gaym from "../../assets/images/my-images/gayms.png"
import wne from "../../assets/images/my-images/gwine1.jpg"
import mum from "../../assets/images/my-images/mumm.png"
import cine from "../../assets/images/my-images/VCine.png"
import ruf from "../../assets/images/my-images/rufino.png"

const Reward = () => {
    return (<div>
        <Header/>

             <div className="container">
                 <div className="row">
                   <div className="col-md-6">
                      <img className="wine1" style={{ width: '400px'}} src={wn1}/>
                   </div>

                   <div className="col-md-6">
                       <img className="styl1" style={{ width: '100px',height:'20'}} src={styll}/>
                       <p className="content">The OMG Wine Club was created to make you say OMG at your savings!
                        We are the 1st wine club that was created to SAVE YOU MONEY!
                        We appreciate you and your loyalty to OMG. As our way to say THANK YOU,
                        we are extending you the opportunity to purchase your favorite wines AT COST!
                        Since wine pairs PERFECTLY with our food, we figured why not let YOU PAY WHAT WE PAY?!
                        We are not complicated; we just want you to EAT. LIVE. LOVE – now with your favorite glass of wine.
                       Cheers Friends!</p>

                   </div>
                 </div>
             </div>
             <div className="container">
                              <div className="row">
                                 <h3 className="neww"><p> Someliers Selection</p></h3>
                                 <h5 className="nm2" >WINE OF THE WEEK</h5>
                              </div>

                             <div className="row">
                              <div className="col-md-6">
                              <a href="https://north-avenue.ninetofab.com/order-now/">
                              <img className="gayms" style={{ width: '280px',height:'20'}} src={gaym}/></a>
                              </div>
                              <div className="col-md-6">
                                <img className="gwine1" style={{ width: '400px',height:'400px'}} src={wne}/>
                              </div>
                              </div>
                              <div className="row">
                                 <div className="col-md-6">
                                    <a className="center" href="http://eatomg.com/wineclub/product/caymus/">Caymus</a>
                                 </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <span class="price">$66.00</span>
                                </div>
                              </div>

             </div>

               <div className="container">
               <div className="mid">
                   <div className="row">
                    <div className="col-md-4">
                       <h3 className="neww">OMG WINE CLUB</h3>
                       <h3 className="nm2">FEATURED WINES</h3>
                       <img className="styl1" style={{ width: '100px',height:'20'}} src={styll}/>
                         <ul className="hero-style">
                         <li>
                         <a className="colr" href="#1641866197217-05ffc30d-7174">Sparkling</a>
                         </li>
                         <li>
                         <a className="colrr" href="#roes_tab">White</a>
                         </li>
                         <li>
                           <a className="colrr" href="#1641866196518-2cca3748-66ed">Rose</a>
                         </li>
                         <li>
                          <a className="colrr" href="#1641866195338-9fd17192-0ddd">Red</a>
                         </li>
                         </ul>
                    </div>
                      <div className="col-md-4">
                         <img className="mumm" style={{ width: '250px'}} src={mum}/>
                      </div>
                      <div className="col-md-4">
                         <img className="VCine" style={{ width: '250px'}} src={cine}/>
                       </div>
                   </div>
                   <div className="row justify-content-end">
                     <div class="col-4">
                           <a href="http://eatomg.com/wineclub/product/veuve-clicquot/">Mumm</a>
                     </div>
                     <div class="col-4">
                           <a href="http://eatomg.com/wineclub/product/mumm/">Veuve Clicquot</a>
                     </div>
                   </div>
                   <div className="row justify-content-end">
                        <div class="col-4">
                           <span class="price">$47.00</span>
                        </div>
                        <div class="col-4">
                           <span class="price">$14.00</span>
                        </div>
                   </div>
                    <div class="row">
                        <div class="col align-self-center">
                        </div>
                        <div class="col align-self-center">
                              <img className="rufino" style={{ width: '250px'}} src={ruf}/>
                        </div>
                      </div>
                       <div class="row">
                         <div class="col align-self-center">
                         </div>
                         <div class="col align-self-center">
                           <a href="http://eatomg.com/wineclub/product/ruffino-prosecco/">Rufino</a>
                         </div>
                       </div>
                       <div class="row">
                         <div class="col align-self-center">
                         </div>
                         <div class="col align-self-center">
                            <span class="price">$12.00</span>
                         </div>
                       </div>
               </div>
               </div>

                 <div className="container">
                  <div className="border">
                    <p className="b1">JOIN TODAY TO GET ACCESS TO </p>
                    <p className="b1"> WHOLESALE PRICES </p>
                    <p className="b1">ON AMERICAS MOST COVETED WINES </p>
                    <div className="cen">
                    <a className="btn-button" href="https://north-avenue.ninetofab.com/wineclub/register">
                    JOIN NOW</a>
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