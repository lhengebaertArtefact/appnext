export default async function ProductsDetails({
  params,
}: {
  params: { productId: string };
}) {
  const response = await fetch(
    `http://localhost:8000/products/${params.productId}`
  );
  const data = await response.json();

  return (
    <div>
      product {params.productId}
      <br />
      {data.description}
    </div>
  );
}
