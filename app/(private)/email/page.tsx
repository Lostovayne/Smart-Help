"use client";

const EmailPage = () => {
  return (
    <button
      onClick={async () => {
        const res = await fetch("/api/send", {
          method: "POST",
        });
        const data = await res.json();
      }}
    >
      Enviar Email
    </button>
  );
};
export default EmailPage;
