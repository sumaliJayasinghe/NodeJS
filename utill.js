const fs = require('fs');
const chalk =  require("chalk");
function Utill(){
    readNotes = () => {
        const bufferedData = fs.readFileSync("notes.json");
        return JSON.parse(bufferedData.toString())
    };
    add = (title, body) => {
        const data = readNotes();
        debugger
        data.push({
            title:title,
            body:body
        }) 
        console.log(chalk.green.bold("Add Notes ... "));
        save(JSON.stringify(data)) 
    };
    save = (data) =>{
        fs.writeFileSync("notes.json",data)
    };
    remove = (title) =>{
        const data = readNotes();
        const newData = data.filter((note) =>{
            return note.title != title
        });

        if(data.length == newData.length){
            console.log(chalk.red.bold("No Notes found ... "));
        }else{
            console.log(chalk.green.bold("Removed Notes ... "));
            save(JSON.stringify(newData))
        }
        
    }
    return {
        readNotes : readNotes,
        add : add,
        remove : remove
    }
}

module.exports = Utill