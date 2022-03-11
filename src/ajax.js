export default {
  async fetchPicture() {
    try {
      const response = await fetch(
        'https://api.smk.dk/api/v1/art/search/?keys=*&offset=0&rows=100&lang=en&facets=has_image&filters=%5Bhas_image%3Atrue%5D',
      );
      const responseJson = await response.json();
      return responseJson.items;
    } catch (error) {
      console.error(error);
    }
  },
};
