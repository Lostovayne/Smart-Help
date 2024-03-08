import { causas } from "../data/causas-data";
import { donations } from "../data/donations-data";
import { noticias } from "../data/noticias-data";
import prisma from "../lib/db";
import { products } from "./../data/productos-data";

export async function Seed() {
  await Promise.all([
    await prisma.notice.deleteMany(),
    await prisma.donations.deleteMany(),
    await prisma.causes.deleteMany(),
    await prisma.products.deleteMany(),
  ]);

  await prisma.notice.createMany({
    data: noticias,
  });

  await prisma.causes.createMany({
    data: causas,
  });

  // Todo: Descomentar una vez lista las donaciones
  await prisma.donations.createMany({
    data: donations,
  });

  await prisma.products.createMany({
    data: products,
  });

  // TODO: Agregar la de productos
  // TODO: Agregar server actions
  // TODO: Integrar MercadoPago o Paypal
  // TODO: Agregar Schema de prisma para productos
  // TODO: Integrar el uso de Zustand como gestor de estado o Cookies dependiendo de tiempo y necesidades

  console.log("Seed ... Agregado correctamente");
}

(() => {
  if (process.env.NODE_ENV !== "production") {
    Seed();
  }
})();
