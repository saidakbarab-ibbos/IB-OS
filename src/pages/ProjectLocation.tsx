function ProjectLocation() {
  return (
    <div>
      <h1>Project Location</h1>
      <p>Mijozlar lokatsiyasi va bajarilgan loyihalar xaritasi</p>

      <div className="cards">
        <div className="card">
          <span>📍</span>
          <p>Top viloyat</p>
          <h2>Namangan</h2>
        </div>

        <div className="card">
          <span>🏘️</span>
          <p>Top tuman</p>
          <h2>Chust</h2>
        </div>

        <div className="card">
          <span>📏</span>
          <p>2 km radiusda loyihalar</p>
          <h2>4 ta</h2>
        </div>
      </div>

      <div className="panel">
        <h2>Yaqin lokatsiyalar</h2>

        <div className="row">
          <strong>Aziz aka — Oshxona mebeli</strong>
          <span>450 metr</span>
        </div>

        <div className="row">
          <strong>Madina opa — Shkaf</strong>
          <span>1.2 km</span>
        </div>

        <div className="row">
          <strong>Sardor aka — TV panel</strong>
          <span>1.8 km</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectLocation