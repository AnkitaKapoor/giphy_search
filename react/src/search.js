import React from 'react'
import axios from 'axios'

export default class search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchlist: [],
            isLoading: false,
        };
        this.click = this.click.bind(this);
    }

    click() {

        this.setState({ isLoading: true });
        let url = "https://api.giphy.com/v1/gifs/search?api_key="
        let apikey = "cYWD9KTMs6CKrV3yCNRnpkKdehrK7V1k"
        let query = "&q=" + document.getElementById('inputgif').value
        let geturl = url + apikey + query
        axios.get(geturl)
            .then((response) => {
                this.setState({ searchlist: response.data.data, isLoading: false });
                //Data returned from the API, a message is displayed on the page
                if (this.state.searchlist.length > 0) {
                    document.getElementById("status").innerHTML = "Looking trending giphy for " + document.getElementById("inputgif").value + " !!";;
                }
                //If nothing is returned from the API, a message is displayed on the page
                else {
                    document.getElementById("status").innerHTML = "No matching giphy found, Please try other keyword!!";
                }
            })
            // If the search cannot contact the giphy API an error message should be displayed.
            .catch((err) => {
                this.setState({ searchlist: err, isLoading: false });
                document.getElementById("status").innerHTML = "Cannot connect to the Giphy API, Please try again later!!";
            });
    }
    render() {

        return (

            <div>
                {/* Ability to search giphy api. */}

                <input type='text' id="inputgif" size="50" />
                <button onClick={this.click} disabled={this.state.isLoading}> Go! </button>
                {/*Show search result status*/}
                <p id="status"></p>

                {/*Results from the giphy API are displayed on the page.*/}
                {this.state.searchlist.length > 0 &&
                    <div >

                        {this.state.searchlist.map(name => (
                            <img src={name.images.original.url} alt={name.slug} className="imgcss" key={name.id}></img>
                        ))}
                    </div>}
            </div>
        )
    }
}