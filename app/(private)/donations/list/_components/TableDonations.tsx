"use client";
import { CausasData } from "@/interfaces/causas";
import { DonationsData } from "@/interfaces/donations";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { useEffect, useState } from "react";

export const TableDonations = ({
  data,
  causa,
}: {
  data: DonationsData[];
  causa: CausasData[];
}) => {
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex justify-center w-full max-h-[350px] max-md:max-h-[450px] 3xl:max-h-[450px] overflow-y-auto scrollbar">
      <Table className="w-5/6 scrollbar">
        <TableHead>
          <TableRow className="dark:border-dark-tremor-border border-tremor-border border-b">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Nombre
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Cantidad
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong text-left">
              Mensaje
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Causa
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Fecha
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            const causaItem = causa.find((c) => c.id === item.causesId);
            return (
              <TableRow key={item.id} className="shadow-sm">
                <TableCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                  {item.title}
                </TableCell>
                <TableCell>$ {item.amount}</TableCell>
                <div className="text-left overflow-auto">
                  <TableCell className="line-clamp-2 text-left lg:break-words lg:whitespace-normal">
                    {item.description}
                  </TableCell>
                </div>
                <TableCell className="text-right">{causaItem ? causaItem.title : "N/A"}</TableCell>
                <TableCell className="text-right">{item.createdAt!.toLocaleDateString()}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
