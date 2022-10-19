# editpasfoto.com

[editpasfoto.com](https://editpasfoto.com) is a web-based Indonesian identification photograph editor app running on a client-side. Editpasfoto (ENG: _edit-identification-photograph_) built using Next.js + Typescript + TailwindCSS deployed using Vercel.

## Features

- [x] Client-side, privacy first (no photo is being collected)

  ![](/gifs/no-upload.gif)

- [x] Change photo ratio

- [x] Various outer layer (formal + University)

## To-do

- [ ] Add more outer layer variation
- [ ] Change background color from red to blue and vice versa
- [ ] Remove white bar on the bottom and the top of the page when overscroll

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contribute

Resources for getting started on how to contribute

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [How to write a good commit message ](https://dev.to/chrissiemhrk/git-commit-message-5e21)
- [How to write the perfect pull request](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/)
- [Step-by-step guide to contributing on GitHub](https://www.dataschool.io/how-to-contribute-on-github/)

## Contribute outer layer

Make sure your outer photo is

- **Unique, not a duplicate of an existing outer**
- **.png type file**
- **Compressed**

A step to contribe your outer layer

1. Create a fork repo
2. add your outer photo at `/public/img/outer`
3. Create a new folder if your organization/university doesn't exist. Use a popular acronym name in lowercase `ugm, itb, ui, unpad`
4. Name your outer photo file in a order `1.png, 2.png, 3.png, ...`, this is going to be your `VARIATION_ID`
5. Add your newly added outer photo in a variable called `OUTER_OPTIONS` at `/data/outer.ts` with a format like this

```typescript
{
  // Your unique number in an order from top to bottom, not showed to the user
  id: 1 // number
  // Your outer name, showed to the user, format: "(UPPERCASE_ORG/UNIV_ACRONYM) (VARIATION_ID)", example: "ITB 1", "UNPAD 2"
  value:  // string
  // Your outer photo file path, format: "${OUTER_PATH_BASE}/(lowercase_org/univ_acronym)/(variation_id).${OUTER_FILE_TYPE}", example: "${OUTER_PATH_BASE}/itb/1.${OUTER_FILE_TYPE}", "${OUTER_PATH_BASE}/unpad/2.${OUTER_FILE_TYPE}"
  src: // string
}
```

6. And submit your pull-request. A review will shortly given to your pull-request.

## License

[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/) © 2022 Abiel Zulio M
