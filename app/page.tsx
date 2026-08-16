export default function Home() {
  const highlights = [
    {
      title: "Ranked Seasons",
      text: "Partidas ranqueadas com ciclos curtos, metas objetivas e recompensas semanais."
    },
    {
      title: "Guild Ops",
      text: "Eventos cooperativos para squads que querem dominar raids, arenas e desafios relampago."
    },
    {
      title: "Live Drops",
      text: "Campanhas especiais com cosmeticos, caixas raras e skins liberadas durante streams."
    }
  ];

  const games = [
    "FPS competitivo",
    "Battle arena",
    "RPG cooperativo",
    "Corrida arcade"
  ];

  return (
    <main className="landing-shell">
      <section className="hero">
        <div className="hero__copy">
          <span className="eyebrow">PixelRaid // Temporada 09</span>
          <h1>Entre na arena onde cada partida vale recompensa real.</h1>
          <p>
            Uma landing de games pensada para lancar comunidade, torneios, ranking
            semanal e campanhas de aquisicao com visual forte e deploy simples.
          </p>

          <div className="hero__actions">
            <a href="#planos" className="button button--primary">
              Reservar vaga
            </a>
            <a href="#modos" className="button button--ghost">
              Ver modos
            </a>
          </div>

          <ul className="hero__stats">
            <li>
              <strong>128k</strong>
              <span>jogadores em fila global</span>
            </li>
            <li>
              <strong>32</strong>
              <span>torneios na semana</span>
            </li>
            <li>
              <strong>4.9/5</strong>
              <span>avaliacao da comunidade</span>
            </li>
          </ul>
        </div>

        <div className="hero__panel">
          <div className="signal-card">
            <span className="signal-card__label">Live Event</span>
            <strong>Night Ops Championship</strong>
            <p>Mapas rotativos, drops desbloqueados e finais ao vivo com stream integrada.</p>
          </div>

          <div className="mode-grid" id="modos">
            {games.map((mode) => (
              <article key={mode} className="mode-card">
                <span className="mode-card__pulse" />
                <h2>{mode}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="highlights">
        {highlights.map((item) => (
          <article key={item.title} className="highlight-card">
            <span className="highlight-card__line" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="plans" id="planos">
        <div className="plans__intro">
          <span className="eyebrow">Planos</span>
          <h2>Comece com uma base pronta para captar jogadores.</h2>
          <p>
            Pagina rapida, CTA claro, destaque para campanha de pre-lancamento e
            estrutura pronta para plugar analytics, checkout ou formulario.
          </p>
        </div>

        <article className="price-card">
          <span className="price-card__tag">Launch Pack</span>
          <strong>R$ 49</strong>
          <p>acesso antecipado + skin exclusiva + passe da temporada inicial</p>
          <ul>
            <li>Ranking inaugural</li>
            <li>Missao cooperativa bonus</li>
            <li>Drop especial de estreia</li>
          </ul>
          <a href="mailto:contato@pixelraid.gg" className="button button--primary">
            Falar com o time
          </a>
        </article>
      </section>
    </main>
  );
}
