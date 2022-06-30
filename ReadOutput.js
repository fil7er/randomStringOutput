import fs from 'fs';

export class ReadOutput{

    
    toJSON() {return [fs.readFileSync('file/output.txt').toString()]}

    constructor(){
        this.randomString = (Math.random() + 1).toString(36).substring(3);
        this.time = true;
    }

}