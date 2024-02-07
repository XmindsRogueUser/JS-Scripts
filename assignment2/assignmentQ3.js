// Question3: Display the only names as ordered list from the response data that we get by fetching the 
// following API https://jsonplaceholder.typicode.com/users

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// call api
fetchApiResponse = async () => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

// Extract 'name' fields
displayAllNameProperty = ({ name, company: { name: compayName } }) => {
    return [name, compayName];
}

main = async () => {
    let data = await fetchApiResponse();
    let resultList = []
    data.forEach(element => {
        resultList.push(...displayAllNameProperty(element))
    });
    console.log(resultList.sort());
}

// Run program
main();