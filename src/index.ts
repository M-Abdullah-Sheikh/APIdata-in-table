#! /usr/bin/env node


fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-02-28&sortBy=publishedAt&apiKey=ce00174a88e34adf802916f4a5aaf7da").then((data) => { 
    return data.json();
}).then((objectData) => {
   console.log(objectData)

   interface custom {
    author: string
    title: string
    content: string
    description: string
    publishedAt: number
    url: string
    urlToImage: HTMLImageElement
    }


    let tableData ="";
    objectData.articles.map((values: custom) => {
        tableData += `
        <tr>
        <td>${values.author}</td>
        <td>${values.title}</td>
        <td>${values.content}</td>
        <td>${values.description}</td>
        <td>${values.publishedAt}</td>
        <td>${values.url}</td>
        <td><img src="${values.urlToImage
        }"/></td>
        </tr>`;
    });
    document.getElementById("table-body")!.innerHTML = tableData ;
})
