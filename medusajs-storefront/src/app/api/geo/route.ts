import { geolocation } from '@vercel/edge';
 
export function GET(request: Request) {
  const data = geolocation(request);
  console.log(data)
  return new Response(`<h1>Your location is ${data}</h1>`, {
    headers: { 'content-type': 'text/html' },
  });
}