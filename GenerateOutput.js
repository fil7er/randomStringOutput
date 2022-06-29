export class GenerateOutput{

    memory;

    outputOverTime(time){
        setInterval(() => this.toString(), time);
    }


    toString() {console.log(Date()+':'+this.randomString); this.memory += Date()+':'+this.randomString+'\n';}

    toJSON() {return [Date(), this.randomString]}

    constructor(){
        this.randomString = (Math.random() + 1).toString(36).substring(3);
        this.time = true;
    }

}