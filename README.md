# Lunch and learn: Building static web applications with Gatsby

### Resources
- Gatsby docs: https://www.gatsbyjs.org/docs/
- Gatsby templates/demos: https://www.gatsbyjs.org/docs/gatsby-starters/
- Gatsby tutorials: https://www.gatsbyjs.org/tutorial/

### Outline of lunch and learn
- what is gatsby
- what problem does it solve
- how to use it
  - how to install cli
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
    - install gatsby-cli: `yarn global add gatsby-cli`
    - find a starter that you like from this list: https://www.gatsbyjs.org/docs/gatsby-starters/ (timebox: 2 minutes)
    - create gatsby app: `gatsby new my-app [URL_OF_STARTER_GITHUB_REPO]`
    - start development:
      - go to directory: `cd my-app`
      - open project: `code .`
      - start development server: `gatsby develop`
      - navigate and try to understand codebase
    - add configuration for GitHub pages deployment. follow instructions [here](https://www.gatsbyjs.org/docs/deploy-gatsby/#use-the-npm-package-code-classlanguage-textgh-pagescode-for-deploying)
      - add a `deploy` script in `package.json`
        ```
        "scripts": {
          "deploy": "gatsby build --prefix-paths && gh-pages -d public",
        }
        ```
      - in `gatsby-config.js`:
        ```
        module.exports = {
          pathPrefix: `/repo-name`,
        }
        ```
    - put project on GitHub:
      - `git init`
      - `git add .`
      - `git commit -m "..."`
      - create repository on GitHub.com
      - `git remote add origin <REPO_URL>`
      - `git push -u origin master`
    - deploy! run `yarn deploy`
    - visit your app in your browser: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`