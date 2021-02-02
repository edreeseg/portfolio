import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import ProgressiveImage from 'react-progressive-image';
import { DiGithubAlt } from 'react-icons/di'

function Portfolio(props) {
  const [toggler, setToggler] = useState(false);
  const { title, subtitle, imageUrl, largeImageUrl, url, getIcons, github } = props.content;
  const handleToggler = (value) => {
    setToggler(value);
  }

  return (
    <div className="mi-portfolio mi-portfolio-visible">
      <div className="mi-portfolio-image">
        {/* <img src={imageUrl} alt={title} /> */}
        <ProgressiveImage src={imageUrl}>
          {src => <img src={src} alt={title} />}
        </ProgressiveImage>
        <ul>
          {!largeImageUrl ? null : <li>
            <div className="iconsWrapper" onClick={() => handleToggler(!toggler)}>
              <h5>Tech used in this project</h5>
              <p>click icon for code snipet</p>
              {getIcons()}
            </div>
          </li>}
        </ul>
      </div>
      {!url ? <h5>{title}</h5> : <h5 className='subtitle'>
        <a rel="noopener noreferrer" target="_blank" href={url}>
          {title}
        </a>
        <a rel='noopener noreferrer' href={github} target='_blank'><DiGithubAlt size={'1.6em'} /></a>
      </h5>}
      {subtitle ? <h6>{subtitle}</h6> : null}
      {!largeImageUrl ? null : <FsLightbox
        toggler={toggler}
        sources={largeImageUrl}
      />
      }
    </div>
  );
}

export default Portfolio;
