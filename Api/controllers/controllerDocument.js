const Document = require('../models/document');

exports.getDocuments = async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json(documents);
} catch (error) {
    res.status(400).json({ error: error.message });
}
};

exports.addDocument = async (req, res) => {
  try {
    const { name, status, required } = req.body;

    const newDocument = new Document({
        name,
        status,
        required
    });

    await newDocument.save();
    res.status(201).json(newDocument);
} catch (error) {
    res.status(400).json({ error: error.message });
}

};
