var CreateRecord = React.createClass ({
  getInitialState: function(){
    return {
      title: '',
      date: '',
      amount: ''
    }
  },
  handleChange: function(event){
    var name = event.target.name;
    var obj = {};
    obj[name] = event.target.value;
    this.setState(obj);
  },
  valid: function(){
    return (this.state.title && this.state.date && this.state.amount);
  },
  handleSubmit: function(e){
    e.preventDefault();
    $.post('',
      { record: this.state },
      function(data) {
        this.props.handleNewRecords(data);
        this.setState(this.getInitialState());
      }.bind(this),
      'JSON'
    );
  },
  render: function(){
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" name="date" placeholder="date" value={ this.state.date } onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="number" className="form-control" name="amount" placeholder="amount" value={this.state.amount} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary" disabled={!this.valid()} value="Create record"/>
        </div>
      </form>
    );
  }

});
