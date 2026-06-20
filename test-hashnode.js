

async function test() {
  const query = `
    query {
      publication(host: "jyotindra-kt.hashnode.dev") {
        posts(first: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    }
  `;
  try {
    const res = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '5abfff6f-fddb-4f87-aa3c-0f6ddb31cb81'
      },
      body: JSON.stringify({ query })
    });
    const text = await res.text();
    console.log(res.status, text);
  } catch (err) {
    console.error(err);
  }
}
test();
