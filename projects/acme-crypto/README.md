# lolcrypt

## Intro

You must design and implement a node cryptographic library, which will crypt and decrypt any type
into it's ciphered or plain counter-part.

You must support multiple formats in a pluggable manner.

The library must be injectable by angular.

The minimal interface of the injectable service should be as follows:

```typescript
  public crypt<T = any>(value: T | undefined): string {}
  public decrypt<T = any>(value?: string): T {}
```

Don't forget to write unit tests, as this will be the only thing that guarantees your library works.

- By default, the format should be `Rot13`.
- The user can change the encryption format using `format` getter/setter
- If the user calls `crypt`, the encrypted representation of the input should be returned.
- If the user calls `decrypt`, the decrypted representation of the input should be returned.
- Calling `decrypt(crypt({hello: 'im a teapot'}))` should return `{hello: 'im a teapot'}`

`crypt` and `decrypt` unit tests should be implemented for each format (e.g: `crypt_rot13_should_work`, ...)

## Supported Formats

### Rot13

The Rot13 format is a very simple one, has been around for ages, and is totally not secure.

The rule is simple: for each character in the input object/array/variable, you just take it's ascii code
and increment it by 13.

### ZMap

The ZMap format is also a very simple one, has also been around for ages and is not secure at all.
The idea is to map each character to a custom one, using values you decide.

### XOR

The XOR format is also a very simple one, has also been around for ages and is not secure at all.
For this one, you just have to exclusive or each byte.

### Roll your own ...

You can implement custom encryption format, the only constraint behing that it should be decryptable!

## Instructions

Implement the library, along with it's unit tests.
Type as much as possible.
Take particular care of where you place the files, and to write clean code.
The library should be extensible.
