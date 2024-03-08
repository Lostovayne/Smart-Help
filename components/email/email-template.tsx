interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName }) => (
  <div>
    <h1>{firstName}!</h1>
    <p>Gracias por tu Maldita Donacion ❤️</p>
    <button className="bg-violet-500 hover:bg-violet-600 text-white py-2 px-4 rounded">
      Ver Donaciones
    </button>
  </div>
);
