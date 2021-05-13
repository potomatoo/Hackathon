const util = require('../modules/util');
const CODE = require('../modules/statusCode');
const MSG = require('../modules/responseMessage');
let imgs = [];
for (var i = 0; i <= 15; i++) {
    imgs.push([]);
    for (var j = 1; j <= 3; j++) {
        if ((i === 0 & j === 1) || (i === 13 & (j === 2 || j === 3))) {
            imgs[i].push(`https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/${i}/${j}.png`);
        }
        else {
            imgs[i].push(`https://helpdogs.s3.ap-northeast-2.amazonaws.com/hwacho/${i}/${j}.jpg`);
        }
    } 
}

module.exports = {
    getIdealDogs: async (req, res) => {
        try {
            // call model - database
            console.log(imgs);
            let result = [];
            for (var i = 0; i <= 15; i++) {
                result.push(imgs[i][Math.floor(Math.random() * 3)])
            }
            res.status(CODE.OK).send(util.success(CODE.OK, MSG.GET_IDEAL_SUCCESS, result));
        } catch (err) {
            if (err.errno == 1062) {
                console.log('getIdealDogs ERROR : ', err.errno, err.code);
                throw err;
            }
            console.log('getIdealDogs ERROR : ', err);
            throw err;
        }
    }
}