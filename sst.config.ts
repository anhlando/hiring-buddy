import type { SSTConfig } from "sst";
import { Config, Api, StaticSite } from "sst/constructs";

export default {
  config(_input) {
    if (_input.stage === "dev") {
      return {
        name: "hiring-buddy",
        // region singapore
        region: "ap-southeast-1",
      };
    }

    return {
      name: "hiring-buddy",
      region: "ap-southeast-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const HUBSPOT_API_KEY = new Config.Secret(stack, "HUBSPOT_API_KEY");

      const api = new Api(stack, "api", {
        defaults: {
          function: {
            bind: [HUBSPOT_API_KEY],
          },
        },
        routes: {
          "POST /contacts": "functions/contacts.handler",
        },
      });

      const site = new StaticSite(stack, "web", {
        buildOutput: "dist",
        buildCommand: "npm run build",
        environment: {
          PUBLIC_API_ENDPOINT: api.url,
        },
      });

      // output
      stack.addOutputs({
        apiEndpoint: api.url,
        siteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
