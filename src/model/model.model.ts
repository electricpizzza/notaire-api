export class Model{
     constructor(
        public id:number,
        public language:string,        
        public redacteur:string,        
        public libelle:string,        
        public type:string,        
        public dateRedaction:Date,        
        public boilerPlate:any,        
     ){};
}