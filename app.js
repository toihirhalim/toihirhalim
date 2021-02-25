console.log("page loaded !");


const handleClick = () => {

    fetch('http://localhost:8080/api/admin/ajouter/admin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "token": {
                "email": "hatimbakk25@gmail.com",
                "password": "45123"
            },
            "new admin": {
                "nom": "Paul",
                "prenom": "great",
                "email": "greatPaul@gmail.com",
                "password": "1234896",
                "numTel": "06854123654"
            }

        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert('done')
        })
        .catch(e => alert('error'))
}
