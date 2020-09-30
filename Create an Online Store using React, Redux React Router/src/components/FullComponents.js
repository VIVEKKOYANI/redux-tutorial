import React, { Component } from "react";
import Quiz from "./Quiz";
import { connect } from "react-redux";
import { ActionTypes } from "../constants/actionTypes";

const mapStateToProps = (state) => {
  return { ...state.quiz };
};

const mapDispatchToProps = (dispatch) => ({
  onQuizLoad: (payload) => dispatch({ type: ActionTypes.QuizLoad, payload }),
  onPagerUpdate: (payload) =>
    dispatch({ type: ActionTypes.PagerUpdate, payload }),
});

class FullComponents extends Component {
  state = {
    quizes: [{ id: "data/javascript.json", name: "Javascript" }],
    quizId: "data/javascript.json",
  };

  pager = {
    index: 0,
    size: 1,
    count: 1,
  };

  componentDidMount() {
    this.load(this.state.quizId);
  }

  load(quizId) {
    let url = quizId || this.props.quizId;
    fetch(`../${url}`)
      .then((res) => res.json())
      .then((res) => {
        let quiz = res;
        quiz.questions.forEach((q) => {
          q.options.forEach((o) => (o.selected = false));
        });
        quiz.config = Object.assign(this.props.quiz.config || {}, quiz.config);
        this.pager.count = quiz.questions.length / this.pager.size;
        this.props.onQuizLoad(quiz);
        this.props.onPagerUpdate(this.pager);
      });
  }

  onChange = (e) => {
    this.setState({ quizId: e.target.value });
    this.load(e.target.value);
  };

  render() {
    console.log("quizid", this.state.mode);
    return (
      <div className="container">
        <header className="p-2">
          <div className="row">
            <div className="col-6">
              <h3>Quiz Application</h3>
            </div>
          </div>
        </header>
        <Quiz
          quiz={this.state.quiz}
          quizId={this.state.quizId}
          mode={this.state.mode}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullComponents);
