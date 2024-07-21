const tabledata = function(data){
    let output = "";
    for (let item of data){
        output += `
            <tr>
            <td><img src='${item.image}'></td>
            <td>${item.name}</td>
            <td>${item.year}</td>
            <td>${item.country}</td>
            <td>${item.category}</td>
            <td>${item.rationale}</td>

            </tr>
        `;
    }
    return output;
}
fetch("./noblists.json")
.then(function(response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(function(noblists) {
    let placeholder = document.querySelector("#data-output");
    let output = tabledata(noblists)
    placeholder.innerHTML = output;

})
.catch(function(error) {
    console.error('There was a problem with the fetch operation:', error);
});