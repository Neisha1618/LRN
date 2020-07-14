const db = require('./index');
// a change
// database methods will go here then import into routes
/*
Users
 */

// method for inserting user info
// const createUser = async(req, res) => {
//   try {
//     await db.query('INSERT INTO users (username, namefirst, namelast, email, imageurl, zip) VALUES ( ${user}, ${firstName}, ${lastName}, ${emails}, ${image}, ${zipcode})', req.body);
//     res.send({ message: 'user added' });
//   } catch (err) {
//     console.log('nah bruh', err);
//   }
// };

const createUser = (user) => {
  // const { username, lastname } = user;
  const {
    googleId, username, firstName, lastName, photo, email,
  } = user;
  db.query(`INSERT INTO users (googleID, username, nameFirst, nameLast, email, imageUrl) VALUES ('${googleId}', '${username}', '${firstName}', '${lastName}', '${email}', '${photo}')`);
};
const getUser = (id) => {
  return db.query(`SELECT * FROM users WHERE googleid = '${id}'`);
};

// method that gets  particular users info
// const getUser = async(req, res) => {
//   try {
//     const user = await db.one(`SELECT * FROM user WHERE id = ${req.params.id}`);
//     res.send(user);
//   } catch (err) {
//     console.log(`no user, ${err}`);
//   }
// };
// method that gets all the users info
const getAllUser = async(req, res) => {
  try {
    const users = await db.any('SELECT * FROM users');
    res.send(users);
  } catch (err) {
    console.log(`no users, ${err}`);
  }
};

/*
Events
 */
// method that insert into event
const createEvent = async(req, res) => {
  try {
    // not working yet
    await db.query('INSERT INTO event (topic, date, time, users_id, classLimit) VALUES ( ${topic}, ${date}, ${time}, ${user_id}, ${classLimit})', req.body);
    res.send({ message: 'event added' });
  } catch (err) {
    console.log('nah bruh', err);
  }
};
// method that get from event

const getAllEvents = async(req, res) => {
  try {
    const events = await db.any('SELECT * FROM event');
    res.send(events);
  } catch (err) {
    console.log(`no events, ${err}`);
  }
};

// get events of a particular user

const getEventbyUser = async(req, res) => {
  try {
    const userEvents = await db.any(`SELECT * FROM event where users_id = ${req.params.id}`);
    res.send(userEvents);
  } catch (err) {
    console.log(`this user is boring, ${err}`);
  }
};

/*
Topic
 */
// method that insert into topic
const createTopic = async(req, res) => {
  try {
    await db.query('INSERT INTO topic (name) VALUES (${name})', req.body);
    res.send('it worked');
  } catch (err) {
    console.log('nah', err);
  }
};
// method that get from topic
const getTopic = async(req, res) => {
  try {
    await db.any('SELECT * FROM topic');
  } catch (err) {
    console.log(`they not ready for this knowledge, ${err}`);
  }
};

// get topics a user likes
const getTopicByUser = async(req, res) => {
  try {
    await db.any(`SELECT * FROM topic WHERE user_id = ${req.params.id}`);
  } catch (err) {
    console.log(`no user topics, ${err}`);
  }
};

/*
Document
// method that insert into Document
// method that get from Document
*/

const addDocument = async(req, res) => {
  try {
    await db.any('SELECT * FROM document');
    res.send('we got the documents');
  } catch (err) {
    console.log('No documents', err);
  }
};

const getAllDocument = async(req, res) => {
  try {
    await db.query('INSERT INTO document (documentType, linkTo) VALUES (${type} ${link})', req.body);
    res.send('we added a document');
  } catch (err) {
    console.log('No document added', err);
  }
};

const addEventDocument = async(req, res) => {

};

/*
Binder

// method that insert into Binder
// method that get from Binder
*/

/*
Event_Documents
 */
// method that insert into Event_Documents
// method that get from Event_Documents

/*
Flash_Cards
 */
// method that insert into Flash Cards
// method that get from Flach Cards

/*
Flash card packs
 */
// method that insert into Flash Card Pack
// method that get from Flash Card Pack

module.exports = {
  createEvent,
  getAllEvents,
  getAllUser,
  getUser,
  createUser,
  createTopic,
  getTopic,
  getTopicByUser,
  getEventbyUser,
  addDocument,
  getAllDocument
};
