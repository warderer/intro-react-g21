import ilustracion1 from '../assets/img/ilustracion1.svg'

const LearnMore = ({ title, desc, cta }) => {
  return (
    <section className='wave-contenedor website'>
      <img src={ilustracion1} alt='' />
      <div className='contenedor-textos-main'>
        <h2 className='titulo left'>{title}</h2>
        <p className='parrafo'>{desc} </p>
        <a href='' className='cta'>{cta}</a>
      </div>
    </section>
  )
}
export default LearnMore
