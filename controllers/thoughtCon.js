const { Thought } = require('../models/Thought');
const  User  = require('../models/User');


const getAllThoughts = async (req, res) => {
  try {
    // throw new Error('This is a test error');
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get thoughts', actualError: error.message });
  }
};

const getThoughtById = async (req, res) => {
  const { id } = req.params;
  try {
    const thought = await Thought.findById(id);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get thought' });
  }
};

const createThought = async (req, res) => {
  const { thoughtText, username } = req.body;
  
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const thought = await Thought.create({
      thoughtText,
      username,
    });

    user.thoughts.push(thought._id);
    await user.save();

    res.status(201).json(thought);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create thought' });
  }
};


const updateThought = async (req, res) => {
  const { id } = req.params;
  const { thoughtText } = req.body;
  try {
    const thought = await Thought.findByIdAndUpdate(
      id,
      { thoughtText },
      { new: true }
    );
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update thought' });
  }
};

const deleteThought = async (req, res) => {
  const { id } = req.params;
  try {
    const thought = await Thought.findByIdAndDelete(id);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json({ message: 'Thought deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete thought' });
  }
};

const addReaction = async (req, res) => {
  const { thoughtId } = req.params;
  const { reactionBody, username } = req.body;
  try {
    const thought = await Thought.findByIdAndUpdate(
      thoughtId,
      { $push: { reactions: { reactionBody, username } } },
      { new: true }
    );
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add reaction' });
  }
};

const removeReaction = async (req, res) => {
  const { thoughtId, reactionId } = req.params;
  try {
    const thought = await Thought.findByIdAndUpdate(
      thoughtId,
      { $pull: { reactions: { _id: reactionId } } },
      { new: true }
    );
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove reaction' });
  }
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
};
