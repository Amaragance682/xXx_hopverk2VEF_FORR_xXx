export async function fetchProfa(offset: number = 0) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/profa?offset=${offset}`,
    );
    if (!response.ok) {
      throw new Error(
        `Error ${response.status}: Failed to fetch practice courses`,
      );
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function signToProfa(id: number, token: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/profa/${id}`,
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

export async function addProfa(
  date: string,
  duration: string,
  ages: string,
  capacity: string,
  token: string,
) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/profa`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      date,
      duration,
      ages,
      capacity,
    }),
  });

  const data = await res.json();
  return data;
}
export async function updateProfa(
  date: string,
  duration: string,
  ages: string,
  capacity: string,
  token: string,
  id: number,
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/profa/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        date,
        duration,
        ages,
        capacity,
      }),
    },
  );

  const data = await res.json();
  return data;
}
