export default {
  blocks: [    
    {
      "pageTitle": "Sandstone"
    },
    {
      "paragraphs": [
        {
          "text": "In my time with Sandstone I was fortunate to be exposed to multiple kinds of teams, management organization, and codebases. I would regulary work on a few clients at a time and became fluent in each of their technologies and conventions; from Shopify and Liquid served with both theme kit and Slater, to React based repositories, and traditional jQuery work."
        },
        { 
          "text": "I grew into an independent role where I was able to have full ownership of tasks and features from start to finish. I've deployed to live production builds of sites that had hundreds of thousands of visitors every month, finished time sensitive work that needed to be ready in time for sales that accounted for a large majority of our clients yearly revenue, met regularly with project managers, designers, and codevelopers from both my team and the clients." 
        },
        {
          "text": "Aside from client work I've also participated in code reviews, candidate interviews for new coworkers, helped them adapt to our general styling conventions and workflows, and internal projects for marketing, and wrote internal guide documents for developer and non developer coworkers alike."
        }
      ]
    }, 
    {
      "title": "Our Headless CMS Marketing Tool",
      "paragraphs": [
        {
          "text": "I helped create an internal application for marketing outreach using Contentful (a headless CMS). The project was done in tandem with client work on a three person team between me, my boss, and a coworker; and was done as a Next.js app."
        },
        {
          "text": "I created relational content models and populated those with content, created modular components that would account for styling that differed on content (accounting for supporting differences in dimensions for card components depending on whether the section that held them had two, three, or four cards for example), created forms, applied a custom library that would send that form data as email responses to our team, and styled the app for desktop, tablet, and mobile breakpoints. This was made to be a platform for creating custom pitches to companies. I received mock designs from our in-house designer, implemented those, merged branches for features I owned, and occasionally finished branches for my coworker as needed while she focused attention on higher priority work."
        },
        {
          "text": "I pitched the idea of creating unique url parameters to use as keys to protect customized slug pages directly to our founder, who approved it. I handled the implementation by adding key strings to the relational models, and matched the url params against it to show content or redirect users to the homepage using SWR's API"
        },
        {
          "text": "Screenshots here in lieu of a live link, as the company went under before this could be launched"
        }
      ],
      "technologies": "Next.js, Contentful, SWR, Google Analytics",
      "images": [
        { 
          "src": "/assets/clients/cms_1.png",
          "height": "290",
          "width": "600"
        }, 
        {
          "src": "/assets/clients/cms_2.png",
          "height": "430",
          "width": "600"
        },
        {
          "src": "/assets/clients/cms_3.png",
          "height": "400",
          "width": "600"
        }
      ],
      "mobile_images": [
        {
          "src": "/assets/clients/cms_mobile.png",
          "height": "644",
          "width": "290"
        }
      ]
    },
    {
      "title": "Marketing / Outreach ",
      "paragraphs": [
        {
          "text": "With our new tool close to deployment, I conducted research on new potential leads, entered copy customized per company to our CMS, reached out to people in our network, generated cold emails, managed a spreadsheet dedicated to leads, synced with our marketing assistant, and chatted with employees working at those brands."
        }
      ]
    }
  ]
};