export const fetchApi = async () => {
  const req = await fetch('https://api.mercadolibre.com/sites/MLB/search?category=MLB1196')
  const res = await req.json()
  return res
}  