import { getAllCauses } from "@/actions/actions";
import { donate } from "@/actions/donations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CausasData } from "@/interfaces/causas";
import Image from "next/image";

export const FormDonation = async () => {
  const causas = await getAllCauses();
  return (
    <div className="flex flex-col w-4/5">
      <form action={donate} className="flex flex-col justify-center gap-4">
        <Select name="causes_id">
          <SelectTrigger className="shadow-sm rounded-md font-normal text-base text-gray-500">
            <SelectValue placeholder="Causa a la que donar" />
          </SelectTrigger>
          <SelectContent>
            {causas.map((causa: CausasData) => (
              <SelectItem key={causa.id} value={`${causa.id}`}>
                {causa.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          name="amount"
          type="number"
          min="0"
          className="shadow-sm rounded-md font-normal text-base"
          placeholder="Valor"
          required
        />
        <Textarea
          name="message"
          className="shadow-sm rounded-md font-normal text-base resize-none"
          placeholder="Tu Mensaje (opcional)"
        />
        <Button type="submit" variant="green" className="text-black hover:text-black">
          Enviar
        </Button>
      </form>
      <div className="flex justify-center my-6 sm:mb-0 h-12">
        <Image src="./MP-logo.svg" width={"261"} height={"70"} alt="Mercado libre logo" />
      </div>
    </div>
  );
};

// updated
