Recruitment Test Automation Homework
=========================================

Write end-to-end tests for this scenario:

As a user, I want to find the job descriptions we posted at eleduck which contains content about automation testing

Note: in the test, we don't know the urls of the posts, we have to operate as a normal user
to navigate on the pages or search by some keywords. 

Here is an example about the steps:

1. Visit https://eleduck.com/ from the home page
2. We type `全职远程在家办公` on the search bar on the top right (Note: the search bar only appear if the window width > 1300px)
3. From the search results, we look for the posts which posted by `篱下采菊`
4. We open the posts and verify there is at least one post has the content `postman`

Requirements:
1. You can use typescript/javascript
2. You can use cypress or other test framework, e.g. puppeteer, playwright, etc.

In this repo, we preconfigured typescript + cypress, you can write the test directly in `./cypress/e2e/eleduck.cy.ts`

Or if you can modify the code directly if you want to use other frameworks. 

## For dev

Install the dependencies:

```
npm install
```

Open cypress window, and we can choose which spec file to run, which is friendly for developing:

```
npm run test:open
```

(Note: it may be slow if you run it the first time, it needs to download the big cypress package)

Or just run the spec to get the final result in one command: 

```
npm run test:run
```
