export async function fetchMoves(offset: number = 0, limit: number = 5) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/laera?offset=${offset}&limit=${limit}`,
    );
    if (!response.ok) {
      throw new Error(`Error ${response.status}: Failed to fetch moves`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return err as Error;
  }
}
export async function addMove(
  title: string,
  description: string,
  image,
  token: string,
) {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("image", image);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/laera`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await res.json();
  return data;
}
