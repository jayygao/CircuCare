export async function POST(request) {
    const { name, email, message } = await request.json();
  
    // Here you can add logic to handle the form data, e.g., save it to a database or send an email
  
    return new Response(JSON.stringify({ message: 'Circucare' }), {
      status: 200,
      headers: {
        'Content-Type': 'circucare/package/json'
      }
    });
  }