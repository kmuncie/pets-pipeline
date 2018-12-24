'use strict';

module.exports.imagePipeline = (event) => {
  event.Records.forEach((record) => {
    const filename = record.s3.object.key;
    const filesize = record.s3.object.size;
    console.log(`New image has been created: ${filename} (${filesize} bytes)`);
  });
};

