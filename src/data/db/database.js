import Mock from "../mock";
import React from 'react'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

const database = {
  information: {
    name: 'Allan Oliveira',
    aboutContent: "I am a full stack web developer. I can provide clean code using the latest technologies. Feel free to check out all my previous projects",
    age: Math.abs((new Date(Date.now() - new Date('1986-03-17').getTime())).getFullYear() - 1970),
    phone: '+1 781-363-7337',
    nationality: 'Brazilian-American',
    language: 'English, Portuguese, Spanish',
    email: 'allanoliveira.dev@gmail.com',
    address: 'Boston, MA',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/allan.oliveira.1257',
      twitter: 'https://twitter.com/allanoliveira17',
      linkedin: 'https://www.linkedin.com/in/allanoliveiradev/',
      dribbble: 'https://dribbble.com/allandev',
      github: 'https://github.com/allan-io'
    },
    brandImage: '/images/brand-image.jpeg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/cv.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Allan is extremely team friendly, I really enjoyed working with him on our online bank application. Expect nothing less than full commitment from this guy.",
      author: {
        name: 'Bruno Paula',
        designation: 'Bank One Project'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "Javascript",
      value: 90
    },
    {
      title: "CSS3",
      value: 85
    },
    {
      title: "HTML5",
      value: 90
    },
    {
      title: "MongoDB",
      value: 75
    },
    {
      title: "ReactJS",
      value: 85
    },
    {
      title: "ExpressJS",
      value: 80
    },

    {
      title: "NodeJS",
      value: 75
    },
    {
      title: "Mongoose",
      value: 70
    },
    {
      title: "Ruby on Rails",
      value: 65
    },
    {
      title: "C",
      value: 70
    }
  ],
  portfolios: [
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
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2020 - Present",
        position: "Frontend Web Developer",
        company: "Abc Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 2,
        year: "2016 - 2018",
        position: "Frontend Web Developer",
        company: "CBA Company (6 months)",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 3,
        year: "2014 - 1016",
        position: "UI/UX Designer",
        company: "Example Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2018 - 2019",
        graduation: "Master of Science",
        university: "Abc University",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 2,
        year: "2016 - 2018",
        graduation: "Bachelor of Science",
        university: "Abc University",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 3,
        year: "2015 - 2016",
        graduation: "Higher Schoold Graduation",
        university: "Abc College",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+1 781-363-7337'],
    emailAddress: ['info@allandev.com'],
    address: "69 Fernwood Ave, Revere, MA 02151, United States"
  }
}

Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});