<<<<<<< HEAD

=======
# Clean Dose

A personal full-stack project for browsing FDA drug recall data in a simple, searchable interface.

Built to deepen my understanding of Ruby on Rails, this app pulls ongoing drug enforcement records from the [openFDA API](https://open.fda.gov/) and presents them through a React frontend backed by a Rails JSON API.

## Tech Stack

- Backend: Ruby on Rails 8, PostgreSQL (hosted on [Supabase](https://supabase.com/))
- Frontend: React, Vite, React Router
- Data: openFDA Drug Enforcement API
- Tooling: Foreman, rack-cors, HTTParty


## Getting Started 

### Prerequisites
- Ruby 4.0.5
- PostgreSQL
- Node.js and npm

### Setup

```bash
# Install Ruby dependencies
bundle install

# Install frontend dependencies
npm install --prefix frontend

# Configure Supabase connection in .env (see Notes)
# DATABASE_URL=postgresql://<user>:<password>@<host>:5432/postgres

# Import sample recall data (optional)
bin/rails medications:import
```
## Running the App

```bash
bin/dev
``` 

## Notes

- **Database:** This project uses PostgreSQL hosted on [Supabase](https://supabase.com/). Set `DATABASE_URL` in a local `.env` file (see [Getting Started](#getting-started)).
- **Data import:** Run `bin/rails medications:import` to pull recall records from the openFDA API. Re-running the task may skip duplicate records.
- **Local URLs:** Frontend at http://localhost:4000 · API at http://localhost:3000


>>>>>>> 2934eb0 (ReadMe update: Created  ReadMe)
