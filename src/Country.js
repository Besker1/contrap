import React, {Component} from 'react'

export default class Country extends Component{
    state = {
        country: '',
        region: '',
        capital: '',
        population:"",
        search:"",
        flag:'',
        url: `https://restcountries.eu/rest/v2/name/`
    };


    fetching = (item) => {
        const url = this.state.url;
        fetch(`${url}${item}`)
        .then(data => data.json())
        .then(data => this.handleData(data))
    }

    handledata = (data) => {
        for(let i = 0; i < data.length; i++){   
                    const population = data[i].population;
                    const region = data[i].population;
                    const flag = data[i].flag;
                    const capital = data[i].capital
            this.setState({
                population,
                region,
                flag,
                capital,
            })
        }
    }


  setSearch(search) {
    this.setState({
      search
    });
  }
  

    handleSubmit = (e) => {
        e.preventDefault()
                this.fetching(this.state.search)
    }


    componentDidMount(){
    }

    render(){
        console.log(this.state.search)
        const country = this.state.population;
        const pops = this.state.region;
        return(
            <div>
                <form>
                    <input type="text" placeholder ="Look up country Info" 
                    value = {this.state.country}
                    onChange = {(e) => {
                        this.setSearch(e.currentTarget.value ) }
                        }/>
                    <input type="submit" onSubmit={ (e) => {this.handleSubmit(e)}} value = "Search"/>
                </form>

                {country}
                {pops}
            </div>
        )
    }


}