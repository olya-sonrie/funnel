## 🌠 This is a little funnel

🏎️ You can run the development server with:

```bash
npm run dev
```

🏗️ Build the project:

```bash
npm run build
```

🎨 Run linter:

```bash
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## 🧐 The basic concept of A/B testing as I understand it or like goblin translate

For example, we have a ready-made multi-step landing page with a specific color scheme, media, and text. It may perform well, but there might be user drop-offs at certain steps where there are no errors in the logs. And this is where A/B testing can come to the rescue 💪🦸.


Typically, the simplest option is to search for testing products on the market and choose the one that best suits your needs 📲. If there's nothing suitable, it's better to write your own implementation 🧑‍💻.

I have worked with Google Optimize 🪙(before it was discontinued) and functionality developed by our team for A/B testing 🕹️.

**Execution:**
We have our main landing page 🏀 (black-orange color scheme), and we want to see how our two modifications - ⚽ (black-white color scheme) and 🎾 (white-salmon) in compare with it. A/B testing tools may provide an option to make such changes in a built-in editor 📺. Or alternatively, you can create two more landings with the corresponding color schemes and launch a test where the percentage of users landing on each of our landings should be specified.
For the purity of the experiment, they should be equal, around 33.3% ⚖️. The decision on which variant to show to whom can be based on a conditional split into three groups: 🏀, ⚽, and 🎾. Users are randomly assigned to a group, where they receive a label so that on their next visit to the landing, they end up on the corresponding variation. This can be setting a certain value in an object responsible for displaying the variation, which is read on the server side to redirect to landing or shown the corresponding one, alternatively on the client side to provide the necessary styles.

**Data:**
After a certain period, depending on the amount of data, analytics or those responsible for the experiment will generate graphs 🎢 showing the number of users who visited the site and the number who completed it and landed on the main product 🖥️. In this case, the winning landing will be the one that was most interesting to users, i.e., where the number of users who transitioned to the product is higher 💯.

Overall, if you dig deeper, there are many more details, but I described it from a simpler and more understandable perspective 🤓.

Usefull [link 💡](https://posthog.com/blog/best-open-source-ab-testing-tools) with free and open-source A/B testing tools