import axios from "axios";

const getRandomPokemon = async (req, res) => {
  const id = Math.floor(Math.random() * 151) + 1; //ruft zufällig ein Pokémon

  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = response.data;

  const sprite =
    data.sprites.versions["generation-v"]["black-white"].animated.front_default;
  const cry = data.cries?.latest || data.cries?.legacy || null; //Cry: Ton (Schrei) des Pokémon, falls verfügbar

  res.json({
    id: data.id,
    name: data.name,
    hp: data.stats.find((s) => s.stat.name === "hp")?.base_stat || 40,
    sprite,
    xp: 100,
    cry,
  });
};

export default getRandomPokemon;
