const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://gabrielcote1999:Monnewmdp1234!@cluster0.laoyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "test";

 async function query(){
     try{
         await client.connect();
         console.log("connected")
         const db = client.db(dbName);
         const col = db.collection("people");
         const myDoc = await col.findOne({"name.first": 'Alan'});
         
         // Print to the console
         console.log(myDoc);
    }catch (err){
        console.log(err.stack);     
    }finally{
    await client.close();
    }
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         // Use the collection "people"
         const col = db.collection("people");
         // Construct a document                                                                                                                                                              
         let personDocument = {
             "name": { "first": "Alan", "last": "Turing" },
             "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
             "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
             "contribs": [ "Turing machine", "Turing test", "Turingery" ],
             "views": 1250000
         }
         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(personDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
 }
query(console.dir);
//run().catch(console.dir)