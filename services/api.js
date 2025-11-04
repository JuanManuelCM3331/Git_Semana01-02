function handleApiError(error) {
  console.error('API Error:', error.message);
  throw new Error('Error al comunicarse con el servidor');
}

export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    handleApiError(error);
  }
}
