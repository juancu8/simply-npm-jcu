# Change strings

This is a example. Here change parts of strings.
Source [Platzi](https://platzi.com)

Find in [npm](https://www.npmjs.com/package/jcu-words)

## Rules

- The word ends in "ar" eliminates "ar".

- The word starts with z is added "pe" at the end.

- The word has 10 or more letters it is split in half and joined with a '-'.

- The word is a palindrome, no account and the same word is returned interspersing uppercase and lowercase.


## Install

```
npm instal jcu-words
```

## Use

```
import trans from 'words'

trans("Programar") // Program
trans("Zorro") // Zorrope
trans("Zarpar") // Zarppe
trans("Abecedario") // Abece-dario
trans("sometemos") // SoMeTeMoS
```


## License

[MIT](https://opensource.org/licenses/MIT)
