/*--------------------------------------------------File System using Promises---------------------------------------------*/
const fsPromise=require('fs').promises;
const path=require('path');

const fileOps=async ()=>{
    try{
        const data=await fsPromise.readFile(path.join(__dirname,'files','start.txt'),'utf8');
        console.log(data);
        console.log('read completed');
        await fsPromise.unlink(path.join(__dirname,'files','reply.txt'),'utf8');//used to delete the file
        await fsPromise.writeFile(path.join(__dirname,'files','write.txt'),data)
        console.log('write completed');
        await fsPromise.appendFile(path.join(__dirname,'files','write.txt'),'\n\nNice to meet you');
        console.log('append completed');
        await fsPromise.rename(path.join(__dirname,'files','write.txt'),path.join(__dirname,'files','writeen.txt'));
        console.log('rename completed');
        const newData=await fsPromise.readFile(path.join(__dirname,'files','writeen.txt'),'utf8');
        console.log(newData);
    }
    catch(err){
        console.error(err);
    }
}
fileOps();

/*--------------------------------------------------File System using Callbacks---------------------------------------------*/
/*const fs=require('fs')
const path=require('path')

fs.readFile(path.join(__dirname,'files','start.txt' ), 'utf8' , (err,data)=>{
    if (err) throw err;
    console.log(data)
})

fs.writeFile(path.join(__dirname,'files','replt.txt'),'Hello Glad to have interest in node',(err)=>{
    if (err) throw err;
    console.log('Write file created')
    fs.appendFile(path.join(__dirname,'files','replt.txt'),'\n\nNice to meet you',(err)=>{
        if (err) throw err;
        console.log('1st append updated')
        fs.appendFile(path.join(__dirname,'files','replt.txt'),'\n\nGood bye',(err)=>{
            if (err) throw err;
            console.log('2nd append file updated')
            fs.rename(path.join(__dirname,'files','replt.txt'),path.join(__dirname,'files','reply.txt'),(err)=>{
                if (err) throw err;
                console.log('file renamed')
            })
        })
    })
})

console.log('hello')
console.log(path.join(__dirname,'files','start.txt'))
*/
