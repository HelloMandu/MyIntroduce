import './Card.scss';

interface CardProps {
    job: string;
    name: string;
    phone: string;
    email: string;
    github: string;
}

function Card({ job, name, phone, email, github }: CardProps) {
    return (
        <div className="card">
            <div className="card-introduce">
                <div className="card-title">
                    <p className="job">{job}</p>
                    <p className="name">{name}</p>
                </div>
                <div>
                    <p className="card-phone">
                        <i className="fa fa-mobile"></i>
                        {phone}
                    </p>
                    <p className="card-email">
                        <i className="fa fa-envelope"></i>
                        {email}
                    </p>
                    <p className="card-github">
                        <i className="fa fa-github"></i>
                        {github}
                    </p>
                </div>
            </div>
            <div className="profile-image" />
        </div>
    );
}

export default Card;
