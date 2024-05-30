# Video-Game-Store-Website

An e-commerence website to purchase products and view content related to video-gaming. This is a full stack project. Next.js for frontend, Node.js and Express.js for backend, PostgreSQL for database, and Docker to connect and deploy.

## Before You Begin

Download and run the Docker application. 

Make sure to install the external dependencies. Cd into the frontend and backend subfolders and run:

```bash
npm install
```

## Running Server

To build the stack:

```bash
docker compose build
```

To run the frontend
```bash
docker compose up -d frontend
```

To run the backend
```bash
docker compose up -d backend
```

To run the db
```bash
docker compose up -d db
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
