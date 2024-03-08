import { createDonation } from "@/actions/actions";
import { client } from "@/actions/payment";
import { Payment } from "mercadopago";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json().then((data) => data as { data: { id: string } });
  const payment = await new Payment(client).get({ id: body.data.id });
  const donation = {
    id: payment.id!,
    title: payment.metadata.user_name as string,
    amount: (payment.transaction_amount as number) || 0,
    description: payment.description ?? "sin descripcion",
    userId: payment.metadata.user_id!,
    causesId: payment.metadata.causes_id!,
  };
  console.log(donation);
  await createDonation({ donation });
  return Response.json({ sucess: true });
}
