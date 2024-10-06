// Please don't change the pre-written code
// Import the necessary modules here
import axios from 'axios';


export const userModel = async () => {
  // Write your code here
  const apiUrl = 'https://dummyjson.com/users'; // Replace with your API URL
    try {
        const response = await axios.get(apiUrl);
        console.log(response.data.users);
        return response.data.users; // Adjust based on the structure of your API response
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error; // Propagate the error to handle it in the route
    }

};
