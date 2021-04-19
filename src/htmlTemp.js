const htmlTemp = (crew) => {

   let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
       
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;1,200&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap" rel="stylesheet">

        
    <style>
		body { margin: 0; font-family: sans-serif; text-align: center; background-color: #EBEBEB; }
		header { height: 200px; padding: 10px; background-color: rgb(61, 219, 240); box-shadow: 0 0 5px black; margin-bottom: 25px; }
		main > section {background-color: rgb(255, 255, 255);  display: inline-block; vertical-align: top; padding: 10px; margin: 10px; box-shadow: 0 0 5px dimgrey; font-family:'Ubuntu Mono', monospace;}
	</style>
       
        <title>Team Profile</title>
    </head>
    <body>
        <header class="text-center display-2" style="font-family: raleway; color: white; padding-top: 50px; ">The Team</header>
        <main>`;
    
        for (let emp of crew) {
            html += `
                <section>
                <div style=" border: solid 1px rgb(61, 219, 240); ">
                    <h2>${emp.getRole()}</h2>
                    <h3>${emp.getName()}</h3>
                </div>
                    <p>id: ${emp.getId()}</p>
                    <p>email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></p>
            `;
              switch (emp.getRole()){
                  // =+ means appends to existing string. in this case it would be html.
                case "Manager": html += `<p>Office: ${emp.getOfficeNumber()}</p>`; break;
                case "Engineer": html += `<p>GitHub: <a href="https://github.com/${emp.getGitHub()}"> https://github.com/${emp.getGitHub()}</a></p>`; break;
                case "Intern": html += `<p>School: ${emp.getSchool()}</p>`; break;
            }
            html += "</section>";
        }
        html += `
            </main>
        </body>
        </html>
        `;
        return html;
        };




module.exports = htmlTemp;