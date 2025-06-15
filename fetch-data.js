// Async function to fetch and display user data
async function fetchUserData() {
  // Define the API URL
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Select the data container element
  const dataContainer = document.getElementById("api-data");

  // Fetch data with error handling
  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);

    // Check if response is ok
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Convert response to JSON
    const users = await response.json();

    // Clear the loading message
    dataContainer.innerHTML = "";

    // Create a <ul> element
    const userList = document.createElement("ul");

    // Loop through users and create <li> elements
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append the user list to the data container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle errors by displaying error message
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
  }
}

// Add event listener for DOMContentLoaded to invoke fetchUserData
document.addEventListener("DOMContentLoaded", fetchUserData);
