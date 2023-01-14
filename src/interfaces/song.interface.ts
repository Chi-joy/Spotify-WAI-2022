export default interface ISong{

    imageURL:string,
    songID:number,
    songName:string,
    releaseDate:Date,
    closeness:number,
    artists:[string],
    album:string,
    explicit:boolean,
    
}