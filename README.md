# simplecockroachdb `[UNDER CONSTRUCTION]`

A project that demonstrates how to use [CockroachDB](cockroachlabs.com) with the [TypeOrm](https://typeorm.io/#/) to implement a multi-container cluster under Docker.

## Steps
**Step 1:** Set up the CockroachDB cluster under Docker-Compose

`docker-compose up -d`

Follow the instructions [here](https://www.cockroachlabs.com/docs/stable/start-a-local-cluster-in-docker-linux.html) to set up a multi-container cluster using Docker.

**Step 2:**

`npm install`

**Step 3:**

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
