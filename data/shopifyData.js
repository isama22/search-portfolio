export default {
  blocks: [
    {
      "title": "Ettitude",
      "paragraphs": [
        {
          "text": "Owned from June of 2021 through July of 2023."
        },
        {
          "text": "On this client we inherited a large codebase that was full of lengthy, unmanageable, and outdated code from their previous developers. By independently optimizing sections and files relevant to weekly tickets we were able to reduce the volume and improve the quality of the codebase without sacrificing time needed for other deliverables. I was able to make an impact on almost every part of the site, but my most effective projects were in building modules that empowered their team to build new landing pages and populate them with a multitude of custom sections, reducing unnecessary dev time."
        },
        {
          "text": "I owned both the 2021 and 2022 Impact Report pages, utilizing Shopify's JSON landing page builder feature. I designed the schemas and fleshed out the 7 sections and corresponding snippets that constitute those reports. They account for multiple kinds of content and styling, and can be found all across the site from sale and specialty landing pages to the home and product detail pages. I also reorganized the division of sale and full price items per variant between different collection pages and detail pages, accounting for the complex code in place that supported the options section and associated colors with sizes by product rather than variant."
        },
        {
          "text": "I reported to the Project Manager, Designer, and Marketing Director weekly, and managed tasks with Trello and Asana. I also generated site speed audits regularly to improve SEO metrics and prepared the site to comply with and adapt to new measurements, like Google’s Interaction to Next Paint (INP) that's planned to  replace the First Interaction Delay (FID). I made trace recordings in chrome’s devtool performance tab and used LightHouse’s timespan mode to identify long callbacks and reduce the cost of expensive rendering to lower that score for pages that had scores in excess of 200ms, and implemented GA4 tracking on new and existing features across the site."
        },
      ],
      "technologies": "Shopify, Liquid, jQuery, Google Analytics, Themekit", 
      "images": [
        { 
          "src": "/assets/clients/ettitude_1.png",
          "height": "290",
          "width": "600"
        },
        {
          "src": "/assets/clients/ettitude_2.png",
          "height": "290",
          "width": "600"
        }
      ],
      "mobile_images": [
        {
          "src": "/assets/clients/ettitude_mobile.png",
          "height": "644",
          "width": "290"
        }
      ],
      "link": "https://www.ettitude.com"
    }, 
    {
      "title": "Lulu and Georgia",
      "paragraphs": [
        {
          "text": "Owned from March through December of 2022."
        },
        {
          "text": "I collaborated with our client as part of a cross functional team of developers and designers to completely rebuild their PDP's image and detail/buy section."
        },
        {
          "text": "We tested and delivered this in just over a month using Jira to manage the task breakdown, meeting regularly with our designer and project manager. I also worked on rebuilding their wishlist functionality across the site and implemented a mobile redesign of the navigation menu while a counterpart worked on the desktop version. I was also able to reduce the loading time on the PDP from 1138ms to 59 by consolidating redundant code and utilizing a hash table lookup method for applying the metafields that populated the slowest performing component of the page."
        }, 
        {
          "text": "You can check out the mobile nav menu, and the PDP image modal and gallery for live examples of my work."
        }
      ],
      "technologies": "Shopify, Liquid, Vanilla Javascript, Google Analytics, Slater", 
      "images": [
        { 
          "src": "/assets/clients/lulu_1.png",
          "height": "290",
          "width": "600"
        },
        {
          "src": "/assets/clients/lulu_2.png",
          "height": "290",
          "width": "600"
        }
      ],
      "mobile_images": [
        {
          "src": "/assets/clients/lulu_mobile.png",
          "height": "644",
          "width": "290"
        }
      ],
      "link": "https://www.luluandgeorgia.com"
    },
    {
      "title": "Venim", 
      "paragraphs": [
        {
          "text": "I performed site speed audits for this client and optimized their codebase to keep scores low, added the user generated content on their PDP pages and customized a slider library to display the new UGC, the testimonials snippet on their home and PDP pages, made general updates to styling as needed, and implemented changes to the content coming from their Yotpo scripts",
          "technologies": "Shopify, Liquid, jQuery, Google Analytics, Slater"
        }
      ],
      "images": [
        { 
          "src": "/assets/clients/venim_1.png",
          "height": "290",
          "width": "600"
        },
        {
          "src": "/assets/clients/venim_2.png",
          "height": "290",
          "width": "600"
        }
      ],
      "mobile_images": [
        {
          "src": "/assets/clients/venim_mobile.png",
          "height": "644",
          "width": "290"
        }
      ],
      "link": "https://venim.com"
    }
  ]
};