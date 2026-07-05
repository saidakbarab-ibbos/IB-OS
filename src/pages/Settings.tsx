function Settings() {
  return (
    <div>
      <h1>Sozlamalar</h1>
      <p>Tizim sozlamalari, tillar, rollar va ruxsatlar</p>

      <div className="panel">
        <h2>Asosiy sozlamalar</h2>

        <div className="row">
          <strong>Til</strong>
          <span>O‘zbekcha</span>
        </div>

        <div className="row">
          <strong>Dark Mode</strong>
          <span>Faol emas</span>
        </div>

        <div className="row">
          <strong>Rollar va huquqlar</strong>
          <span>Admin</span>
        </div>
      </div>
    </div>
  )
}

export default Settings