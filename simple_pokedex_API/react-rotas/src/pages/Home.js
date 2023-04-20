import React from "react";
import ReactDOM from 'react-dom/client';
import Poke from "./Pesquisar";
import { Link } from "react-router-dom";

class NameForm extends React.Component {

    constructor(props) {

      super(props);

      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {

      this.setState({value: event.target.value});

    }

    handleSubmit(event) {

		console.log(this.state.value);

        const root = ReactDOM.createRoot(document.getElementById('pesq'));
        root.render(<Poke />);

      event.preventDefault();

    }

    render() {

      return (

		<form className="formulario" onSubmit={this.handleSubmit}>
<div>
<h1>Pesquisar</h1>
	<label htmlFor="nome">Digite o nome do pokemon: </label>
	<input
		type="text"
		name="nome"
		id="nome"
		value={this.state.value}
		onChange={this.handleChange}
	/>
</div>
<button type="submit" onClick={this.handleSubmit}><Link to="/Pesquisar">Enviar</Link></button>
<div id='pesq'></div>

</form>
      );

    }

  }
  
 
  export default NameForm