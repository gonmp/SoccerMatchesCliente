import React from 'react';
import TableRow from './TableRow';
import Table from 'react-bootstrap/Table';

const ResultsTable = ({ matches }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Liga</th>
          <th>Cantidad de equipos</th>
          <th>Fecha</th>
          <th>Equipo local</th>
          <th>Equipo visitante</th>
          <th>Resultados</th>
          <th>Goles del local</th>
          <th>Goles del vistante</th>
          <th>Goles del local Tiempo Extra</th>
          <th>Goles del visitante Tiempo Extra</th>
          <th>Goles del local Primera Mitad</th>
          <th>Goles del visitante Primera Mitad</th>
          <th>Goles del local Segunda Mitad</th>
          <th>Goles del visitante Segunda Mitad</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(matches)
          ? matches.map((match) => <TableRow key={match.id} match={match} />)
          : null}
      </tbody>
    </Table>
  );
};

export default ResultsTable;
