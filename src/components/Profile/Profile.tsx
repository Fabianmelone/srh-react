import {Button} from "../Button.tsx";

export type Profiles = Array<{
    name:string;
    age:number;
    imgUrl:string;
}>

type ProfileProps = {
    name:string;
    age:number;
    imgUrl:string;
}

//Task Number 2
function mouseEnter () {
    console.log("Mouse entered a profile")
}

function mouseLeave () {
    console.log("Mouse left a profile");
}
//Task Number 3
function nameAlert(name:string) {
    alert("You clicked on the profile of " + name)
}

export default function Profile({imgUrl, name, age}:  ProfileProps) {
    return (
        <div className="profile" onMouseEnter={(mouseEnter)} onMouseLeave={(mouseLeave)}>
            <img src = {imgUrl}/>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            {
                // Task 1: person is underage
                age < 18 ? <p className={"is-underage"}>{name} is underage!</p> : null
            }
            <Button label={"Click for name"} onClickHandler={() => nameAlert(name)}/>
        </div>
    );
}