const functions = require("firebase-functions");

const admin = require("firebase-admin");
var serviceAccount = require("./secruityKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://maxnftwebapp-default-rtdb.firebaseio.com"
});

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: true }));

const db = admin.firestore();

// Routes
app.get("/", (req, res) => {
    return res.status(200).send("Hey the port start at local host");
})


//  Create -> post  

app.post("/api/createuser", (req, res) => {
    (async () => {
        try {
            await db.collection('userdetails').doc(req.body.userid).create({
                id: Date.now(),
                userid: req.body.userid,
                username: req.body.username,
                name: req.body.name,
                email: req.body.email,
                metamaskwallet: req.body.metamaskwallet,
                mobile: req.body.mobile,
                address: req.body.address,
                artist: req.body.artist,
                photourl: req.body.photourl
            });
            return res.status(200).send({ status: "Sucess", msg: "data saved" });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ status: "Failed", msg: error });
        }
    })();
});


//  get ->  get() 

//  1)  get data for particular id 

app.get("/api/getuser/:id", (req, res) => {
    (async () => {
        try {

            const requdoc = db.collection('userdetails').doc(req.params.id);
            let userdetails = await requdoc.get();
            let response = userdetails.data();
            return res.status(200).send({ status: "Sucess", msg: response });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ status: "Failed", msg: error });
        }
    })();
})

//  2) get data of all users  

app.get("/api/getalluser", (req, res) => {

    (async () => {
        try {
            const requdoc = db.collection('userdetails');
            let response = [];
            await requdoc.get().then((data) => {
                let docs = data.docs;
                docs.map((doc) => {
                    const selecteditem = {
                        id: doc.data().id,
                        username: doc.data().username,
                        name: doc.data().name,
                        email: doc.data().email,
                        metamaskwallet: doc.data().metamaskwallet,
                        mobile: doc.data().mobile,
                        address: doc.data().address,
                        artist: doc.data().artist

                    };
                    response.push(selecteditem);
                });
                return response;
            });
            return res.status(200).send({ status: "Sucess", msg: response });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ status: "Failed", msg: error });
        }
    })();

});


// Update -> put()

app.put("/api/update/:id", (req, res) => {
    (async () => {
        try {

            const requdoc = db.collection('userdetails').doc(req.params.id);
            await requdoc.update({
                name: req.body.name,
                email: req.body.email,
                metamaskwallet: req.body.metamaskwallet,
                mobile: req.body.mobile,
                address: req.body.address,
                artist: req.body.artist
            })

            return res.status(200).send({ status: "Sucess", msg: "data updated" });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ status: "Failed", msg: error });
        }
    })();
});


// Delete 

//  1) delete particular id data 

app.delete("/api/update/:id", (req, res) => {
    (async () => {
        try {
            const requdoc = db.collection('userdetails').doc(req.params.id);
            await requdoc.delete();
            return res.status(200).send({ status: "Sucess", msg: "data Removed" });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ status: "Failed", msg: error });
        }
    })();
});


//  exports our api with firebase cloud functions

exports.app = functions.https.onRequest(app);
