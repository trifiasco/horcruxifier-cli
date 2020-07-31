# Horcruxifier

## What is this?

A CLI application to secure files through encryption with added layer of security.

## [Check out the live web version in heroku](https://trifiasco-horcruxifier.herokuapp.com/)

## [Check out the CLI version published as an npm package](https://www.npmjs.com/package/horcruxifier)

## Motivation

Everyone has some files they want secured. How can you absolutely make sure that those are secured? Well, hypothetically you can't. Though there are multiple ways you can "Almost" make sure that your files are secured.

I don't if anyone ever thought this before or not. But J. K. Rowling, the creator of Harry Potter, showed us an wonderful way to add a layer of security over the traditional encryption schemes. **Remember how Voldemort wanted to make sure that it's almost impossible to kill him? Yess... By making Horcruxes!!!**

**And that's what this web application does!!!**

### Installation

If you have node on your machine, then open terminal. Change directory to whatever directory you wish this to be installed. Then just run this on terminal -

```
npm i horcruxifier
```

this will create a `node_modules` folder in the directory you installed the package. Then run this module by entering -

```
node node_modules/horcruxifier
```

## How this works?

This CLI lets you to make horcruxes (:P). If you run it, you will be asked to put a file name with the full path. Also a password. Then this application will encrypt the file and divide it into 7 different files (Horcruxes.. :P) in a folder. You can then distribute the 7 different files into different locations.

Now what if you want to edit the file you just horcruxified? Don't worry, there's also an option to `de-horcruxify` as well. You need to accumulate all the 7 files into one folder and then put the folder name with full path in the application, and it will make that whole again. You can edit or do whatever you wish.

### Limitations

This is really a personal project, done for purely fun purpose. I have tested against images, pdfs, text files. I think it should work for other files too. If you use it and find any bug, please report it.

- [Report a bug](https://github.com/trifiasco/horcruxifier-cli/issues)
- Also feel free to open a PR if you have any cool ideas to add here.

### Known Issues

- Node.js `crypto.createCipher` is deprecated. Need to update to `crypto.createCipheriv`
