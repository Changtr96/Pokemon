import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

export function Navbar() {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  const gotoFavorites = () => {
    navigate("/favorites");
  };
  const gotoPokemons = () => {
    navigate("/pokemons");
  };
  return (
    <div className="px-6 bg-red-500 flex justify-between items-center">
      <img
        onClick={gotoHome}
        src={Logo}
        className="w-16 h-16 hover:cursor-pointer"
      />
      <ul className="flex gap-x-4">
        <li
          onClick={gotoPokemons}
          className="text-white hover:text-red-200 hover:cursor-pointer"
        >
          Pokemon
        </li>
        <li
          onClick={gotoFavorites}
          className="text-white hover:text-red-200 hover:cursor-pointer"
        >
          Favorite
        </li>
      </ul>
    </div>
  );
}
