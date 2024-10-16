const TokenValidation = async (token) => {
    try {
    const response = await fetch('http://localhost:8080/validate-token', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      
    });
  
    if (response.ok) {
      console.log('Token validation successful');
    } else {
      console.error('Token validation failed:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error during token validation:', error);
  }
};
