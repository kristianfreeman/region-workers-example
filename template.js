import flag from 'country-code-emoji'

const template = cf => {
  const emoji = flag(cf.country) || "👋🏻"

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hello!</title>

        <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />

        <style>
          body {
            background: #eee;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            font-family: sans-serif;
          }

          div.container {
            background: #fff;
            border-radius: 1rem;
            padding: 4rem;
          }
        </style>
      </head>

      <body>
        <div class="container">
          <h1>Hello there! You're connecting from ${cf.city} in ${cf.country} ${emoji}</h1>
        </div>
      </body>
    </html>
    `
}

export default template