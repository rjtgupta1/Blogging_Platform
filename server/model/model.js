import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        require:true
    },
    description: {
        type: String,
        require:true
    }
});

export default mongoose.model('post', PostSchema);