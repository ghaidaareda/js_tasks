const form = document.querySelector("form")
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const form_data = new FormData(form);
            const data = new URLSearchParams(form_data);
            fetch('https://reqres.in/api/users',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: data
            }).then(res => res.json())
                .then(data => console.log(data))
                //.then(window.location.href = "confirm.html")
                .catch(err => console.log(err));
            /*const obj = Object.fromEntries(form_data);
            const json = JSON.stringify(obj);
            localStorage.setItem('user_form', json);
            window.location.href = "confirm.html"; */
        });