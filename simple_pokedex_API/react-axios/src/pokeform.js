import React from "react";
import ReactDOM from 'react-dom/client';
import Poke from "./poke";
import "./App.css";

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

		console.log(document.querySelector("#nome").value);

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
<button type="submit" onClick={this.handleSubmit}>Enviar</button>
<div id='pesq'></div>

</form>
      );

    }

  }
  
  
  export default NameForm