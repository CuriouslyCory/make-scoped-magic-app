# 🪄 `make-scoped-magic-app`

> A tool for quickly scaffolding an app with Magic baked-in!

<p align="center">
  <a href="https://github.com/magiclabs/make-scoped-magic-app/blob/master/LICENSE">License</a> ·
  <a href="https://github.com/magiclabs/make-scoped-magic-app/blob/master/CONTRIBUTING.md">Contributing Guide</a>
</p>

## 🚀 Usage

Getting started with the interactive scaffolding tool is easy. Just run the following command in your preferred shell:

```zsh
npx make-scoped-magic-app
```

Follow the interactive prompts to customize your project. Done! ✨

### Programmatic API

`make-scoped-magic-app` also supports a programmatic API, so you can generate boilerplate codes with Magic built-in from your own NodeJS scripts.

```ts
import makeScopedMagicApp from 'make-scoped-magic-app';

await makeScopedMagicApp({
  template: 'hello-world', // Same as --template, -t
  projectName: 'my-app',   // Same as --project-name, -p
  branch: 'master',        // Same as --branch, -b

  // The same, arbitrary data you can pass to a template via CLI flags.
  data: {
    publishableApiKey: 'pk_live_...',
    npmClient: 'yarn',
  }
})
```

See `npx make-scoped-magic-app --help` for information about the available options. In general, most CLI flags map to camel-cased properties in the configuration given to `makeScopedMagicApp({ ... })`.

For more information, you can print help text including template-specific options using `npx make-scoped-magic-app --help --template [i.e.: hello-world]`
