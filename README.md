# Typescript strict mode plugin fork

Typescript plugin that allows to use custom tsconfig on text editor.
This project is a fork of https://github.com/allegro/typescript-strict-plugin

## How to install

 Use `npm`:
```bash
npm i --save-dev typescript-custom-compiler-options
```
or yarn 
```bash
yarn add -D typescript-custom-compiler-options
```
add plugin to your `tsconfig.json`:
```json
{
 "compilerOptions": {
   ...
   "strict": false,
   "plugins": [
    {
     "name": "typescript-custom-compiler-options"
    }
   ]
 }
}
```

## Configuration
```json
{
  "compilerOptions": {
    ...
    "strict": false,
    "plugins": [
      {
        "name": "typescript-custom-compiler-options",
        "options": {
          "strict": true,
          "noImplicitAny": true,
          "strictNullChecks": true,
        }
      }
    ]
  }
}