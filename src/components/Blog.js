import React from "react";
import ProgressiveImage from 'react-progressive-image';
import { Link } from "react-router-dom";

// this coomponent is how each Blog looks like on the url/blogs page. it has the month and day in the blue box, the image that should be provided through the api, and the title underneath 
// It also provides a important link to a path to url/blogs/blog-details/id/name once you click on blog component

function Blog(props) {
  const { id, featuredImage, title, createDay, createMonth } = props.data;

  const getShortMonth = month => {
    return month.slice(0, 3);
  };
  const getNospaceTitle = title => {
    return title.split(' ').join('_')
  };

  console.log(getNospaceTitle(title))

  return (
    <div className="mi-blog">
      <div className="mi-blog-image">
        <Link to={{
          pathname: `blogs/blog-details/${id}/${getNospaceTitle(title)}`,
          state: {
            article: props.data
          }
        }}>
          {/*need to change the source here maybe get rid of placeholder?*/}
        <ProgressiveImage
          // source to full size image
            src={featuredImage.name}
          // tiny image placeholder
          placeholder="/images/blog-image-placeholder.png"
        >
          {/* need src to have the correct value*/}
          {src => <img src={src} alt={title} />}
        </ProgressiveImage>
        </Link>
        <div className="mi-blog-date">
          <span className="date">{createDay}</span>
          <span className="month">{getShortMonth(createMonth)}</span>
        </div>
      </div>
      <div className="mi-blog-content">
        <h5>
          {/*need to change the path here*/}
          <Link to={`blogs/blog-details/${id}/${getNospaceTitle(title)}`}>
            {title}
          </Link>
        </h5>
      </div>
    </div>
  );
}

export default Blog;
