// Internal
import { PokemonGrid } from '@/pokemons';

export default async function PokemonsPage() {
  return (
    <div className='flex flex-col'>

      <span className='text-5xl my-2'>Pokemons Favoritos<small className="text-blue-500">Global State</small></span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
