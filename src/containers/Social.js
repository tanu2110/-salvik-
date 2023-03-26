import React from 'react';
import './social.css';

export function Comments() {
  return (
    <section className="section home-feature" id="social">
      <div className="comments">
        <h2>Social</h2>
        <div className="title-social">
          <h1> Salvik Social</h1>
        </div>
      </div>
      <div className="group">
        <div className="sidebar">
          <p>
            Trending Topics
            <img src="/images/icons/chevron-right.png" alt="" />
          </p>
          <ol>
            <li>number 1</li>
          </ol>
        </div>
        <div className="discussion">
          <p>
            <img src="/images/users/2.png" alt="user" /> Username1
          </p>
          <br />
          <p>Comment1</p>
        </div>
      </div>
    </section>
  );
}
