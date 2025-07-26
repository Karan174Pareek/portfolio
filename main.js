document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('terminal-input');
    const output = document.querySelector('.output');
    printOutput("Welcome to Karan Pareek's terminal!");
    printOutput('Available commands: help, about, contact, resume, skills, close');

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            processCommand(input.value);
            input.value = '';
        }
    });

    function processCommand(command) {
        const outputLine = document.createElement('div');
        outputLine.textContent = `visitor@portfolio:~$ ${command}`;
        output.appendChild(outputLine);

        switch (command) {
            case 'help':
                printOutput('Available commands: help, about, contact, resume, skills, close');
                break;
            case 'about':
                printOutput('Name: Karan Pareek');
                printOutput('Bio: A highly motivated and results-driven Web Developer with a strong foundation in Java, HTML, CSS, JavaScript, and hands-on experience with modern frameworks such as React, Node.js, Express, and MongoDB. Proficient in developing responsive, user-friendly, and scalable web applications with a focus on clean code and performance.Experienced in implementing effective On-Page and Off-Page SEO practices to support web visibility and performance.Equipped with excellent problem-solving abilities, leadership skills, adaptability, and a strong team spirit, with experience collaborating on cross-functional projects. Eager to contribute to a growth-oriented organization while continuously learning and enhancing technical expertise.');
                break;
            case 'contact':
                printOutput('Phone: +91 8101482088');
                printOutput('Email: karanpareek174@gmail.com');
                printOutput('LinkedIn: <a href="https://www.linkedin.com/in/karanpareek" target="_blank">https://www.linkedin.com/in/karanpareek</a>')
                printOutput('Github: <a href="https://github.com/Karan174Pareek" target="_blank">https://github.com/Karan174Pareek</a>')
                break;
            case 'close':
                printOutput('Terminating...', command);
                break;
            case 'resume': 
                printOutput('Loading...', command);
                break;
            case 'skills':
                printOutput('Backend: <b>Java, C, Python</b>');
                printOutput('Web: <b>HTML, CSS, JavaScript</b>');
                printOutput('Databases: <b>MySQL</b>');
                break;
            default:
                printOutput(`Command not found: ${command}`);
        }
    }

    async function printOutput(text, command) {
        const outputLine = document.createElement('div');
        outputLine.innerHTML = text;
        output.appendChild(outputLine);
        // output.scrollTop = output.scrollHeight;
        document.getElementById("inputLine").scrollIntoView();
        if (command === 'close') {
            const element = document.getElementById('inputLine');
            element.classList.add('hidden');
            await sleep(2000);
            window.location.href = './index.html';
        }
        if (command === 'resume') {
            await sleep(1000);
            window.open('./resume.pdf', '_blank').focus(); 
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      }
});
