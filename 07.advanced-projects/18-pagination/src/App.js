import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const switchPage = (type) => {
    if (type === '-') {
      if (page === 0) {
        setPage(data.length - 1);
      } else {
        setPage(page - 1);
      }
    }
    if (type === '+') {
      if (page === data.length - 1) {
        setPage(0);
      } else {
        setPage(page + 1);
      }
    }
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {loading || (
          <div className="btn-container">
            <button className="prev-btn" onClick={() => switchPage('-')}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={() => switchPage('+')}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
