// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import express from "express";
import sgMail from "@sendgrid/mail";
import config from "./config.js";

const app = express();

app.use(express.json());

sgMail.setApiKey(config.dynamicTemplateTest);
const msg = {
  to: ["wilbert.rodrigo@deped.gov.ph"],
  from: "trebrodrigo@gmail.com",
  templateId: config.templateId,
  dynamicTemplateData: {
    name: "Testing Email",
  },
};
sgMail.send(msg);
export default app;
