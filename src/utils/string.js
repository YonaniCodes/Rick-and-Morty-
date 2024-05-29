export const truncate=(string,length=24)=>{
    if(string.length>length)
    return string.slice(0,length)+" ....."
    return string
}