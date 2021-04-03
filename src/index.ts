import server from './server';
import dbConnect from './config/dbConnect';



const PORT = process.env.PORT || 5000;
const main = () => {
    server.listen(PORT, () => {
        dbConnect();
        console.log("\tServer running at port: ", PORT);
        
    })
}

main();