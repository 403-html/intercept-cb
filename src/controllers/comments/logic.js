// Utils
const { connectDB } = require("../../models/connect");

// Logic
async function getComments(type = "all") {
  const { db, client } = await connectDB();
  let comments;

  if ((type = "all")) {
    comments = await db.collection("comments").find({});
  }

  client.close();

  return comments;
}

async function addComment({ user, comment, addDate = new Date() }) {
  const { db, client } = await connectDB();

  await db.collection("comments").insertOne({
    user,
    comment,
    addDate,
  });

  client.close();
}

async function updateComment({ id, comment, modDate = new Date() }) {
  const { db, client } = await connectDB();

  await db.collection("comments").updateOne(
    {
      _id: id,
    },
    {
      $set: {
        comment,
        modDate,
      },
    }
  );

  client.close();
}

async function removeComment({ id }) {
  const { db, client } = await connectDB();

  await db.collection("comments").removeOne({
    _id: id,
  });

  client.close();
}

async function clearAllComments() {
  const { db, client } = await connectDB();

  await db.collection("comments").deleteMany({});

  client.close();
}

module.exports = {
  getComments,
  addComment,
  updateComment,
  removeComment,
  clearAllComments,
};
