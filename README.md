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

**Step 5** Create the `banks` database

Access the cockroachdb CLI tool

`docker exec -it crdb-1 ./cockroach sql --insecure`

At the cockroachdb CLI command line enter:

`CREATE DATABASE bank;`

Exit the CLI

`\q`

**Step 6:**

`npm install`

**Step 7:**

`npm start`

You'll get output similar to the following

```text

Inserting a new account into the database...
Saved a new account.
Printing balances from account 1.
Account { id: 1, balance: 1000 }
Inserting a new account into the database...
Saved a new account.
Printing balances from account 2.
Account { id: 2, balance: 250 }
Transferring 500 from account 1 to account 2.
Transfer complete.
Printing balances from account 1.
Account { id: 1, balance: 500 }
Printing balances from account 2.
Account { id: 2, balance: 750 }

```
