import React, { Component } from 'react';
import axios from 'axios';

export default class PlantEdit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            plant_name: '',
            plant_category: '',
            plant_grew: 'false'
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/plants/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    plant_name: response.data.plant_name,
                    plant_category: response.data.plant_category,
                    plant_grew: response.data.plant_grew
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    onChangePlantName(e) {
        this.setState({
            plant_name: e.target.value
        });
    }
    onChangePlantCategory(e) {
        this.setState({
            plant_category: e.target.value
        })
    }
    onChangePlantGrew(e) {
        this.setState({
            plant_grew: e.target.value
        })
    }


    render() {
        return (
            <div>
                <h3 align="center">Update {this.state.plant_name}</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.plant_name}
                                onChange={this.onChangePlantName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Category: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.plant_category}
                                onChange={this.onChangePlantCategory}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="grewOptions" 
                                    id="notGrew" 
                                    value="false"
                                    checked={this.state.plant_grew==='false'} 
                                    onChange={this.onChangePlantGrew}
                                    />
                            <label className="form-check-label">Will grew later</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="grewOptions" 
                                    id="grew" 
                                    value="true" 
                                    checked={this.state.plant_grew==='true'} 
                                    onChange={this.onChangePlantGrew}
                                    />
                            <label className="form-check-label">I grew that plant</label>
                        </div>
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}