import type { SSTConfig } from "sst";
import { Config, Api, StaticSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "hiring-buddy",
      // region singapore
      region: "ap-southeast-1",
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
