import * as React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

const projects = [
  {
    id: 1,
    title: "React Search App",
    subtitle: "A simple React app",
    imageUrl: "/images/movie-search.png",
    largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    url: 'https://allan-movie-searcher.netlify.app/',
    github: "https://github.com/allan-io/movie-searcher",
    getIcons: function() {
      return (
        <div>
          <FaReact className={'iconStyles'} size={'2em'}/>
          <FaNodeJs className={'iconStyles'} size={'2em'} />
        </div>
      )
    }
  },
  {
    id: 2,
    title: "Coffee Mug",
    subtitle: "Awesome coffee mug design.",
    imageUrl: "/images/portfolio-image-4.jpg",
    largeImageUrl: [
      "/images/portfolio-image-4-lg.jpg",
      "/images/portfolio-image-4-lg2.jpg"
    ],
    url: 'https://facebook.com',
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 4,
    title: "Pen Holder",
    subtitle: "A pen holder with beautiful design.",
    imageUrl: "/images/portfolio-image-3.jpg",
    largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
    url: 'https://facebook.com',
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 5,
    title: "Mug",
    subtitle: "Mug with awesome style",
    imageUrl: "/images/portfolio-image-5.jpg",
    largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    url: "#",
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 6,
    title: "Pendrive",
    subtitle: "Free pendrive mockup design.",
    imageUrl: "/images/portfolio-image-6.jpg",
    largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    url: "#",
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 7,
    title: "Beautiful Pendrive",
    subtitle: "Pendrive with great design & flexible.",
    imageUrl: "/images/portfolio-image-7.jpg",
    largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
    url: 'https://twitter.com',
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 8,
    title: "Sticker",
    subtitle: "Clip sticker mockup design.",
    imageUrl: "/images/portfolio-image-8.jpg",
    largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    url: "#",
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 9,
    title: "Packet",
    subtitle: "Beautiful packet & product design.",
    imageUrl: "/images/portfolio-image-9.jpg",
    largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    url: "#",
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 10,
    title: "Pen Holder",
    subtitle: "A pen holder with beautiful design.",
    imageUrl: "/images/portfolio-image-3.jpg",
    largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
    url: '#',
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 11,
    title: "Coffee Mug",
    subtitle: "Awesome coffee mug design.",
    imageUrl: "/images/portfolio-image-4.jpg",
    largeImageUrl: [
      "/images/portfolio-image-4-lg.jpg",
      "/images/portfolio-image-4-lg2.jpg"
    ],
    url: 'https://facebook.com',
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 12,
    title: "Tea & Coffee Mug",
    subtitle: "Beautiful mug with logo.",
    imageUrl: "/images/portfolio-image-2.jpg",
    url: 'https://pinterest.com',
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 13,
    title: "T-shirt Mockup",
    subtitle: "A beautiful t-shirt mockup.",
    imageUrl: "/images/portfolio-image-1.jpg",
    largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    url: 'https://dribbble.com',
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 14,
    title: "Mug",
    subtitle: "Mug with awesome style",
    imageUrl: "/images/portfolio-image-5.jpg",
    largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    url: "#",
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 15,
    title: "Pendrive",
    subtitle: "Free pendrive mockup design.",
    imageUrl: "/images/portfolio-image-6.jpg",
    largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    url: "#",
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 16,
    title: "Beautiful Pendrive",
    subtitle: "Pendrive with great design & flexible.",
    imageUrl: "/images/portfolio-image-7.jpg",
    largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
    url: 'https://twitter.com',
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 17,
    title: "Sticker",
    subtitle: "Clip sticker mockup design.",
    imageUrl: "/images/portfolio-image-8.jpg",
    largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    url: "#",
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 18,
    title: "Packet",
    subtitle: "Beautiful packet & product design.",
    imageUrl: "/images/portfolio-image-9.jpg",
    largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    url: "#",
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 19,
    title: "T-shirt Mockup",
    subtitle: "A beautiful t-shirt mockup.",
    imageUrl: "/images/portfolio-image-1.jpg",
    largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    url: 'https://dribbble.com',
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 20,
    title: "Coffee Mug",
    subtitle: "Awesome coffee mug design.",
    imageUrl: "/images/portfolio-image-4.jpg",
    largeImageUrl: [
      "/images/portfolio-image-4-lg.jpg",
      "/images/portfolio-image-4-lg2.jpg"
    ],
    url: 'https://facebook.com',
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 21,
    title: "Tea & Coffee Mug",
    subtitle: "Beautiful mug with logo.",
    imageUrl: "/images/portfolio-image-2.jpg",
    url: 'https://pinterest.com',
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 22,
    title: "Pen Holder",
    subtitle: "A pen holder with beautiful design.",
    imageUrl: "/images/portfolio-image-3.jpg",
    largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
    url: '#',
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  },
  {
    id: 23,
    title: "Mug",
    subtitle: "Mug with awesome style",
    imageUrl: "/images/portfolio-image-5.jpg",
    largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    url: "#",
    github: "#",
    getIcons: function() {
      return (
        <div>
          <SiJavascript className={'iconStyles'} size={'2em'}/>
        </div>
      )
    }
  }
];

export default projects;
