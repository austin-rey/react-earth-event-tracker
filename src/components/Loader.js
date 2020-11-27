import spinner from '../images/spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="spinner gif"/>
            <h1>Fetching Data</h1>
        </div>
    )
}

export default Loader;
