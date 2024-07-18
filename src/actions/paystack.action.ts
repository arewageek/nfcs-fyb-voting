"use server";

import axios from "axios";
import http from "http";

type TrxMetaType = {
  reference: string;
};

export async function verifyPayment({ reference }: TrxMetaType) {
  const options = {
    hostname: "api.paystack.co",
    port: 443,
    path: `/transaction/verify/${reference}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    },
  };

  const headers = {
    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
  };

  const url = `https://api.paystack.co/transaction/verify/${reference}`;

  try {
    // fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
    //   headers,
    // })
    //   .then((res) => console.log)
    //   .catch((err) => console.log);

    const paymentVerification = await axios.get(url, { headers });
    console.log({ paymentVerification });

    // http
    //   .request(options, (res) => {
    //     let data = "";
    //     res.on("data", (response) => {
    //       data += response;
    //     });
    //     res.on("end", () => {
    //       console.log({ ended: JSON.parse(data) });
    //     });
    //     return data;
    //   })
    //   .on("error", (err) => {
    //     console.log({ err });
    //   });
  } catch (e) {
    console.log(e);
    return e;
  }
}
