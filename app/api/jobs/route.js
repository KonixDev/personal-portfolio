const data = require('../../../data/default/jobs.js')

export async function GET() {
    // const res = await fetch('http://127.0.0.1:1337/api/Jobs', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': "Bearer " + process.env.API_PROJECTS_TOKEN,
    //   },
    // })
    // const data = await res.json()
   
    // return Response.json({ data })

    //Read from local file
    return Response.json({data: data.default})
  }
