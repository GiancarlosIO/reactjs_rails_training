var Records = React.createClass ({
  getInitialState: function() {
    return { records: this.props.data }
  },
  getDefaultProps: function() {
    return {
      records: []
    }
  },
  render: function() {
    return (
      <div className="records" >
        <h2 className="title" >
          Records
        </h2>
        <table className= "table table-bordered" >
          <thead>
            <tr>
              <td>Date</td>
              <td>Title</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            { this.props.data.map(function(record, i){
              return (
                <tr key={ i }>
                  <td> { record.date } </td>
                  <td> { record.title } </td>
                  <td> { record.amount.toString() } </td>
                </tr>
              );
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
});
