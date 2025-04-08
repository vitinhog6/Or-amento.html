exports.calcularOrcamento = (req, res) => {
  const formData = req.body;
  // Implementar a lógica de cálculo de orçamento aqui
  const orcamento = `O orçamento para sua instalação é R$ ${Math.random() * 1000}.00`;
  res.json(orcamento);
};