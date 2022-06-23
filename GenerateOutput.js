export class GenerateOutput{

    outputOverTime(time){
        this.randomString = (Math.random() + 1).toString(36).substring(3);
        setInterval(() => this.toString(), time);
    }

    toString() {console.log(this.randomString);}

    constructor(){
        this.dateTimeNow = Date.now();
        this.randomString = (Math.random() + 1).toString(36).substring(3);
        this.time = true;
    }

}