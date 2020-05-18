import React, { Component } from 'react';
import axios from 'axios';

export default class PlantCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            plant_name: '',
            plant_category: '',
            plant_grew: 'false'
        }

        this.onChangePlantName = this.onChangePlantName.bind(this);
        this.onChangePlantCategory = this.onChangePlantCategory.bind(this);
        this.onChangePlantGrew = this.onChangePlantGrew.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`> ${this.state.plant_name}`);
        console.log(`> ${this.state.plant_category}`);
        console.log(`> ${this.state.plant_grew}`);

        const serverPlant = {
            plant_name: this.state.plant_name,
            plant_category: this.state.plant_category,
            plant_grew: this.state.plant_grew
        }

        axios.post('http://localhost:4000/plants/add', serverPlant)
            .then(res => console.log(res.data));

        this.setState({
            plant_name: '',
            plant_category: '',
            plant_grew: 'false'
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create new plant</h3>
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

                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}