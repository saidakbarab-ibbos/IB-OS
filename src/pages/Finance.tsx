function Finance() {
  return (
    <div>
      <h1>Moliya</h1>
      <p>Tushum, xarajat va oylik hisobotlar</p>

      <section className="cards">
        <div className="card">
          <span>💵</span>
          <p>Oylik tushum</p>
          <h2>120 mln</h2>
        </div>

        <div className="card">
          <span>💸</span>
          <p>Oylik xarajat</p>
          <h2>74 mln</h2>
        </div>

        <div className="card">
          <span>📈</span>
          <p>Oylik natija</p>
          <h2>46 mln</h2>
        </div>
      </section>

      <div className="panel">
        <h2>Oxirgi moliyaviy harakatlar</h2>

        <div className="row">
          <strong>Aziz aka — to‘lov</strong>
          <span>18 000 000 so‘m</span>
        </div>

        <div className="row">
          <strong>Material xaridi</strong>
          <span>6 500 000 so‘m</span>
        </div>

        <div className="row">
          <strong>USD kurs</strong>
          <span>Avtomatik</span>
        </div>
      </div>
    </div>
  )
}

export default Finance