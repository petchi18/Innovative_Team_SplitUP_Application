// Team data and their respective quotes
const teams = [
    { name: "Team 1", students: ["AMIRTHA VARSHNI S (Team Lead)", "AATHI M (Sub Lead)", "ABINANDHANA K", "ABINESH R", "AHMED ABDALLAH ALBASHIF FADALAH"], quote: "Great things in business are never done by one person. They're done by a team of people." },
    { name: "Team 2", students: ["AROCKIA JERRINUSE P (Team Lead)", "INIYA R (Sub Lead)","AMARVARSHINI P", "ADARSHKRISHNA P M", "AKASTHIYA M"], quote: "Teamwork makes the dream work." },
    { name: "Team 3", students: ["ASHOK SUNDAR S (Team Lead)", "AGARSHAN S (Sub Lead)", "ANTONY RAHUL M", "ANANDHAVINAYAGAM S", "ANGU SRI MUHIL K"], quote: "Alone we can do so little; together we can do so much." },
    { name: "Team 4", students: ["ASHVITHA SHREE S (Team Lead)","ARUL SELVAN S (Sub Lead)", "APURVA LAKSHMI K", "BHARATH R P"], quote: "Teamwork divides the task and multiplies the success." },
    { name: "Team 5", students: ["ATCHAYA S (Team Lead)", "BARANIDHARAN R (Sub Lead)", "BHARANIDHARAN T S", "BHAVANA M", "BAZEERAHAMED R"], quote: "A successful team is a group of many hands but of one mind." },
    { name: "Team 6", students: ["DEEBIKA P (Team Lead)","GHAYATHREE R S (Sub Lead)", "DEV THARUNEES R", "DANABAL L", "DEVI SHREE VIJAY THENU"], quote: "Great things are never done by one person, they're done by a team of people." },
    { name: "Team 7", students: ["DEVANATHAN M (Team Lead)", "HEMAVARSHINI K (Sub Lead)", "DHAARANII S", "DEEPAK KUMAR M"], quote: "If everyone is moving forward together, then success takes care of itself." },
    { name: "Team 8", students: ["JENIFER MERCY P (Team Lead)", "INBASRUTHI J (Sub Lead)", "GOKUL S", "HARISH M"], quote: "A good team is like a puzzle—when one piece is missing, it doesn’t work." },
    { name: "Team 9", students: ["KAMALA V ADARSHINI (Team Lead)", "JANANE J M (Sub Lead)", "HARISGURURAJ P", "JAYANTHAN S", "JOEL JERRY DANISH P"], quote: "A great team is not a group of people who work together, but a group of people who trust each other." },
    { name: "Team 10", students: ["KAMALESH KUMAR V (Team Lead)", "DINESH R (Sub Lead)", "HAJAMYDEEN J", "JAISHREE M", "DHARANEESH U"], quote: "Teamwork divides the task and multiplies the success." },
    { name: "Team 11", students: ["ARSHED HOSHAM ELHAG YOUSIF (Team Lead) ", "DINESHKUMAR S K (Sub Lead)", "DEEPIKA R", "HARSHINI S", "DEVASENAN S S"], quote: "There is no 'I' in team, but there is a 'we'." }
];


// Function to reveal the team members one by one with a delay
function revealTeam(teamNumber) {
    const team = teams[teamNumber - 1];
    const teamInfoContainer = document.getElementById('team-info');
    teamInfoContainer.style.display = 'block';
    teamInfoContainer.innerHTML = '';

    const teamNameElement = document.createElement('h3');
    teamNameElement.innerText = team.name;
    teamInfoContainer.appendChild(teamNameElement);

    let delay = 0;
    const studentListElement = document.createElement('ul');
    team.students.forEach((student, index) => {
        setTimeout(() => {
            const studentElement = document.createElement('li');
            studentElement.innerText = student;
            studentListElement.appendChild(studentElement);
        }, delay);
        delay += 5000; // Delay each student reveal by 1 second
    });
    teamInfoContainer.appendChild(studentListElement);

    // Show the quote button
    const quoteButton = document.getElementById('quote-button');
    quoteButton.style.display = 'inline-block';
}

// Function to reveal the team's quote
function revealQuote() {
    const teamNumber = teams.findIndex(team => team.name === document.getElementById('team-info').querySelector('h3').innerText) + 1;
    const team = teams[teamNumber - 1];
    alert(`Team's quote: "${team.quote}"`);
}
