import React from 'react'
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import '../css/radeem.css';
import '../css/style.css';
import Cookies from 'js-cookie';
import {RedeemApi} from '../api/hitapi';
import Swal from 'sweetalert2';

const Redeem = () => {

  const point=Cookies.get("point");

  const RedeemPoint=()=>{
    const ani = Cookies.get("ani");
    if(point>=20)
    {
      RedeemApi(ani).then((response)=>{
        console.log(response.data.points);
        Cookies.set("point",response.data.points);
        Swal.fire({
          text: "SuccessFully Redeem  10 Points",
          icon: "success",
          
        });
        setTimeout(() => window.location.reload(), 1000);
      })
    }
    else
    {
      Swal.fire({
        text: "You Don't Have Sufficient Points",
        icon: "error",
      });
    }
    

  }
  return (
    <div>
        <Navbar />

    <div className="hero-banner-area jarallax">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 d-flex justify-content-center">
            <div className="hero-banner-content">
              <div className="content">
                <span className="sub-title d-flex justify-content-center">Your Balance</span>
                <h1 className=" d-flex justify-content-center" style={{color:'white'}}>{point} points</h1>
                <h6 className=" d-flex justify-content-center" style={{color:'white'}}>1000 Points =10Rs</h6>
                <div className="btn-box d-flex justify-content-center">
                  <button onClick={()=>{RedeemPoint()}} className="default-btn">Redeem</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="jarallax-container-0" style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -100}}>
      </div>
    </div>
    <section className="stream-schedule-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="single-stream-schedule-box">
              <span className="date">Total earned</span>
              <div className="content">
                {/* <span class="time">You have earned</span> */}
                <h3 style={{color:'white'}}> {point} Points</h3>
              </div>
              <a href="#!" className="link-btn" />
            </div>
          </div>
          {/* <div class="col-lg-6 col-md-12 col-6">
                <div class="single-stream-schedule-box not-streaming">
                    <span class="date">Jun <br> 25</span>
                    <div class="content">
                        <span class="time">You have redeemed</span>
                        <h3>-20 Points</h3>
                    </div>
                    <a href="#" class="link-btn"></a>
                </div>
            </div>

            <div class="col-lg-6 col-md-12 col-6">
                <div class="single-stream-schedule-box">
                    <span class="date">Jan <br> 25</span>
                    <div class="content">
                        <span class="time">You have earned</span>
                        <h3>+108 Points</h3>
                    </div>
                    <a href="#" class="link-btn"></a>
                </div>
            </div>

            <div class="col-lg-6 col-md-12 col-6">
                <div class="single-stream-schedule-box">
                    <span class="date">20 <br> June</span>
                    <div class="content">
                        <span class="time">You have earned</span>
                        <h3>+20 Points</h3>
                    </div>
                    <a href="#" class="link-btn"></a>
                </div>
            </div>

            <div class="col-lg-6 col-md-12 col-6">
                <div class="single-stream-schedule-box not-streaming">
                    <span class="date">Dec <br> 18</span>
                    <div class="content">
                        <span class="time">You have earned</span>
                        <h3>+37 Points</h3>
                    </div>
                    <a href="#" class="link-btn"></a>
                </div>
            </div>

            <div class="col-lg-6 col-md-12 col-6">
                <div class="single-stream-schedule-box">
                    <span class="date">Jan <br> 25</span>
                    <div class="content">
                        <span class="time">You have redeemed</span>
                        <h3>-103 Points</h3>
                    </div>
                    <a href="#" class="link-btn"></a>
                </div>
            </div>

            <div class="col-lg-6 col-md-12 col-6">
                <div class="single-stream-schedule-box">
                    <span class="date">20 <br> June</span>
                    <div class="content">
                        <span class="time">You have redeemed</span>
                        <h3>-19 Points</h3>
                    </div>
                    <a href="#" class="link-btn"></a>
                </div>
            </div>

            <div class="col-lg-6 col-md-12 col-6">
                <div class="single-stream-schedule-box not-streaming">
                    <span class="date">Dec <br> 18</span>
                    <div class="content">
                        <span class="time">You have earned</span>
                        <h3>+37 Points</h3>
                    </div>
                    <a href="#" class="link-btn"></a>
                </div>
            </div> */}
        </div>
      </div>
    </section>
    <Footer />
  </div>
  )
}

export default Redeem