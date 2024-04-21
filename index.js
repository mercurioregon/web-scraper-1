const PORT = 8000

const axios = require("axios")
const express = require("express")
const cheerio = require("cheerio")

const app = express()

const url = ""

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const results = []


// lines 20-24 need to be updated to include search data

        $("A24", html).each(function(){
            const term = $(this).text()
            results.push({
                term
            })

        }
    )
    console.log(results)
   }
    ).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))



