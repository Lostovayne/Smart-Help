import { MercadoPagoConfig } from "mercadopago";

export const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! });
