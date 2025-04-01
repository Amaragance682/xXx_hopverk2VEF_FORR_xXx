export async function fetchNamskeid(offset: number = 0) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/namskeid?offset=${offset}`,
    );
    if (!response.ok) {
      throw new Error(`Error ${response.status}: Failed to fetch courses`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function fetchNamskeidSingular(id: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/namskeid/${id}`,
    );
    if (!response.ok) {
      throw new Error(`Error ${response.status}: Failed to fetch course`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function signToNamskeid(id: number, token: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/namskeid/${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await res.json();
  return data;
}

export async function addNamskeid(
  name: string,
  description: string,
  level: string,
  start_date: string,
  end_date: string,
  token: string,
) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/namskeid`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      description,
      level,
      start_date,
      end_date,
    }),
  });

  const data = await res.json();
  return data;
}
export async function updateNamskeid(
  name: string,
  description: string,
  level: string,
  start_date: string,
  end_date: string,
  token: string,
  id: number,
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/namskeid/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
        level,
        start_date,
        end_date,
      }),
    },
  );

  const data = await res.json();
  return data;
}
