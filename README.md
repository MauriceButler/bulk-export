# bulk-export

Requires files in a directory and returns the results as a keyed object

This was kinda of an experiment in removing boilerplate stuff I was typing over and over again when exposing a "namespace" module

Automagically load sub files and export them thus removing the painful touch index file every time you add something dance...


### Update

This turned out to be just a bit too magic so I don't actually use it...


## Usage

With a structure such as:

    services
        |__ foo.js
        |__ bar.js
        |__ index.js

You would normaly have code like this in `index.js`

    module.exports = {
        foo: require('./foo'),
        bar: require('./bar')
    }

So that somewhere else you could just require services and get an object like this:

    {
        foo: 'contents of foo',
        bar: 'contents of bar'
    }

with this module the contents of `index.js` is just

    module.exports = require('bulk-export');

and you would get the same result


## Issues

1. This is waaaaaay too magical and unless you know what this module does you can not work it out by reading the code.
2. Only works once, this was an experiment so I haven't bothered to make it a function to break the require cache stuff.
3. It will probably do crazy stuff with async load and require cache if I was to actually do it as above.
