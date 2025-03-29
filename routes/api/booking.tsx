import { Handlers } from "$fresh/server.ts";
import twilio from 'npm:twilio';
import { format } from 'npm:date-fns';
import * as v from "@badrap/valita";
import xss from "https://esm.sh/xss@1.0.15";

export const handler: Handlers = {
    async POST(req, _ctx) {
        const body = await req.formData();
        const firstname = body.get('firstname') as string;
        const lastname = body.get('lastname') as string;
        const date = body.get('datetime') as string;
        const birthcity = body.get('birthcity') as string;
        const number = body.get('number') as string;
        const message = body.get('message') as string;
        const selectedmenu = body.get('selectedmenu') as string;
        const totalprice = body.get('totalprice') as string;
        const totalduration = body.get('totalduration') as string;

        const safefirstname = xss(firstname);
        const safelastname = xss(lastname);
        const safedate = xss(date);
        const safebirthcity = xss(birthcity);
        const safenumber = xss(number);
        const safemessage = xss(message);

        const formSchema = v.object({
            firstname: v.string(),
            lastname: v.string(),
            date: v.string(),
            birthcity: v.string(),
            number: v.string(),
            message: v.string(),
        });
        
        try {
              formSchema.parse({firstname: safefirstname, lastname: safelastname , date: safedate, birthcity: safebirthcity, number: safenumber, message: safemessage});
          } catch(err) {
            console.log('Something went wrong. Error:', err);
            return new Response(JSON.stringify({success: false}));
        }

        const accountSid = Deno.env.get('accountSid');
        const authToken = Deno.env.get('authToken');
        const tNumber = Deno.env.get('tNumber');
        const pNumber = Deno.env.get('pNumber');

        const client = twilio(accountSid, authToken);


        let request = '';
        if(message) {
          request = `Additional Request: ${message}`;
        }

        const final_message = `Hello Meetu, You got a new appointment request from ${firstname} ${lastname}. They were born in ${birthcity} on ${format(date, 'PPPPp')}. Their phone number is ${number}. ${request}
        Requested services are ${selectedmenu} . Total duration of ${totalduration} minutes costing Rs ${totalprice}`;

        try {
          const res = await client.messages
              .create({
                  body: final_message,
                  from: `+1${tNumber}`,
                  to: `+91${pNumber}`
              });
          if (res.errorMessage == null) {
            return new Response(JSON.stringify({success: true}));
          }
          return new Response(JSON.stringify({success: false}));
        } catch (err) {
          console.log('Something went wrong. Error:', err);
          return new Response(JSON.stringify({success: false}));
        }
    }
}