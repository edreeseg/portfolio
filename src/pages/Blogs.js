import React, { useState, useEffect } from "react";
import axios from "axios";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import BlogsView from "../components/BlogsView";
import Pagination from "../components/Pagination";

// in this component we get all the blogs from the backend and save them to the posts state. 

function Blogs() {
  const [posts, setPosts] = useState([]); // array of all posts
  const [currentPage, setCurrentPage] = useState(1); // current page for pagination
  const [postsPerPage] = useState(6); // set how many blog posts per page

  useEffect(() => {
    let mounted = true;
    axios.get("https://allandev-blog.herokuapp.com/articles").then(response => {
      if(mounted){
        setPosts(response.data);
      }
    });
    return () => mounted = false;
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  }

  // this layout is returned to the main App.js component  
  return (
    <Layout>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Recent Blogs" />  
          <BlogsView blogs={currentPosts} />   {/*this is where the currentBlogs prop is passed down to Blog.js */}
          {!(posts.length > postsPerPage) ? null : (
            <Pagination
              className="mt-50"
              itemsPerPage={postsPerPage}
              totalItems={posts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Blogs;
