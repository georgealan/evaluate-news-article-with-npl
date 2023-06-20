# UDACITY EVALUATE NEWS ARTICLE WITH NLP
## Project: Evaluate a news article with Natural Language Processing

![](https://raw.githubusercontent.com/georgealan/evaluate-news-article-with-npl/main/project-live.gif)

## DESCRIPTION
This project is a web-based tool that enables users to perform Natural Language Processing (NLP) on articles or blogs sourced from external websites. NLP refers to the capability of an application to comprehend human language, whether it's in written or spoken form.

## TECHNOLOGIES USED
* <a href="https://nodejs.org/en" target="_blank">Node.js</a>
* <a href="https://expressjs.com/" target="_blank">Express</a>
* <a href="https://webpack.js.org/" target="_blank">Webpack</a>
* <a href="https://jestjs.io/" target="_blank">Jest</a>
* <a href="https://www.npmjs.com/package/@babel/core" target="_blank">@Babel</a>
* <a href="https://www.npmjs.com/package/cors" target="_blank">Cors</a>
* <a href="https://www.npmjs.com/package/body-parser" target="_blank">Body-Parser</a>
* <a href="https://www.npmjs.com/package/custom-env" target="_blank">Custom-Env</a>
* <a href="https://sass-lang.com/" target="_blank">SASS</a>

## HOW TO USE THIS PROJECT
To use this project on your machine, clone or download it to your system, and in the project directory, use the following commands:

#### 1. Create MeaningCloud API account
You will need a MeaningCloud APIKey to run this project. Go to the <a href="https://www.meaningcloud.com/developer/apis" target="_blank">MeaningCloud</a> website, create a free account, and obtain your APIKey. Take note of this key to be inserted into the ".env" file.
Inside the project directory, there is a file named ".env.example" Rename it by removing the .example name, so the file should be named ".env" only. Open it and insert your APIKey as shown in the example below:

Before:
```bash
API_KEY=YOUR API KEY HERE
```

After:
```bash
API_KEY=123456789101112130
```

Save the file and you're ready to go.

#### 2. Download all Node dependencies
```bash
npm install
```

#### 3. Build with Webpack
```bash
npm run build-prod
```

#### 4. Start the server
```bash
npm start
```
Open your browser and go to http://localhost:8081/. The project will run, and you can enter any text to perform natural language processing analysis.

#### 5. Execute tests with Jest
```bash
npm test
```
