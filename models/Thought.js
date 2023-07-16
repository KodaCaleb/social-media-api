const mongoose = require('mongoose');
const { Schema, Types } = mongoose;
const dateFormat = require('../helpers/date');


const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function(timeStamp) {
            return dateFormat(timeStamp);
        },
    },
});

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function(timeStamp) {
            return dateFormat(timeStamp);
        },
    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionSchema]
});


ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});



const Thought = mongoose.model('Thought', ThoughtSchema);

module.exports = { Thought, ReactionSchema }
