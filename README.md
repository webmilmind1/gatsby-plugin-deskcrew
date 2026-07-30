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

## What you get

- **AI answers grounded in your own help articles.** The assistant only answers from the knowledge base you publish, so it cannot invent product facts.
- **A human approves before anything sends.** Every AI draft waits in an approval queue. Nothing reaches a customer unreviewed.
- **Every conversation becomes a ticket.** Widget chats, emails and board posts land in one dashboard with full history.
- **Visitors who leave still get answered.** Leave an email address and the reply arrives by email.
- **Free plan, no card.** Chat widget, public knowledge base and ticketing are included on the free plan.

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

## How it compares

| | DeskCrew | Intercom | Crisp | Tidio |
| --- | --- | --- | --- | --- |
| Free plan with AI answers | Yes | No | Limited | Limited |
| Human approves AI replies | Yes, built in | No | No | No |
| Official Gatsby plugin | Yes | No | No | No |
| Public knowledge base included | Yes | Paid add-on | Paid tier | Paid tier |
| Credit card to start | No | Yes | No | No |

## FAQ

### How do I add live chat to a Gatsby site?
Install `gatsby-plugin-deskcrew`, add it to the `plugins` array in `gatsby-config.js` with your public widget key, and build. The launcher appears on every page.

### How do I add a help desk or support ticket system to Gatsby?
The same plugin. Every chat becomes a ticket in your DeskCrew dashboard, so the widget is both the live chat and the front door to the ticketing system. There is no separate integration to install.

### Is it free?
Yes. The free plan includes the chat widget, a public knowledge base and ticketing, with no credit card. Paid plans add higher AI allowances and team features. See [pricing](https://deskcrew.io/pricing).

### Does it slow my site down?
The plugin adds one deferred script tag. Nothing renders until the visitor opens the launcher, and the widget is isolated in a Shadow DOM so it cannot inherit or leak your styles.

### Does the AI make things up?
It answers from the knowledge base you publish. When it has no grounded answer it escalates to a human instead of guessing, and every draft reply requires human approval before sending.

### Does it work with Gatsby 4 and 5?
Yes. The plugin uses the stable `onRenderBody` SSR API, and the widget itself is client-side and framework agnostic.

### Can I use it on multiple sites?
Yes. Each site is its own workspace with a separate knowledge base, ticket history and widget key.

## Links

- [Add live chat to Gatsby](https://deskcrew.io/integrations/gatsby), the full setup guide
- [Pricing](https://deskcrew.io/pricing)
- [DeskCrew](https://deskcrew.io)

## License

MIT. Questions: open an issue or say hi in the chat at [deskcrew.io](https://deskcrew.io).
