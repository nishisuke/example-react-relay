async function fetchGraphQL(text: string | null | undefined, variables: any) {
  const response = await fetch("http://localhost:8080/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
