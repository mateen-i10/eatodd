import React, {Component} from 'react'
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import "./About.css"
class About extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="jumbotron bg-cover text-white headsec">
                    <div className="container py-5 text-center">
                        <h1  className="display-4 pagetitle font-weight-bold">Founder's Story</h1>
                    </div>
                </div>
                <div className="container contentsec">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="post-item">
                                <div className="post__content">
                                    <div className="post__desc">
                                        <p>Olive Mediterranean Grill was built on the American Dream. The owner, Faisal
                                            Ghani, an immigrant to
                                            the United States, came from humble roots, with no plan or direction. He got
                                            his 1st job at a
                                            sandwich shop and worked his way from floors, to driver then manager- and
                                            finally owner. Faisal’s
                                            dream was to leave the world of sandwiches and bring his favorite cuisine to
                                            the city he now loved
                                            and called home- hence the birth of Olive Mediterranean Grill. The menu
                                            items were carefully curated
                                            for a healthy food lover from Chicago. Items like the baba ghanoush the
                                            Lentil Soup with a Twist and
                                            Chicken Kebob sandwich will make you say O-M-G every time!</p>
                                        <p>Aside from being a restaurateur, Faisal is also a fitness enthusiast, and it
                                            remains his vision for
                                            Olive Mediterranean Grill to give Chicagoans the opportunity to indulge
                                            without the guilt! The menu
                                            is clean &amp; locally sourced, with all items made fresh daily, and served
                                            in recyclable containers.
                                            Being good to our bodies, and good to the earth are core company values for
                                            the OMG staff.</p>
                                        <p>Olive Mediterranean Grill is available 7 days a week across every delivery
                                            app, and in store for dine in or take out. Eat, Drink, Live &amp; Love –
                                            Olive Mediterranean Grill!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src="http://eatomg.com/images/team/founder-1.png" width="400"/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default About