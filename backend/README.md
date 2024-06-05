# Video-Game-Store-Website / Backend

Backend built using Node.js and Express.js, and PostgreSQL for database.

## Before You Begin

Make sure to install the external dependencies. Run:

```bash
npm install
```

Create a file titled ".env" and add the following code:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres?schema=public"
```

## Running Server

First generate the models:

```bash
npx prisma generate
```

Sync database with schema if not done alreay. Cd to root and run: 

```bash
docker exec -it backend npx prisma migrate dev --name init
```

Then run the backend server:

```bash
node index.js
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.
