import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (

        <section id="newsletter-1" className="mb-20 newsletter-section division">
            <div className=" container-sm ">
                <div className="inner-bg  bg-black">
                    <div className="row d-flex flex-wrap align-items-center justify-content-center">
                        <div className=" col-10 col-xl-8 mb-2">
                            <div className="newsletter-txt text-center">

                                <h3 className="h3-sm">Subscribe To Newsletter</h3>

                                <p className="p-md grey-color">Subscribe to the weekly newsletter for all the
                                    latest updates</p>

                                <form className="newsletter-form d-flex flex-wrap align-items-stretch" noValidate="true">

                                    <div className="input-group">
                                        <input type="email" className="form-control error"
                                               placeholder="Your email address" required="" id="s-email"
                                               name="EMAIL">
                                        </input>
                                        <span className="input-group-btn">
                                                    <button type= "submit" className="btn btn-green tra-red-hover">sign up</button>
                                                </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NewsLetter