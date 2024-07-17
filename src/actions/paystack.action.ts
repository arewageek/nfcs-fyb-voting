"use server";

import http from "http";

type TrxMetaType = {
  reference: string;
};

export async function verifyPayment({ reference }: TrxMetaType) {
  try {
    const options = {
      hostname: "api.paystack.co",
      port: 443,
      path: `/transaction/verify/${reference}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    };

    http
      .request(options, (res) => {
        let data = "";
        res.on("data", (response) => {
          data += response;
        });
        res.on("end", () => {
          console.log({ ended: JSON.parse(data) });
        });
        return data;
      })
      .on("error", (err) => {
        console.log({ err });
      });
  } catch (e) {
    console.log(e);
  }
}
