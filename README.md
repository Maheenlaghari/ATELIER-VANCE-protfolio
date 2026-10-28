# Atelier Vance Architectural Spatial Practice Template

Theme provided by Undiegravity

## Project Overview

A luxury architectural editorial and spatial identity web platform inspired by brutalist geometry, monochrome publishing monographs, and contemporary brand spaces.

## Features

1. Monogrammed Architectural Project Detail View with high resolution responsive gallery grids
2. Interactive Consultation Booking System with live validation and confirmation tracking
3. Filterable Index and Archive Project Directory with live search, discipline filters, and dual table or grid layouts
4. Biographical Profile and Works Catalogue for Elena Vance including interactive audio discourse player
5. Dynamic data architecture ready for backend CMS or REST API integration
6. Ultra lightweight tree shakable vector icons via Lucide React
7. Zero heavy motion overhead using native 60fps CSS transitions and GPU accelerated transforms
8. Fully responsive brutalist layout engineered for mobile, tablet, and ultra wide displays

## Tech Stack and Version

• Framework: Next.js 16.4.3
• Core Library: React 19.3.0
• Runtime: Node.js 24
• Language: TypeScript 5
• Styling: Tailwind CSS 4 with custom architectural tokens
• Iconography: Lucide React 1.16.0

## Backend API Endpoints

1. GET /api/projects
Description: Retrieves complete archival project directory or filters by project slug query parameter.
Query parameters: slug (optional)
Response format: JSON object with success status, data payload, and total count.

2. GET /api/profile
Description: Returns Elena Vance studio principal biographical dossier, metrics, and honors.
Response format: JSON object with profile data, credentials, and recognition records.

3. POST /api/booking
Description: Receives and processes studio session consultation requests.
Request body: name, email, discipline, message
Response format: JSON object with booking confirmation code and dispatch status.

4. POST /api/newsletter
Description: Subscribes clients to the seasonal studio monograph dispatch.
Request body: email
Response format: JSON object with subscription confirmation status.
