import Tech from "../images/Tech.png";
import Eventguide from "../images/eventguide.png";
import Medication from "../images/medication.png";
import Weather from "../images/Weather.png";

export const projects = [
  {
    id: 1,
    title: "Medicine",
    label: "Online Pharmacy",
    image: Medication,
    description:
      "Medicine is an online pharmacy web application meant to be help patients find their medication and health products with ease. Medicine is build with React,Rails API, and Postgres. A role based security system was implemented to create permisssion based roles. The roles of Admin restrict what the user can see and do. The client can browse and see any product when they land on the page, they can choose products by category, they can select a product then they'll be redirected to a single page where they can read more about it, review and also add to cart. Admin has all the authority to visit any part of the site plus they can visit the admin dashboard. In the dashboard they can create, delete, update, fetch all the products. They can also see all the orders and see all the users who have registered to the site.",
    development:
      "The front end was developed with React, Redux, Material UI, Firebase. The backend utilizes MVC and Rails API. The database was build with SQL server and hosted on Heroku. Please visit the site and try it out.",
    categories: "Web Application",
    technologies: [
      "React",
      "Rails API",
      "Postgresql",
      "Firebase",
      "Material UI",
    ],
    link: "https://medicine-phi.vercel.app/",
    bg: "#DCEFFF",
    repo: "https://github.com/moryno/online-pharmacy",
  },
  {
    id: 2,
    title: "Tech Blog",
    label: "Blog Website",
    image: Tech,
    description:
      "Tech blog is a web application meant to be used in an institution to allow students, technical mentors or any person in the organisation to write, edit, read and post aritcles about a topic they are interested in. Tech blog is build with React,Nodejs, and MongoDB. The website is ment to provide a platform where each member of the institution can share their ideas and interests with the other members of the institution creating an interactive environment and bring people together.  A visitor to the website can browse and read any article or search on articles by author name or categories. A registered user are further provided with tools to create, upload, edit and delete thier own articles.",
    development:
      "The front end was developed with React, ContextAPI, React Icons, Firebase. The backend was build with Nodejs. The database was build with MongoDb server and hosted on Heroku. Please visit the site and try it out.",
    categories: "Web Application",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],

    bg: "#fbf0f4",
    link: "https://tech-blog-moryno.vercel.app/",
    repo: "https://github.com/moryno/Tech-Blog",
  },
  {
    id: 3,
    title: "Event Guide",
    label: "Events Center",
    image: Eventguide,
    description:
      "Eventguide is a web application meant to be help their clients in keeping upto date with major events that is meaningful to them. Eventguide is build with React,Rails API, and Postgres. The user can browse and read any events when they land on the page, the can choose events by category, they can select an event interesting to them and read more about it. When they are in a particular event like movies they can read comments about that particular movie and also be able to comment on the movie.",
    development:
      "The front end was developed with React, Redux, Material UI. The backend utilizes MVC and Rails API. The database was build with SQL server and hosted on Heroku. Please visit the site and try it out.",
    categories: "Web Application",
    technologies: [
      "React",
      "Rails API",
      "Postgresql",
      "Firebase",
      "Material UI",
    ],
    link: "https://event-guide-jvquku5fg-moryno.vercel.app/",
    bg: "#fcf1ed",
    repo: "https://github.com/moryno/Event-Guide",
  },
  {
    id: 4,
    title: "Weather",
    label: "Weather Forecast",
    image: Weather,
    description:
      "Weather is a web application meant to be help the user in keeping upto date with weather changes around them and the world. The user is able to search for upto 200,000 major cities and towns around the world.",
    development:
      "The website incorporates the use of HTML and CSS for the frontend and JavaScript to fetch data from an external API and populate the frontend.",
    categories: "Web Application",
    technologies: ["HTML", "CSS", "JavaScript", "Public API"],
    bg: "#9B7457",
    link: "https://moryno.github.io/WeatherApp-Project/",
    repo: "https://github.com/moryno/WeatherApp-Project",
  },
];
