const searchResultsData = [
    {
        title: 'YouTube',
        link: 'https://www.youtube.com/',
        description: 'Create your creativity here! - Share with friends and the world.'
    },
    {
        title: 'Google',
        link: 'https://www.google.com/',
        description: 'Google search.'
    },
    {
        title: 'Facebook',
        link: 'https://www.facebook.com/',
        description: 'Connect, share, and express yourself.'
    },
    {
        title: 'Instagram',
        link: 'https://www.instagram.com/',
        description: 'Share your Story on Instagram.'
    },
    {
        title: 'Google Scholar',
        link: 'https://scholar.google.com/',
        description: 'Lets study together!'
    },
    {
        title: 'Pinterest',
        link: 'https://www.pinterest.com/',
        description: 'Find inspiration and create your own board.'
    },
    {
        title: 'Twitter',
        link: 'https://www.twitter.com/',
        description: 'Connect, share, and express yourself.'
    },
    {
        title: 'Reddit',
        link: 'https://www.reddit.com/',
        description: 'Join the conversation on Reddit.'
    },
    {
        title: 'Snapchat',
        link: 'https://www.snapchat.com/',
        description: 'Share your stories and photos.'
    },
    {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/',
        description: 'Connect, share, and express yourself, and find a job!'
    },
    {
        title: 'Binusmaya',
        link: 'https://www.binusmaya.ac.id/',
        description: 'The largest university in Indonesia.'
    },
    {
        title: 'Beelingua',
        link: 'https://beelingua.binusmaya.ac.id/',
        description: 'Translate and learn from the world!'
    },
    {
        title: 'New Binusmaya',
        link: 'https://www.newbinusmaya.ac.id/',
        description: 'Information about your activity in Campus!'
    },
    {
        title: 'Spotify',
        link: 'https://www.spotify.com/',
        description: 'Listen to music, discover new songs, and share your tunes!'
    },
    {
        title: 'Netflix',
        link: 'https://www.netflix.com/',
        description: 'Watch movies, TV shows, and more online.'
    },
    {
        title: 'Apple',
        link: 'https://www.apple.com/',
        description: 'Apple Inc. is an American multinational electronics company incorporated and headquartered in Cupertino, California, in Silicon Valley. It is best known for its consumer electronics, software, and services.',
    },
    {
        title: 'Microsoft',
        link: 'https://www.microsoft.com/',
        description: 'Microsoft Corporation is an American multinational technology company headquartered in Redmond, Washington, that develops, manufactures, licenses, supports, and sells a variety of computer software, consumer electronics, personal computers, and related services.',
    },
    {
        title: 'Roblox',
        link: 'https://www.roblox.com/',
        description: 'Roblox is a free-to-play online multiplayer video game developed by Patagonia Studios. The game was released on October 15, 2013, and is currently available for PC, Mac, iOS, Android, and consoles.',
    },
    {
        title: 'Wikipedia', // Added missing comma here
        link: 'https://www.wikipedia.org/',
        description: 'Wikipedia is a free and open-content online encyclopedia, created and maintained by the Wikimedia Foundation. It has over 2.5 million articles, with a diverse range of topics, including history, science, art, politics, and more.',
    }
];

document.getElementById('googleSearchInput').addEventListener('input', function() {
    const query = this.value.trim().toLowerCase(); // Get the current input value
    displayGoogleResults(query); // Call the function to display filtered results
});

// Function to display results based on the search query
function displayGoogleResults(query) {
    const searchResultsContainer = document.getElementById('google-searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results

    // If the query is empty, exit early and hide results
    if (query === '') {
        searchResultsContainer.classList.remove('visible'); // Hide results container
        return; // Exit function if input is empty
    }

    const filteredResults = searchResultsData.filter(result => 
        result.title.toLowerCase().includes(query) || 
        result.description.toLowerCase().includes(query)
    );

    // Make the results container visible if there are filtered results
    if (filteredResults.length > 0) {
        searchResultsContainer.classList.add('visible'); // Add visible class for fade-in
    } else {
        searchResultsContainer.classList.remove('visible'); // Remove class if no results
    }

    // Using a document fragment for better performance
    const fragment = document.createDocumentFragment();

    filteredResults.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('google-search-result-item');

        const title = document.createElement('h3');
        title.textContent = result.title;

        const link = document.createElement('a');
        link.href = result.link;
        link.textContent = result.link;
        link.target = '_blank';

        const description = document.createElement('p');
        description.textContent = result.description;

        resultItem.appendChild(title);
        resultItem.appendChild(link);
        resultItem.appendChild(description);

        // Append result item to the fragment
        fragment.appendChild(resultItem);

        // Delay adding visible class for staggered effect
        setTimeout(() => {
            resultItem.classList.add('visible'); // Trigger slide and fade-in animation
        }, 100 * filteredResults.indexOf(result)); // Staggered by 100ms
    });

    // Append the fragment to the container
    searchResultsContainer.appendChild(fragment);

    // If no results found
    if (filteredResults.length === 0) {
        const noResults = document.createElement('p');
        noResults.textContent = 'No results found.';
        searchResultsContainer.appendChild(noResults);
    }
}
