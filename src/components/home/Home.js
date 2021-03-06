import React, { Component } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Predicates } from '@aws-amplify/datastore';
import { Todo } from '../../models';
import MaterialTable from "material-table";
import MTableToolbar from "material-table/dist/components/m-table-toolbar";
import { confirmAlert } from "react-confirm-alert";
import exportFromJSON from 'export-from-json'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { todos:[] }
    this.fetchTodo()
  }



async componentWillMount(){

this.fetchTodo()

}
  async componentDidMount(){

    this.fetchTodo()
  }



  fetchTodo = async() =>{
    const data = await DataStore.query(Todo);
    var task_names = [];

    for (var i = 0, max = data.length; i < max; i += 1) {

        task_names.push({
          nroguia: data[i].nroguia,
          rutcliente:data[i].rutcliente,
          estado:data[i].estado,
          pesototal:data[i].pesototal,
          cliente:data[i].cliente,
          fechadespacho:data[i].fechadespacho,
          horaescaneo:data[i].horaescaneo,
          nrobultos:data[i].nrobultos,
          producto:data[i].producto,
          turno:data[i].turno,
          chofer:data[i].patente,
          patente:data[i].chofer,
          arrastre:data[i].arrastre,
          id: data[i].id
          });
          }

    this.setState( { todos: task_names } )

  }

  ExportToExcel = () => {
  const fileName = 'Guias'
  const exportType = 'xls'
  const data = this.state.todos
    exportFromJSON({ data, fileName, exportType })
  }

  ExportToExcelSelection = (data) => {
  const fileName = 'Guias seleccionadas'
  const exportType = 'xls'
    exportFromJSON({ data, fileName, exportType })
  }


   eliminarTodo = async (nros) => {
  var se = [];
    const po = await DataStore.query(Todo);

    nros.forEach((item, i) => {

      const result = po.filter(p => p.id == item.id).forEach((z, o) => {
        DataStore.delete(Todo, post => post.id("eq", z.id));

      });
this.fetchTodo()
  });
  }

  render() {
    return (

      <MaterialTable
      components={{
   Toolbar: (props) => (
     <div
       style={{
         backgroundColor: '#8FACCC'
              }}
     >
       <MTableToolbar {...props} />
     </div>
   )
      }}
        title="Gu??as"
        columns={[
            { title: "N?? Gu??a", field: "nroguia" },
            { title: "Rut Cliente", field: "rutcliente" },
            { title: "Estado", field: "estado" },
            { title: "Peso Total (kg)", field: "pesototal" },
            { title: "Cliente", field: "cliente" },
            { title: "Fecha Despacho", field: "fechadespacho" },
            { title: "Hora escaneo", field: "horaescaneo" },
            { title: "N?? Bultos", field: "nrobultos" },
            { title: "Producto", field: "producto" },
            { title: "Turno", field: "turno" },
            { title: "Chofer", field: "chofer" },
            { title: "Patente", field: "patente" },
            { title: "Arrastre", field: "arrastre" },
            { title: "ID", field: "id" }
]}

        data={this.state.todos}
        localization={{
      body: {
          emptyDataSourceMessage: "No hay Gu??as para mostrar",
          deleteTooltip: 'Eliminar'
      },
      header: {
          actions: 'Seleccionar'
      },
      grouping:{

        placeholder:'Arrastra el encabezado, para agrupar',
        groupedBy:"Agrupado por:"
      },
      pagination: {
          labelDisplayedRows: '{from}-{to} de {count}',
          labelRowsSelect: 'Gu??as',
          labelRowsPerPage: 'Gu??as por p??gina:',
          firstAriaLabel: 'Primera p??gina',
          firstTooltip: 'Primera p??gina',
          previousAriaLabel: 'Anterior',
          previousTooltip: 'Anterior',
          nextAriaLabel: 'Siguiente',
          nextTooltip: 'Siguiente',
          lastAriaLabel: '??ltima p??gina',
          lastTooltip: '??ltima p??gina'
      },
      toolbar: {
          addRemoveColumns: 'A??adir o eliminar',
          nRowsSelected: '{0} gu??a(s) seleccionada(s)',
          showColumnsTitle: 'Ver gu??as',
          showColumnsAriaLabel: 'Ver Gu??as',
          exportTitle: 'Exportar',
          exportAriaLabel: 'Exportar',
          exportName: 'Exportar como CSV',
          searchTooltip: 'Buscar',
          searchPlaceholder: 'Buscar'
      }
  }}
        options={{
          selection: true,
          exportButton: false,
          exportAllData:true,
          toolbarButtonAlignment:'left',
          searchFieldAlignment:'left',
          pageSize:10,
          pageSizeOptions:[5,10,20,this.state.todos.length],
          padding:'dense',
          grouping: true

        }}

        // localization={{
        //      toolbar: {
        //        exportCSVName: "Exportar xls",
        //      }
        //    }}

        actions={[
          {
            tooltip: 'Eliminar',
            icon: 'delete',
            onClick: (event,dato) => {this.eliminarTodo(dato)}
          },
          {
          icon: 'save_alt',
          tooltip: 'Exportar selecci??n',
          onClick: (event,dato) => {this.ExportToExcelSelection(dato)}
},
{
          icon: 'save_alt',
          tooltip: 'Exportar todo',
          isFreeAction:true,
          onClick: (event) => {this.ExportToExcel()}}


  ]}
              />
        );
  }
}

export default Home;
