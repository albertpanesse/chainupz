import React from "react";

const Home: React.FC = () => {
    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h1 className="display-4">Create Amazing Stories!</h1>
                <p className="lead">
                    With Story Box Creator, unleash your creativity and bring your stories
                    to life.
                </p>
                <hr className="my-4" />
                <p>Sign up today and start crafting your own interactive stories.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Get Started</a>
            </div>
        </div>
    );
};

export default Home;
