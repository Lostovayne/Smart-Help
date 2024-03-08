"use server";

import { client } from "@/actions/payment";
// SDK de Mercado Pago
import { Preference } from "mercadopago";
import { redirect } from "next/navigation";

// Datos del usuario
import { currentUser } from "@clerk/nextjs";
export async function donate(formData: FormData) {
  const user = await currentUser();

  console.log(formData.get("causes_id"));

  const preference = await new Preference(client).create({
    body: {
      items: [
        {
          id: "donacion",
          title: formData.get("message") as string,
          quantity: 1,
          unit_price: Number(formData.get("amount")),
        },
      ],
      payer: {
        email: user?.emailAddresses[0].emailAddress,
      },
      metadata: {
        user_id: user?.id,
        user_name: user?.firstName + " " + user?.lastName,
        causes_id: Number(formData.get("causes_id")) as number,
      },
      back_urls: {
        success: `${process.env.PAYMENT_SUCCESS}/payment/success`,
      },
    },
  });

  redirect(preference.sandbox_init_point!);
}

