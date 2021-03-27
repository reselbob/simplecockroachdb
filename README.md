# simplecockroachdb `[UNDER CONSTRUCTION]`

A project that demonstrates how to use [CockroachDB](cockroachlabs.com) with the [TypeOrm](https://typeorm.io/#/) to implement a multi-container cluster under Docker.

To run this demonstration project in Katacoda do the following

## Steps

**Step 1:** Go to the Katacoda Ubuntu Playground

`https://katacoda.com/courses/ubuntu/playground`

**Step 2:** Clone the demonstration project into the Katacoda Ubuntu Playground

`git clone https://github.com/reselbob/simplecockroachdb.git`

**Step 3:** Navigate to the source code directory

`cd simplecockroachdb`

**Step 4:** Set up the CockroachDB cluster under Docker-Compose

`docker-compose up -d`

**Step 5** Create the `bank` database

Access the cockroachdb CLI tool

`docker exec -it crdb-1 ./cockroach sql --insecure`

At the cockroachdb CLI command line enter:

`CREATE DATABASE blogs;`

Exit the CLI

`\q`

**Step 6:** Install the Node.js dependency packages

`npm install`

**Step 7:** Run the Node.js application

`npm start`

You'll get output similar to the following

```text

Saving a new Writer into the database...
Saved a new Writer: [object Object]
Saving a new Writer into the database...
Saved a new Writer: [object Object]
Saving a new Writer into the database...
Saved a new Writer: [object Object]
Saving a new Writer into the database...
Saved a new Writer: [object Object]
Saving a new Writer into the database...
Saved a new Writer: [object Object]
Saving a new BlogEntry into the database...
Saved a new BlogEntry: [object Object]
.
.
.
.
Saving a new BlogEntry into the database...
Saved a new BlogEntry: [object Object]
Saving a new BlogEntry into the database...
Saved a new BlogEntry: [object Object]
Saving a new BlogEntry into the database...
Saved a new BlogEntry: [object Object]
Finished seeding


```
