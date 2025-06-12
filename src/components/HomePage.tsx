
import {Button} from "./Button.tsx";
import Counter from "./Counter.tsx";

export default function HomePage() {


    const isLoggedIn = false;
    const currentUser = "Fabian";


    function eventHandler(text: string) {
        alert(text)
    }


    return (
        <div className={"page-content"}>

            {
                isLoggedIn ? <h2 className="login">You are loggedIn</h2> : <h2 className="logout">Not logged in</h2>
            }
            {
                currentUser && <h3 className="current-user">Hello {currentUser}</h3>
            }
            {

            }
            <div className={"button-container"}><Button label={"Click Me"} onClickHandler={eventHandler}/></div>

            <Counter/>
        </div>
    )
}