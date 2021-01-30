import React from "react";
import Blog from './Blog';

// the Blogs component passes down all the blogs that are currently showing on the 
// url/blog path so props = array of blog objects
// this componente loops through all the currentBlogs array and created a BLOG component for each one of the component. the props it passes to each one of the blogs is the data for each one of the articles fetched from strapi

function BlogsView({blogs}) {
  return (
    <div className="row mt-30-reverse">
      {blogs.map(blog => (
        <div className="col-lg-6 col-md-6 col-12 mt-30" key={blog.id}>
          <Blog data={blog} />
        </div>
      ))}
    </div>
  );
}

export default BlogsView;
