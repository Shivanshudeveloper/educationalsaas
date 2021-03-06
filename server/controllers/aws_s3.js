const AWS = require('aws-sdk');
require('dotenv').config();
AWS.config.update({
  accessKeyId: 'process.env.ACCESS_KEY',
  secretAccessKey: 'process.env.SECRET_KEY',
  region: 'ap-south-1',
});
var s3 = new AWS.S3();
const deleteVideo = async (req, res) => {
  console.log('In delete video controller');
  try {
    const { url } = req.body;
    console.log(req.body);
    let uurl = url;
    const params = {
      Bucket: 'evanalin',
      Key: uurl.replace('https://evanalin.s3.ap-south-1.amazonaws.com/', ''),
    };
    const deleteVideo = await s3.deleteObject(params).promise();
    if (deleteVideo) {
      res.status(200).json({
        message: 'Video Deleted Successfully',
      });
    }
  } catch (err) {
    console.log(err);
  }
};
const listVideos = async (req, res) => {
  try {
    const { date } = req.query;
    if (date) {
      var params = {
        Bucket: 'evanalin',
      };
      const list = await s3.listObjectsV2(params).promise();
      const listUrls = [];
      for (let i = 0; i < list.Contents.length; i++) {
        if (list.Contents[i].Key.includes('mp4')) {
          url = `https://evanalin.s3.ap-south-1.amazonaws.com/${list.Contents[i].Key}`;
          folderName = url.split('/')[3];
          lm = list.Contents[i].LastModified;
          nd = new Date(lm);
          createdDate = nd.toISOString().split('T')[0];
          vo = {
            url,
            createdDate,
            folderName,
          };
          if (url.includes(date)) {
            listUrls.push(vo);
          }
        }
      }
      res.status(200).json(listUrls);
    } else {
      var params = {
        Bucket: 'evanalin',
      };
      const list = await s3.listObjectsV2(params).promise();
      const listUrls = [];
      for (let i = 0; i < list.Contents.length; i++) {
        if (list.Contents[i].Key.includes('mp4')) {
          url = `https://evanalin.s3.ap-south-1.amazonaws.com/${list.Contents[i].Key}`;
          folderName = url.split('/')[3];
          lm = list.Contents[i].LastModified;
          nd = new Date(lm);
          createdDate = nd.toISOString().split('T')[0];
          vo = {
            url,
            createdDate,
            folderName,
          };
          listUrls.push(vo);
        }
      }
      res.status(200).json(listUrls);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  listVideos,
  deleteVideo,
};
