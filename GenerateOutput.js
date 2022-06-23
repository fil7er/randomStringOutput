export class GenerateOutput{

    outputOverTime(time){
        setInterval(() => this.toString(), time);
    }

    toString() {console.log(Date()+':'+this.randomString);}

    constructor(){
        this.randomString = (Math.random() + 1).toString(36).substring(3);
        this.time = true;
    }

}