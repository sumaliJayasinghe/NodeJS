const utils = require("./utill.js")
const yargs = require('yargs');

yargs.command({
    command: "add",
    description: "adding new note",
    bundler:{
        title:{
            description: "title",
            type:"string",
            demandOnOption:false
        },
        body:{
            description: "body",
            type:"string",
            demandOnOption:false
        }

    },
    handler: (argv) => {
        utils().add(argv.title,argv.body)
    }
   
})

yargs.command({
    command: "remove",
    description: "Removing new note",
    bundler:{
        title:{
            description: "title",
            type:"string",
            demandOnOption:false
        }
    },
    handler: (argv) =>{
        utils().remove(argv.title)
    }
})

yargs.parse()

