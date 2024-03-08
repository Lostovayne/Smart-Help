import { noticias } from "@/data/noticias-data";
import { NoticiaData } from "@/interfaces/noticias";
import { NoticiasCard } from "./_components/NoticiasCard";

const NoticiasPage = () => {
  return (
    <section className="w-full my-10">
      <div className="grid grid-cols-1 gap-8 xl:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full px-3">
        {noticias.map((noticia: NoticiaData) => (
          <NoticiasCard key={noticia.id} {...noticia} />
        ))}
      </div>
    </section>
  );
};
export default NoticiasPage;
