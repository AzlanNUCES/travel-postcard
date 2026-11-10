/* Azlan Kham Mehsud, i26-3010, SE-A, Travel Postcard*/

document.addEventListener('DOMContentLoaded', () => {
    const factBtn = document.getElementById('factBtn');
    
    // Only run if the button exists on the current page
    if (factBtn) {
        factBtn.addEventListener('click', () => {
            const facts = [
                "Switzerland has over 7,000 lakes!",
                "Japan has one of the world's most punctual railway systems.",
                "Italy has more UNESCO World Heritage sites than any other country.",
                "In New Zealand, there are about 9 sheep for every person.",
                "Canada has the longest coastline in the world."
            ];
            
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            alert("Fun Fact: " + randomFact);
        });
    }
});