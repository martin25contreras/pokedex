"use client";

import React, { useState } from "react";
import { BaseCard } from "@/src/app/components/BaseCard/BaseCard";
import { CardSlider } from "@/src/app/components/layout/CardSlider/CardSlider";
import { Input } from "@/src/app/components/Input/Input";

const MOCK_POKEMONS: { name: string; image: string; id: number }[] = [
  {
    id: 1,
    name: "Bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    id: 4,
    name: "Charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    id: 7,
    name: "Squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    id: 2,
    name: "Squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
];

export function HomeView() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPokemons =
    searchTerm.trim() === ""
      ? MOCK_POKEMONS
      : MOCK_POKEMONS.filter((p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );

  return (
    <div className="mx-auto max-w-5xl space-y-12">
      <section className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Explorer
          </h1>
          <p className="text-slate-500 mt-2">Encuentra a tu compañero ideal.</p>
        </div>

        <div className="w-full md:w-80">
          {/* Aquí iría tu componente Input. Lo simulo con un input HTML estándar temporalmente */}
          <Input
            buttonText={"Buscar"}
            onAction={function (value: string): void {
              alert(value);
            }}
          />
          {/* Si usas tu ActionInput sería algo así:
          <ActionInput 
            placeholder="Buscar..." 
            onSubmit={(val) => setSearchTerm(val)} 
          /> */}
        </div>
      </section>

      {/* Carrusel de Resultados */}
      <section>
        <CardSlider
          label="Lista de Pokémons"
          elements={filteredPokemons}
          emptyMessage="No se encontró ningún Pokémon con ese nombre."
          renderItem={(pokemon) => (
            <BaseCard
              text={pokemon.name}
              image={pokemon.image}
              //   imageAlt={pokemon.name}
            />
          )}
        />
      </section>
    </div>
  );
}
