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
        const sortedData = response.data.sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
        setPosts(sortedData);
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

  // This is the page that is displayed in url/blogs 
  // it returns three componets which is displayed when on this PATH 
  // 1 - Section title which just displays and styles "Recent Blogs"
  // 2 - BlogsView which is what all the blogs should look like in the page
  // 3 - Pagination takes care of the pagination logic
  return (
    <Layout>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Recent Blogs" />  
          {/*this is where the currentBlogs prop is passed down to BlogsView component */}
          <BlogsView blogs={currentPosts} />   
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
