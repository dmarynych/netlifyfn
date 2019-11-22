
const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

exports.handler = async function(event, context) {
  if(event.httpMethod !== 'POST' || !event.body) {
    return {
      headers,
      statusCode: 200,
      body: ''
    };
  }

  // const submitId = event.queryStringParameters.submitId;
  const data = JSON.parse(event.body);

  return {
    headers,
    statusCode: 200,
    body: JSON.stringify(data)
  };
}