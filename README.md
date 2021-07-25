# eslint-plugin-consistent-default-export-name

Adds rules to help use consistent "default export" names throughtout the project.

> I DID NOT WRITE THE RULES.  
> Authors mentioned below.

This plugin is basically a packaging of two rules, each from two separate plugins:

1. default-export-match-filename: checks when filename does not match its default export name

    - Thanks to @golopot who wrote the rule and made PR to `eslint-plugin-import`

2. default-import-match-filename: checks when default import name does not match its source filename
    - Thanks to @selaux who wrote the rule (filenames/match-exported) and made `eslint-plugin-filenames`

If both rules are activated, default names will be consistent overall.

How to use :

1. either extend config which enables both rules

    ```json
    {
        "extends": ["plugin:consistent-default-export-name/fixed"]
    }
    ```

    which, sets below

    ```json
    {
        "rules": {
            "consistent-default-export-name/default-export-match-filename": "error",
            "consistent-default-export-name/default-import-match-filename": "error"
        }
    }
    ```

2. or set rules inidividually

    ```json
    {
        "rules": {
            "consistent-default-export-name/default-export-match-filename": "error",
        }
    }
    ```

## Installation

```shell
npm install eslint-plugin-consistent-default-export --save-dev
```

```shell
yarn add -D eslint-plugin-consistent-default-export
```

## Supported Rules

- default-export-match-filename
- default-import-match-filename
