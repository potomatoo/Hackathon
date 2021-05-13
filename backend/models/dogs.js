const pool = require('../modules/pool');
const table = 'dogs';

module.exports = {
    getFeatureDogs: async (feature) => {
        const fields = 'dog_idx, YEAR(CURRENT_DATE())-age+1 AS age, sex, weight, DATEDIFF(CURRENT_DATE(), happen_date) AS intake_days, special_mark, care_name, longitude, latitude';
        const query = `SELECT ${fields} FROM ${table} WHERE feature1=${feature} or feature2=${feature} or feature3=${feature}`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('getFeatureDogs ERROR : ', err.errno, err.code);
                throw err;
            }
            console.log('getFeatureDogs ERROR : ', err);
            throw err;
        }
    },

    // getLikeDogs: async (feature) => {
    //     const fields = 'dog_idx, YEAR(CURRENT_DATE())-age+1 AS age, sex, weight, DATEDIFF(CURRENT_DATE(), happen_date) AS intake_days, special_mark, care_name, longitude, latitude';
    //     const query = `SELECT ${fields} FROM ${table} WHERE feature1=${feature} or feature2=${feature} or feature3=${feature}`;
    //     try {
    //         const result = await pool.queryParam(query);
    //         return result;
    //     } catch (err) {
    //         if (err.errno == 1062) {
    //             console.log('getFeatureDogs ERROR : ', err.errno, err.code);
    //             throw err;
    //         }
    //         console.log('getFeatureDogs ERROR : ', err);
    //         throw err;
    //     }
    // }
};