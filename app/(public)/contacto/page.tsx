import {
  Instagram,
  Twitter,
  Facebook,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { ContactForm } from "./_components/ContactForm";
import { Button } from "@/components/ui/button";

const ContactoPage = () => {
  return (
    <section className='flex sm:flex-row flex-col justify-around items-center bg-white my-20 2xl:py-32'>
      <div className='flex flex-col justify-around bg-violet-700 shadow-lg pr-4 pl-10 rounded-xl w-[95%] sm:w-[45%] lg:w-[40%] h-[460px] text-white'>
        <div>
          <h1 className='mt-0 mb-2 font-bold text-2xl'>
            Ponte en contacto con nosotros
          </h1>
          <p className='font-light text-gray-100 text-sm'>
            ¿Tienes alguna pregunta o sugerencia? ¡Nos encantaría escucharla!
          </p>
        </div>
        <div className='flex flex-col gap-7'>
          <p className='flex flex-row font-medium text-base'>
            <Phone className='mr-5' />
            +1112 3456 789
          </p>
          <Link
            href='mailto:SmartHelp@gmail.com'
            className='flex flex-row font-medium text-base'>
            <Mail className='mr-5' />
            SmartHelp@gmail.com
          </Link>
          <p className='flex flex-row font-medium text-base'>
            <MapPin className='mr-5' />
            Avenida Siempreviva 742
          </p>
        </div>
        <div className='flex gap-5 felx-row'>
          <Button className='bg-[#3DC98B] rounded-[100%] w-9 h-9'>
            <Link href='SmartHelp@gmail.com'>
              <Twitter size={20} />
            </Link>
          </Button>
          <Button className='bg-[#3DC98B] rounded-[100%] w-9 h-9'>
            <Link href='SmartHelp@gmail.com'>
              <Instagram size={20} />
            </Link>
          </Button>
          <Button className='bg-[#3DC98B] rounded-[100%] w-9 h-9'>
            <Link href='SmartHelp@gmail.com'>
              <Facebook size={20} />
            </Link>
          </Button>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactoPage;
