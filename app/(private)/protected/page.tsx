import { UserButton, auth, currentUser } from "@clerk/nextjs";
import { causas } from "@/data/causas-data";

export default async function Protected() {
  const user = await currentUser();
  const { userId } = auth();
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

// Pagina de Pruebas
