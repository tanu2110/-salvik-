import React from 'react';
import './social.css';

export function Social() {
  return (
    <section className="section home-feature" id="ourplans">
      <div className="containerrs">
        <h2>Our Plans</h2>
        <div className="first">
          <div className="col-lg-12">
            <div className="second">
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
              >
                <div className="features-small-item">
                  <div className="icon">
                    <h1>S</h1>
                  </div>
                  <h5 className="features-title">Silver Plan- Rs. 399</h5>
                  <p>
                    <ul>
                      <li>1. Access to all the contents for 3 months. </li>
                      <li>2. Merchandise</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
              >
                <div className="features-small-item">
                  <div className="icon">
                    <h1>G</h1>
                  </div>
                  <h5 className="features-title">Gold Plan- Rs. 699</h5>
                  <p>
                    <ul>
                      <li> Access to all the contents for 6 months</li>
                      <li> Merchandise. </li>
                      <li> Artist Interaction.</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
              >
                <div className="features-small-item">
                  <div className="icon">
                    <h1>P</h1>
                  </div>
                  <h5 className="features-title">Platinum Plan- Rs. 999</h5>
                  <p>
                    <ul>
                      <li>1. Yearly Subscription to all the benefits. </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
