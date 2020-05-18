import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Plant = props => (
    <tr>
        <td className={props.plant.plant_grew === 'true' ? 'grew' : ''}>{props.plant.plant_name}</td>
        <td className={props.plant.plant_grew === 'true' ? 'grew' : ''}>{props.plant.plant_category}</td>
        <td>
            <Link to={"/edit/"+props.plant._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/remove/"+props.plant._id}>Delete</Link>
        </td>
    </tr>
)

export default class PlantList extends Component {

    constructor(props) {
        super(props);

        this.state = { plants: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/plants')
            .then(response => {
                this.setState({ plants: response.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    toList() {
        return this.state.plants.map( (plant, i) => 
             <Plant plant={plant} key={i} />
        );
    }

    render() {
        return (
            <div>
                <h3>Your plants</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Grew</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.toList() }
                    </tbody>
                </table>
            </div>
        )
    }
}