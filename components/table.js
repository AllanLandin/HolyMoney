function Table({ transactions }) {
  return (
    <table className="table table-striped table-hover text-center">
      <thead>
        <tr>
          <th scope="col">Data</th>
          <th scope="col">Valor</th>
          <th scope="col">Conta</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr>
            <th scope="row">
              {new Date(transaction.moment_transaction).toLocaleString("pt-BR")}
            </th>
            <td scope="row">R${transaction.value_transaction}</td>
            <td scope="row">{transaction.id_account}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
