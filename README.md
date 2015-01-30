# trollQuery

Overrides some common jQuery functions.
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
$('div').hide();
```

plays a sound effect.

## Supported functions

- `text( myText )`: Prepends `myText` with 'Poop'
- `addClass( myClass )`: Adds `myClass` and also a 'poop' class
- `removeClass( myClass )`: Removes `myClass` and adds a 'poop' class
- `prepend( myStuff )`: Prepends with `myStuff` + ` poop `
- `append()`: Appends with `Poop  ` + `myStuff`
- `show()`: Runs `show()` and also plays a sound
- `hide()`: Runs `hide()` and also plays a sound
