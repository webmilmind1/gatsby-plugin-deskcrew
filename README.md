# gatsby-plugin-deskcrew

Add the [DeskCrew](https://deskcrew.io) support widget to a Gatsby site: live chat, AI answers grounded in your knowledge base, and a help center. Configure it in `gatsby-config.js`; no component changes.

## Install

```
npm install gatsby-plugin-deskcrew
```

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-deskcrew",
      options: {
        key: "pub_your_widget_key",
      },
    },
  ],
};
```

Build or run develop. The chat launcher appears on every page.

## Options

| option | required | notes |
| --- | --- | --- |
| `key` | yes | Your widget key (starts with `pub_`), from your DeskCrew dashboard's Install page. Free plan works. |
| `board` | no | Your public board slug; enables the feedback and roadmap link. |
| `position` | no | `right` (default) or `left`. |
| `color` | no | Hex accent colour. Left unset, the widget follows your workspace brand colour. |
| `greeting` | no | The first message visitors see in the chat. |

## How it works

The plugin uses Gatsby's SSR API to append one deferred script tag to the body on every page. React escapes all attribute values, and the script loads asynchronously so it does not affect page speed.

## License

MIT. Full setup guide: [Add live chat to Gatsby](https://deskcrew.io/integrations/gatsby).
Questions: open an issue or say hi in the chat at [deskcrew.io](https://deskcrew.io).
