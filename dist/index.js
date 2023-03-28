#! /usr/bin/env node

fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-02-28&sortBy=publishedAt&apiKey=ce00174a88e34adf802916f4a5aaf7da").then((data) => {
    //console.log(data);
    return data.json();
}).then((objectData) => {
    console.log(objectData);
    // console.log(objectData[0].author);
    // let tableData ="";
    // objectData.map((values) => {
    //     tableData += `
    //     <tr>
    //     <td>${values.author}</td>
    //     <td>${values.content}</td>
    //     <td>${values.description}</td>
    //     <td>${values.title}</td>
    //     <td>${values.publishedAt}</td>
    //     </tr>`;
    // });
    // document.getElementById("table-body").innerHTML = tableData ;
});
//# sourceMappingURL=index.js.map