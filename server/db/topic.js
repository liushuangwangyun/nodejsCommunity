const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Topic = {}

const topicSchema = new Schema({
    description: {
        type: String,
        unique: true,
        required: [true, '话题名不能为空'],
        maxlength: [10, '不能大于10个字符']
    }
})

Topic.Model = mongoose.model('topics', topicSchema)

Topic.Model.on('index', (err)=>{
    if(err){
        console.error('集合 topics 索引错误！')
    }else{
        console.log('集合 topics 索引成功！')
    }
})

module.exports = Topic