#   mofron-comp-footer
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

 footer component for mofron


# Install
```
npm install mofron   mofron-comp-footer
```

# Sample
```html
<setting>
    <tag load="mofron-comp-footer">Footer</tag>
    <tag load="mofron-comp-text">Text</tag>
    <tag load="mofron-effect-position">Position</tag>
</setting>

<Footer color='#f0e6fa' style="position:absolute;bottom:0rem;">
    <Text size=0.3rem effect=Position>Footer Component</Text>
</Footer>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | mainColor | mixed | (mixed (color)) string: color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | dict | style option |
| | accentColor | mixed | (mixed (color)) string: color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | dict | style option |

