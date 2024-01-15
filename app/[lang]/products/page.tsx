import Link from "next/link";
export default async function Products() {
  const response = await fetch(`http://localhost:8000/products`);
  const data = await response.json();

  return (
    <div>
      <h1>Products List</h1>
      <br />
      {data.map((element: any) => (
        <div>
          <Link href={`/products/${element.id}`} key={element.id}>
            {element.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
