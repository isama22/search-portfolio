export default {
  blocks: [   
    {
      "title": "SoWell",
      "description": "This was my primary react project at the agency until the marketing CMS I began developing this year. Built as a patient portal for a health service, users can log in and review results from their health test kits. Aside from styling updates and general optimization I was responsible for implementing a platform demo feature that would be able to customize the results portal to new potential clients when the company began strategizing a rebrand to become a SaaS company and allow other brands to make use of the project. I created a custom hook that took brand data and used it to modify assets and colors on the page per object.",
      "technologies": "Next.js, Auth0",
      "images": [
        { 
          "src": "/assets/clients/sowell_1.png",
          "height": "290",
          "width": "600"
        }
      ]
    }, 
    {
      "title": "Flourish",
      "description": "As work scaled up with the agency’s Google contract and projects multiplied with their Area 120 team, I was brought onto this small scale pitch task. As part of a four person team, we worked quickly to put together a lean demo that would be shared office wide on google’s side to gauge interest before they committed to this particular project. It was a simple card maker that allowed users to upload images, draw, apply frames, and then download or send their card using the web share API, and made use of React’s canvas useRef and useContext hooks to create an editor",
      "technologies": "Next.js, Web Share API",
      "images": [
        { 
          "src": "/assets/clients/flourish_1.png",
          "height": "290",
          "width": "600"
        }, 
        {
          "src": "/assets/clients/flourish_2.png",
          "height": "290",
          "width": "600"
        }
      ]
    }, 
  ]
};