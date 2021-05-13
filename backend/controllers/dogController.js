const util = require('../modules/util');
const CODE = require('../modules/statusCode');
const MSG = require('../modules/responseMessage');
const DogModel = require('../models/dogs');

module.exports = {
    getFeatureDogs: async (req, res) => {
        // 데이터 받아오기
		const feature = req.query.feature;
        // data check - undefined
        if (feature === undefined) {
            return res.status(CODE.BAD_REQUEST).send(util.success(CODE.BAD_REQUEST, MSG.NULL_VALUE));
        } 
        try {
            // call model - database
            let result = await DogModel.getFeatureDogs(feature);
            for (var i = 0; i < result.length; i++) {
                result[i]['image'] = `https://helpdogs.s3.ap-northeast-2.amazonaws.com/homeless/${result[i]['dog_idx']}.jpg`;
            }
            if (result.length > 6) {
                result = result.sort(() => Math.random() - Math.random()).slice(0, 6);
            }
            res.status(CODE.OK).send(util.success(CODE.OK, MSG.GET_DOG_SUCCESS, result));
        } catch (err) {
            if (err.errno == 1062) {
                console.log('getFeatureDogs ERROR : ', err.errno, err.code);
                throw err;
            }
            console.log('getFeatureDogs ERROR : ', err);
            throw err;
        }
    },

    getLikeDogs: async (req, res) => {
        // 데이터 받아오기
		const like_arr = req.body.like;
        // data check - undefined
        if (like_arr === undefined) {
            return res.status(CODE.BAD_REQUEST).send(util.success(CODE.BAD_REQUEST, MSG.NULL_VALUE));
        } 
        try {
            // call model - database
            let result = await DogModel.getLikeDogs(like_arr);
            for (var i = 0; i < result.length; i++) {
                result[i]['image'] = `https://helpdogs.s3.ap-northeast-2.amazonaws.com/homeless/${result[i]['dog_idx']}.jpg`;
            }
            res.status(CODE.OK).send(util.success(CODE.OK, MSG.GET_LIKE_SUCCESS, result));
        } catch (err) {
            if (err.errno == 1062) {
                console.log('getLikeDogs ERROR : ', err.errno, err.code);
                throw err;
            }
            console.log('getLikeDogs ERROR : ', err);
            throw err;
        }
    }
}
