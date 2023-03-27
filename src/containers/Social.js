import React, { useState, useEffect } from 'react';
import './social.css';

export function Comments() {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([
    { user: 'User1', comment: 'Lorem ipsum dolor sit amet' },
    { user: 'User2', comment: 'consectetur adipiscing elit' },
    { user: 'User3', comment: 'sed do eiusmod tempor incididunt' },
  ]);
  const [trendingTopics, setTrendingTopics] = useState([
    'Avengers: Endgame',
    'Joker',
    'Parasite',
    'The Irishman',
    '1917',
    'Once Upon a Time in Hollywood',
    'Ford v Ferrari',
    'Knives Out',
    'Us',
    'Little Women',
  ]);

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (comment.trim()) {
      setCommentsList([...commentsList, { user: 'New User', comment }]);
      setComment('');
    }
  };

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
          <h3>Trending Topics</h3>
          <ul>
            {trendingTopics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
        <div className="discussion">
          <div className="comments-list">
            {commentsList.map((c, index) => (
              <div key={index} className="comment">
                <img src={`/images/users/${index % 5}.png`} alt="user" />
                <div className="comment-text">
                  <p className="user-name">{c.user}</p>
                  <p className="comment-body">{c.comment}</p>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="input-wrapper">
              <input type="text" value={comment} onChange={handleInputChange} placeholder="Add a comment" />
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
