import { ApiHandler } from "sst/node/api";
import { Client } from "@hubspot/api-client";
import * as yup from "yup";
import { Config } from "sst/node/config";

// yup schema
const schema = yup.object().shape({
  email: yup.string().email().required(),
});

export const handler = ApiHandler(async (event) => {
  // config ssm
  const hubspotClient = new Client({ accessToken: Config.HUBSPOT_API_KEY });

  // body
  const bodyParsed = JSON.parse(event.body || "{}");

  try {
    // validate body
    await schema.validate(bodyParsed);
  } catch (error: any) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: (error?.message as string) || "Invalid body",
      }),
    };
  }

  try {
    // create contacts
  await hubspotClient.crm.contacts.basicApi.create({
    properties: {
      hubspot_owner_id: "465064964",
      email: bodyParsed.email,
      firstname: bodyParsed.firstname || "",
      lastname: bodyParsed.lastname || "",
    },
    associations: [],
  });
  
  } catch (error: any) {
    // log error
    console.error(error);
  }
  finally {
  // return sample
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Success",
    }),
  };
  }
});
