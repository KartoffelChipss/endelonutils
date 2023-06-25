// setTimeout(() => {
//     if (window.location.href !== "https://my.endelon-hosting.de/servers" && window.location.href !== "http://my.endelon-hosting.de/servers") return;
//     generateProjects()
// }, 1000)

// function generateProjects() {
//     const projectElements = document.querySelectorAll(".invisible-a")

//     if (!projectElements) return;
//     let mcServers = [];
//     let jsSerers = [];
//     let pyServers = [];
//     let otherServers = [];

//     projectElements.forEach((projectEl, index) => {
//         let project = {
//             name: projectEl.getElementsByClassName("card")[0].querySelectorAll(".card-header")[0].querySelectorAll(".card-title")[0].querySelectorAll(".card-label")[0].innerText,
//             type: projectEl.getElementsByClassName("card")[0].querySelectorAll(".card-body")[0].querySelectorAll("span.fs-6")[0].querySelectorAll("span.text-gray-700")[0].innerText.split("-")[1].trim(),
//             details: projectEl.getElementsByClassName("card")[0].querySelectorAll(".card-body")[0].querySelectorAll("span.fs-6")[0].innerText.split("-")[0].trim(),
//             serverUrl: projectEl.getElementsByClassName("card")[0].querySelectorAll(".card-body")[0].querySelectorAll("div.fs-6")[0].innerText,
//             status: projectEl.getElementsByClassName("card")[0].querySelectorAll(".card-body")[0].querySelectorAll("div.fs-6")[1].querySelectorAll("span")[0].querySelectorAll("span")[0].innerText,
//             href: projectEl.getAttribute("href"),
//         }

//         switch(project.type) {
//             case "Java Runtime":
//                 jsSerers.push(project);
//                 break;
//             case "discord.js generic":
//                 jsSerers.push(project);
//                 break;
//             case "Endelon Paper":
//                 mcServers.push(project);
//                 console.log("PAPAP")
//                 break;
//             case "Minecraft Forge":
//                 mcServers.push(project);
//                 break;
//             case "Fabric":
//                 mcServers.push(project);
//                 break;
//             case "Python Runtime":
//                 pyServers.push(project);
//                 break;
//             default:
//                 otherServers.push(project);
//                 break;
//         }

//         console.log(project)
//     })

//     const container = document.getElementById("kt_app_content_container");
//     if (!container) {
//         console.log("NO CONTAINER FOUND!")
//         return
//     }

//     container.innerHTML += `
//     <div class='newColumn'>
//         <div id='newServergroup_mc' class='newServergroup'></div>
//         <div id='newServergroup_js' class='newServergroup'></div>
//         <div id='newServergroup_py' class='newServergroup'></div>
//         <div id='newServergroup_other' class='newServergroup'></div>
//     </div>
//     `

//     let newServergroup_mc = document.getElementById("newServergroup_mc");

//     console.log(mcServers)

//     mcServers.forEach((server, index) => {
//         newServergroup_mc.innerHTML += `
//         <a href='${server.href}' class='serverCard'>
//             <span class='name'>${server.name}</span>
//             <span class='details'>${server.details}</span>
//             <span class='status ${server.status}'>${server.status}</span>
//         </a>
//         `
//     });
// }