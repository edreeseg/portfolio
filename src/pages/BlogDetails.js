import Disqus from "disqus-react";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown/with-html";
import Layout from "../components/Layout";

// this file contains information on one individual blog post finding it ny id
// this is where each individual disqus comment section is configured

function BlogDetails(props) {
  const [content, setContent] = useState(""); // content is a blog post in .md
  const blogId = props.match.params.id; // blogId is a number in sting
  const blogFile = props.match.params.title; // blogFile is the name-of-the-md-file

  useEffect(() => {
    setContent(props.location.state.article.filesource)  
  }, [content, blogFile]);

  const disqusShortname = "allandev-com"; //found in your Disqus.com dashboard
  const disqusConfig = {
    url: 'https://allandev-com.disqus.com/embed.js', //Homepage link of this site.
    identifier: blogId, // unique id for disqus
    title: blogFile
  };

  return (
    <Layout>
      <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <ReactMarkdown source={content} escapeHtml={false}></ReactMarkdown> 
          <div className="mi-blog-details-comments mt-30">
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetails;
