import { Link, Route } from "wouter";
import HomePage from "./HomePage.tsx";
import WeatherPage from "./weatherPage.tsx";
import ProfilePage from "./Profile/ProfilePage.tsx";

const Router = () => (
    <div>
        <Link href="/">
            <a className="link">Home</a>
        </Link>
        <Link href="/weather">
            <a className="link">Weather</a>
        </Link>
        <Link href="/profiles">Profile</Link>

        <Route path="/" component={HomePage} />
        <Route path="/weather" component={WeatherPage} />
        <Route path="/profiles" component={ProfilePage} />
    </div>
)




export default function NavBar() {
    return (
        <div className="nav-bar">
            <Router />
        </div>
    )

}