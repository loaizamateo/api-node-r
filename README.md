# api <!-- omit in toc -->

> api

- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Main commands](#main-commands)
    - [Development](#development)
    - [Production](#production)
    - [Migrate](#migrate)
    - [Seed](#seed)
    - [Test](#test)
    - [Lint](#lint)
- [Documentation](#documentation)
- [Contributing](#contributing)

## Getting started

### Prerequisites

**Node.js** is required to run the application.

Visit [this page](https://nodejs.org/en/download/) for download instructions.

### Installation

Install the required dependencies:

`$ npm install`

### Configuration

The application relies on environment variables to connect to various services.

To configure these variables:

- Copy and rename the `.env.example` to `.env`
- Open the `.env` file and fill in the required values

### Main commands

#### Development

Start a local development server with the following command:

`$ npm run dev`

This will:

- Fire up a local web server at `localhost` on port 8080 or `PORT` if defined
- Set the `NODE_ENV` variable to `development`
- Watch for changes in the source files allowing the server to reload automatically

#### Production

For production use, start the server with:

`$ npm run start`

**NOTE:** the application makes use of the `NODE_ENV` environment variable do determine its running environment.

#### Migrate

To update the database to latest changes, run migrations with [Sequelize CLI](https://github.com/sequelize/cli) with the following command:

`$ npm run migrate`

Migrations are defined in `/src/db/migrations`.

#### Seed

To fill the database with initial data, run seeders with [Sequelize CLI](https://github.com/sequelize/cli) with the following command:

`$ npm run seed`

Seeders are defined in `/src/db/seeders`.

#### Test

Run tests with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) with the following command:

`$ npm run test`

This will:

- Set the `NODE_ENV` variable to `test`
- Run the `migrate` and `seed` commands
- Run all tests defined in the `test` folder

#### Lint

Check for linting errors with:

`$ npm run lint`

Automatically fix linting errors with:

`$ npm run lint:fix`

## Documentation

All the API is documented with [ReDoc](https://github.com/Rebilly/ReDoc) from an [OpenAPI](https://swagger.io/specification/) document.

To explore the documentation, run the server and navigate to `localhost:8080/docs`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
