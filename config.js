import dotenv from "dotenv";

dotenv.config();

const dynamicTemplateTest = process.env.dynamicTemplateTest;
const PORT = process.env.PORT;
const templateId = process.env.templateId;

export default {
  PORT,
  templateId,
  dynamicTemplateTest,
};
