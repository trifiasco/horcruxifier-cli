# Horcruxifier

### What is this?
Well, this is another fun CLI application to secure files.

### Motivation
Everyone has some files they want secured. How can you absolutely make sure that those are secured. Well, hypothetically you can't. Though there are multiple ways you can "Almost" make sure that your files are secured.

I don't if anyone ever thought this before or not. But [J. K. Rowling](https://www.jkrowling.com/) showed us an wonderful way to do it. Remember how `Voldemort` wanted to make sure that it's almost impossible to kill him? By making `Horcruxes`!!!

### Installation
If you have node on your machine, then open terminal. Change directory to whatever directory you wish this to be installed. Then just run this on terminal - 
```
npm i horcruxifier
```

this will create a `node_modules` folder in the directory you installed the package. Then run this module by entering - 
```
node node_modules/horcruxifier
```

### How this works?
This CLI lets you to make horcruxes (:P). If you run it, you will be asked to put a file name with the full path. Also a password. Then this application will encrypt the file and divide it into 7 different files (Horcruxes.. :P) in a folder. You can then distribute the 7 different files into different locations.

Now what if you want to edit the file you just horcruxified? Don't worry, there's also an option to `de-horcruxify` as well. You need to accumulate all the 7 files into one folder and then put the folder name with full path in the application, and it will make that whole again. You can edit or do whatever you wish.

### Limitations
So far it works for only text files. Also I did it for fun purpose and haven't done much testing. So use it with your own risk :P 

### Future Benchmarks
- Make a web UI instead of CLI
- support different file formats than `.txt`