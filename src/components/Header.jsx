
export default function Header() {
  return (
    <header className='card-header'>
          <h1>Ernest Owolabi</h1>
          <h3>Frontend Developer</h3>
          <div className="btn-wrapper">
              <a className='btn email-btn' href="mailto:ernestowolabi@gmail.com"><i className="fa-solid fa-envelope"></i> Email</a>
              <a className='btn linkedin-btn' href="https://www.linkedin.com/in/ernestowolabi/"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
          </div>
        </header>
  )
}