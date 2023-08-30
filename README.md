<h1 id="getting-started-with-expressjs">Getting Started with Express.js</h1>
<p>Express.js is a powerful and flexible web application framework for Node.js. It allows developers to build efficient and scalable server-side applications with ease. This guide will walk you through the steps to set up a basic Express.js application.</p>
<h2 id="prerequisites">Prerequisites</h2>
<p>Before you begin, make sure you have the following software installed on your machine:</p>
<ul>
<li>Node.js: You can download it from the <a href="https://nodejs.org/">Node.js official website</a>.</li>
<li>npm (Node Package Manager): This comes with Node.js installation.</li>
</ul>
<h2 id="setup-instructions">Setup Instructions</h2>
<p>Follow these steps to create a simple Express.js application:</p>
<ol>
<li><p><strong>Create a Folder:</strong> Start by creating a new folder for your project.</p>
</li>
<li><p><strong>Open Terminal:</strong> Open your terminal or command prompt.</p>
</li>
<li><p><strong>Initialize a Node.js Project:</strong> Navigate to your project folder using the terminal and run the following command to initialize a new Node.js project with default settings:</p>
<pre><code class="language-sh">npm init -y
</code></pre>
</li>
<li><p><strong>Open Visual Studio Code:</strong> If you&#39;re using Visual Studio Code as your code editor, open your project folder in it.</p>
</li>
<li><p><strong>Install Express:</strong> In the terminal within Visual Studio Code, run the following command to install Express.js as a project dependency:</p>
<pre><code class="language-sh">npm install express
</code></pre>
</li>
<li><p><strong>Create a Server File:</strong> Create a file named <code>server.js</code> in your project folder. This is where you&#39;ll write your Express.js code.</p>
</li>
<li><p><strong>Write Express Code:</strong> Open <code>server.js</code> in your code editor and write your Express.js code. You can use the example code provided below as a starting point:</p>
<pre><code class="language-javascript">const express = require(&#39;express&#39;);
const app = express();
const port = 3000;

app.get(&#39;/&#39;, (req, res) =&gt; {
  res.send(&#39;Hello Express!&#39;);
});

app.listen(port, () =&gt; {
  console.log(`Server is listening at http://localhost:${port}`);
});
</code></pre>
</li>
<li><p><strong>Run the Server:</strong> In the terminal, navigate to your project folder and run the following command to start your Express.js server:</p>
<pre><code class="language-sh">node server.js
</code></pre>
</li>
<li><p><strong>Access Your App:</strong> Open your web browser and go to <code>http://localhost:3000</code> to see your Express.js app in action.</p>
</li>
</ol>

-------------------------------------------------------------------------

# MongoDB Commonly Used Terms
MongoDB is a document-oriented, open-source database program that is used for storing and retrieving data. It is a **NoSQL database**, which means that it does not use a fixed schema and does not rely on tables to organize data, unlike a traditional relational database. Instead, MongoDB stores data in a format called BSON (binary JSON), which allows for more flexibility and scalability when working with large amounts of data. MongoDB is often used for web and mobile applications, real-time analytics, and big data processing.

## Common Database Terms

| Relational Databases | MongoDB           |
|----------------------|-------------------|
| Database             | Database          |
| Table                | Collection        |
| Row                  | Document          |
| Column               | Field             |

**Note:** In MongoDB, data is stored in BSON format, not JSON.

## Atomic/Update Operators

MongoDB provides atomic operators that allow you to perform specific actions on documents efficiently.

- `$set`: Update the document without changing the previous state.
- `$inc`: Increment or decrement numerical type variables.
- `$push`: Add new elements to an array field.
- `$eq`: Matches values that are equal to the given value.
- `$gt`: Matches values that are greater than the given value.
- `$lt`: Matches values that are less than the given value.
- `$gte`: Matches values that are greater or equal to the given value.
- `$lte`: Matches values that are less or equal to the given value.
- `$in`: Matches any of the values in an array.
- `$ne`: Matches values that are not equal to the given value.
- `$nin`: Matches none of the values specified in an array.

## MongoDB Commands

For working with MongoDB, you'll need to use various commands:

- To start the MongoDB daemon: `mongod`
- To start the MongoDB shell: `mongo`
- To display all databases in MongoDB: `show dbs`

## Getting Started

1. Install MongoDB on your system.
2. Start the MongoDB daemon using the `mongod` command.
3. Open the MongoDB shell with the `mongo` command.
4. Use commands like `show dbs` to explore databases and collections.

For more information and detailed documentation, visit the [MongoDB Manual](https://docs.mongodb.com/manual/).

Feel free to explore and experiment with different MongoDB commands and operators to interact with your data effectively.

