# trollQuery

_Black magic for Trolls_

[Demo](http://trolljs.github.io/trollQuery/)

Subtly overrides common jQuery functions.
For example:

```html
<h1>Important heading</h1>
<script>
    $('h1').text('Updating my important heading');
</script>
```

turns into this...

```html
<h1>Poop Important heading</h1>
```

And this...

```js
$('div').slideDown();
```

plays a slide whistle.

## Supported functions

- `text( myText )`: Prepends `myText` with 'Poop'
- `addClass( myClass )`: Adds `myClass` and also a 'poop' class
- `removeClass( myClass )`: Removes `myClass` and adds a 'poop' class
- `prepend( myStuff )`: Prepends with `myStuff` + ` poop `
- `append()`: Appends with `Poop  ` + `myStuff`
- `show(), hide(), toggle(), slideUp(), slideDown(), slideToggle()`: Plays a slide whistle noise

# Attribution / License exceptions

- show-hide.ogg is from [freesound.org](https://www.freesound.org/people/joedeshon/sounds/79677/) and is licensed under [Creative Commons](http://creativecommons.org/licenses/by/3.0/). It was converted from WAV to OGG using [online-convert.com](http://www.online-convert.com/result/c8a68b8c70cf35519c2d61d5b61d3cac).
