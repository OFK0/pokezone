import axios from 'axios';
import consts from '../consts';

const apiUrl = `${consts.apiUrl + consts.apiVersion}`;

export default {
  async getAll(limit = 100, offset = 0) {
    const response = await axios.get(`${apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
    try {
      return response.data.results;
    } catch {
      console.error('[API] Error.');
    }
  },

  async getPokemonById(pokemonId) {
    const response = await axios.get(`${apiUrl}/pokemon/${pokemonId}`);
    try {
      return response.data.results;
    } catch {
      console.error('[API] Error.');
    }
  },

  async getPokemonByUrl(url) {
    const response = await axios.get(url);
    try {
      return response.data;
    } catch {
      console.error('[API] Error.');
    }
  },
};
