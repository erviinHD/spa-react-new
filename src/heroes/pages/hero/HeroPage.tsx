import { Link, Navigate, useParams } from "react-router";

import {
  ArrowLeft,
  ArrowUpRight,
  Crosshair,
  Heart,
  Shield,
  Sparkles,
} from "lucide-react";
import { useHero } from "@/heroes/hooks/useHero";

export const HeroPage = () => {
  const { idSlug = "" } = useParams();
  const { data: heroResponse, isError } = useHero(idSlug);

  if (isError) {
    return <Navigate to={"/"} />;
  }

  if (!heroResponse) {
    return <h3>Cargando..</h3>;
  }

  return (
    <main className="app-shell profile-shell">
      <div className="profile-wrap">
        <Link className="back-link" to={"/"}>
          <ArrowLeft size={15} /> Volver
        </Link>
        <section className="profile-hero ">
          <div className="profile-photo">
            <img
              src={heroResponse.image}
              alt={`${heroResponse.alias}, ${heroResponse.name}`}
            />
            <div className="profile-photo-shade" />
            <span className="profile-index">{heroResponse.universe}</span>
            <span className="profile-photo-caption">
              PRIMERA APARICIÓN {heroResponse.firstAppearance}
            </span>
          </div>
          <div className="profile-copy">
            <p className="section-kicker">
              <span /> {heroResponse.category.toUpperCase()} / CLASSIFIED
              PROFILE
            </p>
            <p className="profile-real-name">{heroResponse.name}</p>
            <h1>
              {heroResponse.alias}
              <span>.</span>
            </h1>
            <p className="profile-description">{heroResponse.description}</p>
            <div className="profile-ability">
              <div className="ability-icon">
                <Sparkles size={18} />
              </div>
              <div>
                <span>HABILIDAD PRIMARIA</span>
                <b>{heroResponse.powers[0]}</b>
              </div>
            </div>
            <div className="profile-actions">
              <button
                className="profile-favorite"
                type="button"
                aria-label="Add hero to favorites"
              >
                <Heart size={17} /> Añadir a favoritos
              </button>
            </div>
          </div>
        </section>
        <section
          className="profile-data-grid"
          aria-label={`${heroResponse.alias} details`}
        >
          <div className="profile-panel profile-stats">
            <p className="profile-panel-kicker">
              <Crosshair size={15} /> EVALUACIÓN EN TERRENO
            </p>
            <h2>HABILIDADES</h2>

            <div className="stat-list">
              <div className="stat-row">
                <span>Fuerza</span>
                <div className="stat-track">
                  <span style={{ width: `${heroResponse.strength * 10}%` }} />
                </div>
                <b>{heroResponse.strength}</b>
              </div>
              <div className="stat-row">
                <span>Velocidad</span>
                <div className="stat-track">
                  <span style={{ width: `${heroResponse.speed * 10}%` }} />
                </div>
                <b>{heroResponse.speed}</b>
              </div>
              <div className="stat-row">
                <span>Inteligencia</span>
                <div className="stat-track">
                  <span
                    style={{ width: `${heroResponse.intelligence * 10}%` }}
                  />
                </div>
                <b>{heroResponse.intelligence}</b>
              </div>
              <div className="stat-row">
                <span>Durabilidad</span>
                <div className="stat-track">
                  <span style={{ width: `${heroResponse.durability * 10}%` }} />
                </div>
                <b>{heroResponse.durability}</b>
              </div>
            </div>
          </div>
          <div className="profile-panel">
            <p className="profile-panel-kicker">
              <Shield size={15} /> ESPECIALISTAS
            </p>
            <h2>PODERES</h2>
            <div className="ability-list">
              {heroResponse.powers.map((ability, index) => (
                <div key={ability}>
                  <span>0{index + 1}</span>
                  <b>{ability}</b>
                  <ArrowUpRight size={14} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <footer className="footer">
          <span>THE VANGUARD / FIELD ARCHIVE</span>
          <span>PERSONNEL FILE · 2026</span>
        </footer>
      </div>
    </main>
  );
};
