function Dashboard() {
  return (
    <>
      <header className="header">
        <div>
          <h1>Director Dashboard</h1>
          <p>Igna Barg Business Operating System</p>
        </div>
        <button>+ Yangi lead</button>
      </header>

      <section className="cards">
        <div className="card"><span>📥</span><p>Yangi leadlar</p><h2>24</h2></div>
        <div className="card"><span>⏰</span><p>Muddati yaqin buyurtmalar</p><h2>7</h2></div>
        <div className="card"><span>📦</span><p>Material Request</p><h2>12</h2></div>
        <div className="card"><span>📍</span><p>Top lokatsiyalar</p><h2>Chust</h2></div>
        <div className="card"><span>🔔</span><p>Telegram ogohlantirishlar</p><h2>5</h2></div>
        <div className="card"><span>👷</span><p>Bugun yopilgan ishlar</p><h2>3 ta</h2></div>
      </section>

      <section className="panel">
        <h2>Muhim nazoratlar</h2>

        <div className="row">
          <strong>Aziz aka — Oshxona mebeli</strong>
          <span>2 kun qoldi</span>
        </div>

        <div className="row">
          <strong>Rustam usta — Brigada A</strong>
          <span>Reja yopildi</span>
        </div>

        <div className="row">
          <strong>AOS 20 dona</strong>
          <span>Material so‘rovi</span>
        </div>
      </section>
    </>
  )
}

export default Dashboard