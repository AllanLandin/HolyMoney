function Table() {
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
        <tr>
          <th scope="row">10/09/2023</th>
          <td scope="row">R$10.200,90</td>
          <td scope="row">Itaú</td>
        </tr>
        <tr>
          <th scope="row">10/09/2023</th>
          <td scope="row">R$10,90</td>
          <td scope="row">Teste</td>
        </tr>
        <tr>
          <th scope="row">10/09/2023</th>
          <td scope="row">R$10.200,00</td>
          <td scope="row">Bradesco</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
