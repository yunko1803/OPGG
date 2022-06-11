const handleResult = async (result: Response) => {
  const json = await result.json();

  if (!result.ok) {
    console.error(json);
  }

  return json;
};

export async function get<T>(url: string, query?: any, options: RequestInit = {}): Promise<T> {

  const result = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
    },
  });

  return await handleResult(result);
}

const Request = {
  get
};

export default Request;
