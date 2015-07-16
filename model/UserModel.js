/*�����ӵ����ݿ��mongo*/
var mongo = require('../lib/mongoose.js');

/*ѡ���*/
var mongooseSchema = new mongo.Schema({
    name: {type: String, default: '�����û�'},
    password: {type: String},
    email: {type: String}
});

var mongooseModel = mongo.model('user', mongooseSchema);

var UserModel = function () {
};

UserModel.prototype.save = function (params, callback) {
    /*�����ĵ���һ����¼*/
    var doc = {name: params.name, password: params.password, email: params.email};
    var mongooseEntity = new mongooseModel(doc);
    mongooseEntity.save(function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('saved OK!');
        }
    });
};

UserModel.prototype.find = function (params, callback) {
    mongooseModel.find({email: params.email}, function (err, docs) {
            console.log(docs);
        }
    );
};

//
module.exports = UserModel;