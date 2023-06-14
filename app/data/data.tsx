// Desc: Data for different pages within the app
export const pages = [
 {
  id: 1,
  label: "About Me",
  link: "/",
 },
 {
  id: 2,
  label: "My Projects",
  link: "/my-projects",
 },
 {
  id: 3,
  label: "Contact Me",
  link: "/contact-me",
 },
];

// About me page data
export const aboutMeData = {
 name: "Bodie Wood",
 title: "Hey! I'm Bodie Wood",
 body: "I'm full stack engineer with a passion for building things",
 highlightedBody: "I'm constantly seeking new challenges, and solving problems.",
 body2: "When I'm not coding, I enjoy Onewheeling, playing Pickleball, and spending time with my family.",
}

// Contact me page data
export const contactMeData = {
 title: "Hello there!",
 body: "I'm a full stack engineer who loves to dabble in AI. I'm currently looking for new opportunities, so if you're interested in working together, please reach out!",
 highlightedBody: "Shoot me an email at bodiewould@gmail.com",
 body2: "Email",
}

// My projects page data
export const projectData = [
 {
  title: "Gear Up",
  body: "An ecommerce site for outdoor gear. Admin have full CRUD functionality.",
  body2: "Technologies: JavaScript, React, Redux, Node, Express, MongoDB, Mongoose, Axios, ChakraUI, Formik and Yup.",
  image: "",
  links: [
   {
    text: "Deployed through Render",
    url: "https://gear-up.onrender.com/",
   },
   {
    text: "Source Code",
    url: "https://github.com/bodwood/Gear-Up.git",
   }
   ]
 },
 {
  title: "AI Image Genius",
  body: "A website to generate images using AI.",
  body2: "Technologies: TypeScript, Next.js, React, Node, OpenAI API and Axios.",
  image: "",
  links: [
   {
    text: "Deployed through Vercel",
    url: "https://imagegenius.vercel.app/",
   },
   {
    text: "Source Code",
    url: "https://github.com/bodwood/AI-Image-Generator",
   }
   ]
 },
 {
  title: "CI Teamwork - Open Source Project ",
  body: "Teamwork is a hosted project management tool. Its built-in reporting only presents time-log data in a flat format, which makes it difficult to use for post-project time analysis. The Teamwork Time Report allows you to create a hierarchical project time data report that shows individual and aggregate task time, and allows for filtering by date, keyword, or hours logged.",
  body2: "Technologies: JavaScript, React, Node, TailwindCSS.",
  image: "",
  links: [
   {
    text: "Source Code",
    url: "https://github.com/clarity-innovations/ci-teamwork",
   }
   ]
 },
]

export const contactMeLinks = [
  'bodiewould@gmail.com',
  'https://www.linkedin.com/in/bodie-wood/',
  'https://github.com/bodwood',
]