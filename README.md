# YouVersion Web Open Ideas

[![Maintainability](https://api.codeclimate.com/v1/badges/7f8a6cdd0c63e79ff2c8/maintainability)](https://codeclimate.com/github/lifechurch/youversion-web-open-ideas/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7f8a6cdd0c63e79ff2c8/test_coverage)](https://codeclimate.com/github/lifechurch/youversion-web-open-ideas/test_coverage)

The purpose of this repo is to create a place for volunteer contributors to post potential solutions to issues, mostly as one-off React Components, or small collections of components/pages.

The project contained here should have an extremely-low-friction setup, and be relatively easy to contribute potential React-based solutions to.

"Official" issues that are ready to be worked on are marked with the [Help Wanted](https://github.com/lifechurch/youversion-web-open-ideas/labels/help%20wanted) label. We may institute other labels or methods of organization later.

## What it looks like

When run, the project should display a "table of contents" menu or list of links to "solutions" related to [issues from this repo](https://github.com/lifechurch/youversion-web-open-ideas/issues).

Following one of those links should navigate to a page showing a potential solution.

## How to contribute

- Choose an issue from this repo that is labeled ["Help Wanted"](https://github.com/lifechurch/youversion-web-open-ideas/labels/help%20wanted)
- Fork and clone this repo
- Run the development command for this project/app
- Add a new route, following existing examples
- Create necessary new components/pages at that route, that show a potential solution to the issue you've chosen
- If your solution should have tests, create tests in the appropriate test file
- [Commit your changes, and submit a pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)

### Code style and standards

Since this project is a bit of a sandbox, we don't plan to be too strict. We'll automate code style suggestions where we can, through the use of tools like ESLint, and generally stick to common standards in the "community". When we've developed an official standards doc, we'll link to that here. In the mean time, here are some guidelines:

* Most style and code rules we would like to adhere to are configured in our [ESLint](https://eslint.org/) configuration file. It's `.eslintrc.js` in this repo. If your programming environment is set up to use project-specific ESLint configs, you will automatically catch most relevant issues. This is a very handy tool, and we recommend it!
* When building Components, put them in the `components` directory. Ideally, the resulting import statements should look something like `import Home from './components/Home'`.
* For other things not covered here, our "catch-all" is to refer to the AirBNB [Javascript](https://github.com/airbnb/javascript) and [React/JSX](https://github.com/airbnb/javascript/tree/master/react) style guides. Or just ask! We'll figure it out together. =)

## Getting started

- Fork and/or clone this repo.
- Run `yarn` to download and install the dependencies.
- Run `yarn start` to run the [create-react-app](https://github.com/facebook/create-react-app) based app.

## License

See the `LICENSE` file in the root of this repository.
