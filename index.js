const express = require('express')
const app = new express()


app.get('*/:deeplink', (req,res) => {
    res.send(`
        <a href="whatsapp://send?text=${req.params.deeplink}">Aguarde o redirecionamento para o whatsapp...</a>
        <script>
            setTimeout(() => {
                
                window.location.href = document.querySelector('a').getAttribute('href')
            }, 1000)
        </script>
    `)
})

app.listen(process.env.PORT || 3004)