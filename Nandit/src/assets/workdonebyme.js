import converter from "../assets/converter.png";
import chat_app from "../assets/chat_app.png";
import crypto_currency from "../assets/crypto_currency.png";
import currency_converter from "../assets/currency_converter.png";
import e_commerce from "../assets/e_commerce.png";
import geo from "../assets/geo.png";
import hotel_booking from "../assets/hotel_booking.png";
import real_estate from "../assets/real_estate.png";
import spotify from "../assets/spotify.png";
import text_reader from "../assets/text_reader.png";
import bank_management from "../assets/bank_management.png";

const projects = [
  {
    _id: 1,
    name: "Hotel Booking",
    description:
      "Developed a hotel booking app with features for hotel owners to add hotels and customers to book them. Provided hotel owners with full access to manage their hotel bookings. Integrated Cloudinary for image uploads. Used Firebase Authentication for secure user login and registration.",
    tags: [
      {
        _id: 1,
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        _id: 2,
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        _id: 3,
        name: "nodemailer",
        color: "green-text-gradient",
      },
      {
        _id: 4,
        name: "twilio",
        color: "blue-text-gradient",
      },
    ],
    image: hotel_booking,
    source_code_link: "https://github.com/nandit9893/Sharma-Hotel-Bookings",
    live_preview_link: "https://sharma-resident-stays.onrender.com",
  },
  {
    _id: 2,
    name: "Geographical Information System",
    description:
      "Developed a GIS application using the MERN stack to efficiently manage and visualize geospatial data. Integrated interactive maps with libraries like Leaflet.js or Map Box. Utilized MongoDB’s geospatial features for precise data storage and querying, while Express.js and Node.js handled backend API operations. ",
    tags: [
      {
        _id: 1,
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        _id: 2,
        name: "leaflet js",
        color: "blue-text-gradient",
      },
      {
        _id: 3,
        name: "mapbox",
        color: "green-text-gradient",
      },
    ],
    image: geo,
    source_code_link: "https://github.com/nandit9893/GIS",
    live_preview_link: "https://gis-front-end.onrender.com",
  },
  {
    _id: 3,
    name: "Chat App",
    description:
      "Chat application, built with the MERN stack (MongoDB, Express.js, React.js, Node.js), offers a secure and user-friendly platform for real-time communication. Users can easily sign up, log in, and engage in conversations, all within a responsive interface that adapts to both desktop and mobile devices.",
    tags: [
      {
        _id: 1,
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        _id: 2,
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chat_app,
    source_code_link: "https://github.com/nandit9893/chat-app",
    live_preview_link: "https://chat-app-front-end-h85p.onrender.com",
  },
  {
    _id: 4,
    name: "Real Estate",
    description:
      "A real estate project developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js) offers a comprehensive platform for managing property listings and user interactions. The application includes secure user authentication with JWT, supporting role-based access for buyers, sellers, and administrators.",
    tags: [
      {
        _id: 1,
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        _id: 2,
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        _id: 3,
        name: "cloudinary",
        color: "green-text-gradient",
      },
      {
        _id: 4,
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: real_estate,
    source_code_link: "https://github.com/nandit9893/Real-Estate",
    live_preview_link: "https://real-estate-sharma-properties.onrender.com",
  },
  {
    _id: 5,
    name: "Spotify",
    description:
      "A Spotify-like music streaming application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js) offers a seamless music experience with real-time song playback and robust content management through an admin panel.  A React-powered admin panel enables administrators to manage the music library effectively.",
    tags: [
      {
        _id: 1,
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        _id: 2,
        name: "cloudinary",
        color: "pink-text-gradient",
      },
      {
        _id: 3,
        name: "audio",
        color: "green-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/nandit9893/Spotify",
    live_preview_link: "https://spotify-nandit-mern.onrender.com",
  },
  {
    _id: 6,
    name: "E-Commerce",
    description:
      "An e-commerce shopping website developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js) offers a dynamic and scalable platform for online shopping, complete with an admin panel for efficient inventory management. The website provides secure user authentication using JWT, allowing customers to browse products, add items to their cart",
    tags: [
      {
        _id: 1,
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        _id: 2,
        name: "cloudinary",
        color: "pink-text-gradient",
      },
    ],
    image: e_commerce,
    source_code_link: "https://github.com/nandit9893/E-Commerce",
    live_preview_link: "https://stylo-clothes.onrender.com",
  },
  {
    _id: 7,
    name: "Crypto Currency",
    description:
      "Developed a cryptocurrency website providing real-time data on various currencies such as Bitcoin, Ethereum, and Dogecoin. Implemented API integration (Coin Gecko) for accurate currency data and created an intuitive user interface.",
    tags: [
      {
        _id: 1,
        name: "react",
        color: "blue-text-gradient",
      },
      {
        _id: 2,
        name: "coin-gecko-api",
        color: "pink-text-gradient",
      },
    ],
    image: crypto_currency,
    source_code_link: "https://github.com/nandit9893/crytpo-currency",
    live_preview_link: "https://silly-travesseiro-179f5b.netlify.app",
  },
  {
    _id: 8,
    name: "Text Reader",
    description:
      "Developed a text reader app whose main aim is to manipulate with the text. Created a sophisticated text manipulation application featuring functionalities such as text conversion to uppercase and lowercase, text copying, extra space removal, and dark/light mode toggling.",
    tags: [
      {
        _id: 1,
        name: "react",
        color: "blue-text-gradient",
      },
      {
        _id: 2,
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: text_reader,
    source_code_link: "https://github.com/nandit9893/Text-Reader",
    live_preview_link: "https://splendorous-otter-262cc6.netlify.app",
  },
  {
    _id: 9,
    name: "Bank Management",
    description:
      "Designed a Bank Management System to improve operational efficiency and customer satisfaction in banking institutions. Integrates comprehensive functionalities for managing customer accounts opening and login to check there account details.",
    tags: [
      {
        _id: 1,
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        _id: 2,
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: bank_management,
    source_code_link: "https://github.com/nandit9893/Bank-Management-System",
    live_preview_link: "https://github.com/nandit9893/Bank-Management-System",
  },
  {
    _id: 10,
    name: "Currency, Language, etc.",
    description:
      "A versatile converter application designed for language translation, currency, length, volume, and area conversions simplifies everyday tasks with precision and efficiency. It supports real-time language translation powered by APIs like Google Translate, etc.",
    tags: [
      {
        _id: 1,
        name: "react",
        color: "blue-text-gradient",
      },
      {
        _id: 2,
        name: "api",
        color: "pink-text-gradient",
      },
      {
        _id: 3,
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: converter,
    source_code_link: "https://github.com/nandit9893/Converter",
    live_preview_link: "https://converter-pro-nandit.onrender.com",
  },
  {
    _id: 11,
    name: "Currency",
    description:
      "A versatile currency converter application simplifies financial calculations by providing real-time currency exchange rates while showcasing the corresponding country flags for a more intuitive experience. The application integrates APIs like Open Exchange Rates.",
    tags: [
      {
        _id: 1,
        name: "html",
        color: "blue-text-gradient",
      },
      {
        _id: 2,
        name: "css",
        color: "green-text-gradient",
      },
      {
        _id: 3,
        name: "js",
        color: "blue-text-gradient",
      },
      {
        _id: 2,
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: currency_converter,
    source_code_link:
      "https://github.com/nandit9893/Cuurency-Converter-Application",
    live_preview_link:
      "https://github.com/nandit9893/Cuurency-Converter-Application",
  },
];

export default projects;
