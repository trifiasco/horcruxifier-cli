#!/usr/bin/node
"use strict";

var inquirer = require("inquirer");
var chalk = require("chalk");
var fs = require("fs");
var crypto = require("crypto");
var path = require('path');

var response = chalk.bold.green;

const HORCRUXES = ["Tom Riddle's diary", "Marvolo Gaunt's Ring", "Salazar Slytherin's Locket", "Helga Hufflepuff's Cup", "Rowena Ravenclaw's Diadem", "Harry Potter", "Nagini the Snake"];

var comandPrompts = {
    type: "list",
    name: "commandOptions",
    message: "What do you want to do?",
    choices: ['Horcruxify', `De-Horcruxify`, "Exit"]
  };

function main() {
    console.log(response("\n\n***************Hello!!!****************\n******Welcome to horcruxifier**********\n\n"));
    commandHandler();
}

function writeToFile(fileNameWithPath, fileContent){
  fs.writeFileSync(fileNameWithPath, fileContent);
}

function readFile(fileName){
  let fileContent;
  try{
    fileContent = fs.readFileSync(fileName);
  } catch(err){
    console.log("File Not Found!!!!!")
  }
  return fileContent;
}

function chunkify(data, chunkNums) {
  var chunkLength = Math.ceil(data.length / chunkNums)
  var chunks = new Array(chunkNums)

  for (let i = 0, o = 0; i < chunkNums; ++i, o += chunkLength) {
    chunks[i] = data.substr(o, chunkLength);
  }
  return chunks
}

function processPath(pathWithFileName){
  // let slicingIndex = pathWithFileName.lastIndexOf(path.sep);

  // if(slicingIndex != -1){
  //   return pathWithFileName.slice(0, slicingIndex) + path.sep;
  // }
  return path.dirname(pathWithFileName);
}

function horcruxify(path, fileBlob, password){
  var cipher = crypto.createCipher('aes-128-cbc', password);
  var encryptedBlob = cipher.update(fileBlob, 'utf8', 'hex') + cipher.final('hex');
  
  let chunks = chunkify(encryptedBlob, 7);

  path = processPath(path);

  if(!fs.existsSync(path + '/horcruxes')){
    fs.mkdirSync(path + '/horcruxes');
  }
  for(var i = 0; i < 7; i++){
    writeToFile(path + '/horcruxes/' + HORCRUXES[i] + ".txt", chunks[i]);
  }
  
  console.log(response("\nTA DA!!!! your file is horcruxified!!!\n"));
}

function deHorcruxify(folderPath, fileBlob, password){
  var cipher = crypto.createDecipher('aes-128-cbc', password);
  var decryptedBlob = cipher.update(fileBlob, 'hex', 'utf8') + cipher.final('utf8');

  writeToFile(folderPath + "/original.txt", decryptedBlob);
  console.log(response("\nTA DA!!!! your file is de-horcruxified!!!\n"));
}

function askForFileOrFolder(isHorcruxifying){
  inquirer
    .prompt([{
      type: "input",
      name: "path",
      message: isHorcruxifying == true  ? "Enter file name(with full path):" : "Enter folder containing horcruxes(with full path):"
    },
    {
      type: "password",
      name: "password",
      message: "Enter a password: ",
      default: true
    }])
    .then(response => {

      if(isHorcruxifying){
        let fileContent = readFile(response.path);
        if(!fileContent){
          commandHandler()
          return;
        }
        horcruxify(response.path, fileContent, response.password);
      }
      else{
        let fullBlob = processFolder(response.path);
        deHorcruxify(response.path, fullBlob, response.password);
      }
      commandHandler();
      return;
    });
}


function processFolder(folderPath){
  let fullBlob = "";
  HORCRUXES.forEach(item =>{
    let fileName = folderPath + "/" + item + ".txt";
    fullBlob += fs.readFileSync(fileName);
    fs.unlinkSync(fileName);
  });
  return fullBlob;
}


function commandHandler() {
    inquirer.prompt(comandPrompts).then(answer => {
      if (answer.commandOptions == "Exit") {
        return;
      }
      var option = answer.commandOptions;
      if(option == "Horcruxify"){
          console.log(response('\nEnter a file name (with full path) to you want to horcruxify\n'));
          askForFileOrFolder(true);
      }
      else{
        console.log(response('Choose a file to you want to de-horcruxify'));
        askForFileOrFolder(false);
      }
    });
}

main();