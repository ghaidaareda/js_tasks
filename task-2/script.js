fetch("./noblists.json")
.then(function(response) {
    return response.json();
})
.then(function(noblists) {
    let placeholder = document.querySelector("#data-output");
    let output = "";
    for (let item of noblists){
        output += `
            <tr>
            <td><img src='${item.image}'></td>
            <td>${item.name}</td>
            <td>${item.year}</td>
            <td>${item.content}</td>
            <td>${item.category}</td>
            <td>${item.rationale}</td>

            </tr>
        `;
    }

    placeholder.innerHTML = output;

})