# Cozinha dos Bonitos

<p align="center">
  <a href="https://github.com/cozinhadosbonitos/website/actions?query=workflow%3ACI">
    <img alt="CI status" src="https://img.shields.io/github/actions/workflow/status/cozinhadosbonitos/website/ci.yml?branch=main&label=CI&logo=github&logoColor=white&style=flat-square">
  </a>
  <a href="https://app.netlify.com/sites/cozinhadosbonitos/deploys">
    <img src="https://img.shields.io/netlify/eeed038d-eb38-46f6-ba73-387aedb05935?label=Netlify&logo=netlify&logoColor=white&style=flat-square" alt="Deployed on Netlify"/>
  </a>
</p>

This site is built using [GatsbyJS](https://www.gatsbyjs.org/), it is deployed on [Netlify](https://www.netlify.com/).
Dependencies are kept up to date using the excellent [Renovate Bot](https://renovatebot.com/).

## Development

It uses yarn to manage dependencies, so getting started should be easy:

```bash
# Install deps
$ yarn
# Start the development server
$ yarn run develop
# Build production
$ yarn run build
```

## Git flow

1. Create a branch from `main` for the change with a meaningful name
2. Make the required change, test locally, then commit
3. Create a pull request, which triggers tests, static code analysis and a deploy preview on Netlify.
