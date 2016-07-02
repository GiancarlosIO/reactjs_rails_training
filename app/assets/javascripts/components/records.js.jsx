var Records = React.createClass ({
  getInitialState: function() {
    return { records: this.props.data }
  },
  getDefaultProps: function() {
    return {
      records: []
    }
  },
  addRecord: function(record){
    var records = React.addons.update(this.state.records, { $push: [record] })
    this.setState({ records: records });
  },
  render: function() {
    return (
      <div className="records" >
        <h2 className="title" >
          Records
        </h2>
        <CreateRecord handleNewRecords={this.addRecord} />
        <hr/>
        <Record records = {this.state.records} />
      </div>
    );
  }
});
