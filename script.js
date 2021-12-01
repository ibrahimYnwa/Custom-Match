class CustomMatch{
    constructor(x){
        this.x=x;
    }
     plus(a){
         this.x=this.x+a;
         return this;
     }
     minus (b){
         this.x=this.x-b;
         return this;
     }
     divide(c){
         this.x=this.x/c;
         return this;
     }
     multipy (d) {
         this.x=this.x*d;
         return this ;
         
     }
}
var result=new CustomMatch(100).plus(6).minus(30).multipy(3).divide(2)
console.log(result);