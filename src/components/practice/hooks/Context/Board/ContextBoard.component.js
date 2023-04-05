import { useState, useEffect } from "react";

function useStartWarUser() {
  const [hero, setHero] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getHeros() {
      setLoading(true);
      const response = await fetch(`https://swapi.dev/api/people/1`);
      const data = await response.json();
      setHero(data);
      setLoading(false);
    }
    getHeros();
  }, []);

  return { hero, loading };
}

export function ContextBoardComponent() {
  const [name, setName] = useState("");
  const { hero, loading } = useStartWarUser();

  useEffect(() => {
    setName(hero.name);
  }, [hero, setName]);

  return (
    <div>
      {loading ? "loading" : ""}
      hero - {name}
    </div>
  );
}
