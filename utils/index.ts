const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6e50010ef7msh6ff32ae1ba26180p14b5acjsn91ebaddc628f',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': '6e50010ef7msh6ff32ae1ba26180p14b5acjsn91ebaddc628f',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        {headers: headers});

    const result = await response.json();

    return result;
}