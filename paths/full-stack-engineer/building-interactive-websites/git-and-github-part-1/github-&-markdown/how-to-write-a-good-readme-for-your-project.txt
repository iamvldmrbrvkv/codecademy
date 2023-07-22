How To Write a Good README for Your Project
This article explains the purpose, conventional structure, and proper formatting of a README file, and best practices to follow when writing one.

What Is a README File?
You may have noticed that when a GitHub repo is initialized, you see a prompt to create a README.md file immediately. As implied in its name, a README https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes file is a text file that is meant to be read as soon as someone views the repository. This file contains text to introduce, explain, and share the information required to understand what the project is about.

Comic with three panels in which a character clones a GitHub project, gets confused trying to use it, and finally realizes after three hours that there’s a README file explaining all of the steps

Since a README file is often the first thing a visitor sees, it should tell the viewer how to install and use the project. There is no one good way to structure a README but there is only one bad way: not to include a README at all.

Fill in the blank

Complete the sentence below about the function of a README file.

A README file is the first thing a user sees on your GitHub repository. It provides a/an overview of what your project is about.
👏
You got it!

Conventions of a Good README File
Your README file should be as good as your project itself.

Make your project stand out and look professional by at least including the following elements in your README:

Project Title: the name of your project
Description: This is an extremely important component of the README. You should describe the main purpose of your project. Answer questions like “why did you build this project?” and “what problem(s) does it solve?”. It also helps to include your motivations for the project and what you learned from it.
Features: If your project has multiple features, list them here. Don’t be afraid to brag if your project has unique features that make it stand out. You can even add screenshots and gifs to show off the features.
How to use: Here, you should write step-by-step instructions on how to install and use your project. Any software or package requirements should also be listed here.
Technologies: List all the technologies and/or frameworks you used and what purpose they serve in your project.
Collaborators: If others have contributed to your project in any way, it is important to give them credit for their work. Write your team members’ or collaborators’ names here along with a link to their GitHub profile.
License: It’s also important to list a license on your README so other developers can understand what they can and cannot do with your project. You can use this guide https://choosealicense.com/ to help you choose a license.
Keep READMEs brief but detailed. README should always be up-to-date and self-explanatory. If you have spent a lot of time on your project, you should also spend a good chunk of time on the README. It can help your future self as well when you step away for a while and need to get reacquainted with your project. Not to mention it’ll leave a positive impression on future interviewers who look at your GitHub profile.

Using Markdown to Format READMEs
Keep in mind that nobody wants to read a long block of unformatted text bloated with information. That is why a README file usually has the .md extension. Formatting README files with Markdown can give them flair and make them interesting to read.

Multiple choice

What file extension is typically used for a README file on GitHub?


.html


.txt

(Selected)Correct:
.md

👏
You got it! Markdown files are automatically rendered on GitHub so they are the preferred file type for a README.

Use Headers
Every title or section (usage, license, etc.) in a README.md should be formatted as a header. Using headers and adding some HTML, we can achieve stuff like this:

📕 Codecademy Docs
Documentation for popular programming languages and frameworks.
Built by the community. Maintained by Codecademy.
What are Docs?
Codecademy Docs https://www.codecademy.com/resources/docs is a free, easily accessible reference for coding terms and concepts, available to developers all over the world.


Take a look at the README file on Codecademy’s docs repository https://github.com/Codecademy/docs for the source code.

GitHub uses headers to automatically generate a table of contents for README files based on the Markdown sections. Something like this

## Usage
Please follow these steps to get your application up and running.
 
### Requirements
The following packages are required for this script to work.
- pandas
- numpy
- requests
 
To install these packages, you can simply run: `pip install -r requirements.txt`
GitHub will find the headers and include them in a table of contents based on the header hierarchy:

An image of a README on GitHub showing a table of contents for the project called "My Awesome Project". The headers include "What does it do?", "Usage" with a "Requirements" subsection, and "License".

Level Up READMEs With Media
Documentation doesn’t have to be boring. Go for images or videos to make a project more understandable and appealing! We can add the project’s logo, diagrams, screenshots, or even GIFs!

For Markdown files living in a repository, the path to the image can either be to an URL or to an image file in the repository. For example, if we had an image named diagram.png inside the images folder of the repository, we could reference it like so ![Use Case Diagram](./images/diagram.png) in the README.md.

Conclusion
Write engaging READMEs! Make sure they include easy-to-follow details for your project. This improves your documentation skills and makes you a better developer and communicator of code.

If you want to see more examples of good READMEs, take a look at the README on Codecademy’s 40Phaser https://github.com/Codecademy/40Phaser and stuff.js https://github.com/Codecademy/stuff.js repositories. For more information on GitHub’s formatting syntax, take a look at their docs https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax.

Multiple choice

Which of the following should you NOT include in your project’s README file?


A clever name for your project.

(Selected)Correct:
Documentation describing each file in your project.


A list of your project’s features.


The license under which your code is made available.

👏
Since the README file is usually the first thing people see in your GitHub repository, it should give a clear and concise introduction to your project as a whole rather than a detailed summary of every file.Show less