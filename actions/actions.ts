"use server";

import { DonationsData } from "@/interfaces/donations";
import { NoticiaData } from "../interfaces/noticias";
import prisma from "../lib/db";

// Endpoints

// Noticias
export const getAllNotices = async () => {
  const notice = await prisma.notice.findMany();
  return notice;
};

export const getByIdNotice = async ({ id }: { id: number }) => {
  const noticeById = await prisma.notice.findUnique({
    where: {
      id,
    },
  });

  return noticeById;
};

export const deleteNotice = async ({ id }: { id: number }) => {
  const notice = await prisma.notice.delete({
    where: {
      id,
    },
  });

  return notice;
};

export const createNotice = async ({ notice }: { notice: NoticiaData }) => {
  const newNotice = await prisma.notice.create({
    data: notice,
  });

  return newNotice;
};

export const updateNotice = async ({ id, notice }: { id: number; notice: string }) => {
  const newNotice = await prisma.notice.update({
    where: {
      id: id,
    },
    data: notice,
  });

  return newNotice;
};

// Donations

export const createDonation = async ({ donation }: { donation: DonationsData }) => {
  const newDonation = await prisma.donations.create({
    data: donation,
  });
};

export const getAllDonations = async () => {
  const donation = await prisma.donations.findMany();
  return donation;
};

// Productos
export const getAllProducts = async (filter: { category?: string[] } = {}) => {
  const { category } = filter;
  const whereClause = category && category.length > 0 ? { category: { in: category } } : {};
  const products = await prisma.products.findMany({
    where: whereClause,
  });
  return products;
};

export const getProductById = async (id: number) => {
  const product = await prisma.products.findUnique({
    where: {
      id,
    },
  });

  !product && new Error("Product not found");

  return product;
};

// Causas

export const getAllCauses = async () => {
  const causas = await prisma.causes.findMany();
  return causas;
};
