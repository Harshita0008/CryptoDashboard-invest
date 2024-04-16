# Candlestick Chart Tracker for Crypto Investement

Welcome to Candlestick Chart Tracker, your go-to platform for tracking 30-day historical daily prices of selected symbols on a dynamic candlestick chart. This README provides an overview of the features, technologies used, and instructions for setting up and running the application.

## Getting Started

First, run the development server:

```bash

npm install

node backend/server.js

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

#### Real-time Candlestick Chart: 
Experience a seamless and dynamic candlestick chart that updates in real-time based on selected symbols.

#### 30-Day Historical Data: 
Track historical daily prices for the past 30 days, allowing you to analyze trends and make informed decisions.

#### Google Account Authentication: 
Securely log in with your Google account, ensuring your data remains protected and accessible only to you.

#### Managed Sessions: 
Enjoy hassle-free sessions management for a seamless user experience.

#### Search with Autocomplete: 
Effortlessly change the selected symbol with a user-friendly search box featuring autocomplete recommendations.

## Technologies Used

#### BitMex WebSocket API: 
Utilized for real-time data updates on the candlestick chart.

#### BitMex Historical API:
Used to retrieve 30-day historical daily prices of selected symbols.

#### Next.js: 
A React framework for server-rendered applications, providing seamless client-side navigation.

#### React: 
A JavaScript library for building user interfaces, ensuring a responsive and interactive user experience.

#### Firebase Authentication: 
Integrated Google account authentication for secure user login.

#### Node.js: 
A JavaScript runtime for building scalable and fast server-side applications.

#### Express: 
A minimalist web framework for Node.js, used for handling server-side logic and routing.
