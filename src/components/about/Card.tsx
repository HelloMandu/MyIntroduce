import './Card.scss'

function Card() {
    return (
        <div className="card">
            <div className="card-introduce">
                <div className="card-title">
                    <p className="job" />
                    <p className="name" />
                </div>
                <div>
                    <p className="card-phone">
                        <i className="fa fa-mobile"></i>
                    </p>
                    <p className="card-email">
                        <i className="fa fa-envelope"></i>
                    </p>
                    <p className="card-github">
                        <i className="fa fa-github"></i>
                    </p>
                </div>
            </div>
            <div className="profile-image" />
        </div>
    );
}

export default Card;
