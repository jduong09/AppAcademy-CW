import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
      rating: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(property) {
    return e => this.setState({ [property]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview({
      comment: this.state.comment,
      rating: parseInt(this.state.rating),
      bench_id: this.props.benchId,
      user_id: this.props.userId
    });

    this.setState({ comment: "", rating: "" });
  };

  render() {
    return (
      <form>
        <label>Comment:
          <input type="text" value={this.state.comment} placeholder="--Write Your Review--" onChange={this.handleChange("comment")}/>
        </label>

        <label>Rating:
          <input type="number" value={this.state.rating} onChange={this.handleChange("rating")} />
        </label>

        <button onClick={this.handleSubmit}>Submit Review</button>
      </form>
    );
  };
}

export default ReviewForm;