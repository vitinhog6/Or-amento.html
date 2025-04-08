import React, { useState } from 'react';
import { calcularOrcamento } from '../services/orcamentoService';

const OrçamentoPage = () => {
  const [formData, setFormData] = useState({});
  const [orcamento, setOrcamento] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultado = await calcularOrcamento(formData);
    setOrcamento(resultado);
  };

  return (
    <div>
      <h1>Orçamento</h1>
      <form onSubmit={handleSubmit}>
        {/* Adicione os campos do formulário aqui */}
        <button type="submit">Calcular Orçamento</button>
      </form>
      {orcamento && (
        <div>
          <h2>Resultado do Orçamento</h2>
          <p>{orcamento}</p>
        </div>
      )}
    </div>
  );
};

export default OrçamentoPage;