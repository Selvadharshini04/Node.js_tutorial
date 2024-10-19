/*---------------------------------------------------Used to read Large file Stream---------------------------------------------*/
const fs=require('fs');
const path=require('path')

const  rs=fs.createReadStream(path.join(__dirname,'files','lorem.txt'),{encoding: 'utf8'})
const  ws=fs.createWriteStream(path.join(__dirname,'files','lorem-copy.txt'));

/*rs.on('data',(dataChunk)=>{
    console.log('Read completed');
    ws.write(dataChunk);
    console.log('Write completed');
})*/
rs.pipe(ws);