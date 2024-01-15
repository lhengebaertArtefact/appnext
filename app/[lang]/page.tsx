import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">{page.about.title}</h1>
        <p className="text-gray-500">{page.about.description}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link href="/dashboard">The dashboard</Link>
        <Link href="/products">The products</Link>
        <Link href="/profile">The profile</Link>
      </div>
    </section>
  );
}

// Server Component
export const Page = () => {
  // Server Action
  async function create() {
    "use server";

    // ...
  }

  return <div>Hello</div>;
};
