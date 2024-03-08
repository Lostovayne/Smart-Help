import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  return (
    <div className='flex flex-col justify-center items-center my-10 py-2 w-[85%] sm:my-0 sm:w-[50%]'>
      <form className='flex flex-col justify-center gap-6 w-full sm:gap-4'>
        {/* Cuando haya tiempo mejorar el codigo y mapearlo para una mejor visualizacion y optimizacion del codigo */}
        <div className='flex flex-col gap-6 sm:gap-4 sm:flex-row'>
          <Label htmlFor='name' className='w-full'>
            Nombre
            <Input id='name' type='text' required className='mt-2 shadow-sm' />
          </Label>
          <Label htmlFor='last' className='w-full'>
            Apellido
            <Input id='last' type='text' required className='mt-2 shadow-sm' />
          </Label>
        </div>
        <div className='flex flex-col gap-6 sm:gap-4 sm:flex-row'>
          <Label htmlFor='email' className='w-full'>
            Email
            <Input
              id='email'
              type='email'
              placeholder='Correo electronico...'
              required
              className='mt-2 shadow-sm'
            />
          </Label>
          <Label htmlFor='phone' className='w-full'>
            Telefono
            <Input
              id='phone'
              type='number'
              placeholder='Numero de telefono...'
              required
              className='mt-2 shadow-sm'
            />
          </Label>
        </div>
        <Label htmlFor='message'>
          Mensaje
          <Textarea
            id='message'
            name='message'
            className='shadow-sm resize-none mt-2'
            placeholder='Escribe tu mensaje...'
          />
        </Label>
        <div className='flex justify-end'>
          <Button type='submit' className='py-6 px-8 bg-[#3DC98B]'>
            Enviar Mensaje
          </Button>
        </div>
      </form>
    </div>
  );
};
