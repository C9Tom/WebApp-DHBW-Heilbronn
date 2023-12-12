<p align="center">
<img src="https://app.emailvalidation.io/img/logo/emailvalidation.png" width="300"/>
</p>

# emailvalidation-js: Email Validation & Verification API for JavaScript

This package is a JavaScript wrapper for [emailvalidation.io](https://emailvalidation.io) that aims to make the usage of the API as easy as possible in your project.
Emailvalidation.io offers a graphical user interface for manual bulk email validation, but also provides a REST API for full developer flexibility.
Additionally, emailvalidation.io provides plenty of one-click integrations with common email marketing providers.

## Installation

### npm
```shell
npm install --save @everapi/emailvalidation-js
```
### yarn
```shell
yarn add @everapi/emailvalidation-js
```

## Import

```js
import Emailvalidation from '@everapi/emailvalidation-js';
```

or use it directly in a Browser:

```html
<script src="path/to/emailvalidation-js/index.js"></script>
```

## Usage

Initialize the API with your API Key (get one for free at [emailvalidation.io]):

```js
const emailvalidation = new Emailvalidation('YOUR-API-KEY');
```

Afterwards you can make calls to the API like this:

```js
emailvalidation.info('john@doe.com', {
        catch_all: 1
    }).then(response => {
        console.log(response);
    });
```

Find out more about our endpoints, parameters and response data structure in the [docs]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[docs]: https://emailvalidation.io/docs
[emailvalidation.io]: https://emailvalidation.io
