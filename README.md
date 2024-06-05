# Game-Shop

An e-commerence website to purchase products and view content related to video-gaming. This is a full stack project. Next.js for frontend, Node.js and Express.js for backend, PostgreSQL for database, and Docker to connect and deploy.

## Before You Begin

Download and run the Docker application. 

Make sure to install the external dependencies. Cd into the frontend and backend subfolders and run:

```bash
npm install
```

## Running Full Stack

From the root run the directory:
```bash 
docker compose up -d db
```

cd to the backend: 
```bash
npx prisma generate
docker compose build
docker compose up -d backend
```

SKIP THIS STEP - If the backend and database aren't synced, then cd to the backend and run: 
```bash
docker exec -it backend npx prisma migrate dev --name init
```

Able to add/update/remove to database via docker execution commands, postman, or running:
```bash
npx prisma studio
```

cd to frontend:
```bash
docker compose build
docker compose up -d frontend
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
