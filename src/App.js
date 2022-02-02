import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom.min";

const PageOne = () => {
    return <div>PageOne</div>;
}

const PageTwo = () => {
    return <div>PageTwo</div>;
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