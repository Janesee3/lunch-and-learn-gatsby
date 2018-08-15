# Lunch and learn: Building static websites with Gatsby

### Resources
- Gatsby docs: https://www.gatsbyjs.org/docs/
- Gatsby templates/demos: https://www.gatsbyjs.org/docs/gatsby-starters/
- Gatsby tutorials: https://www.gatsbyjs.org/tutorial/

### Outline of lunch and learn
- what is gatsby
- what problem does it solve
  - sometimes you want a nice-looking static site without all the effort in custom styling
- benefits
  - It's Just React
  - good set of starter templates
  - nice [plugins catalog](https://www.gatsbyjs.org/plugins/) (e.g. css templates)
  - deployment is the same as any React app
- how to use it
  - how to use `gatsby` cli (`npx gatsby`)
  - vanilla version
  - template version
- how to store assets (e.g. images, javascript, css, fonts)
  - `import profilePicture from "./profile-picture.jpg";`
- how to deploy 
- pitfalls
  - hot reloading not as good as create-react-app. have to manually refresh browser from time to time
- bonus:
  - gatsby plugins: https://www.gatsbyjs.org/docs/plugins/
  - typography plugin
    - try out 30+ themes: http://kyleamathews.github.io/typography.js/
  - [PRPL pattern](https://www.gatsbyjs.org/docs/prpl-pattern/). PRPL is a pattern for structuring and serving Progressive Web Apps (PWAs)
    - **Push** critical resources for the initial URL route using `link preload` and http/2.
    - **Render** initial route.
    - **Pre-cache** remaining routes.
    - **Lazy-load** and create remaining routes on demand.


### Hands on: create a gatsby app using a starter
  - docs: https://www.gatsbyjs.org/docs/gatsby-starters/
  - steps:
    - find a starter that you like from this list: https://www.gatsbyjs.org/docs/gatsby-starters/ (timebox: 2 minutes)
    - create gatsby app use gatsby cli: `npx gatsby new my-app [URL_OF_STARTER_GITHUB_REPO]`
    - start development:
      - go to directory: `cd my-app`
      - open project: `code .`
      - start development server: `npx gatsby develop`
      - navigate and try to understand codebase
    - add configuration for deployment. 
      - there are many options ([see instructions here](https://www.gatsbyjs.org/docs/deploy-gatsby/)), but for this session, we'll use netlify:
        - git add, commit and push
        - follow instructions on netlify: https://app.netlify.com/start
    - visit your app in your browser!