/* Azlan Kham Mehsud, i26-3010, SE-A, Travel Postcard*/

document.addEventListener('DOMContentLoaded', () => {
    
    // Home Page: Fun Fact Button
    const factBtn = document.getElementById('factBtn');
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

    // Places Page: Pick My Next Trip Button
    const destinationBtn = document.getElementById('destinationBtn');
    if (destinationBtn) {
        destinationBtn.addEventListener('click', () => {
            const destinations = [
                "Switzerland! Time to hit the Alps.",
                "Japan! Get ready for sushi and cherry blossoms.",
                "Italy! Pasta and history await.",
                "New Zealand! A true nature adventure.",
                "Canada! Prepare for breathtaking wilderness."
            ];
            
            const randomDest = destinations[Math.floor(Math.random() * destinations.length)];
            alert("The travel gods have spoken. Your next destination is: " + randomDest);
        });
    }

    // Tips Page: Bonus Tip Button
    const bonusTipBtn = document.getElementById('bonusTipBtn');
    if (bonusTipBtn) {
        bonusTipBtn.addEventListener('click', () => {
            const bonusTips = [
                "Roll your clothes instead of folding them to save space in your suitcase.",
                "Download offline maps on Google Maps before you arrive at your destination.",
                "Always carry a universal power adapter.",
                "Notify your bank of your travel dates to avoid frozen credit cards.",
                "Bring a small portable power bank to keep your phone charged all day."
            ];
            
            const randomTip = bonusTips[Math.floor(Math.random() * bonusTips.length)];
            alert("Bonus Tip: " + randomTip);
        });
    }
});