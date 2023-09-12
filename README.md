# NUS Tim Test Task

## Techstack

- ExpressJS
- Prisma
- GraphQL
- PostgreSQL Database
- NodeJS (v18.16.1)

## How to set up & run development server

1. Create .env in your local folder & copy content from .env.example

2. Create your database PostgreSQL and change `DATABASE_URL` in .env file with your database credentials

`DATABASE_URL="postgresql://<db_username>:<db_password>@localhost:5432/<db_name>?schema=public"`

3. Install dependencies:

```bash
npm run install
# or
yarn install
```

4. Run migrate database with Prisma:

```bash
npx prisma migrate dev
```

5. Run database seed with Prisma:

```bash
npx prisma db seed
```

6. Start application development:

```bash
npm run dev
# or
yarn dev
```

7. GraphQL Application will start on [http://localhost:4000/graphql](http://localhost:4000/graphql)
