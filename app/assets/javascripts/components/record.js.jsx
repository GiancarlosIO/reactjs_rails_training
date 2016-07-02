var Record = React.createClass ( {
  render: function() {
    return (
      <table className="table table-bordered" >
        <thead>
          <tr>
            <td>Date</td>
            <td>Title</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {this.props.records.map(function(record){
              return (
                <tr key={record.id}>
                  <td> {record.date} </td>
                  <td> {record.title} </td>
                  <td> {record.amount.toString()} </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
});
