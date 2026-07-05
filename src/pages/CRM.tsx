function CRM() {
  return (
    <>
      <header className="header">
        <div>
          <h1>CRM</h1>
          <p>Mijozlar va yangi leadlar nazorati</p>
        </div>
        <button>+ Yangi mijoz</button>
      </header>

      <section className="panel">
        <h2>Yangi leadlar</h2>

        <div className="row">
          <strong>Instagram — Madina opa</strong>
          <span>Yangi</span>
        </div>

        <div className="row">
          <strong>Telegram — Aziz aka</strong>
          <span>Gaplashildi</span>
        </div>

        <div className="row">
          <strong>Telefon — Sardor aka</strong>
          <span>Buyurtmaga yaqin</span>
        </div>
      </section>
    </>
  )
}

export default CRM