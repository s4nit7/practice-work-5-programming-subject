import 'bootstrap/dist/css/bootstrap.min.css'

export default function HomePage() {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Нікіта Поляруш</h5>
          <h6 className="card-subtitle mb-1 text-muted">Творець-Ентузіаст</h6>
          <p className="card-text">
            <strong>Про себе:</strong> Люблю творчість, що нас оточує<br />
            <strong>Інтереси:</strong> Збирання комп'ютерів, музика, творчі проєкти, відео та фотомонтаж, технології<br />
            <strong>Розвиток:</strong> Бажання розвиватись не тільки у одній сфері, а у різних<br />
          </p>
          <a href="mailto:NikitaPol@gmail.com" className="btn btn-primary">Написати мені</a>
        </div>
      </div>
    </div>
  )
}
