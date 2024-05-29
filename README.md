# Video-Game-Store-Website

An e-commerence website to purchase products and view content related to video-gaming. This is a full stack project. Next.js for frontend, Node.js and Express.js for backend, PostgreSQL for database, and Docker to connect and deploy.

## Before You Begin

Download and run the Docker application. 

Make sure to install the external dependencies. Cd into the frontend and backend subfolders and run:

```bash
npm install
```

## Running Server

To run the development server:

```bash
docker-compose up
```

To run the production server:

```bash
docker-compose -f docker-compose-prod.yml up -d --build
docker-compose -f docker-compose-prod.yml up -d --start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
