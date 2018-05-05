module.exports = {
    create:{
        name: {type: 'string', required: true, min: 4 },
        email: {type: 'string', required: true, min : 8},
        password: {type: 'string', required: true, min: 6}
    },

};