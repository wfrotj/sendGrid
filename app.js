// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import express from "express";
import sgMail from "@sendgrid/mail";
import config from "./config.js";

const app = express();

app.use(express.json());

sgMail.setApiKey(config.sendGridTest);
const msg = {
  to: "trebrodrigo@gmail.com", // Change to your recipient
  from: "wilbert.rodrigo@deped.gov.ph", // Change to your verified sender
  subject:
    "[Request] Interview about creating business opportunities using generative AI",
  text: "はじめまして。株式会社アイビーの水谷と申します。突然のご連絡で申し訳ございません。この度メールを差し上げたのは、Linkedinにて広告代理店でご活躍されているお姿を拝見し、是非とも貴社とのコラボレーションを通じて、AIの活用によるビジネス拡大の可能性について インタビューを実施させていただきたいと考えたためです。生成AIと既存の商材を掛け合わせることで、新たなビジネスチャンスの創出や、業界における競争優位性を確立できるのではないかという期待を抱いております。そして、できれば貴社と協力し、生成AIを活用してビジネスの拡大を図ることを提案させていただきたいと、勝手ながら考えております。つきましては、お忙しいところ恐縮ではございますが、オンラインまたはオフラインで 30分ほどお時間をいただくことは可能でしょうか。インタビューを実施させていただき、知見の共有の場にできればと考えております。ご都合に合わせて、下記URLにて日程を調整させていただきますので、ご検討のほどよろしくお願い申し上げます。https://meeting.eeasy.jp/kota.mizutani.lab/online",

  //   The reason I sent you this email is because I saw you working at an advertising agency on Linkedin.
  //   We would love to collaborate with you to explore the possibilities of business expansion through the use of AI.
  //   This is because I wanted to conduct an interview.

  //   By combining generation AI with existing products, we can create new business opportunities and
  //   We hope that we will be able to establish a competitive advantage in the industry.
  //   If possible, I would like to collaborate with your company and propose that we use generative AI to expand our business.
  //   I'm just thinking about it.

  //   We apologize for the inconvenience, but please do not hesitate to contact us online or offline.
  //   Is it possible to have about 30 minutes of your time?
  //   We would like to conduct an interview and use it as a place to share knowledge.

  //   We will adjust the schedule at the URL below to suit your convenience. Thank you for your consideration.
  //   https://meeting.eeasy.jp/kota.mizutani.lab/online,
  html: "<p>https://meeting.eeasy.jp/kota.mizutani.lab/online </p>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });

export default app;
