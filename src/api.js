export const fetchQuestions = async (filter = "hot") => {
    const url = `https://api.stackexchange.com/2.3/questions?order=desc&sort=${filter}&site=stackoverflow`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.items || [];
    } catch (error) {
      console.error("Error fetching questions:", error);
      return [];
    }
  };
  