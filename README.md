# Pokemon

This is a project that provides you with basic pokemon information.

## Getting started

Start by cloning the repository to your local machine.

```bash
git clone https://github.com/chekwas88/prepend-pokemon.git
cd into prepend-pokemon
```

Install project dependencies:

```bash
npm install

```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Test

```bash
npm test
```

## Solution

This project is build with

- [nextjs](https://nextjs.org/docs/getting-started)
- [tailwindcss](https://tailwindcss.com/docs)
- [react-query](https://react-query.tanstack.com/overview)

### Home Page

The home page uses `getStaticProps` from nextjs, which generates the page at build time and makes the page very fast(SSG).

The pagination feature on the homepage makes use of `react-query`. This library helps to cache fetched data and also provides a prefetch function. These make it possible for the pagination feature to work effectively.

### Detail Page

The detail page uses `getServersideProps` from nextjs, which pre-renders a page at every request. This is used because a pokemon attribute being displayed might change.
