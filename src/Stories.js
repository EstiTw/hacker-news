import React, { useEffect } from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { loading, hits } = useGlobalContext();

  useEffect(() => {}, [hits]);

  if (loading) return <div className="spinner-container loading"></div>;
  return (
    <section className="stories">
      {hits.map((story) => {
        const {
          objectID: id,
          title,
          author,
          url,
          points,
          num_comments: comments,
        } = story;
        return (
          <article className="stroy" key={id}>
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} by <span>{author} |</span> {comments} comments
            </p>
            <div>
              <a href={url} alt={title} className="read-link">
                read more
              </a>
              <button className="remove-btn">remove</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
