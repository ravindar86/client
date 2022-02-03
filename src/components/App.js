import { BrowserRouter, Link, Route } from "react-router-dom/cjs/react-router-dom.min";

const PageOne = () => {
    return <div>PageOne <Link to="/pageTwo">PageTwo</Link></div>;
}

const PageTwo = () => {
    return <div><Link to="/">PageOne</Link> PageTwo </div>;
}

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pageTwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
}