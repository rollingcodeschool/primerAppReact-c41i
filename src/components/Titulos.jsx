const Titulos = ({nuevoTitulo}) => {
    // console.log(props.nuevoTitulo)

  return (
    <section className="text-center my-5">
      <h1 className="display-4">Primer App react</h1>
      <h2 className="display-5">{nuevoTitulo}</h2>
      <hr/>
    </section>
  );
};

export default Titulos;
