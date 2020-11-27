import PropTypes from 'prop-types'

const EventsByCategories = ({eventData,categoryData}) => {

    console.log(eventData);

    const categories = categoryData.map((category => {
        return <div className="card-content-item">
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            {eventData.map(event=> {
                if(event.categories[0].id === category.id){
                    return <p>{event.title}</p>
                }

            })}
        </div>
    }));

    return (
        <div className="card">
            <div className="card-header">
                <h1>Events by Category</h1>
            </div>
            <div className="card-body">
                {categories}
            </div>
        </div>
    )
}

EventsByCategories.propTypes = {
    eventData: PropTypes.array,
}

export default EventsByCategories;
