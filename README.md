This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About the Project

A simple TODO app with CRUD functionalities using supabase.

Important libraries:

- Supabase (BaaS)
- MantineUI & Tailwind CSS (UI)

## Running locally

First , clone and install dependancies:

```bash
git clone https://github.com/kinuthiiia/supabase-auth-passwordless.git

cd supabase-auth-passwordless

npm i -S
```

Second , create a .env.local file in your project's root folder and add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables from your supabase project keys.

How to get the keys: https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs#get-the-api-keys

Third, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
