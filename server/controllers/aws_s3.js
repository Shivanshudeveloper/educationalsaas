const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'eu-central-1'
});
var s3 = new AWS.S3();
const listVideos = async (req,res) => {
    try{
        const {date} = req.query;
        if(date){
            var params = {
                Bucket: 'evaliain',
                
            };        
            const list = await s3.listObjectsV2(params).promise();
            const listUrls = []
            for(let i=0;i<list.Contents.length;i++){
                if(list.Contents[i].Key.includes("mp4")){
                    url = `https://evaliain.s3.eu-central-1.amazonaws.com/${list.Contents[i].Key}`
                    folderName = url.split('/')[3]
                    lm = list.Contents[i].LastModified
                    nd = new Date(lm)
                    createdDate =  nd.toISOString().split('T')[0]
                    vo = {
                        url,
                        createdDate,
                        folderName
                    }
                    if(url.includes(date)){
                        listUrls.push(vo)
                    }           
                }
            }
            res.status(200).json(listUrls);
            
        }else{
            var params = {
                Bucket: 'evaliain',
            };        
            const list = await s3.listObjectsV2(params).promise();
            const listUrls = []
            for(let i=0;i<list.Contents.length;i++){
                if(list.Contents[i].Key.includes("mp4")){
                    url = `https://evaliain.s3.eu-central-1.amazonaws.com/${list.Contents[i].Key}`
                    folderName = url.split('/')[3]
                    lm = list.Contents[i].LastModified
                    nd = new Date(lm)
                    createdDate =  nd.toISOString().split('T')[0]
                    vo = {
                        url,
                        createdDate,
                        folderName
                    }
                   listUrls.push(vo)      
                }
            }
            res.status(200).json(listUrls);
        }
        
    }
    catch(err){
        console.log(err);
    }

}

module.exports = {
    listVideos
}
