import React, { Component } from 'react';
import RatingComponent from './RatingComponent';

class InputFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputForm: {
                submitted: false,
                subjectArea: props.location,
                w_distance: 1,
                w_fiber: 1,
                w_height: 1,
                w_cost: 1

            }
        }
    }

    onChange = (rType, value) => {
        this.setState({
            inputForm: {
                ...this.state.inputForm,
                [rType]: value
            }
        })
    }

    onExistingSiteFileUpload = () => {
        fetch('./data/existing.json')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    // this.setState({
                    //     isLoaded: true,
                    //     items: result.items
                    // });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    onProspectiveSiteFileUpload = () => {
        fetch('./data/prospective.json')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    // this.setState({
                    //     isLoaded: true,
                    //     items: result.items
                    // });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    // onChangeText = (name, value) => {
    //     this.setState({
    //         inputForm: {
    //             ...this.state.inputForm,
    //             [name]: value
    //         }
    //     })
    // }
    render() {
        return (
            <React.Fragment>
                <form className="needs-validation" novalidate="">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="firstName">Subject Area</label>
                            <input type="text" className="form-control" onChange={(e) => this.onChange('subjectArea', e.target.value)} id="firstName" placeholder="Landmark / Zipcode / Cordinates" value={this.state.inputForm.subjectArea} required="" />
                            <div className="invalid-feedback">
                                Subject Area is required.
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="existingSites">Existing Sites</label>
                            <input type="file" className="form-control" id="existingSites" onChange={this.onExistingSiteFileUpload} />
                            <div className="invalid-feedback">
                                Exisitng Site File is required.
                            </div>
                        </div>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile" />
                        <label className="custom-file-label" for="customFile">Choose file</label>
                    </div>

                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="prospectiveSites">Prospective Sites</label>
                            <input type="file" className="form-control" id="prospectiveSites" onChange={this.onProspectiveSiteFileUpload} />
                            <div className="invalid-feedback">
                                Exisitng Site File is required.
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <label className="col-sm-5" >
                            Weightage (5 is highest)
                        </label>
                        <div className="col-sm-7" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label>1</label>
                            <label>2</label>
                            <label>3</label>
                            <label>4</label>
                            <label>5</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <RatingComponent label={'Cost'} value={this.state.inputForm.w_cost} onChangeValue={(val) => this.onChange('w_cost', val)} />
                    </div>
                    <div className="mb-3">
                        <RatingComponent label={'Height'} value={this.state.inputForm.w_height} onChangeValue={(val) => this.onChange('w_height', val)} />
                    </div>
                    <div className="mb-3">
                        <RatingComponent label={'Fiber'} value={this.state.inputForm.w_fiber} onChangeValue={(val) => this.onChange('w_fiber', val)} />
                    </div>
                    <div className="mb-3">
                        <RatingComponent label={'Distance from Existing Site'} value={this.state.inputForm.w_distance} onChangeValue={(val) => this.onChange('w_distance', val)} />
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default InputFormComponent;
