import app from "./server";
import { logger } from './utils/logger';
//import { connectDB } from "./database/connection";

//get port applicatton in .env
const PORT = process.env.PORT;
const ENVIRONMENT = process.env.ENVIRONMENT;

app.listen(PORT, async () => {
    //await connectDB();
    logger.info(`Application runing in port ${PORT} with enviroment ${ENVIRONMENT}`);
});