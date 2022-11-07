import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) return <div className="loading" />;
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
              <a
                href={url}
                alt={title}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                read more
              </a>
              <button className="remove-btn" onClick={() => removeStory(id)}>
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
