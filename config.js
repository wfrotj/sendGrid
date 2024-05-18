import dotenv from "dotenv";

dotenv.config();

const sendGridApiKey = process.env.sendGridApiKey;
const PORT = process.env.PORT;
const sendGridTest = process.env.sendGridTest;
export default {
  sendGridApiKey,
  PORT,
  sendGridTest,
};
