const api_url ="https://zenquotes.io/api/quotes/keyword=inspiration";

async function getapi(url)
{
  const response = await fetch(url, {mode: "no-cors"});
  var data = await response.json();
  console.log(data);
}

getapi(api_url);