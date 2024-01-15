export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const res = await fetch(`http://localhost:8000/products`, {
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY!,
      },
    })
    const product = await res.json()
   
    return Response.json({ product })
  }

  export async function POST() {
    const res = await fetch('http://localhost:8000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY!,
      },
      body: JSON.stringify({ time: new Date().toISOString() }),
    })
   
    const data = await res.json()
   
    return Response.json(data)
  }