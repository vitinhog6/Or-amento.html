const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const orcamentoRoutes = require('./routes/orcamentoRoutes');
const nfRoutes = require('./routes/nfRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/orcamento', orcamentoRoutes);
app.use('/api/nf', nfRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});