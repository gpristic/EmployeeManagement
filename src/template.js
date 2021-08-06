
const generateTeam = team => {

    
    const generateManager = manager => {
        return `
        <div>
        <div>
            <h2>${manager.getName()}</h2>
            <h3><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div>
            <ul>
                <li>ID: ${manager.getId()}</li>
                <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li>Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    const generateEngineer = engineer => {
        return `
        <div>
    <div>
        <h2>${engineer.getName()}</h2>
        <h3><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div>
        <ul>
            <li>ID: ${engineer.getId()}</li>
            <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    
    const generateIntern = intern => {
        return `
        <div>
    <div>
        <h2>${intern.getName()}</h2>
        <h3><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div>
        <ul class="list-group">
            <li>ID: ${intern.getId()}</li>
            <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li>School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div>
        <div>
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1>My Team</h1>
            </div>
        </div>
    </div>
    <div>
        <div>
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};