<h1><img src="https://unpkg.com/pejava.js@latest/media/images/pejava_logo.png" height="50px" style="vertical-align: top"/>
pejava.js (alpha 0.14)</h1>

> Powered by React from Facebook

---

## Install

`npm install --save pejava.js`

## Usage

```js
// es5
<script src="https://unpkg.com/pejava.js@latest/projects/app_js/dist/index.js"></script>
<script>
    document.addEventListener("app", function (e) {
        application(e.detail);
    })
</script>

<script>
    function application(app) {
        // "app" ready to work
    }
</script>
```

## Description

`pejava.js` is an ecosystem which is already defined set 
of components to quickly build JS application.

The peculiarity of the ecosystem is that there is no need for the application to develop html markup or css styles.
Everything is built on pure javascript (es5 or es6).

To better understand the essence, it would be better to look at a
[demo example](https://unpkg.com/pejava.js@latest/projects/demo_js/dist/index.html):

<a href="https://unpkg.com/pejava.js@latest/projects/demo_js/dist/index.html">https://unpkg.com/pejava.js@latest/projects/demo_js/dist/index.html</a>

And take a look [the source code](https://unpkg.com/browse/pejava.js@latest/projects/demo_js/src/) of this example:

<a href="https://unpkg.com/browse/pejava.js@latest/projects/demo_js/src/">https://unpkg.com/browse/pejava.js@latest/projects/demo_js/src/</a>

Or it is possible to clone git repository:

```
git clone https://github.com/voy22/pejava.js
```
## API

See [documentation](https://unpkg.com/pejava.js@latest/doc/index.html)

## Screenshot

<img src="https://unpkg.com/pejava.js@latest/media/images/printscreen.gif" style="max-width: 500px"/>

## Icons library

Discover more here [the source code here](https://unpkg.com/pejava.js@latest/projects/icons/index.html)

<img src="https://unpkg.com/pejava.js@latest/media/images/icons.png" style="max-width: 500px"/>

## Quick start on es5 (video)

https://youtu.be/hskugocGa80

[![Quick start on es5](http://img.youtube.com/vi/hskugocGa80/0.jpg)](http://www.youtube.com/watch?v=hskugocGa80)

To see [the source code here](https://unpkg.com/browse/pejava.js@latest/projects/getstart_js/index.html)

## Quick start on es6 ()
```
mkdir project
cd project/
npm init
npm i pejava.js -D
cp -r ./node_modules/pejava.js/projects/template/* ./
npm i -D
npm run serve
```
And you can start to work with this template.

If your application should be MultiLanguage, then use ```template_multilang```
instead ```template```

```
cp -r ./node_modules/pejava.js/projects/template_multilang/* ./
```

## Some features of pejava.js

1) `pejava.js` is ecosystem (To use prepared components out of box)

2) All components are `elements` or `container-elements`. That means inside each `container-elements` can be placed `container-elements` or `elements`.

3) `pejava.js` is intended for technical design only, when final interface has lists, forms or texts only.

4) Chain of windows, when all windows on one screen (see screenshot).

5) Powered by javascript library "React"

6) It doesn't support Internet Explorer
